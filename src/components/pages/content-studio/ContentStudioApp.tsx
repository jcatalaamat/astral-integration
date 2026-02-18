import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFreemium } from "../../../hooks/useFreemium";
import { TOOLS } from "../../../config/tools";
import AstralBranding from "../../tools/AstralBranding";

const tool = TOOLS['content-studio'];
const DAILY_LIMIT = 5;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

const BRAND_CONTEXT = `You are the content voice of Astral Integration — a niche digital studio that builds growth systems (websites, platforms, AI tools, membership sites, mobile apps) for soul-led businesses: retreat centers, coaches, therapists, astrologers, wellness influencers, and course creators.

VOICE: Warm, confident, grounded. Not corporate, not salesy, not overly "woo." Think: a friend who happens to be brilliant at tech, explaining things simply over coffee. Use "I" not "we." Be direct. Use short paragraphs.

AUDIENCE: Non-technical wellness business owners on Instagram. They're great at their craft but overwhelmed by tech. They use Wix/Squarespace/Kajabi and know something is off but don't know what. They value authenticity, purpose, and aesthetics.

CONTENT PILLARS:
1. Audit Breakdowns — "Here's what I'd fix on this [type of] website" (anonymized observations)
2. Behind the Build — showing what you're building and why it matters
3. Industry Insights — why template sites fail, email mistakes, booking friction, SEO basics
4. Tech for Healers — practical tips they can act on today

RULES:
- Never sound like a tech bro or a marketing guru
- No buzzwords (synergy, leverage, optimize, scale)
- Use "your clients" not "your customers"
- Reference their world: ceremonies, sessions, retreats, readings, practices
- Keep captions under 300 words for single posts, provide slide-by-slide for carousels
- Always end with a soft CTA — never pushy
- Use line breaks generously for readability
- Emoji use: minimal, intentional, never more than 2-3 per post`;

const CONTENT_TYPES = [
  { id: "caption", label: "Single Post Caption", icon: "📝", desc: "One image or photo + caption" },
  { id: "carousel", label: "Carousel (Slides)", icon: "🎠", desc: "Multi-slide educational content" },
  { id: "reel-script", label: "Reel Script", icon: "🎬", desc: "Short-form video talking points" },
  { id: "story-series", label: "Story Series", icon: "📱", desc: "3-5 story sequence" },
  { id: "ideas-week", label: "Week of Ideas", icon: "💡", desc: "7 content ideas with hooks" },
];

const PILLARS = [
  { id: "audit", label: "Audit Breakdown", color: "#c4956a" },
  { id: "build", label: "Behind the Build", color: "#C9A96E" },
  { id: "insight", label: "Industry Insight", color: "#4A9EE0" },
  { id: "tips", label: "Tech for Healers", color: "#2A9D6A" },
];

const EXAMPLE_PROMPTS = [
  "I noticed a retreat center using 3 different tools for what should be one booking flow",
  "Just finished building a client portal for an integration therapist",
  "Why most coach websites lose visitors in the first 5 seconds",
  "Simple email sequence every retreat center should have",
  "The real cost of staying on Wix when you're doing $200K+/year",
  "How to automate your intake process without losing the personal touch",
  "I audited a $300K retreat center's website — here's what I found",
  "Your WhatsApp group is not a community platform",
];

interface HistoryItem {
  topic: string;
  contentType: string;
  pillar: string;
  output: string;
  time: string;
}

