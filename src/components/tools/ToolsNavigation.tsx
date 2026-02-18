import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronLeft } from 'lucide-react';
import { TOOLS, getToolById } from '../../config/tools';

interface ToolsNavigationProps {
  currentToolId?: string;
  isApp?: boolean;
}

export default function ToolsNavigation({ currentToolId, isApp }: ToolsNavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const currentTool = currentToolId ? getToolById(currentToolId) : undefined;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toolsList = Object.values(TOOLS);

  return (
    <>
      <nav
        role="navigation"
        aria-label="Tools navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-5 ${
          isScrolled || mobileMenuOpen
            ? 'glass border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-content mx-auto flex items-center justify-between">
          {/* Logo / Breadcrumb */}
          <div className="flex items-center gap-3">
            {isApp && currentTool ? (
              <>
                <Link
                  to={currentTool.path}
                  className="flex items-center gap-2 text-content-secondary hover:text-content-primary transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="text-body-sm">Back</span>
                </Link>
                <span className="text-content-muted">/</span>
                <span
                  className="font-serif text-xl font-light"
                  style={{ color: currentTool.theme.primary }}
                >
                  {currentTool.icon} {currentTool.name}
                </span>
              </>
            ) : (
              <Link
                to="/tools"
                className="font-serif text-2xl font-light tracking-wide text-content-primary hover:text-accent transition-colors"
              >
                Astral <em className="italic text-accent">Tools</em>
              </Link>
            )}
          </div>

          {/* Desktop Nav */}
          {!isApp && (
            <div className="hidden md:flex items-center gap-8">
              {toolsList.map((tool) => (
                <Link
                  key={tool.id}
                  to={tool.path}
                  className={`text-nav uppercase transition-colors ${
                    location.pathname === tool.path || location.pathname.startsWith(tool.path)
                      ? 'text-accent'
                      : 'text-content-secondary hover:text-content-primary'
                  }`}
                >
                  {tool.name}
                </Link>
              ))}
              <Link
                to="/"
                className="text-nav uppercase px-5 py-2 border border-border rounded-full text-content-secondary hover:border-border-hover hover:text-content-primary transition-all"
              >
                Agency
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          {!isApp && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden p-2 -mr-2 text-content-secondary hover:text-content-primary transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && !isApp && (
        <>
          <div
            className="fixed inset-0 z-40 bg-dark-bg/80 backdrop-blur-sm md:hidden"
            aria-hidden="true"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div
            className="fixed top-[68px] left-0 right-0 z-50 md:hidden"
            role="menu"
            aria-label="Mobile navigation"
          >
            <div className="bg-dark-card border-b border-border">
              <div className="max-w-content mx-auto px-6 py-4 flex flex-col gap-1">
                {toolsList.map((tool) => (
                  <Link
                    key={tool.id}
                    to={tool.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-4 text-body text-content-primary hover:text-accent transition-colors border-b border-border"
                    role="menuitem"
                  >
                    <span className="mr-2">{tool.icon}</span>
                    {tool.name}
                  </Link>
                ))}
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-4 text-body text-content-secondary hover:text-content-primary transition-colors"
                  role="menuitem"
                >
                  Back to Agency Site
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
