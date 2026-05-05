import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircle } from 'lucide-react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';

const platformLayers = [
  { name: 'Events', desc: 'What\'s happening today, this week, this month. Updated daily. Searchable by type, location, date. One place everyone checks.' },
  { name: 'Directory', desc: 'Every practitioner, business, restaurant, venue, and service — categorized, searchable, maintained. The community\'s yellow pages.' },
  { name: 'Classifieds', desc: 'Housing, work, rides, items for sale, services offered. The things communities actually need — without scrolling through group chat chaos.' },
  { name: 'Digest', desc: 'A weekly email with the best events, new listings, and community updates. People subscribe once and stay informed.' },
];

export default function CommunitiesPage() {
  useDocumentMeta({
    title: 'For communities — Astral Studio',
    description: 'I turn your community into a place people return to. Directory, events, memberships, weekly digest, and the AI that keeps it alive between meetups.',
    ogUrl: 'https://astralstudio.io/communities',
  });

  const [formData, setFormData] = useState({ name: '', email: '', site: '', message: '' });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    revealRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  const addRevealRef = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setFormStatus('sending');
    try {
      await emailjs.send(
        'service_larviog',
        'template_7iyu04b',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: `Community Platform Inquiry: ${formData.name}`,
          message: [
            `FROM: /communities page`,
            '',
            formData.site ? `COMMUNITY/LOCATION: ${formData.site}` : '',
            '',
            formData.message ? `MESSAGE:\n${formData.message}` : '',
          ].filter(Boolean).join('\n'),
        },
        'v57Ta98pwBDWpoe8o'
      );
      setFormStatus('success');
      setFormData({ name: '', email: '', site: '', message: '' });
      setFormErrors({});
    } catch {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg font-sans">
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-content mx-auto">
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            For Communities
          </p>
          <h1 className="font-serif text-display font-light mb-8 max-w-[800px]">
            I turn your community into a <em className="italic gradient-text">place</em><br />people return to.
          </h1>
          <p className="text-body text-content-secondary max-w-prose">
            Directory, events, memberships, a weekly digest, and the AI that keeps it alive between meetups. Built around your locality, not a Discord server.
          </p>
        </div>
      </section>

      {/* The Problem — narrative, not checkboxes */}
      <section className="py-section px-6 md:px-12 bg-bg-2">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            The Problem
          </p>
          <h2 className="font-serif text-display-sm font-light mb-12">
            The information exists. It's just everywhere.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-[800px]">
            {[
              { where: 'WhatsApp groups', what: '12 different groups, none complete. Half the events never get posted. New arrivals don\'t know which groups exist.' },
              { where: 'Instagram stories', what: 'Events announced in stories that disappear in 24 hours. If you missed it, it never happened.' },
              { where: 'Word of mouth', what: 'Works perfectly — until it doesn\'t. New visitors, seasonal residents, and anyone outside the inner circle gets left out.' },
            ].map((item, i) => (
              <div key={i} className="bg-dark-card border border-border rounded-xl p-6">
                <p className="text-body text-content-primary font-medium mb-3">{item.where}</p>
                <p className="text-body-sm text-content-secondary">{item.what}</p>
              </div>
            ))}
          </div>

          <p className="text-body text-content-primary font-medium mt-12 max-w-prose">
            The community already exists. The information already exists. What's missing is the infrastructure to hold it — one place everyone checks.
          </p>
        </div>
      </section>

      {/* Platform Layers — unique to Communities */}
      <section className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            The Platform
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">
            Four layers. One utility.
          </h2>
          <p className="text-body text-content-secondary max-w-prose mb-16">
            Not a social network. Not a marketplace. A community utility — the digital infrastructure for a place that already exists in the physical world.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-[800px]">
            {platformLayers.map((layer, i) => (
              <div key={i} className="bg-dark-card border border-border rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-serif text-sm font-medium">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-serif text-h3">{layer.name}</h3>
                </div>
                <p className="text-body-sm text-content-secondary">{layer.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-dark-card border border-accent/20 rounded-xl p-6 max-w-[800px]">
            <p className="text-body-sm text-content-primary font-medium mb-2">Bilingual from day one.</p>
            <p className="text-body-sm text-content-secondary">
              If your community speaks two languages, the platform speaks both. Native content in each language — not a translation toggle.
            </p>
          </div>
        </div>
      </section>

      {/* What it looks like — UI mockup */}
      <section className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            What it looks like
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">
            Your tribe, <em className="em-accent not-italic">mapped.</em>
          </h2>
          <p className="text-body text-content-secondary max-w-prose mb-16">
            Facilitators in your area. Events this week. The local utility people open before they make plans — instead of scrolling facebook groups they're embarrassed to be in.
          </p>

          <div className="relative max-w-[560px] mx-auto bg-cream border border-rule overflow-hidden shadow-card" style={{ borderRadius: '14px' }}>
            <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-rule bg-bg-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rule-str" />
              <span className="w-2.5 h-2.5 rounded-full bg-rule-str opacity-60" />
              <span className="w-2.5 h-2.5 rounded-full bg-rule-str opacity-40" />
              <span className="ml-3 mono-tag text-[9px] text-mute">your-community.com · this week</span>
            </div>
            <div className="p-5 space-y-5 min-h-[420px]">
              {/* location filter */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="mono-tag text-[8px] text-mute">Near</span>
                <span className="px-2.5 py-1 bg-saffron-dp text-cream text-[10px] mono-tag" style={{ borderRadius: '999px' }}>Mazunte · 25 km</span>
                <span className="px-2.5 py-1 border border-rule text-[10px] text-mute mono-tag" style={{ borderRadius: '999px' }}>Modality</span>
                <span className="px-2.5 py-1 border border-rule text-[10px] text-mute mono-tag" style={{ borderRadius: '999px' }}>Language</span>
              </div>

              {/* facilitator cards */}
              <div>
                <p className="mono-tag text-[8px] text-saffron-dp mb-2">Facilitators</p>
                <div className="space-y-2">
                  {[
                    { initials: 'AR', name: 'Ana Reyes', mod: 'Sound healing · ES/EN', next: 'Sat 8 May · gong bath' },
                    { initials: 'JM', name: 'Jordan Mata', mod: 'Cacao circle · ES', next: 'Sun 9 May · luna nueva' },
                    { initials: 'KL', name: 'Kira López', mod: 'Yoga · breathwork · EN', next: 'Mon 10 May · 7am rooftop' },
                  ].map((f, k) => (
                    <div key={k} className="flex items-center gap-3 px-3 py-2.5 border border-rule" style={{ borderRadius: '6px' }}>
                      <span className="w-9 h-9 rounded-full bg-saffron-dp/15 text-saffron-dp grid place-items-center text-xs font-medium flex-shrink-0">{f.initials}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-ink truncate">{f.name}</p>
                        <p className="text-[10px] text-ink-2 truncate">{f.mod}</p>
                      </div>
                      <p className="mono-tag text-[8px] text-mute hidden sm:block">{f.next}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* event grid */}
              <div>
                <p className="mono-tag text-[8px] text-saffron-dp mb-2">Events · 12 this week</p>
                <div className="grid grid-cols-5 gap-1.5">
                  {[
                    { d: 'Tue', n: 6, dot: 0 },
                    { d: 'Wed', n: 7, dot: 2 },
                    { d: 'Thu', n: 8, dot: 1 },
                    { d: 'Fri', n: 9, dot: 3 },
                    { d: 'Sat', n: 10, dot: 4 },
                  ].map((e, k) => (
                    <div key={k} className={`p-2 ${e.dot > 0 ? 'bg-saffron-dp/8 border border-saffron-dp/30' : 'border border-rule'}`} style={{ borderRadius: '6px' }}>
                      <p className="mono-tag text-[8px] text-mute">{e.d}</p>
                      <p className="text-xs text-ink mt-0.5">{e.n}</p>
                      <div className="flex gap-0.5 mt-1.5">
                        {Array.from({ length: e.dot }).map((_, di) => <span key={di} className="w-1 h-1 rounded-full bg-saffron-dp" />)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mono-tag text-[8px] text-mute text-center pt-1">Directory · events · in your language · for the place that's already there.</p>
            </div>
          </div>
        </div>
      </section>

      {/* "Why not a Facebook group?" — inline comparison */}
      <section className="py-section px-6 md:px-12 bg-bg-2">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            The Honest Question
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">
            "Why not a Facebook group?"
          </h2>
          <p className="text-body text-content-secondary max-w-prose mb-8">
            Facebook groups are free. They also leak — your members, your relationships, your reach. Mighty Networks, Discord, WhatsApp groups all share the same problem. Here's what those platforms can't do:
          </p>
          <div className="max-w-prose space-y-3">
            {[
              'Let you own the member list — Meta owns it, Discord owns it, the platform decides who sees what',
              'Show every post — algorithmic feeds bury anything that doesn\'t generate engagement',
              'Run real event RSVPs that connect to a calendar your members already use',
              'Hold a facilitator directory, a language toggle, a location filter — none are native',
              'Stay ad-free — the platform monetizes by selling your members\' attention',
              'Survive a platform purge — people delete Facebook every six months and your community goes with them',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-accent text-body-sm mt-0.5 flex-shrink-0">&times;</span>
                <p className="text-body-sm text-content-secondary">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-body text-content-primary font-medium mt-8 max-w-prose">
            Free isn't free when the platform owns the relationship. Build on land you own.
          </p>
        </div>
      </section>

      {/* Case Study: Mazunte Today — the proof */}
      <section className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            Proof
          </p>
          <h2 className="font-serif text-display-sm font-light mb-16">
            The go-to source for an entire town.
          </h2>

          <div className="bg-dark-card border border-border rounded-2xl overflow-hidden">
            <div className="relative w-full border-b border-border bg-gradient-to-br from-rose-900/25 via-rose-900/5 to-transparent p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="font-serif text-h2 font-light">Mazunte Today</h3>
                <p className="text-meta uppercase text-gold mt-1">Community Platform — Oaxaca, Mexico</p>
              </div>
              <div className="flex items-center gap-3 text-meta">
                <span className="text-content-muted">Bilingual EN/ES</span>
                <span className="text-content-muted">&middot;</span>
                <span className="text-content-muted">Updated daily</span>
                <span className="text-content-muted">&middot;</span>
                <a href="https://mazunte.today" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-content-primary transition-colors">View Live</a>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-meta uppercase text-content-muted mb-3">The Problem</p>
                  <p className="text-body-sm text-content-secondary leading-relaxed">
                    A small coastal town with dozens of practitioners, venues, and events happening every night — and no central place to find any of it. Visitors relied on word of mouth. Locals posted on scattered WhatsApp groups. Business owners had no affordable way to be found online.
                  </p>
                </div>
                <div>
                  <p className="text-meta uppercase text-content-muted mb-3">What Was Built</p>
                  <p className="text-body-sm text-content-secondary leading-relaxed">
                    A bilingual community platform: event listings updated daily, practitioner and business directory, classifieds, and a weekly digest — in English and Spanish. Now the go-to source for what's happening in town. Used by locals and visitors alike.
                  </p>
                </div>
              </div>
              <a href="/work/mazunte-today" className="mt-6 text-body-sm text-accent hover:text-content-primary transition-colors inline-flex items-center gap-2">
                Full case study <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="mt-8">
            <a href="/work" className="text-body-sm text-accent hover:text-content-primary transition-colors inline-flex items-center gap-2">
              All 8 case studies <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* What makes this different from Facebook Groups */}
      <section className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            The Honest Question
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">
            "Why not just use a Facebook group?"
          </h2>
          <div className="max-w-prose space-y-4 mt-8">
            <p className="text-body-sm text-content-secondary">
              <strong className="text-content-primary">Facebook groups are feeds.</strong> Information scrolls past and disappears. There's no directory, no event calendar, no categorization. Finding last week's post about the yoga class requires scrolling through memes and arguments.
            </p>
            <p className="text-body-sm text-content-secondary">
              <strong className="text-content-primary">Facebook owns the data.</strong> Your community's members, their activity, their connections — it's Facebook's data, not yours. They decide what gets shown and what doesn't. Their algorithm, not your priorities.
            </p>
            <p className="text-body-sm text-content-secondary">
              <strong className="text-content-primary">A utility is different from a social network.</strong> People don't want to "engage" with community content. They want to find the osteopath, check tonight's events, and see if anyone's renting a room. That's a utility — searchable, organized, up-to-date.
            </p>
          </div>
        </div>
      </section>

      {/* How engagements start */}
      <section className="py-section px-6 md:px-12 bg-bg-2">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            How to start
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">
            Every engagement is shaped to the work.
          </h2>
          <p className="text-body text-content-secondary max-w-prose mb-8">
            Your community owns the platform. Code, data, domain — yours, from day one.
          </p>
          <a
            href="https://calendly.com/astral-integration/free-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-accent text-white rounded-full text-body-sm font-medium btn-glow"
          >
            Book a call
          </a>
        </div>
      </section>

      {/* CTA / Contact */}
      <section className="py-section px-6 md:px-12 bg-dark-card">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <div className="max-w-prose">
            <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-accent" />
              Let's Talk
            </p>
            <h2 className="font-serif text-display-sm font-light mb-4">
              Send me your facebook group and your event calendar.
            </h2>
            <p className="text-body text-content-secondary mb-4">
              Where the community lives now, what's missing, what people would check every day if it existed. I'll read it and sketch the architecture.
            </p>
            <p className="text-body-sm text-content-muted mb-10">
              No cost. No pitch. Just a conversation about what your community needs.
            </p>

            {formStatus !== 'success' ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="community-name" className="block text-body-sm text-content-muted mb-3">Name</label>
                    <input type="text" id="community-name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={`w-full px-5 py-4 bg-dark-bg border rounded-xl text-content-primary placeholder-content-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors ${formErrors.name ? 'border-red-400 focus:ring-red-400/20' : 'border-border'}`} placeholder="Your name" />
                    {formErrors.name && <p className="mt-2 text-body-sm text-red-400">{formErrors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="community-email" className="block text-body-sm text-content-muted mb-3">Email</label>
                    <input type="email" id="community-email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={`w-full px-5 py-4 bg-dark-bg border rounded-xl text-content-primary placeholder-content-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors ${formErrors.email ? 'border-red-400 focus:ring-red-400/20' : 'border-border'}`} placeholder="your@email.com" />
                    {formErrors.email && <p className="mt-2 text-body-sm text-red-400">{formErrors.email}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="community-location" className="block text-body-sm text-content-muted mb-3">Community / Location</label>
                  <input type="text" id="community-location" value={formData.site} onChange={(e) => setFormData({ ...formData, site: e.target.value })} className="w-full px-5 py-4 bg-dark-bg border border-border rounded-xl text-content-primary placeholder-content-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors" placeholder="Town, neighborhood, or network name" />
                </div>
                <div>
                  <label htmlFor="community-message" className="block text-body-sm text-content-muted mb-3">What does your community need?</label>
                  <textarea id="community-message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="w-full px-5 py-4 bg-dark-bg border border-border rounded-xl text-content-primary placeholder-content-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors resize-none" placeholder="Events? Directory? Classifieds? Tell me about the community and what's missing..." />
                </div>
                <button type="submit" disabled={formStatus === 'sending'} className="px-10 py-4 bg-accent text-white rounded-full text-body-sm font-medium btn-glow disabled:opacity-50 disabled:cursor-not-allowed">
                  {formStatus === 'sending' ? 'Sending...' : formStatus === 'error' ? 'Error - try again' : 'Send Message'}
                </button>
              </form>
            ) : (
              <div className="py-16 text-center">
                <CheckCircle className="w-12 h-12 text-accent mx-auto mb-6" />
                <h3 className="font-serif text-h2 mb-4">Message received.</h3>
                <p className="text-body text-content-secondary mb-3">I'll look into your community and get back to you within 24-48 hours.</p>
                <p className="text-body-sm text-content-muted mb-8">Check your inbox for a reply from hello@astralstudio.io</p>
                <button onClick={() => setFormStatus('idle')} className="text-body-sm text-accent hover:underline">Send another message</button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
