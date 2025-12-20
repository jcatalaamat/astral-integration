export default function LinksHero() {
  return (
    <div className="pt-24 pb-12 px-4">
      <div className="max-w-lg mx-auto text-center">
        {/* Profile Photo */}
        <div className="mb-5">
          <div className="w-16 h-16 mx-auto rounded-full border border-[#1A1A1A]/10 overflow-hidden bg-[#F5F3EF]">
            <img
              src="/jordi-profile.jpg"
              alt="Jordi Amat"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name + Role */}
        <p className="text-sm text-[#1A1A1A] font-medium mb-1">
          Jordi Amat
        </p>
        <p className="text-xs text-[#1A1A1A]/50">
          Systems Architect · Founder of Astral Integration
        </p>
      </div>
    </div>
  );
}
