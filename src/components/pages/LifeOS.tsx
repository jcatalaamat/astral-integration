import { useState, useEffect, useCallback } from "react";

// Mobile breakpoint hook
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

const CATEGORIES = [
  { id: "inbox", label: "Inbox", icon: "⚡", color: "#c4956a", desc: "Quick capture — dump it here, sort later" },
  { id: "today", label: "Today", icon: "◉", color: "#E8E6F0", desc: "What matters right now" },
  { id: "followup", label: "Follow Up", icon: "↩", color: "#C9A96E", desc: "People, emails, threads to close" },
  { id: "ideas", label: "Ideas", icon: "✦", color: "#4A9EE0", desc: "Things to build, try, explore" },
  { id: "home", label: "Home", icon: "⌂", color: "#2A9D6A", desc: "Life stuff — errands, appointments, admin" },
  { id: "waiting", label: "Waiting On", icon: "◷", color: "#9895A8", desc: "Blocked — someone else's move" },
];

const STORAGE_KEY = "life-os-data";

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function getToday() {
  return new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}

function getGreeting() {
  const h = new Date().getHours();
  if (h < 6) return "Deep night";
  if (h < 12) return "Morning";
  if (h < 17) return "Afternoon";
  if (h < 21) return "Evening";
  return "Night";
}

interface Item {
  id: string;
  text: string;
  category: string;
  done: boolean;
  created: number;
  updated: number;
  note: string;
  priority: boolean;
}

