import { useNavigate, useLocation, Link } from 'react-router-dom';
import { footerConfig } from '@/config';
import { Instagram, ExternalLink, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (location.pathname !== '/') {
        navigate('/' + href);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <footer className="relative bg-obsidian border-t border-muted-border pt-20 pb-32 lg:pb-24 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="w-full px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 max-w-7xl mx-auto mb-20">
          {/* Column 1 - Logo & Info */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <Link
                to="/"
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="group block"
              >
                <span className="font-condensed text-3xl font-bold tracking-[0.2em] text-white-primary block mb-1 group-hover:text-gold transition-colors">
                  {footerConfig.logo}
                </span>
                <span className="font-condensed text-label-xs uppercase text-gold tracking-[0.3em]">
                  {footerConfig.subLogo}
                </span>
              </Link>
            </div>
            <p className="font-body text-body-sm text-silver leading-relaxed mb-8 max-w-[300px]">
              {footerConfig.description}
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-silver">
                <span className="w-8 h-px bg-gold/50" />
                <p className="font-body text-body-sm uppercase tracking-widest text-ash">
                  {footerConfig.location}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={footerConfig.websiteHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-body-sm text-gold hover:text-gold-light transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="border-b border-gold/30 group-hover:border-gold-light transition-colors pb-0.5">
                    {footerConfig.website}
                  </span>
                  <ExternalLink size={14} className="opacity-70" />
                </a>
                <a
                  href={footerConfig.bookHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-body-sm text-gold hover:text-gold-light transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="border-b border-gold/30 group-hover:border-gold-light transition-colors pb-0.5">
                    {footerConfig.bookText}
                  </span>
                  <ArrowUpRight size={14} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="font-condensed text-label font-bold uppercase text-white-primary tracking-[0.25em] mb-8 flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              SERVICES
            </h4>
            <ul className="grid grid-cols-1 gap-y-4">
              {footerConfig.services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    onClick={(e) => handleNavClick(service.href, e)}
                    className="font-body text-body-xs text-silver hover:text-gold transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h4 className="font-condensed text-label font-bold uppercase text-white-primary tracking-[0.25em] mb-8 flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              COMPANY
            </h4>
            <ul className="space-y-4">
              {footerConfig.company.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-body-xs text-silver hover:text-gold transition-colors inline-flex items-center gap-2 group"
                  >
                    {item.label}
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Follow + Press */}
          <div>
            <h4 className="font-condensed text-label font-bold uppercase text-white-primary tracking-[0.25em] mb-8 flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              FOLLOW + PRESS
            </h4>
            <a
              href={footerConfig.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-silver hover:text-gold transition-all group mb-10"
            >
              <div className="w-10 h-10 rounded-full border border-silver/20 flex items-center justify-center group-hover:border-gold group-hover:text-gold transition-all">
                <Instagram size={20} />
              </div>
              <span className="font-body text-body-sm tracking-wide">{footerConfig.instagram}</span>
            </a>
            <div className="mt-8 pt-8 border-t border-muted-border/50">
              <p className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-ash mb-5">Featured in:</p>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {footerConfig.press.map((pub, index) => (
                  <span
                    key={index}
                    className="font-condensed text-label-xs uppercase text-ash/60 tracking-[0.15em] hover:text-gold transition-colors cursor-default"
                  >
                    {pub}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-muted-border pt-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
            <p className="font-body text-[0.7rem] uppercase tracking-widest text-ash/80 text-center lg:text-left">
              {footerConfig.copyright}
            </p>
            <div className="flex flex-col lg:items-end gap-2">
              <p className="font-body text-[0.65rem] text-ash/60 text-center lg:text-right italic max-w-md leading-relaxed">
                {footerConfig.medicalDisclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
