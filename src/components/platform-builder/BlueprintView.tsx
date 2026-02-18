import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircle } from 'lucide-react';
import type { WizardState } from './types';
import { generateBlueprint, generateEmailSummary } from './blueprintGenerator';
import { businessTypeLabels } from './wizardData';

interface Props {
  state: WizardState;
  onReset: () => void;
}

export default function BlueprintView({ state, onReset }: Props) {
  const [sendStatus, setSendStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);

  const blueprint = generateBlueprint(state);

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

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-10">
        <div className="text-4xl mb-4">✦</div>
        <h3 className="font-serif text-h2 font-light mb-2">Your platform blueprint.</h3>
        <p className="text-body-sm text-content-secondary">
          Here's what I'd build for you. Send it to me and I'll follow up within 24 hours.
        </p>
      </div>

      {/* Terminal */}
      <div className="blueprint-terminal mb-8">
        <pre className="text-[0.75rem] sm:text-[0.8rem] leading-relaxed">{blueprint}</pre>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {sendStatus === 'success' ? (
          <div className="flex items-center gap-3 px-8 py-4 bg-[#2A9D6A]/20 border border-[#2A9D6A]/40 rounded-full text-[#2A9D6A] text-body-sm font-medium">
            <CheckCircle className="w-5 h-5" />
            Sent! I'll be in touch within 24 hours.
          </div>
        ) : (
          <button
            onClick={handleSend}
            disabled={sendStatus === 'sending'}
            className="px-8 py-4 bg-accent text-white rounded-full text-body-sm font-medium btn-glow disabled:opacity-50 transition-all"
          >
            {sendStatus === 'sending' ? 'Sending...' : sendStatus === 'error' ? 'Error — try again' : 'Send to Jordi'}
          </button>
        )}

        <button
          onClick={handleCopy}
          className="px-8 py-4 border border-border rounded-full text-body-sm text-content-secondary hover:border-border-hover hover:text-content-primary transition-all"
        >
          {copied ? 'Copied!' : 'Copy to Clipboard'}
        </button>
      </div>

      {/* Start over */}
      <div className="text-center mt-8">
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
