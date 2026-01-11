import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  href,
  to,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled = false,
  className = ''
}: ButtonProps) {
  const baseClasses = 'inline-block px-10 py-4 text-body font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-content-primary text-studio-bg hover:bg-content-primary/90 active:bg-content-primary/80 focus:ring-content-primary',
    secondary: 'border-2 border-content-primary text-content-primary hover:bg-content-primary hover:text-studio-bg focus:ring-content-primary'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
