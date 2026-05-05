import { useEffect, useRef } from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';

export default function AiPage() {
  useDocumentMeta({
    title: 'The AI underneath — Astral Studio',
    description: 'Not a chatbot. Not a feature on a marketing page. The substrate. An AI trained on your work — your voice, your teachings, your past emails — running on your infrastructure.',
    ogUrl: 'https://astralstudio.io/ai',
  });

  const revealRefs = useRef<(HTMLElement | null)[]>([]);
  const addRevealRef = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    revealRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-bg text-ink">
      <Navigation />

      {/* HERO — indigo full-bleed */}
      <section className="bg-indigo pt-40 pb-section px-6 md:px-12">
        <div className="max-w-content mx-auto">
          <p className="mono-tag text-saffron-br mb-8 tracking-[0.32em] text-[10px]">Beneath the floor</p>
          <h1 className="serif font-light leading-[0.95] tracking-tight text-cream max-w-[1100px]" style={{ fontSize: 'clamp(44px, 7vw, 120px)' }}>
            The AI sits <em className="serif-i text-saffron-br">underneath.</em>
          </h1>
          <p className="text-body md:text-lg text-cream/85 max-w-[680px] mt-10 leading-relaxed">
            Not a chatbot. Not a feature on a marketing page. Your work — your teachings, your past emails, your intake forms, your live recordings — trained into a model that runs on your infrastructure and gets smarter every time you teach.
          </p>
          <p className="text-body-sm text-saffron-br mt-6 italic font-medium">
            You don't see it. Your students feel it.
          </p>
        </div>
      </section>

      {/* WHAT IT DOES */}
      <section className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            What it does
          </p>
          <h2 className="font-serif text-display-sm font-light mb-12 max-w-prose">
            Quietly. <em className="em-accent not-italic">In your voice.</em>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-[1000px]">
            {[
              { title: 'Drafts your launches', desc: 'When you announce a new retreat, the first draft of the email lands in your inbox. Written in your phrasing, structured the way you usually structure these announcements. Edit it down. Send it. Twenty minutes saved per launch.' },
              { title: 'Answers a student at 3am', desc: 'In the language of your tradition. The terminology you use, the lineage you teach, the depth your students expect. It escalates anything subtle to you — but it handles the questions you\'ve answered a hundred times.' },
              { title: 'Sorts incoming intake forms', desc: 'Reads each one, tags it, flags the ones you\'ll want to handle yourself. The 9 forms a week become 3 you actually read, with notes from the AI on what to look for in each.' },
              { title: 'Learns every time you teach', desc: 'Your live recordings get transcribed and folded into the model. Three months in, the AI has heard everything you\'ve said in every cohort. It speaks the way you speak — because it learned from you.' },
            ].map((item, i) => (
              <div key={i} className="border border-rule bg-cream p-6 md:p-8" style={{ borderRadius: '14px' }}>
                <p className="serif text-h3 mb-3 text-ink">{item.title}</p>
                <p className="text-body-sm text-ink-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINED ON */}
      <section className="py-section px-6 md:px-12 bg-bg-2">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            What it's trained on
          </p>
          <h2 className="font-serif text-display-sm font-light mb-4 max-w-prose">
            <em className="em-accent not-italic">Your</em> work. Not the internet's.
          </h2>
          <p className="text-body text-content-secondary max-w-prose mb-12">
            Generic AI knows what the internet has decided about your tradition. Your AI knows what <em>you</em> have decided about your tradition. Different thing.
          </p>

          <div className="max-w-prose space-y-3">
            {[
              { source: 'Past emails', detail: 'Years of how you actually answer students, clients, and inquiries' },
              { source: 'Intake forms', detail: 'The questions you ask + the answers you respond well to' },
              { source: 'Live recordings + transcripts', detail: 'Every session, every cohort call, every retreat dharma talk — folded in as it happens' },
              { source: 'Written work', detail: 'Books, blog posts, course curriculum, hand-written notes you scan in' },
              { source: 'Decision history', detail: 'The students you accepted vs. declined, the offerings you launched vs. shelved — patterns the AI picks up over time' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-cream border border-rule p-4 md:p-5" style={{ borderRadius: '10px' }}>
                <span className="mono-tag text-[9px] text-saffron-dp pt-1 min-w-[100px]">{item.source}</span>
                <span className="text-body-sm text-ink-2 leading-relaxed">{item.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHERE IT LIVES */}
      <section className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 max-w-[1100px] items-start">
            <div>
              <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
                <span className="w-8 h-px bg-accent" />
                Where it lives
              </p>
              <h2 className="font-serif text-display-sm font-light mb-6 max-w-prose">
                On <em className="em-accent not-italic">your</em> infrastructure.
              </h2>
              <p className="text-body text-content-secondary leading-relaxed mb-4">
                Not a SaaS subscription to my AI. Your model, your weights, your prompts — running on a server in your name. If you ever stop working with me, the AI doesn't leave. It can't, structurally.
              </p>
              <p className="text-body-sm text-content-muted leading-relaxed">
                For most clients this means a fine-tuned base model (OpenAI, Anthropic, or local depending on data sensitivity) with a vector store of your training material. The data never leaves your account.
              </p>
            </div>
            <div className="bg-cream border border-rule p-6" style={{ borderRadius: '14px' }}>
              <p className="mono-tag text-[10px] text-saffron-dp mb-4">What you own</p>
              <div className="space-y-3">
                {[
                  'The fine-tuned model weights',
                  'The vector store of your content',
                  'The prompts + system instructions',
                  'The conversation history',
                  'The integration code',
                  'The API keys (in your name)',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-ink">
                    <span className="text-saffron-dp">→</span>{item}
                  </div>
                ))}
              </div>
              <p className="mono-tag text-[9px] text-mute mt-5 leading-relaxed">
                Standard tools. Migrate-able. No proprietary lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IT'S NOT */}
      <section className="py-section px-6 md:px-12 bg-bg-2">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            What it's not
          </p>
          <h2 className="font-serif text-display-sm font-light mb-12 max-w-prose">
            Not <em className="em-accent not-italic">that.</em>
          </h2>

          <div className="max-w-prose space-y-3">
            {[
              { not: 'A chatbot widget in the corner of your homepage', why: 'Those are decorative. The AI here doesn\'t need a UI — it works underneath, in your email, in your forms, in your inbox.' },
              { not: 'A generic ChatGPT wrapper', why: 'A wrapper trained on the internet talks like the internet. Yours talks like you because it learned from you.' },
              { not: 'A SaaS subscription you can\'t cancel', why: 'No vendor between you and the model. Your weights, your account, your bill.' },
              { not: 'A magic feature in a marketing deck', why: 'It\'s software. It does specific things well — drafts, answers, sorts, learns. It doesn\'t replace you. It carries the boring weight you carry now.' },
            ].map((item, i) => (
              <div key={i} className="bg-cream border border-rule p-5" style={{ borderRadius: '12px' }}>
                <p className="text-body text-ink mb-2 flex items-start gap-3"><span className="text-terra flex-shrink-0">×</span><span className="font-medium">{item.not}</span></p>
                <p className="text-body-sm text-ink-2 pl-7">{item.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE HONEST PART */}
      <section className="py-section px-6 md:px-12">
        <div className="max-w-content mx-auto reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-accent mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-accent" />
            The honest part
          </p>
          <h2 className="font-serif text-display-sm font-light mb-6 max-w-prose">
            It's not magic. <em className="em-accent not-italic">It compounds.</em>
          </h2>

          <div className="max-w-prose space-y-5 text-body text-content-secondary leading-relaxed">
            <p>
              Models plus your data plus good design. That's the whole formula. There's no proprietary breakthrough — the breakthrough is that someone bothered to build it around the specific shape of your work.
            </p>
            <p>
              Month one, the AI is decent. It writes drafts that sound mostly like you. Students get useful but slightly off-key answers. Forms get sorted, sometimes wrongly.
            </p>
            <p>
              Month six, it's uncanny. The drafts barely need editing. Students reply with "thank you" not knowing it wasn't you. Forms come pre-sorted with notes you'd have written yourself.
            </p>
            <p className="text-content-primary font-medium">
              Month eighteen, it's irreplaceable. Years of your teaching folded into a model that nobody else can replicate — because nobody else has your training data.
            </p>
            <p className="text-body-sm text-content-muted italic">
              That's why I build for the long term. The AI gets useful slowly, and then suddenly very useful. The compounding starts on day one.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section px-6 md:px-12 bg-indigo">
        <div className="max-w-content mx-auto text-center reveal" ref={addRevealRef}>
          <p className="text-meta uppercase text-saffron-br mb-6 inline-flex items-center gap-4">
            <span className="w-8 h-px bg-saffron-br" />
            Curious if your work has enough material to train on
            <span className="w-8 h-px bg-saffron-br" />
          </p>
          <h2 className="font-serif font-light text-cream mx-auto max-w-[900px]" style={{ fontSize: 'clamp(36px, 5vw, 78px)', lineHeight: 1.05 }}>
            Send me a sample of your <em className="serif-i text-saffron-br">writing.</em>
          </h2>
          <p className="text-body text-cream/80 max-w-prose mx-auto mt-8 leading-relaxed">
            Three to five emails you've written to clients, an intake form you use, a session note you took. Twenty minutes of reading and I can tell you whether the AI substrate fits your work or not. No pitch, no pressure.
          </p>
          <div className="mt-12">
            <a href="/contact" className="btn-jugat saffron">Send me your messy notes →</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