const FORMAT_INSTRUCTIONS: Record<string, string> = {
  "caption": "Write an Instagram caption (under 300 words). Include suggested hashtags at the end (5-8 relevant ones). Suggest what the image/photo should be in brackets at the top.",
  "carousel": "Create a 7-10 slide Instagram carousel. Format as:\n[SLIDE 1 - HOOK]: Bold headline text for the cover slide\n[SLIDE 2]: Headline + 2-3 lines of body text\n...continue for each slide\n[LAST SLIDE - CTA]: End with a call to action. Also suggest the visual style/color direction.",
  "reel-script": "Write a 30-60 second reel script. Format as:\n[HOOK - first 3 seconds]: What grabs attention\n[BODY]: Talking points in conversational bullet points (not a word-for-word script — keep it natural)\n[CTA]: How to close\nAlso suggest: text overlays, b-roll ideas, and what to show on screen.",
  "story-series": "Create a 4-5 story sequence. For each story:\n[STORY 1]: What's on screen + text overlay + any poll/question sticker\n...continue for each story\nMake it feel casual and in-the-moment, not produced.",
  "ideas-week": "Generate 7 content ideas (one per day, Mon-Sun). For each:\n[DAY] [TYPE: Reel/Carousel/Single/Story]\nHook: The opening line or headline\nAngle: 1-2 sentence description of the content\nCTA: What you want them to do\nKeep it scannable.",
};

