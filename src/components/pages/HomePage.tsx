import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircle } from 'lucide-react';
import Footer from '../Footer';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { caseStudies, CaseStudy } from '../../data/caseStudies';
import PreviewFrame from '../PreviewFrame';

export default function HomePage() {
  useDocumentMeta({
    title: 'Astral Studio — I turn your practice into a business.',
    description: 'Bookings, payments, memberships, automations, and the AI underneath. Custom platforms for teachers, schools, and retreat centers.',
    ogUrl: 'https://astralstudio.io/',
  });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  const rotatingPairs = [
    { left: 'practice', right: 'lasting' },
    { left: 'training', right: 'integrative' },
    { left: 'craft', right: 'embodied' },
    { left: 'retreat', right: 'personalized' },
    { left: 'school', right: 'regenerative' },
  ];
  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setWordIndex((i) => (i + 1) % rotatingPairs.length), 2400);
    return () => clearInterval(t);
  }, []);

  const [navVisible, setNavVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setNavVisible(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);
  useEffect(() => {
    if (!activeStudy) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActiveStudy(null); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [activeStudy]);

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
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
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
          subject: 'New Inquiry from Website',
          message: formData.message,
        },
        'v57Ta98pwBDWpoe8o'
      );
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setFormErrors({});
    } catch {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-bg font-sans">
      {/* ═══════ NAV — appears on scroll ═══════ */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-cream/85 backdrop-blur-lg border-b border-rule transition-all duration-300 ${navVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="max-w-content mx-auto px-6 md:px-12 h-[76px] flex items-center justify-between gap-8">
          <a href="/" className="flex items-center gap-3.5">
            <span className="serif text-[22px] tracking-tight">Astral <em className="em-accent">Integration</em></span>
          </a>
          <ul className="hidden md:flex gap-9 list-none items-center">
            <li><a href="#work" className="text-sm text-ink-2 hover:text-saffron-dp transition-colors font-medium">Work</a></li>
            <li><a href="#engagements" className="text-sm text-ink-2 hover:text-saffron-dp transition-colors font-medium">How</a></li>
            <li><a href="/about" className="text-sm text-ink-2 hover:text-saffron-dp transition-colors font-medium">About</a></li>
            <li><a href="/insights" className="text-sm text-ink-2 hover:text-saffron-dp transition-colors font-medium">Insights</a></li>
            <li>
              <a
                href="https://calendly.com/astral-integration/free-strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-jugat saffron"
              >
                Start an audit
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ═══════ HERO — cover style ═══════ */}
      <section className="max-w-content mx-auto px-6 md:px-12 pt-10 md:pt-16 pb-24 md:pb-32 text-center relative overflow-hidden">
        <div className="hero-glow" />

        <div className="relative z-10 max-w-[1200px] mx-auto">
          <div className="mono-tag text-saffron-dp mb-10 md:mb-12 tracking-[0.32em] text-[10px]">A studio for original work · Mazunte, Oaxaca</div>

          <h1 className="serif text-display max-w-[1200px] mx-auto" style={{ fontSize: 'clamp(48px, 7.5vw, 128px)', lineHeight: 0.95, letterSpacing: '-0.018em' }}>
            I turn your<br />
            <em key={wordIndex} className="em-accent inline-block animate-fadeUp">{rotatingPairs[wordIndex].left}</em><br />
            into a <em className="em-accent">thriving</em> business.
          </h1>

          <p className="text-base md:text-lg text-ink-2 max-w-[640px] mx-auto leading-relaxed mt-12">
            Bookings, payments, memberships, automations, and the AI underneath. Built around your work, not a template.
          </p>

          <p className="mono-tag text-mute mt-5 text-[10px] tracking-[0.24em]">
            Former CTO · Senior full-stack engineer
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
            <a
              href="https://calendly.com/astral-integration/free-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-jugat saffron"
            >
              Start an audit →
            </a>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-jugat ghost"
            >
              See the work
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ EMOTIONAL BRIDGE — moved up to set up the pain ═══════ */}
      <section className="bg-bg-2 py-section">
        <div className="max-w-content mx-auto px-6 md:px-12 text-center">
          <p className="eyebrow mb-4">Site condition</p>
          <h2 className="serif text-display-sm max-w-[800px] mx-auto" style={{ fontSize: 'clamp(40px, 6vw, 92px)', lineHeight: 1, letterSpacing: '-0.012em' }}>
            You inspired hundreds<br />of people this <em className="em-accent">weekend.</em>
          </h2>
          <div className="max-w-prose mx-auto mt-10 space-y-5 text-left md:text-center">
            <p className="text-base md:text-lg text-ink-2 leading-relaxed">
              Then spent three days chasing five tools to make it real. Calendly for the bookings, Stripe for the deposits, Mailchimp for the follow-up, a Notion doc for the intake, the WhatsApp group for everything else.
            </p>
            <p className="text-base text-mute-strong leading-relaxed">
              Your practice already works. People show up because the work is real. The waitlist fills. The retreats sell out.
            </p>
            <p className="text-base md:text-lg text-ink leading-relaxed font-medium">
              What doesn't work is the running of it. That's not a strategy problem. It's a <em className="em-accent">build problem.</em>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ PATHS — six pieces, journey-shaped ═══════ */}
      <section className="max-w-content mx-auto px-6 md:px-12 py-section">
        <div className="text-center mb-16 md:mb-20">
          <p className="eyebrow mb-4">· What I build for you ·</p>
          <h2 className="serif" style={{ fontSize: 'clamp(40px, 6vw, 92px)', lineHeight: 1, letterSpacing: '-0.012em' }}>
            Six pieces. <em className="em-accent">One platform.</em>
          </h2>
          <p className="text-base text-ink-2 max-w-[640px] mx-auto leading-relaxed mt-6">
            One native system replaces the six tools you've been duct-taping together. Every piece lives under your own domain.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {[
            {
              num: 'Nº 01',
              kind: 'Foundation · The front door',
              title: 'Bookings & intake.',
              desc: 'Multi-offering calendar, pre-session intake forms, preparation sequences, capacity management. Built around how you onboard a student, not a generic calendar widget.',
              metaA: { k: 'Replaces', v: 'Calendly + Typeform' },
              metaB: { k: 'Ships in', v: 'Week 1' },
              mockup: 'bookings',
            },
            {
              num: 'Nº 02',
              kind: 'Money · The till',
              title: 'Payments.',
              desc: 'Stripe checkout with deposits and balance payments, multi-stream routing, refunds and disputes handled in-house. No marketplace fees, no platform tax, no aggregator.',
              metaA: { k: 'Replaces', v: 'Stripe links + Squarespace' },
              metaB: { k: 'Ships in', v: 'Week 1' },
              mockup: 'payments',
            },
            {
              num: 'Nº 03',
              kind: 'Container · The room they return to',
              title: 'Memberships.',
              desc: 'Member login + private portal, recurring subscription billing, gated content, drip sequences. A real container for the people who keep coming back to your work.',
              metaA: { k: 'Replaces', v: 'Patreon + Mighty Networks' },
              metaB: { k: 'Ships in', v: 'Week 2-3' },
              mockup: 'memberships',
            },
            {
              num: 'Nº 04',
              kind: 'Engine · The work that runs while you teach',
              title: 'Automations.',
              desc: 'Lifecycle email — welcome, onboard, re-engagement, win-back. Content repurposing, booking confirmations, follow-up nudges, post-session tasks. The busywork, automated.',
              metaA: { k: 'Replaces', v: 'Mailchimp + Zapier patches' },
              metaB: { k: 'Ships in', v: 'Week 3-4' },
              mockup: 'automations',
            },
            {
              num: 'Nº 05',
              kind: 'Substrate · The AI underneath',
              title: 'The AI underneath.',
              desc: 'Trained on your past recordings, intake forms, methodology, your tone of voice. Drafts launches in your voice. Answers a student at 3am in the language of your tradition. Not a chatbot bolted on.',
              metaA: { k: 'Trained on', v: 'Your actual work' },
              metaB: { k: 'Sharper', v: 'Every week' },
              mockup: 'ai',
            },
            {
              num: 'Nº 06',
              kind: 'Ownership · The keys',
              title: 'Yours, day one.',
              desc: 'Your code lives in your GitHub. Your data lives in your database. Your domain is in your name. Your space, not rented infrastructure. If we ever stop working together, you walk with the keys.',
              metaA: { k: 'Owns', v: 'Code · data · domain' },
              metaB: { k: 'Lives', v: 'In your name' },
              mockup: 'ownership',
            },
          ].map((p, i) => (
            <div key={i} className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* copy column */}
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-4 mb-4 mono-tag text-[10px] tracking-[0.2em]">
                  <span className="text-saffron-dp font-medium">{p.num}</span>
                  <span className="h-px w-6 bg-saffron-dp opacity-40" />
                  <span className="text-mute">{p.kind}</span>
                </div>
                <h3 className="serif mb-5" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.012em' }}>
                  {p.title.split(' ').map((w, k) => (
                    k === p.title.split(' ').length - 1
                      ? <em key={k} className="em-accent">{w}</em>
                      : <span key={k}>{w} </span>
                  ))}
                </h3>
                <p className="text-base text-ink-2 leading-relaxed max-w-[520px] mb-7">{p.desc}</p>
                <div className="grid grid-cols-2 gap-6 max-w-[440px] pt-5 border-t border-rule">
                  <div>
                    <p className="mono-tag text-[10px] tracking-[0.18em] text-mute mb-1">{p.metaA.k}</p>
                    <p className="serif text-xl text-ink"><em className="em-accent not-italic">{p.metaA.v}</em></p>
                  </div>
                  <div>
                    <p className="mono-tag text-[10px] tracking-[0.18em] text-mute mb-1">{p.metaB.k}</p>
                    <p className="serif text-xl text-ink"><em className="em-accent not-italic">{p.metaB.v}</em></p>
                  </div>
                </div>
              </div>
              {/* visual plate — high-fidelity UI mockup */}
              <div className={`relative ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative max-w-[480px] mx-auto bg-cream border border-rule overflow-hidden shadow-card" style={{ borderRadius: '14px' }}>
                  {/* browser chrome */}
                  <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-rule bg-bg-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rule-str" />
                    <span className="w-2.5 h-2.5 rounded-full bg-rule-str opacity-60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-rule-str opacity-40" />
                    <span className="ml-3 mono-tag text-[9px] text-mute">{p.num} · {p.title.replace('.', '').toLowerCase()}</span>
                  </div>

                  {/* mockup body — scaled to fit */}
                  <div className="p-5 min-h-[360px]">
                    {p.mockup === 'bookings' && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <p className="serif text-lg text-ink">May <em className="em-accent not-italic">2026</em></p>
                          <div className="flex gap-1.5"><span className="w-7 h-7 border border-rule grid place-items-center text-xs text-mute">‹</span><span className="w-7 h-7 border border-rule grid place-items-center text-xs text-mute">›</span></div>
                        </div>
                        <div className="grid grid-cols-7 gap-1 mono-tag text-[8px] text-mute">
                          {['M','T','W','T','F','S','S'].map((d,k)=><span key={k} className="text-center py-1">{d}</span>)}
                        </div>
                        <div className="grid grid-cols-7 gap-1 text-xs">
                          {[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map(d=>(
                            <span key={d} className={`aspect-square grid place-items-center border ${d===14?'bg-saffron-dp text-cream border-saffron-dp font-medium':'border-transparent text-ink-2'}`}>{d}</span>
                          ))}
                        </div>
                        <div className="bg-bg-2 border border-rule p-3 mt-2" style={{borderRadius:'8px'}}>
                          <p className="mono-tag text-[8px] text-saffron-dp mb-1">Selected · Tue 14 May</p>
                          <p className="text-sm text-ink"><em className="em-accent">2:00 pm</em> · 75-min private session</p>
                        </div>
                        <button className="w-full btn-jugat saffron text-xs justify-center">Confirm booking →</button>
                      </div>
                    )}

                    {p.mockup === 'payments' && (
                      <div className="space-y-3">
                        <p className="mono-tag text-[9px] text-mute">Order summary</p>
                        <div className="border-b border-rule pb-3">
                          <p className="text-sm text-ink">7-night Sound Healing Retreat</p>
                          <p className="text-xs text-mute">Mazunte · Sept 12-19</p>
                        </div>
                        <div className="space-y-1.5 text-xs">
                          <div className="flex justify-between text-ink-2"><span>Retreat fee</span><span>$2,400</span></div>
                          <div className="flex justify-between text-ink-2"><span>Single occupancy</span><span>$600</span></div>
                          <div className="flex justify-between font-medium text-ink pt-2 border-t border-rule"><span>Total</span><span className="serif text-base">$3,000</span></div>
                        </div>
                        <div className="bg-bg-2 border border-rule p-3" style={{borderRadius:'8px'}}>
                          <p className="mono-tag text-[8px] text-saffron-dp mb-1.5">Deposit today</p>
                          <p className="serif text-2xl text-ink leading-none"><em className="em-accent">$500</em></p>
                          <p className="text-[10px] text-mute mt-1">Balance $2,500 · due July 1</p>
                        </div>
                        <div className="border border-rule p-2.5 flex items-center gap-2 text-xs text-mute" style={{borderRadius:'6px'}}>
                          <span className="w-7 h-5 bg-ink rounded-sm" /> •••• 4242
                        </div>
                        <button className="w-full btn-jugat saffron text-xs justify-center">Pay $500 deposit →</button>
                      </div>
                    )}

                    {p.mockup === 'memberships' && (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2.5">
                          <span className="w-9 h-9 rounded-full bg-saffron-dp text-cream grid place-items-center text-xs font-medium">M</span>
                          <div>
                            <p className="text-sm text-ink font-medium">Welcome back, Maya</p>
                            <p className="mono-tag text-[8px] text-mute">Member since 2024 · Sangat tier</p>
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex justify-between mono-tag text-[8px] text-mute"><span>40-day sadhana</span><span><em className="em-accent not-italic">Day 27 of 40</em></span></div>
                          <div className="h-1.5 bg-bg-2 overflow-hidden" style={{borderRadius:'2px'}}>
                            <div className="h-full bg-saffron-dp" style={{width:'67%'}} />
                          </div>
                        </div>
                        <div className="space-y-2 pt-1">
                          {['Today\'s kriya · 22 min','Library · 38 sessions','Sangat circle · 2 new'].map((t,k)=>(
                            <div key={k} className="flex items-center justify-between px-3 py-2 bg-bg-2 text-xs text-ink-2" style={{borderRadius:'6px'}}>
                              <span>{t}</span><span className="text-saffron-dp">→</span>
                            </div>
                          ))}
                        </div>
                        <div className="border-t border-rule pt-3 flex items-center justify-between mono-tag text-[8px] text-mute">
                          <span>Recurring · $49/mo</span>
                          <span className="text-saffron-dp">Active</span>
                        </div>
                      </div>
                    )}

                    {p.mockup === 'automations' && (
                      <div className="space-y-2.5">
                        <p className="mono-tag text-[9px] text-mute">Trigger</p>
                        <div className="border border-saffron-dp bg-saffron-dp/8 px-3 py-2.5" style={{borderRadius:'6px'}}>
                          <p className="mono-tag text-[8px] text-saffron-dp">When · booking confirmed</p>
                          <p className="text-sm text-ink mt-0.5">A student books a retreat</p>
                        </div>
                        <div className="flex justify-center"><span className="text-saffron-dp text-xs">↓</span></div>
                        <div className="space-y-1.5">
                          {[
                            { tag: 'Step 01', text: 'Send welcome email · in your voice' },
                            { tag: 'Step 02', text: 'Add to 14-day prep sequence' },
                            { tag: 'Step 03', text: 'Send intake form · day 3' },
                            { tag: 'Step 04', text: 'Calendar invite · 1 week before' },
                            { tag: 'Step 05', text: 'Day-of arrival reminder' },
                          ].map((s,k)=>(
                            <div key={k} className="border border-rule px-3 py-2 flex items-center gap-3" style={{borderRadius:'6px'}}>
                              <span className="mono-tag text-[8px] text-saffron-dp">{s.tag}</span>
                              <span className="text-xs text-ink-2 flex-1">{s.text}</span>
                              <span className="w-2 h-2 rounded-full bg-saffron-dp" />
                            </div>
                          ))}
                        </div>
                        <p className="mono-tag text-[8px] text-mute text-center pt-1">5 steps · runs while you teach</p>
                      </div>
                    )}

                    {p.mockup === 'ai' && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <p className="mono-tag text-[9px] text-saffron-dp">Trained on Sera's curriculum</p>
                          <span className="w-2 h-2 rounded-full bg-saffron-dp animate-pulse" />
                        </div>
                        {/* student question */}
                        <div className="flex gap-2">
                          <span className="w-7 h-7 rounded-full bg-bg-3 grid place-items-center text-[10px] text-ink-2 flex-shrink-0">M</span>
                          <div className="bg-bg-2 px-3 py-2 text-xs text-ink-2 leading-relaxed" style={{borderRadius:'10px 10px 10px 2px'}}>
                            What's the difference between Sat Nam and Wahe Guru?
                          </div>
                        </div>
                        {/* AI response */}
                        <div className="flex gap-2 flex-row-reverse">
                          <span className="w-7 h-7 rounded-full bg-saffron-dp grid place-items-center text-[10px] text-cream flex-shrink-0">S</span>
                          <div className="bg-saffron-dp/12 border border-saffron-dp/30 px-3 py-2.5 text-xs text-ink leading-relaxed" style={{borderRadius:'10px 10px 2px 10px'}}>
                            In the lineage you're studying, <em className="em-accent">Sat Nam</em> is the seed — "truth is my identity." <em className="em-accent">Wahe Guru</em> is the experience of moving from darkness into light. One is who you are. One is what you become.
                          </div>
                        </div>
                        <p className="mono-tag text-[8px] text-mute text-center pt-1">3:14 am · in your voice · learning</p>
                      </div>
                    )}

                    {p.mockup === 'ownership' && (
                      <div className="space-y-3 font-mono text-[11px]">
                        <div className="flex items-center justify-between mono-tag text-[9px]">
                          <span className="text-mute">your-domain.com · main</span>
                          <span className="text-saffron-dp">↑ all yours</span>
                        </div>
                        <div className="bg-indigo text-cream/85 p-3 text-[10px] leading-relaxed" style={{borderRadius:'8px'}}>
                          <p><span className="text-saffron-br">$</span> git remote -v</p>
                          <p className="text-cream/60">origin  github.com/<em className="em-accent text-saffron-br not-italic">you</em>/site (fetch)</p>
                          <p className="text-cream/60">origin  github.com/<em className="em-accent text-saffron-br not-italic">you</em>/site (push)</p>
                          <p className="mt-2"><span className="text-saffron-br">$</span> whois your-domain.com</p>
                          <p className="text-cream/60">Registrant: <em className="em-accent text-saffron-br not-italic">your name</em></p>
                        </div>
                        <div className="border border-rule p-3 space-y-1.5 text-ink-2" style={{borderRadius:'8px'}}>
                          <p className="mono-tag text-[8px] text-mute mb-1">Your repo</p>
                          {['📁 src/','📁 content/','📁 data/','📁 .github/workflows','📄 README.md'].map((f,k)=>(
                            <p key={k} className="text-[11px]">{f}</p>
                          ))}
                        </div>
                        <p className="mono-tag text-[8px] text-mute text-center pt-1">Code · data · domain · all in your name</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ AI SUBSTRATE — indigo full-bleed ═══════ */}
      <section className="bg-indigo py-section">
        <div className="max-w-content mx-auto px-6 md:px-12 text-center">
          <p className="eyebrow mb-4 text-saffron-br">Beneath the floor</p>
          <h2 className="serif max-w-[800px] mx-auto text-cream" style={{ fontSize: 'clamp(40px, 6vw, 92px)', lineHeight: 1, letterSpacing: '-0.012em' }}>
            And the AI sits <em className="serif-i text-saffron-br">underneath.</em>
          </h2>
          <div className="max-w-prose mx-auto mt-10 space-y-5">
            <p className="text-base md:text-lg text-cream/85 leading-relaxed">
              Not a chatbot. Not a feature on a marketing page. Your work — your teachings, your past emails, your intake forms, your live recordings — trained into a model that drafts your launches in your voice, answers a student at 3am in the language of your tradition, and keeps learning every time you teach.
            </p>
            <p className="text-base md:text-lg text-saffron-br leading-relaxed font-medium serif-i">
              You don't see it. Your students feel it.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ 5 DOORS ═══════ */}
      <section className="py-section px-6 md:px-12 bg-gradient-to-b from-dark-bg to-[#0d0d14]">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            I Build For
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">
            Find your starting point.
          </h2>
          <p className="text-body text-content-secondary max-w-prose mb-12">
            Different work, different architecture. If you already know what you need, start here.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: 'Makers', href: '/makers', desc: 'Artisans, creators, slow-fashion, writers selling craft' },
              { label: 'Practitioners', href: '/practitioners', desc: 'Healers, coaches, facilitators running on scattered tools' },
              { label: 'Schools', href: '/schools', desc: 'Certification programs and structured learning paths' },
              { label: 'Retreats', href: '/retreats', desc: 'Booking, intake, and multi-stream revenue' },
              { label: 'Communities', href: '/communities', desc: 'Directories, events, and local platforms' },
              { label: 'Organizations', href: '/organizations', desc: 'Networks and facilitator infrastructure at scale' },
            ].map((door) => (
              <a
                key={door.label}
                href={door.href}
                className="group bg-dark-card border border-border rounded-2xl p-6 hover:border-accent/40 hover:bg-dark-cardHover transition-all"
              >
                <p className="font-serif text-h4 group-hover:text-accent transition-colors mb-2">{door.label}</p>
                <p className="text-meta text-content-muted leading-relaxed mb-3">{door.desc}</p>
                <span className="text-meta text-accent opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1">
                  Explore <span aria-hidden="true">&rarr;</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FEATURED WORK ═══════ */}
      <section id="work" className="py-section px-6 md:px-12 bg-gradient-to-b from-dark-bg to-[#0d0d14]">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            The Work
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">Selected builds.</h2>
          <p className="text-body text-content-secondary max-w-prose mb-16">
            Different problems, different architectures. Same principle: original work, custom infrastructure, long-term partnership.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((study) => (
              <button
                key={study.slug}
                onClick={() => study.url && setActiveStudy(study)}
                disabled={!study.url}
                className="bg-dark-card border border-border rounded-2xl overflow-hidden hover:border-accent/50 hover:shadow-glow transition-all group text-left flex flex-col disabled:cursor-not-allowed disabled:opacity-70"
              >
                {/* live iframe preview, auto-scaled to card width */}
                {study.url ? (
                  <PreviewFrame
                    url={study.url}
                    className="aspect-[16/10] border-b border-border"
                  />
                ) : (
                  <div className={`relative w-full aspect-[16/10] border-b border-border bg-gradient-to-br ${study.gradient} flex items-center justify-center`}>
                    <span className="text-meta uppercase text-content-muted tracking-wider">private portal</span>
                  </div>
                )}

                {/* card body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-h4 font-light group-hover:text-accent transition-colors">{study.client}</h3>
                  <p className="text-meta uppercase text-gold mt-1 mb-3">{study.category}</p>
                  <p className="text-body-sm text-content-secondary leading-relaxed line-clamp-3 flex-1">{study.challenge}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/work"
              className="text-body-sm text-accent hover:text-content-primary transition-colors inline-flex items-center gap-2"
            >
              Full case study writeups <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ HOW ENGAGEMENTS START ═══════ */}
      <section className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            How engagements start
          </p>
          <h2 className="font-serif text-display-sm font-light mb-6 max-w-[760px]">
            Send me your messy notes.
          </h2>
          <div className="max-w-prose space-y-5 mb-12">
            <p className="text-body text-content-secondary leading-relaxed">
              A voice memo, a Google Doc, a screenshot of your Instagram bio, the WhatsApp thread where you actually explain the work. I research it. I wrap it into a real business — site, bookings, payments, memberships, automations, the AI underneath.
            </p>
            <p className="text-body text-content-secondary leading-relaxed">
              Then I either stay on as your long-term tech, install your digital CEO and step back, or hand you the keys. Whichever fits.
            </p>
            <p className="text-body-sm text-content-muted leading-relaxed">
              Before any of that, an audit. So we both know what we're building.
            </p>
          </div>

          <div className="bg-dark-card border border-accent/30 ring-1 ring-accent/20 rounded-2xl p-8 md:p-10 max-w-prose">
            <p className="text-meta uppercase text-accent mb-3">Audit</p>
            <p className="font-serif text-h2 font-light mb-2">$1,500</p>
            <p className="text-meta text-content-muted mb-6">Fixed fee · refundable against the engagement that follows</p>
            <p className="text-body-sm text-content-secondary leading-relaxed mb-8">
              A written diagnostic of your current stack, five prioritized fixes, and a deal-shape proposal for what comes next.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <a
                href="https://calendly.com/astral-integration/free-strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-accent text-white rounded-full text-body-sm font-medium btn-glow text-center"
              >
                Start an audit
              </a>
              <span className="text-content-muted text-body-sm">or</span>
              <a
                href="https://calendly.com/astral-integration/free-strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-sm text-accent hover:text-content-primary transition-colors inline-flex items-center gap-2"
              >
                Just book a call <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ HOW IT WORKS (summary) ═══════ */}
      <section id="how" className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            How It Works
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4">
            Three phases. One engagement.
          </h2>
          <p className="text-body text-content-secondary max-w-prose mb-12">
            I learn your work, I build the platform, I hand you the keys. What happens after launch is a conversation, not a contract.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { step: '01', title: 'I learn your work.', desc: 'You tell me what you\'re building. I learn the methodology, the people you serve, the way you actually teach. If it\'s a fit, I send a proposal within days.' },
              { step: '02', title: 'I build.', desc: 'Custom platform, real code, your brand. You see it come together week by week. Most projects launch in 2–6 weeks.' },
              { step: '03', title: 'I hand you the keys.', desc: 'You own the code, the data, the domain. Whether I stay on after launch is a conversation, not a contract.' },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-body-sm font-medium flex-shrink-0 ${
                    i === 2 ? 'bg-accent text-white' : 'bg-dark-card border border-border text-content-muted'
                  }`}>
                    {item.step}
                  </div>
                </div>
                <div className={`bg-dark-card border rounded-xl p-6 ${i === 2 ? 'border-accent/30' : 'border-border'}`}>
                  <h4 className="font-serif text-h4 mb-3">{item.title}</h4>
                  <p className="text-body-sm text-content-secondary">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-body-sm text-content-muted mb-2">Every site is custom-built from scratch. No templates, no themes, no page builders.</p>
          <p className="text-body-sm text-content-muted mb-6">You own everything. Code, data, domain. From day one.</p>

          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <a
              href="https://calendly.com/astral-integration/free-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-sm text-accent hover:text-content-primary transition-colors inline-flex items-center gap-2"
            >
              Book a call <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ ABOUT (short) ═══════ */}
      <section id="about" className="py-section px-6 md:px-12 bg-gradient-to-b from-dark-bg to-[#0d0d14]">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <div className="grid md:grid-cols-[200px_1fr] gap-10 items-start">
            <div className="w-[200px] h-[240px] rounded-2xl border border-border relative overflow-hidden mx-auto md:mx-0">
              <img src="/founder.jpeg" alt="Jordi Amat" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent" />
            </div>

            <div>
              <h2 className="font-serif text-h2 font-light mb-4">Jordi Amat.</h2>
              <p className="text-body text-content-secondary leading-relaxed mb-4">
                Senior full-stack engineer. Former CTO. Access Bars practitioner. I spent a decade building production systems and leading engineering teams. Then I moved to Mazunte and started building for artists, creatives, changemakers, practitioners, facilitators, and organizations — the people and groups doing the most original work.
              </p>
              <a
                href="/about"
                className="text-body-sm text-accent hover:text-content-primary transition-colors inline-flex items-center gap-2"
              >
                Full story <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CONTACT ═══════ */}
      <section id="contact" className="py-section px-6 md:px-12 bg-dark-card">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <div className="max-w-prose">
            <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-accent" />
              Get in Touch
            </p>
            <h2 className="font-serif text-display-sm font-light mb-4">Tell me about your work.</h2>
            <p className="text-body-sm text-content-muted mb-10">
              No pitch. No pressure. Just a conversation about what you need and whether I can help.
            </p>

            {formStatus !== 'success' ? (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-body-sm text-content-muted mb-3">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-5 py-4 bg-dark-bg border rounded-xl text-content-primary placeholder-content-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors ${
                      formErrors.name ? 'border-red-400 focus:ring-red-400/20' : 'border-border'
                    }`}
                    placeholder="Your name"
                  />
                  {formErrors.name && <p className="mt-2 text-body-sm text-red-400">{formErrors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-body-sm text-content-muted mb-3">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-5 py-4 bg-dark-bg border rounded-xl text-content-primary placeholder-content-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors ${
                      formErrors.email ? 'border-red-400 focus:ring-red-400/20' : 'border-border'
                    }`}
                    placeholder="your@email.com"
                  />
                  {formErrors.email && <p className="mt-2 text-body-sm text-red-400">{formErrors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-body-sm text-content-muted mb-3">What are you working on?</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className={`w-full px-5 py-4 bg-dark-bg border rounded-xl text-content-primary placeholder-content-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors resize-none ${
                      formErrors.message ? 'border-red-400 focus:ring-red-400/20' : 'border-border'
                    }`}
                    placeholder="Tell me about your work, your people, and what you're trying to build..."
                  />
                  {formErrors.message && <p className="mt-2 text-body-sm text-red-400">{formErrors.message}</p>}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="px-10 py-4 bg-accent text-white rounded-full text-body-sm font-medium btn-glow disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'sending' ? 'Sending...' : formStatus === 'error' ? 'Error - try again' : 'Send Message'}
                  </button>
                  <span className="text-content-muted text-body-sm">or</span>
                  <a
                    href="https://calendly.com/astral-integration/free-strategy-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-sm text-accent hover:text-content-primary transition-colors inline-flex items-center gap-2"
                  >
                    Book a call directly <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </form>
            ) : (
              <div className="py-16 text-center">
                <CheckCircle className="w-12 h-12 text-accent mx-auto mb-6" />
                <h3 className="font-serif text-h2 mb-4">Message received.</h3>
                <p className="text-body text-content-secondary mb-3">I'll get back to you within 24–48 hours.</p>
                <p className="text-body-sm text-content-muted mb-8">Check your inbox for a reply from hello@astralstudio.io</p>
                <button onClick={() => setFormStatus('idle')} className="text-body-sm text-accent hover:underline">
                  Send another message
                </button>
              </div>
            )}

            <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-6 sm:items-center">
              <p className="text-body-sm text-content-muted">hello@astralstudio.io</p>
              <a
                href="/contact"
                className="text-body-sm text-accent hover:text-content-primary transition-colors inline-flex items-center gap-2"
              >
                Full contact page with Calendly <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* ═══════ CASE STUDY PREVIEW MODAL ═══════ */}
      {activeStudy && (
        <div
          className="fixed inset-0 z-[100] bg-dark-bg/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-fadeUp"
          onClick={() => setActiveStudy(null)}
        >
          <div
            className="relative w-full max-w-[1400px] h-full max-h-[90vh] bg-dark-card border border-border rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* close button */}
            <button
              onClick={() => setActiveStudy(null)}
              aria-label="Close preview"
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-dark-bg/90 hover:bg-accent border border-border hover:border-accent flex items-center justify-center text-content-secondary hover:text-white transition-all"
            >
              ✕
            </button>

            {/* iframe column */}
            <div className="flex-1 bg-dark-bg flex flex-col min-h-0">
              {/* browser chrome */}
              <div className="h-9 bg-dark-bg border-b border-border flex items-center px-4 gap-2 flex-shrink-0">
                <span className="w-3 h-3 rounded-full bg-red-400/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <span className="w-3 h-3 rounded-full bg-green-400/60" />
                <span className="ml-3 text-meta font-mono text-content-muted">
                  {activeStudy.url ? new URL(activeStudy.url).hostname : ''}
                </span>
              </div>
              {activeStudy.url && (
                <iframe
                  src={activeStudy.url}
                  title={activeStudy.client}
                  className="w-full flex-1 border-0 bg-white"
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                />
              )}
            </div>

            {/* info column */}
            <div className="md:w-[380px] p-6 md:p-8 overflow-y-auto bg-dark-card border-t md:border-t-0 md:border-l border-border flex-shrink-0">
              <p className="text-meta uppercase text-accent mb-2">{activeStudy.category}</p>
              <h3 className="font-serif text-h2 font-light mb-2">{activeStudy.client}</h3>
              <p className="text-meta uppercase text-gold mb-6">{activeStudy.type}</p>

              <p className="text-body-sm text-content-secondary leading-relaxed mb-6 line-clamp-[12]">{activeStudy.challenge}</p>

              <div className="flex flex-col gap-3">
                <a
                  href={`/work/${activeStudy.slug}`}
                  className="px-6 py-3 bg-accent text-white rounded-full text-body-sm font-medium btn-glow text-center"
                >
                  Read full case study
                </a>
                {activeStudy.url && (
                  <a
                    href={activeStudy.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent text-content-secondary border border-border rounded-full text-body-sm font-medium hover:border-border-hover hover:text-content-primary transition-all text-center inline-flex items-center justify-center gap-2"
                  >
                    Visit live site <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>

              <p className="text-meta text-content-muted mt-6">
                Press <kbd className="px-1.5 py-0.5 bg-dark-bg border border-border rounded text-[10px]">Esc</kbd> or click outside to close.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
