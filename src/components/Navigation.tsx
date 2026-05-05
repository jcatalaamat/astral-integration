import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-cream/85 backdrop-blur-lg border-b border-rule">
        <div className="max-w-content mx-auto px-6 md:px-12 h-[72px] flex items-center justify-between gap-8">
          <a href="/" className="serif text-xl text-ink">
            Astral <em className="em-accent">Integration</em>
          </a>
          <ul className="hidden md:flex gap-8 list-none items-center">
            <li><a href="/work" className="text-sm text-ink-2 hover:text-saffron-dp transition-colors font-medium">Work</a></li>
            <li><a href="/how-it-works" className="text-sm text-ink-2 hover:text-saffron-dp transition-colors font-medium">How it works</a></li>
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
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden p-2 -mr-2 text-ink hover:text-saffron-dp transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-cream md:hidden flex flex-col pt-24 px-6">
          <ul className="space-y-2 list-none">
            {[
              { label: 'Work', href: '/work' },
              { label: 'How it works', href: '/how-it-works' },
              { label: 'About', href: '/about' },
              { label: 'Insights', href: '/insights' },
              { label: 'Practitioners', href: '/practitioners' },
              { label: 'Schools', href: '/schools' },
              { label: 'Retreats', href: '/retreats' },
              { label: 'Communities', href: '/communities' },
              { label: 'Makers', href: '/makers' },
              { label: 'Organizations', href: '/organizations' },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 serif text-2xl text-ink hover:text-saffron-dp border-b border-rule"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://calendly.com/astral-integration/free-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-jugat saffron mt-8 justify-center"
          >
            Start an audit →
          </a>
        </div>
      )}
    </>
  );
}
