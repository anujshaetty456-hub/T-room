import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navigationConfig } from '@/config';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        // If not on home page, navigate home with hash
        navigate('/' + href);
      } else {
        // If on home page, scroll to section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  // Handle scrolling when arriving at home page with a hash
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Add a small timeout to ensure the DOM is ready
        const timeoutId = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    }
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled
            ? 'bg-obsidian/97 border-b border-muted-border'
            : 'bg-gradient-to-b from-obsidian/95 to-transparent'
          }`}
        style={{ backdropFilter: isScrolled ? 'blur(8px)' : 'blur(4px)' }}
      >
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="/"
              className="flex flex-col"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname !== '/') {
                  navigate('/');
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <span className="font-condensed text-2xl font-bold tracking-[0.25em] text-white-primary">
                {navigationConfig.logo}
              </span>
              <span className="font-body text-[0.6rem] tracking-[0.35em] text-gold mt-0.5">
                {navigationConfig.subLogo}
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navigationConfig.items.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="font-condensed text-label font-medium uppercase text-ash hover:text-white-primary transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href={navigationConfig.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-block"
              >
                {navigationConfig.ctaText}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white-primary p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-obsidian/98 border-b border-muted-border transition-all duration-300 ${isMobileMenuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
        >
          <div className="px-6 py-8 space-y-6">
            {navigationConfig.items.map((item, index) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="block font-condensed text-lg uppercase text-ash hover:text-white-primary transition-colors duration-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </button>
            ))}
            <a
              href={navigationConfig.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-block mt-4"
            >
              {navigationConfig.ctaText}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
