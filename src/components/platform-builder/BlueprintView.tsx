import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircle } from 'lucide-react';
import type { WizardState } from './types';
import { generateBlueprint, generateEmailSummary } from './blueprintGenerator';
import {
  businessTypeLabels, platformLabels, painPointLabels,
  featureLabels, featureOptions, scaleLabels, timelineLabels,
  recommendTier,
} from './wizardData';

interface Props {
  state: WizardState;
  onReset: () => void;
}

export default function BlueprintView({ state, onReset }: Props) {
  const [sendStatus, setSendStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);

  const blueprint = generateBlueprint(state);
  const rec = recommendTier(state.businessType, state.features);

  const handleSend = async () => {
    setSendStatus('sending');
    try {
      const summary = generateEmailSummary(state);
      const fullMessage = summary + '\n\n=== FULL BLUEPRINT ===\n\n' + blueprint;

      await emailjs.send(
        'service_larviog',
        'template_7iyu04b',
        {
          from_name: state.contactInfo.name,
          from_email: state.contactInfo.email,
          subject: `Platform Builder: ${state.businessType ? businessTypeLabels[state.businessType] : 'New'} — ${state.contactInfo.name}`,
          message: fullMessage,
        },
        'v57Ta98pwBDWpoe8o'
      );
      setSendStatus('success');
    } catch {
      setSendStatus('error');
      setTimeout(() => setSendStatus('idle'), 5000);
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(blueprint);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Get feature icon from options
  const getFeatureIcon = (id: string) => featureOptions.find((f) => f.id === id)?.icon || '✦';
  const getFeatureDesc = (id: string) => featureOptions.find((f) => f.id === id)?.desc || '';

  // Deep dive summary
  const deepDiveSummary = (): { label: string; value: string }[] => {
    if (!state.deepDive) return [];
    const { variant, data } = state.deepDive;

    if (variant === 'school') {
      const d = data;
      return [
        { label: 'Certification levels', value: d.certLevels || '—' },
        { label: 'Student count', value: d.studentCount ? scaleLabels[d.studentCount] : '—' },
        { label: 'Structure', value: d.cohortStructure || '—' },
        { label: 'Prerequisites', value: d.hasPrerequisites === null ? '—' : d.hasPrerequisites ? 'Yes' : 'No' },
        { label: 'Practice hour tracking', value: d.needsPracticeTracking === null ? '—' : d.needsPracticeTracking ? 'Yes' : 'No' },
      ];
    }
    if (variant === 'retreat') {
      const d = data;
      return [
        { label: 'Booking needed', value: d.hasBooking === null ? '—' : d.hasBooking ? 'Yes' : 'No' },
        { label: 'Accommodations', value: d.hasAccommodations === null ? '—' : d.hasAccommodations ? 'Yes' : 'No' },
        { label: 'Events/workshops', value: d.hasEvents === null ? '—' : d.hasEvents ? 'Yes' : 'No' },
        { label: 'Capacity', value: d.capacity || '—' },
        { label: 'Seasonality', value: d.seasonality || '—' },
      ];
    }
    if (variant === 'coach') {
      const d = data;
      return [
        { label: 'Session types', value: d.sessionTypes.join(', ') || '—' },
        { label: 'Client count', value: d.clientCount ? scaleLabels[d.clientCount] : '—' },
        { label: 'Content needs', value: d.contentNeeds.join(', ') || '—' },
      ];
    }
    if (variant === 'creator') {
      const d = data;
      return [
        { label: 'Audience size', value: d.audienceSize ? scaleLabels[d.audienceSize] : '—' },
        { label: 'Content types', value: d.contentTypes.join(', ') || '—' },
        { label: 'Revenue model', value: d.monetization.join(', ') || '—' },
      ];
    }
    return [];
  };

  const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <p className="text-meta uppercase text-accent mb-4 tracking-widest">Your Blueprint</p>
        <h3 className="font-serif text-display-sm font-light mb-3">
          Here's what I'd build for you.
        </h3>
        <p className="text-body text-content-secondary">
          A custom platform blueprint for {state.contactInfo.name}. Generated {date}.
        </p>
      </div>

      {/* Blueprint Cards */}
      <div className="space-y-6">

        {/* About You */}
        <div className="bg-dark-bg border border-border rounded-xl p-6 md:p-8">
          <h4 className="text-meta uppercase text-content-muted tracking-widest mb-5">About You</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-body-sm text-content-muted mb-1">Business type</p>
              <p className="text-body text-content-primary">{state.businessType ? businessTypeLabels[state.businessType] : '—'}</p>
            </div>
            <div>
              <p className="text-body-sm text-content-muted mb-1">Current setup</p>
              <p className="text-body text-content-primary">{state.currentPlatforms.map((p) => platformLabels[p]).join(', ') || 'Starting fresh'}</p>
            </div>
            <div>
              <p className="text-body-sm text-content-muted mb-1">Scale</p>
              <p className="text-body text-content-primary">{state.scale ? scaleLabels[state.scale] : '—'}</p>
            </div>
            <div>
              <p className="text-body-sm text-content-muted mb-1">Timeline</p>
              <p className="text-body text-content-primary">{state.timeline ? timelineLabels[state.timeline] : '—'}</p>
            </div>
          </div>
        </div>

        {/* What's Broken */}
        {state.painPoints.length > 0 && (
          <div className="bg-dark-bg border border-border rounded-xl p-6 md:p-8">
            <h4 className="text-meta uppercase text-content-muted tracking-widest mb-5">What's Not Working</h4>
            <div className="flex flex-wrap gap-2">
              {state.painPoints.map((p) => (
                <span key={p} className="px-3 py-1.5 bg-error-bg border border-error/20 text-error text-body-sm rounded-lg">
                  {painPointLabels[p]}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* What I'd Build */}
        <div className="bg-dark-bg border border-border rounded-xl p-6 md:p-8">
          <h4 className="text-meta uppercase text-content-muted tracking-widest mb-5">What I'd Build</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {state.features.map((f) => (
              <div key={f} className="flex items-start gap-3 p-3 bg-dark-card rounded-lg border border-border">
                <span className="text-lg mt-0.5">{getFeatureIcon(f)}</span>
                <div>
                  <p className="text-body-sm text-content-primary font-medium">{featureLabels[f]}</p>
                  <p className="text-body-sm text-content-muted">{getFeatureDesc(f)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deep Dive Details */}
        {deepDiveSummary().length > 0 && (
          <div className="bg-dark-bg border border-border rounded-xl p-6 md:p-8">
            <h4 className="text-meta uppercase text-content-muted tracking-widest mb-5">
              Your {state.deepDive?.variant === 'school' ? 'School' : state.deepDive?.variant === 'retreat' ? 'Retreat' : state.deepDive?.variant === 'coach' ? 'Practice' : 'Business'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {deepDiveSummary().map((item) => (
                <div key={item.label}>
                  <p className="text-body-sm text-content-muted mb-1">{item.label}</p>
                  <p className="text-body text-content-primary capitalize">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Notes */}
        {state.contactInfo.notes.trim() && (
          <div className="bg-dark-bg border border-border rounded-xl p-6 md:p-8">
            <h4 className="text-meta uppercase text-content-muted tracking-widest mb-3">Your Notes</h4>
            <p className="text-body text-content-secondary italic">"{state.contactInfo.notes}"</p>
          </div>
        )}

        {/* Recommendation — highlighted */}
        <div className="bg-dark-bg border border-accent/30 rounded-xl p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
          <h4 className="text-meta uppercase text-accent tracking-widest mb-5">Recommended</h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <p className="text-body-sm text-content-muted mb-1">Tier</p>
              <p className="text-h4 text-content-primary font-medium">{rec.tier}</p>
            </div>
            <div>
              <p className="text-body-sm text-content-muted mb-1">Investment</p>
              <p className="text-h4 text-accent font-medium">{rec.price}</p>
            </div>
            <div>
              <p className="text-body-sm text-content-muted mb-1">Timeline</p>
              <p className="text-h4 text-content-primary font-medium">{rec.timeline}</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-body-sm text-content-secondary">
              <span className="text-accent font-medium">Partnership model available</span> — I build your platform at a fraction of the cost (or free for the right project) in exchange for 8–12% of revenue processed through the platform. Most of my clients choose this.
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        {sendStatus === 'success' ? (
          <div className="flex items-center gap-3 px-8 py-4 bg-success-bg border border-success/40 rounded-full text-success text-body-sm font-medium">
            <CheckCircle className="w-5 h-5" />
            Sent! I'll be in touch within 24 hours.
          </div>
        ) : (
          <button
            onClick={handleSend}
            disabled={sendStatus === 'sending'}
            className="px-8 py-4 bg-accent text-white rounded-full text-body-sm font-medium btn-glow disabled:opacity-50 transition-all"
          >
            {sendStatus === 'sending' ? 'Sending...' : sendStatus === 'error' ? 'Error — try again' : 'Send Blueprint to Jordi'}
          </button>
        )}

        <button
          onClick={handleCopy}
          className="px-8 py-4 border border-border rounded-full text-body-sm text-content-secondary hover:border-border-hover hover:text-content-primary transition-all"
        >
          {copied ? 'Copied!' : 'Copy Text Version'}
        </button>
      </div>

      {/* Start over */}
      <div className="text-center mt-6">
        <button
          onClick={onReset}
          className="text-body-sm text-content-muted hover:text-content-secondary transition-colors underline underline-offset-4"
        >
          Start over
        </button>
      </div>
    </div>
  );
}
