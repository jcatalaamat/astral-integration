interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: 'default' | 'alt' | 'dark';
}

export default function Section({
  children,
  className = '',
  id,
  variant = 'default'
}: SectionProps) {
  const bgClasses = {
    default: 'bg-studio-bg',
    alt: 'bg-studio-bgAlt',
    dark: 'bg-studio-dark'
  };

  return (
    <section
      id={id}
      className={`py-28 md:py-36 ${bgClasses[variant]} ${className}`}
    >
      {children}
    </section>
  );
}
