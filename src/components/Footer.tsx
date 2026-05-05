export default function Footer() {
  const whoIHelp = [
    { label: 'Practitioners', href: '/practitioners' },
    { label: 'Schools', href: '/schools' },
    { label: 'Retreats', href: '/retreats' },
    { label: 'Communities', href: '/communities' },
    { label: 'Makers', href: '/makers' },
    { label: 'Organizations', href: '/organizations' },
  ];

  const workLinks = [
    { label: 'Case studies', href: '/work' },
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Built vs bought', href: '/built-vs-bought' },
    { label: 'Insights', href: '/insights' },
  ];

  const companyLinks = [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jcamat/', icon: 'in' },
    { label: 'GitHub', href: 'https://github.com/jcatalaamat', icon: 'gh' },
  ];

  return (
    <footer className="border-t border-rule bg-bg-2">
      <div className="max-w-content mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a
              href="/"
              className="serif text-2xl text-ink"
            >
              Astral <em className="em-accent">Integration</em>
            </a>
            <p className="text-sm text-ink-2 mt-4 max-w-[280px] leading-relaxed">
              I build the platforms that hold real work.
            </p>
            <p className="text-sm text-mute-strong mt-4">
              hello@astralstudio.io
            </p>
          </div>

          {/* Who I Help */}
          <div>
            <p className="mono-tag text-[10px] text-saffron-dp mb-4 tracking-[0.22em]">Who I help</p>
            <div className="flex flex-col gap-3">
              {whoIHelp.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-ink-2 hover:text-saffron-dp transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Work */}
          <div>
            <p className="mono-tag text-[10px] text-saffron-dp mb-4 tracking-[0.22em]">Work</p>
            <div className="flex flex-col gap-3">
              {workLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-ink-2 hover:text-saffron-dp transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="mono-tag text-[10px] text-saffron-dp mb-4 tracking-[0.22em]">Company</p>
            <div className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-ink-2 hover:text-saffron-dp transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="mono-tag text-[10px] text-saffron-dp mb-4 tracking-[0.22em]">Connect</p>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-2 hover:text-saffron-dp transition-colors w-fit inline-flex items-center gap-2"
                >
                  <span className="w-6 h-6 border border-rule flex items-center justify-center text-[0.6rem] font-mono uppercase text-saffron-dp" style={{ borderRadius: '4px' }}>{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-rule flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-mute-strong">
            © {new Date().getFullYear()} Astral Integration · Jordi Amat
          </p>
          <p className="mono-tag text-[10px] text-mute tracking-[0.18em]">
            Built in Mazunte, Oaxaca
          </p>
        </div>
      </div>
    </footer>
  );
}