export default function LifeOS() {
  const [items, setItems] = useState<Item[]>([]);
  const [activeCategory, setActiveCategory] = useState("today");
  const [inputValue, setInputValue] = useState("");
  const [inputCategory, setInputCategory] = useState("inbox");
  const [loaded, setLoaded] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");
  const [showCapture, setShowCapture] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const isMobile = useIsMobile();

  // Load data from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setItems(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load data:", e);
    }
    setLoaded(true);
  }, []);

  // Save data to localStorage
  const saveItems = useCallback((newItems: Item[]) => {
    setItems(newItems);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));
    } catch (e) {
      console.error("Save failed:", e);
    }
  }, []);

  const addItem = useCallback(() => {
    if (!inputValue.trim()) return;
    const newItem: Item = {
      id: generateId(),
      text: inputValue.trim(),
      category: inputCategory,
      done: false,
      created: Date.now(),
      updated: Date.now(),
      note: "",
      priority: false,
    };
    const newItems = [newItem, ...items];
    saveItems(newItems);
    setInputValue("");
    setShowCapture(false);
  }, [inputValue, inputCategory, items, saveItems]);

  const toggleDone = useCallback((id: string) => {
    const newItems = items.map(item =>
      item.id === id ? { ...item, done: !item.done, updated: Date.now() } : item
    );
    saveItems(newItems);
  }, [items, saveItems]);

  const togglePriority = useCallback((id: string) => {
    const newItems = items.map(item =>
      item.id === id ? { ...item, priority: !item.priority, updated: Date.now() } : item
    );
    saveItems(newItems);
  }, [items, saveItems]);

  const deleteItem = useCallback((id: string) => {
    saveItems(items.filter(item => item.id !== id));
  }, [items, saveItems]);

  const moveItem = useCallback((id: string, newCategory: string) => {
    const newItems = items.map(item =>
      item.id === id ? { ...item, category: newCategory, updated: Date.now() } : item
    );
    saveItems(newItems);
  }, [items, saveItems]);

  const startEdit = useCallback((item: Item) => {
    setEditingId(item.id);
    setEditValue(item.text);
  }, []);

  const saveEdit = useCallback(() => {
    if (!editValue.trim()) return;
    const newItems = items.map(item =>
      item.id === editingId ? { ...item, text: editValue.trim(), updated: Date.now() } : item
    );
    saveItems(newItems);
    setEditingId(null);
    setEditValue("");
  }, [editingId, editValue, items, saveItems]);

  const clearCompleted = useCallback(() => {
    saveItems(items.filter(item => !item.done || item.category !== activeCategory));
  }, [items, activeCategory, saveItems]);

  const activeItems = items
    .filter(i => i.category === activeCategory)
    .filter(i => showCompleted ? true : !i.done)
    .sort((a, b) => {
      if (a.done !== b.done) return a.done ? 1 : -1;
      if (a.priority !== b.priority) return a.priority ? -1 : 1;
      return b.created - a.created;
    });

  const activeCat = CATEGORIES.find(c => c.id === activeCategory)!;
  const completedCount = items.filter(i => i.category === activeCategory && i.done).length;

  const counts: Record<string, number> = {};
  CATEGORIES.forEach(c => {
    counts[c.id] = items.filter(i => i.category === c.id && !i.done).length;
  });

  if (!loaded) {
    return (
      <div style={{ minHeight: "100vh", background: "#0a0a0f", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ color: "#6B6880", fontSize: "13px", letterSpacing: "0.2em" }}>Loading...</div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      color: "#E8E6F0",
      fontFamily: "'DM Sans', -apple-system, sans-serif",
      WebkitFontSmoothing: "antialiased",
      display: "flex",
      flexDirection: "column",
    }}>

      {/* Header */}
      <div style={{
        padding: isMobile ? "16px" : "20px 24px",
        borderBottom: "1px solid rgba(196,149,106,0.08)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "12px",
      }}>
        {/* Mobile menu button */}
        {isMobile && (
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            style={{
              background: "transparent",
              border: "1px solid rgba(196,149,106,0.15)",
              color: "#c4956a",
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              fontSize: "18px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {showSidebar ? "✕" : "☰"}
          </button>
        )}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: "11px", color: "#6B6880", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            {getGreeting()} · {getToday()}
          </div>
          <div style={{ fontSize: isMobile ? "16px" : "20px", fontWeight: 300, marginTop: "4px", letterSpacing: "0.02em" }}>
            What needs your attention?
          </div>
        </div>
        <button
          onClick={() => { setShowCapture(!showCapture); setInputCategory("inbox"); }}
          style={{
            background: showCapture ? "rgba(196,149,106,0.2)" : "#c4956a",
            border: "none",
            color: "white",
            width: "40px",
            height: "40px",
            borderRadius: "12px",
            fontSize: "22px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s",
            transform: showCapture ? "rotate(45deg)" : "none",
            boxShadow: showCapture ? "none" : "0 0 20px rgba(196,149,106,0.2)",
            flexShrink: 0,
          }}
        >
          +
        </button>
      </div>

      {/* Quick Capture */}
      {showCapture && (
        <div style={{
          padding: "16px 24px",
          background: "#0d0d14",
          borderBottom: "1px solid rgba(196,149,106,0.12)",
        }}>
          <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
            <input
              autoFocus
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter") addItem(); if (e.key === "Escape") setShowCapture(false); }}
              placeholder="What's on your mind?"
              style={{
                flex: 1,
                background: "#111118",
                border: "1px solid rgba(196,149,106,0.15)",
                borderRadius: "10px",
                color: "#E8E6F0",
                padding: "12px 16px",
                fontSize: "14px",
                fontFamily: "inherit",
                outline: "none",
              }}
            />
            <button
              onClick={addItem}
              disabled={!inputValue.trim()}
              style={{
                background: inputValue.trim() ? "#c4956a" : "#1a1a24",
                border: "none",
                color: "white",
                padding: "12px 20px",
                borderRadius: "10px",
                fontSize: "13px",
                cursor: inputValue.trim() ? "pointer" : "default",
                fontFamily: "inherit",
                fontWeight: 500,
                opacity: inputValue.trim() ? 1 : 0.4,
                transition: "all 0.2s",
              }}
            >
              Add
            </button>
          </div>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setInputCategory(cat.id)}
                style={{
                  background: inputCategory === cat.id ? `${cat.color}18` : "transparent",
                  border: `1px solid ${inputCategory === cat.id ? cat.color + "50" : "rgba(196,149,106,0.08)"}`,
                  color: inputCategory === cat.id ? cat.color : "#6B6880",
                  padding: "5px 12px",
                  borderRadius: "100px",
                  fontSize: "11px",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "all 0.15s",
                }}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div style={{ display: "flex", flex: 1, minHeight: 0, position: "relative" }}>

        {/* Mobile Sidebar Overlay */}
        {isMobile && showSidebar && (
          <div
            onClick={() => setShowSidebar(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.5)",
              zIndex: 40,
            }}
          />
        )}

        {/* Sidebar */}
        <div style={{
          width: isMobile ? "280px" : "220px",
          borderRight: "1px solid rgba(196,149,106,0.08)",
          padding: "16px 0",
          display: isMobile && !showSidebar ? "none" : "flex",
          flexDirection: "column",
          gap: "2px",
          flexShrink: 0,
          overflowY: "auto",
          ...(isMobile ? {
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            zIndex: 50,
            background: "#0a0a0f",
            paddingTop: "70px",
          } : {}),
        }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); if (isMobile) setShowSidebar(false); }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 20px",
                background: activeCategory === cat.id ? "rgba(196,149,106,0.06)" : "transparent",
                border: "none",
                borderRight: activeCategory === cat.id ? `2px solid ${cat.color}` : "2px solid transparent",
                color: activeCategory === cat.id ? "#E8E6F0" : "#6B6880",
                cursor: "pointer",
                fontFamily: "inherit",
                fontSize: "13px",
                textAlign: "left",
                width: "100%",
                transition: "all 0.15s",
              }}
            >
              <span style={{ fontSize: "15px", width: "20px", textAlign: "center" }}>{cat.icon}</span>
              <span style={{ flex: 1 }}>{cat.label}</span>
              {counts[cat.id] > 0 && (
                <span style={{
                  fontSize: "11px",
                  background: `${cat.color}20`,
                  color: cat.color,
                  padding: "2px 7px",
                  borderRadius: "100px",
                  fontWeight: 500,
                  minWidth: "20px",
                  textAlign: "center",
                }}>
                  {counts[cat.id]}
                </span>
              )}
            </button>
          ))}

          <div style={{ flex: 1 }} />

          <div style={{ padding: "16px 20px", borderTop: "1px solid rgba(196,149,106,0.06)" }}>
            <div style={{ fontSize: "11px", color: "#4a4860", marginBottom: "4px" }}>Total active</div>
            <div style={{ fontSize: "24px", fontWeight: 300, color: "#c4956a" }}>
              {items.filter(i => !i.done).length}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: isMobile ? "16px" : "24px", overflowY: "auto" }}>

          {/* Category Header */}
          <div style={{ marginBottom: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "20px" }}>{activeCat.icon}</span>
              <h2 style={{ fontSize: isMobile ? "18px" : "20px", fontWeight: 400, margin: 0 }}>{activeCat.label}</h2>
              <span style={{ fontSize: "12px", color: "#6B6880", marginLeft: "4px" }}>
                {activeItems.filter(i => !i.done).length} active
                {completedCount > 0 && ` · ${completedCount} done`}
              </span>
            </div>
            <div style={{ fontSize: "13px", color: "#4a4860", marginLeft: isMobile ? "0" : "30px", marginTop: isMobile ? "8px" : "0" }}>{activeCat.desc}</div>
          </div>

          {/* Controls */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
            <button
              onClick={() => { setShowCapture(true); setInputCategory(activeCategory); }}
              style={{
                background: "#111118",
                border: "1px dashed rgba(196,149,106,0.15)",
                color: "#6B6880",
                padding: "8px 14px",
                borderRadius: "8px",
                fontSize: "12px",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
            >
              + Add to {activeCat.label}
            </button>
            {completedCount > 0 && (
              <>
                <button
                  onClick={() => setShowCompleted(!showCompleted)}
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(196,149,106,0.08)",
                    color: "#6B6880",
                    padding: "8px 14px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  {showCompleted ? "Hide" : "Show"} completed
                </button>
                <button
                  onClick={clearCompleted}
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(220,50,50,0.15)",
                    color: "#8B5A5A",
                    padding: "8px 14px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  Clear done
                </button>
              </>
            )}
          </div>

          {/* Items */}
          {activeItems.length === 0 && (
            <div style={{
              textAlign: "center",
              padding: "60px 20px",
              color: "#4a4860",
            }}>
              <div style={{ fontSize: "32px", marginBottom: "12px", opacity: 0.5 }}>{activeCat.icon}</div>
              <div style={{ fontSize: "14px" }}>Nothing here. Quiet mind.</div>
            </div>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {activeItems.map(item => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  padding: "12px 14px",
                  background: item.done ? "transparent" : (item.priority ? "rgba(201,169,110,0.04)" : "#111118"),
                  border: `1px solid ${item.priority && !item.done ? "rgba(201,169,110,0.15)" : "rgba(196,149,106,0.06)"}`,
                  borderRadius: "10px",
                  opacity: item.done ? 0.4 : 1,
                  transition: "all 0.2s",
                }}
              >
                {/* Checkbox */}
                <button
                  onClick={() => toggleDone(item.id)}
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "6px",
                    border: `1.5px solid ${item.done ? "#2A9D6A" : "rgba(196,149,106,0.25)"}`,
                    background: item.done ? "rgba(42,157,106,0.15)" : "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "11px",
                    color: "#2A9D6A",
                    flexShrink: 0,
                    marginTop: "2px",
                    transition: "all 0.15s",
                  }}
                >
                  {item.done ? "✓" : ""}
                </button>

                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  {editingId === item.id ? (
                    <input
                      autoFocus
                      value={editValue}
                      onChange={e => setEditValue(e.target.value)}
                      onKeyDown={e => { if (e.key === "Enter") saveEdit(); if (e.key === "Escape") setEditingId(null); }}
                      onBlur={saveEdit}
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        borderBottom: "1px solid rgba(196,149,106,0.3)",
                        color: "#E8E6F0",
                        fontSize: "14px",
                        fontFamily: "inherit",
                        outline: "none",
                        padding: "0 0 4px 0",
                      }}
                    />
                  ) : (
                    <div
                      onClick={() => startEdit(item)}
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.5",
                        cursor: "text",
                        textDecoration: item.done ? "line-through" : "none",
                        color: item.done ? "#6B6880" : "#E8E6F0",
                        fontWeight: item.priority ? 450 : 300,
                      }}
                    >
                      {item.text}
                    </div>
                  )}
                  <div style={{ display: "flex", gap: "6px", marginTop: "6px", alignItems: "center" }}>
                    <span style={{ fontSize: "10px", color: "#4a4860" }}>
                      {new Date(item.created).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: "flex", gap: "4px", flexShrink: 0 }}>
                  <button
                    onClick={() => togglePriority(item.id)}
                    title="Priority"
                    style={{
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "13px",
                      padding: "4px",
                      opacity: item.priority ? 1 : 0.3,
                      transition: "opacity 0.15s",
                      color: "#C9A96E",
                    }}
                  >
                    ★
                  </button>

                  {/* Move dropdown */}
                  <select
                    value={item.category}
                    onChange={e => moveItem(item.id, e.target.value)}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#6B6880",
                      fontSize: "11px",
                      cursor: "pointer",
                      fontFamily: "inherit",
                      outline: "none",
                      width: "20px",
                      textAlign: "center",
                      padding: "4px",
                    }}
                    title="Move to..."
                  >
                    {CATEGORIES.map(c => (
                      <option key={c.id} value={c.id}>{c.icon} {c.label}</option>
                    ))}
                  </select>

                  <button
                    onClick={() => deleteItem(item.id)}
                    title="Delete"
                    style={{
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "12px",
                      padding: "4px",
                      opacity: 0.25,
                      transition: "opacity 0.15s",
                      color: "#E8E6F0",
                    }}
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
