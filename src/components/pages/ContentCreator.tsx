import { useState, useCallback, useEffect } from "react";

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
  { id: "audit", label: "Audit Breakdown", color: "#7B68EE" },
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

export default function ContentCreator() {
  const [topic, setTopic] = useState("");
  const [contentType, setContentType] = useState("caption");
  const [pillar, setPillar] = useState("insight");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const isMobile = useIsMobile();

  const generateContent = useCallback(async () => {
    if (!topic.trim()) return;
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
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }, [topic, contentType, pillar]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const useExample = (prompt: string) => {
    setTopic(prompt);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      color: "#E8E6F0",
      fontFamily: "'DM Sans', -apple-system, sans-serif",
      WebkitFontSmoothing: "antialiased",
    }}>
      {/* Header */}
      <div style={{
        borderBottom: "1px solid rgba(123,104,238,0.12)",
        padding: isMobile ? "16px" : "20px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "12px",
        flexWrap: "wrap",
      }}>
        <div style={{ flex: 1, minWidth: isMobile ? "100%" : "auto" }}>
          <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: isMobile ? "18px" : "22px", fontWeight: 300, letterSpacing: "0.1em" }}>
            Astral <span style={{ fontStyle: "italic", color: "#7B68EE" }}>Content Studio</span>
          </div>
          <div style={{ fontSize: "11px", color: "#6B6880", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "4px" }}>
            AI-Powered Content for Soul-Led Businesses
          </div>
        </div>
        <button
          onClick={() => setShowHistory(!showHistory)}
          style={{
            background: showHistory ? "rgba(123,104,238,0.15)" : "transparent",
            border: "1px solid rgba(123,104,238,0.2)",
            color: "#9895A8",
            padding: "8px 16px",
            borderRadius: "100px",
            fontSize: "12px",
            cursor: "pointer",
            letterSpacing: "0.1em",
          }}
        >
          {showHistory ? "✕ Close" : `History (${history.length})`}
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", maxWidth: "1200px", margin: "0 auto", minHeight: "calc(100vh - 70px)" }}>
        {/* Main Panel */}
        <div style={{ flex: 1, padding: isMobile ? "20px 16px" : "32px 24px", maxWidth: showHistory && !isMobile ? "750px" : "100%" }}>

          {/* Content Type Selector */}
          <div style={{ marginBottom: "28px" }}>
            <label style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#7B68EE", display: "block", marginBottom: "12px" }}>
              Content Type
            </label>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {CONTENT_TYPES.map(type => (
                <button
                  key={type.id}
                  onClick={() => setContentType(type.id)}
                  style={{
                    background: contentType === type.id ? "rgba(123,104,238,0.15)" : "#111118",
                    border: `1px solid ${contentType === type.id ? "#7B68EE" : "rgba(123,104,238,0.12)"}`,
                    color: contentType === type.id ? "#E8E6F0" : "#9895A8",
                    padding: "10px 16px",
                    borderRadius: "10px",
                    fontSize: "13px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "all 0.2s",
                  }}
                >
                  <span>{type.icon}</span>
                  <span>{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Pillar Selector */}
          <div style={{ marginBottom: "28px" }}>
            <label style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#7B68EE", display: "block", marginBottom: "12px" }}>
              Content Pillar
            </label>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {PILLARS.map(p => (
                <button
                  key={p.id}
                  onClick={() => setPillar(p.id)}
                  style={{
                    background: pillar === p.id ? `${p.color}20` : "#111118",
                    border: `1px solid ${pillar === p.id ? p.color : "rgba(123,104,238,0.12)"}`,
                    color: pillar === p.id ? "#E8E6F0" : "#9895A8",
                    padding: "10px 16px",
                    borderRadius: "10px",
                    fontSize: "13px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: p.color, display: "inline-block", marginRight: "8px" }}></span>
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Topic Input */}
          <div style={{ marginBottom: "16px" }}>
            <label style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#7B68EE", display: "block", marginBottom: "12px" }}>
              Topic / Seed Idea
            </label>
            <div style={{ position: "relative" }}>
              <textarea
                value={topic}
                onChange={e => setTopic(e.target.value)}
                placeholder="Describe what you want to post about... a pain point you noticed, something you just built, a tip you want to share..."
                rows={3}
                style={{
                  width: "100%",
                  background: "#111118",
                  border: "1px solid rgba(123,104,238,0.12)",
                  borderRadius: "12px",
                  color: "#E8E6F0",
                  padding: "16px",
                  fontSize: "14px",
                  fontFamily: "inherit",
                  resize: "vertical",
                  outline: "none",
                  lineHeight: "1.6",
                  boxSizing: "border-box",
                }}
                onFocus={e => e.target.style.borderColor = "#7B68EE"}
                onBlur={e => e.target.style.borderColor = "rgba(123,104,238,0.12)"}
              />
            </div>
          </div>

          {/* Example Prompts */}
          <div style={{ marginBottom: "28px" }}>
            <div style={{ fontSize: "11px", color: "#6B6880", marginBottom: "8px" }}>Try one:</div>
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {EXAMPLE_PROMPTS.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => useExample(prompt)}
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(123,104,238,0.08)",
                    color: "#6B6880",
                    padding: "6px 12px",
                    borderRadius: "100px",
                    fontSize: "11px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    whiteSpace: "nowrap",
                  }}
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
            style={{
              width: "100%",
              padding: "16px",
              background: loading ? "#4A3AE0" : "#7B68EE",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontSize: "15px",
              fontWeight: 500,
              cursor: loading || !topic.trim() ? "default" : "pointer",
              opacity: !topic.trim() ? 0.4 : 1,
              transition: "all 0.3s",
              boxShadow: topic.trim() ? "0 0 40px rgba(123,104,238,0.15)" : "none",
              letterSpacing: "0.03em",
              fontFamily: "inherit",
            }}
          >
            {loading ? "Generating..." : "Generate Content ✦"}
          </button>

          {/* Error */}
          {error && (
            <div style={{
              marginTop: "16px",
              padding: "12px 16px",
              background: "rgba(220,50,50,0.1)",
              border: "1px solid rgba(220,50,50,0.2)",
              borderRadius: "10px",
              color: "#E8A0A0",
              fontSize: "13px",
            }}>
              {error}
            </div>
          )}

          {/* Output */}
          {output && (
            <div style={{ marginTop: "32px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#7B68EE" }}>
                  Generated Content
                </div>
                <button
                  onClick={copyToClipboard}
                  style={{
                    background: copied ? "rgba(42,157,106,0.15)" : "rgba(123,104,238,0.1)",
                    border: `1px solid ${copied ? "#2A9D6A" : "rgba(123,104,238,0.2)"}`,
                    color: copied ? "#2A9D6A" : "#9895A8",
                    padding: "8px 16px",
                    borderRadius: "100px",
                    fontSize: "12px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {copied ? "Copied ✓" : "Copy All"}
                </button>
              </div>
              <div style={{
                background: "#111118",
                border: "1px solid rgba(123,104,238,0.12)",
                borderRadius: "14px",
                padding: "24px",
                whiteSpace: "pre-wrap",
                fontSize: "14px",
                lineHeight: "1.75",
                color: "#D0CED8",
                fontWeight: 300,
                maxHeight: "600px",
                overflowY: "auto",
              }}>
                {output}
              </div>
            </div>
          )}
        </div>

        {/* History Sidebar */}
        {showHistory && (
          <div style={{
            width: isMobile ? "100%" : "350px",
            borderLeft: isMobile ? "none" : "1px solid rgba(123,104,238,0.12)",
            borderTop: isMobile ? "1px solid rgba(123,104,238,0.12)" : "none",
            padding: isMobile ? "20px 16px" : "24px",
            overflowY: "auto",
            background: "#08080d",
            maxHeight: isMobile ? "50vh" : "none",
          }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#7B68EE", marginBottom: "16px" }}>
              Recent Generations
            </div>
            {history.length === 0 && (
              <div style={{ color: "#6B6880", fontSize: "13px", fontStyle: "italic" }}>Nothing yet. Generate some content to see it here.</div>
            )}
            {history.map((item, i) => (
              <div
                key={i}
                onClick={() => { setOutput(item.output); setShowHistory(false); }}
                style={{
                  background: "#111118",
                  border: "1px solid rgba(123,104,238,0.08)",
                  borderRadius: "10px",
                  padding: "14px",
                  marginBottom: "8px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                <div style={{ fontSize: "12px", color: "#E8E6F0", marginBottom: "4px", fontWeight: 500 }}>
                  {item.topic.length > 60 ? item.topic.slice(0, 60) + "..." : item.topic}
                </div>
                <div style={{ fontSize: "11px", color: "#6B6880", display: "flex", gap: "8px" }}>
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
    </div>
  );
}
