import { Link } from 'react-router-dom';

interface AstralBrandingProps {
  variant?: 'default' | 'compact';
}

export default function AstralBranding({ variant = 'default' }: AstralBrandingProps) {
  if (variant === 'compact') {
    return (
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-body-sm text-content-muted hover:text-content-secondary transition-colors"
      >
        <span className="text-accent">✦</span>
        <span>Astral Integration</span>
      </Link>
    );
  }

  return (
    <Link
      to="/"
      className="group inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border hover:border-border-hover transition-all"
    >
      <span className="text-accent group-hover:scale-110 transition-transform">✦</span>
      <span className="text-body-sm text-content-secondary group-hover:text-content-primary transition-colors">
        Built by <span className="font-serif italic">Astral Integration</span>
      </span>
    </Link>
  );
}
