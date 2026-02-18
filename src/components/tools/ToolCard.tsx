import { Link } from 'react-router-dom';
import { Tool } from '../../config/tools';

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      to={tool.path}
      className="group block p-8 rounded-2xl border border-border hover:border-border-hover bg-dark-card hover:bg-dark-cardHover transition-all hover:-translate-y-1"
    >
      {/* Icon with glow */}
      <div
        className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-6 transition-transform group-hover:scale-110"
        style={{
          background: tool.theme.primaryGlow,
          boxShadow: `0 0 30px ${tool.theme.primaryGlow}`,
        }}
      >
        {tool.icon}
      </div>

      {/* Free badge */}
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs uppercase tracking-wider mb-4"
        style={{
          background: tool.theme.primaryGlow,
          color: tool.theme.primary,
        }}
      >
        <span>Free</span>
      </div>

      {/* Name & Tagline */}
      <h3
        className="font-serif text-h3 mb-2 transition-colors"
        style={{ color: tool.theme.primary }}
      >
        {tool.name}
      </h3>
      <p className="text-body-sm text-content-secondary mb-4">
        {tool.tagline}
      </p>

      {/* Brief feature list */}
      <ul className="space-y-2 mb-6">
        {tool.features.free.slice(0, 3).map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-body-sm text-content-muted">
            <span style={{ color: tool.theme.accent }}>✓</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div
        className="inline-flex items-center gap-2 text-body-sm font-medium transition-all group-hover:gap-3"
        style={{ color: tool.theme.primary }}
      >
        Try it free
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </div>
    </Link>
  );
}
