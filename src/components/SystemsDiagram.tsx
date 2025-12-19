/**
 * Systems Diagram — Signature visual for Astral Integration
 *
 * Represents the living systems philosophy:
 * - People at the center
 * - Surrounded by Roles & Decisions
 * - Contained by Structure & Tools
 *
 * Design: Monochrome, structural, no decoration
 */

export default function SystemsDiagram({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Living systems diagram showing the relationship between people, decisions, and structure"
    >
      {/* Outer container — Structure & Tools */}
      <rect
        x="40"
        y="40"
        width="320"
        height="220"
        rx="4"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
      />

      {/* Middle layer — Roles & Decisions */}
      <rect
        x="80"
        y="70"
        width="240"
        height="160"
        rx="2"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />

      {/* Inner core — People */}
      <circle
        cx="200"
        cy="150"
        r="50"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.8"
      />

      {/* Connection lines — showing flow */}
      {/* Top */}
      <line x1="200" y1="100" x2="200" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="200" y1="70" x2="200" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.2" />

      {/* Bottom */}
      <line x1="200" y1="200" x2="200" y2="230" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="200" y1="230" x2="200" y2="260" stroke="currentColor" strokeWidth="1" opacity="0.2" />

      {/* Left */}
      <line x1="150" y1="150" x2="80" y2="150" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="80" y1="150" x2="40" y2="150" stroke="currentColor" strokeWidth="1" opacity="0.2" />

      {/* Right */}
      <line x1="250" y1="150" x2="320" y2="150" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="320" y1="150" x2="360" y2="150" stroke="currentColor" strokeWidth="1" opacity="0.2" />

      {/* Labels — minimal, structural */}
      <text
        x="200"
        y="154"
        textAnchor="middle"
        className="text-[11px] fill-current opacity-70"
        fontFamily="system-ui, sans-serif"
      >
        People
      </text>

      <text
        x="200"
        y="248"
        textAnchor="middle"
        className="text-[9px] fill-current opacity-50"
        fontFamily="system-ui, sans-serif"
      >
        Roles & Decisions
      </text>

      <text
        x="200"
        y="280"
        textAnchor="middle"
        className="text-[9px] fill-current opacity-30"
        fontFamily="system-ui, sans-serif"
      >
        Structure & Tools
      </text>
    </svg>
  );
}
