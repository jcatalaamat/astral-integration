export default function LinksNewsletter() {
  return (
    <div className="bg-white py-16 border-t border-[#1A1A1A]/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/40 mb-4" style={{letterSpacing: '0.18em'}}>
            Stay Connected
          </h2>

          {/* Description */}
          <p className="text-sm md:text-base text-[#1A1A1A]/60 mb-6 font-light leading-relaxed">
            Receive sacred transmissions & conscious technology insights
          </p>

          <p className="text-xs text-[#1A1A1A]/40 mb-8">
            Sacred transmissions 2x monthly
          </p>

          {/* Newsletter Form */}
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-3 bg-[#F5F3EF] border border-[#1A1A1A]/10 rounded-full text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:border-[#C9A167]/50 focus:bg-white transition-all text-sm"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-[#C9A167] text-white rounded-full font-medium hover:bg-[#B8905C] transition-all text-sm uppercase tracking-wider"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