export default function ContentStudioApp() {
  const [topic, setTopic] = useState("");
  const [contentType, setContentType] = useState("caption");
  const [pillar, setPillar] = useState("insight");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [showUnlockModal, setShowUnlockModal] = useState(false);
  const [email, setEmail] = useState("");
  const [unlockStatus, setUnlockStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const isMobile = useIsMobile();

  const { canUse, remainingUses, isUnlocked, incrementUsage, unlock } = useFreemium('content-studio', DAILY_LIMIT);

  const generateContent = useCallback(async () => {
    if (!topic.trim()) return;

    if (!canUse) {
      setShowUnlockModal(true);
      return;
    }

    setLoading(true);
    setError("");
    setOutput("");
    setCopied(false);

    const typeLabel = CONTENT_TYPES.find(t => t.id === contentType)?.label || "";
    const pillarLabel = PILLARS.find(p => p.id === pillar)?.label || "";

    const userPrompt = `Content type: ${typeLabel}
Content pillar: ${pillarLabel}
Topic/seed: ${topic}

${FORMAT_INSTRUCTIONS[contentType]}`;

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system: BRAND_CONTEXT,
          prompt: userPrompt,
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const text = data.content || "No response generated.";
      setOutput(text);
      setHistory(prev => [{ topic, contentType: typeLabel, pillar: pillarLabel, output: text, time: new Date().toLocaleTimeString() }, ...prev.slice(0, 19)]);
      incrementUsage();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }, [topic, contentType, pillar, canUse, incrementUsage]);

  const handleUnlock = async () => {
    if (!email || !email.includes('@')) return;
    setUnlockStatus('sending');

    const success = await unlock(email);
    if (success) {
      setUnlockStatus('success');
      setTimeout(() => {
        setShowUnlockModal(false);
        setUnlockStatus('idle');
      }, 1500);
    } else {
      setUnlockStatus('error');
      setTimeout(() => setUnlockStatus('idle'), 3000);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const useExample = (prompt: string) => {
    setTopic(prompt);
  };

  return (
    <div
      className="min-h-screen bg-dark-bg text-content-primary"
      data-tool="content-studio"
      style={{ fontFamily: "'DM Sans', -apple-system, sans-serif" }}
    >
      {/* Header */}
      <div className="border-b border-border px-4 md:px-6 py-4 flex justify-between items-center gap-3 flex-wrap">
        <div className="flex items-center gap-4">
          <Link
            to="/tools/content-studio"
            className="text-content-muted hover:text-content-secondary transition-colors text-sm"
          >
            ← Back
          </Link>
          <div>
            <div className="font-serif text-lg md:text-xl font-light tracking-wide">
              Content <span className="italic text-gold">Studio</span>
            </div>
            <div className="text-xs text-content-muted tracking-widest uppercase">
              {isUnlocked ? 'Unlimited Access' : `${remainingUses} generations left today`}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowHistory(!showHistory)}
            className={`px-4 py-2 rounded-full text-xs tracking-wide border transition-colors ${
              showHistory
                ? 'bg-gold/15 border-gold/30 text-gold'
                : 'border-border text-content-muted hover:border-border-hover'
            }`}
          >
            {showHistory ? '✕ Close' : `History (${history.length})`}
          </button>
          <AstralBranding variant="compact" />
        </div>
      </div>

      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} max-w-6xl mx-auto min-h-[calc(100vh-70px)]`}>
        {/* Main Panel */}
        <div className={`flex-1 p-5 md:p-8 ${showHistory && !isMobile ? 'max-w-[750px]' : ''}`}>
          {/* Content Type Selector */}
          <div className="mb-7">
            <label className="text-xs tracking-widest uppercase text-gold block mb-3">
              Content Type
            </label>
            <div className="flex gap-2 flex-wrap">
              {CONTENT_TYPES.map(type => (
                <button
                  key={type.id}
                  onClick={() => setContentType(type.id)}
                  className={`px-4 py-2.5 rounded-lg text-sm flex items-center gap-2 transition-all border ${
                    contentType === type.id
                      ? 'bg-gold/15 border-gold text-content-primary'
                      : 'bg-dark-card border-border text-content-secondary hover:border-border-hover'
                  }`}
                >
                  <span>{type.icon}</span>
                  <span>{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Pillar Selector */}
          <div className="mb-7">
            <label className="text-xs tracking-widest uppercase text-gold block mb-3">
              Content Pillar
            </label>
            <div className="flex gap-2 flex-wrap">
              {PILLARS.map(p => (
                <button
                  key={p.id}
                  onClick={() => setPillar(p.id)}
                  className={`px-4 py-2.5 rounded-lg text-sm transition-all border ${
                    pillar === p.id
                      ? 'text-content-primary'
                      : 'bg-dark-card border-border text-content-secondary hover:border-border-hover'
                  }`}
                  style={pillar === p.id ? {
                    background: `${p.color}20`,
                    borderColor: p.color,
                  } : {}}
                >
                  <span
                    className="w-2 h-2 rounded-full inline-block mr-2"
                    style={{ background: p.color }}
                  />
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Topic Input */}
          <div className="mb-4">
            <label className="text-xs tracking-widest uppercase text-gold block mb-3">
              Topic / Seed Idea
            </label>
            <textarea
              value={topic}
              onChange={e => setTopic(e.target.value)}
              placeholder="Describe what you want to post about... a pain point you noticed, something you just built, a tip you want to share..."
              rows={3}
              className="w-full bg-dark-card border border-border rounded-xl text-content-primary p-4 text-sm focus:border-gold focus:outline-none transition-colors resize-y"
            />
          </div>

          {/* Example Prompts */}
          <div className="mb-7">
            <div className="text-xs text-content-muted mb-2">Try one:</div>
            <div className="flex gap-1.5 flex-wrap">
              {EXAMPLE_PROMPTS.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => useExample(prompt)}
                  className="border border-border text-content-muted px-3 py-1.5 rounded-full text-xs hover:border-border-hover hover:text-content-secondary transition-colors"
                >
                  {prompt.length > 50 ? prompt.slice(0, 50) + "..." : prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={generateContent}
            disabled={loading || !topic.trim()}
            className="w-full py-4 rounded-xl text-white font-medium text-base tracking-wide transition-all disabled:opacity-40"
            style={{
              background: loading ? '#9A8B4E' : tool.theme.primary,
              boxShadow: topic.trim() ? `0 0 40px ${tool.theme.primaryGlow}` : 'none',
            }}
          >
            {loading ? 'Generating...' : `Generate Content ✦${!isUnlocked && remainingUses !== undefined ? ` (${remainingUses} left)` : ''}`}
          </button>

          {/* Error */}
          {error && (
            <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-300 text-sm">
              {error}
            </div>
          )}

          {/* Output */}
          {output && (
            <div className="mt-8">
              <div className="flex justify-between items-center mb-4">
                <div className="text-xs tracking-widest uppercase text-gold">
                  Generated Content
                </div>
                <button
                  onClick={copyToClipboard}
                  className={`px-4 py-2 rounded-full text-xs transition-all border ${
                    copied
                      ? 'bg-green-500/15 border-green-500/30 text-green-400'
                      : 'bg-gold/10 border-gold/20 text-content-secondary hover:text-content-primary'
                  }`}
                >
                  {copied ? 'Copied ✓' : 'Copy All'}
                </button>
              </div>
              <div className="bg-dark-card border border-border rounded-2xl p-6 whitespace-pre-wrap text-sm leading-7 text-content-secondary max-h-[600px] overflow-y-auto">
                {output}
              </div>
            </div>
          )}
        </div>

        {/* History Sidebar */}
        {showHistory && (
          <div className={`${isMobile ? 'border-t max-h-[50vh]' : 'w-[350px] border-l'} border-border p-5 md:p-6 overflow-y-auto bg-dark-bg/50`}>
            <div className="text-xs tracking-widest uppercase text-gold mb-4">
              Recent Generations
            </div>
            {history.length === 0 && (
              <div className="text-content-muted text-sm italic">
                Nothing yet. Generate some content to see it here.
              </div>
            )}
            {history.map((item, i) => (
              <div
                key={i}
                onClick={() => { setOutput(item.output); setShowHistory(false); }}
                className="bg-dark-card border border-border rounded-lg p-3.5 mb-2 cursor-pointer hover:border-border-hover transition-colors"
              >
                <div className="text-sm text-content-primary mb-1 font-medium">
                  {item.topic.length > 60 ? item.topic.slice(0, 60) + "..." : item.topic}
                </div>
                <div className="text-xs text-content-muted flex gap-2">
                  <span>{item.contentType}</span>
                  <span>·</span>
                  <span>{item.pillar}</span>
                  <span>·</span>
                  <span>{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Unlock Modal */}
      {showUnlockModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-dark-bg/90 backdrop-blur-sm"
            onClick={() => setShowUnlockModal(false)}
          />
          <div className="relative bg-dark-card border border-border rounded-2xl p-8 max-w-md w-full">
            <button
              onClick={() => setShowUnlockModal(false)}
              className="absolute top-4 right-4 text-content-muted hover:text-content-primary transition-colors"
            >
              ✕
            </button>

            <div
              className="w-20 h-20 rounded-xl flex items-center justify-center text-4xl mx-auto mb-6"
              style={{
                background: tool.theme.primaryGlow,
                boxShadow: `0 0 40px ${tool.theme.primaryGlow}`,
              }}
            >
              {tool.icon}
            </div>

            <h2 className="font-serif text-2xl text-content-primary text-center mb-2">
              Unlock Unlimited
            </h2>
            <p className="text-sm text-content-secondary text-center mb-6">
              You've used all {DAILY_LIMIT} free generations today.
              Enter your email for unlimited access.
            </p>

            <div className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your best email"
                className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-border focus:border-gold focus:outline-none text-content-primary placeholder:text-content-muted transition-colors"
              />

              <button
                onClick={handleUnlock}
                disabled={unlockStatus === 'sending' || unlockStatus === 'success'}
                className="w-full px-6 py-3 rounded-full text-white font-medium transition-all disabled:opacity-50"
                style={{
                  background:
                    unlockStatus === 'success'
                      ? '#2A9D6A'
                      : unlockStatus === 'error'
                      ? '#E53E3E'
                      : tool.theme.primary,
                }}
              >
                {unlockStatus === 'success'
                  ? 'Unlocked! ✓'
                  : unlockStatus === 'sending'
                  ? 'Unlocking...'
                  : unlockStatus === 'error'
                  ? 'Try again'
                  : 'Unlock Free'}
              </button>
            </div>

            <p className="text-xs text-content-muted text-center mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
