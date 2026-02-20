import { useEffect, useRef } from 'react';
import { bookingConfig } from '@/config';
import { Phone } from 'lucide-react';

export function Booking() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el, index) => {
      (el as HTMLElement).style.transitionDelay = `${index * 0.07}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, #0a0a0b 0%, #0c1415 100%)
        `
      }}
    >
      {/* Radial Glows */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 80% at 80% 50%, rgba(26,107,107,0.10) 0%, transparent 60%),
            radial-gradient(ellipse 40% 60% at 20% 50%, rgba(184,146,42,0.05) 0%, transparent 50%)
          `
        }}
      />

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="max-w-[1000px] mx-auto text-center">
          {/* Section Label */}
          <div className="scroll-reveal flex items-center justify-center gap-4 mb-8">
            <div className="w-8 h-px bg-gold" />
            <span className="font-condensed text-label font-medium uppercase text-gold tracking-[0.4em]">
              {bookingConfig.sectionLabel}
            </span>
            <div className="w-8 h-px bg-gold" />
          </div>

          {/* Heading */}
          <h2 className="scroll-reveal font-display text-h1 text-white-primary leading-tight mb-8">
            <span className="block">{bookingConfig.titleLine1}</span>
            <span className="block italic text-gold-light">{bookingConfig.titleHighlight}</span>
          </h2>

          {/* Subtitle */}
          <p className="scroll-reveal font-body text-body-lg text-ash leading-relaxed mb-12 max-w-[600px] mx-auto">
            {bookingConfig.subtitle}
          </p>

          {/* CTAs */}
          <div className="scroll-reveal flex flex-wrap justify-center gap-4 mb-16">
            <a
              href={bookingConfig.primaryCtaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              {bookingConfig.primaryCta}
            </a>
            <a
              href={bookingConfig.secondaryCtaHref}
              className="btn-ghost inline-flex items-center gap-2"
            >
              <Phone size={16} />
              {bookingConfig.secondaryCta}
            </a>
          </div>

          {/* Options Grid */}
          <div className="scroll-reveal grid grid-cols-1 sm:grid-cols-3 gap-px bg-muted-border max-w-[700px] mx-auto">
            {bookingConfig.options.map((option, index) => (
              <div
                key={index}
                className="bg-charcoal p-8 hover:bg-graphite transition-colors duration-300"
              >
                <div className="text-3xl mb-4">{option.icon}</div>
                <h3 className="font-condensed text-sm font-semibold uppercase text-white-primary mb-2">
                  {option.title}
                </h3>
                <p className="font-body text-body-sm text-silver leading-relaxed">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
