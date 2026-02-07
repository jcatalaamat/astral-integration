export default function Footer() {
  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="border-t border-border bg-dark-bg">
      <div className="max-w-content mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-serif text-xl font-light tracking-wide text-content-muted"
          >
            Astral <em className="italic text-accent/60">Integration</em>
          </a>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-body-sm uppercase tracking-wider text-content-muted hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-body-sm text-content-muted">
            © 2026 Astral Integration. The tech behind transformation.
          </p>
        </div>
      </div>
    </footer>
  );
}
