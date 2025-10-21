import { Instagram, Send, MessageCircle, Mail } from 'lucide-react';

export default function LinksHero() {
  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/astralintegration' },
    { name: 'Telegram', icon: Send, url: 'https://t.me/astralintegration' },
    { name: 'WhatsApp', icon: MessageCircle, url: 'https://wa.me/yourphone' },
    { name: 'Email', icon: Mail, url: 'mailto:astralamat@gmail.com' },
  ];

  return (
    <div className="relative min-h-[50vh] flex flex-col">
      {/* Warm gradient hero background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F4DEC9] via-[#FAF0E6] to-[#FAFAF8]">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4A89F 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-8">
        {/* Profile Photo - Smaller */}
        <div className="mb-6 animate-fadeIn">
          <div className="relative">
            <div className="absolute inset-0 bg-[#C9A167]/10 rounded-full blur-2xl" />
            <div className="relative w-24 h-24 rounded-full border border-[#C9A167]/30 overflow-hidden bg-gradient-to-br from-[#EDE8E2] to-[#F5F3EF]">
              <div className="w-full h-full bg-gradient-to-br from-[#D4A89F]/20 to-[#C9A167]/10" />
            </div>
          </div>
        </div>

        {/* Name / Brand - Match bio.site exactly */}
        <h1
          className="text-2xl md:text-3xl font-serif text-[#0A0A0A] mb-4 tracking-wide uppercase text-center animate-fadeIn"
          style={{animationDelay: '0.1s', letterSpacing: '0.1em'}}
        >
          ASTRAL INTEGRATION
        </h1>

        {/* Tagline - Match bio.site multi-line format */}
        <p
          className="text-[9px] md:text-[10px] text-[#1A1A1A]/60 tracking-widest uppercase mb-2 text-center leading-relaxed max-w-3xl animate-fadeIn"
          style={{animationDelay: '0.2s', letterSpacing: '0.12em', lineHeight: '1.8'}}
        >
          SACRED EARTH MEDICINE & SELF-REALIZATION • YOU WERE ALWAYS WHOLE • NOW RECLAIM IT
        </p>

        <p
          className="text-[9px] md:text-[10px] text-[#1A1A1A]/50 tracking-widest uppercase mb-6 text-center leading-relaxed max-w-3xl animate-fadeIn"
          style={{animationDelay: '0.3s', letterSpacing: '0.12em', lineHeight: '1.8'}}
        >
          INTEGRATION COACHING | BUFO ALVARIUS | CEREMONIES | IMMERSIONS • RETREATS • 1:1 SESSIONS
        </p>

        {/* Social Icons - Smaller */}
        <div className="flex items-center gap-3 animate-fadeIn" style={{animationDelay: '0.3s'}}>
          {socialLinks.map(social => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target={social.url.startsWith('mailto:') ? undefined : '_blank'}
                rel={social.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#1A1A1A]/10 hover:border-[#C9A167]/40 hover:bg-[#C9A167]/5 transition-all duration-300 group"
                aria-label={social.name}
              >
                <Icon className="w-4 h-4 text-[#1A1A1A]/60 group-hover:text-[#C9A167] transition-colors" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
