export default function LinksHero() {
  return (
    <div className="pt-28 pb-16 px-6">
      <div className="max-w-[680px] mx-auto text-center">
        {/* Profile Photo */}
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto rounded-full border border-studio-divider overflow-hidden bg-studio-bgAlt">
            <img
              src="/jordi-profile.jpg"
              alt="Jordi Amat"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-[2.5rem] text-content-primary font-medium tracking-tight mb-3">
          Jordi Amat
        </h1>

        {/* Role */}
        <p className="text-body text-content-secondary mb-4">
          Systems Architect · Founder of Astral Integration
        </p>

        {/* One-liner */}
        <p className="text-body-sm text-content-tertiary">
          Systems redesign for founders, creators, and small teams in transition.
        </p>
      </div>
    </div>
  );
}
