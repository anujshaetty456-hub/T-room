import { useEffect, useRef } from 'react';
import { heroConfig } from '@/config';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (content) {
      content.style.opacity = '1';
      content.style.transform = 'translateY(0)';
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image - Deadlift Hero */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/hero-deadlift.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Gradient Overlay - Left to Right fade */}
      <div 
        className="absolute inset-0 z-[1]"
        style={{
          background: `
            linear-gradient(90deg, 
              rgba(10,10,11,0.98) 0%, 
              rgba(10,10,11,0.92) 30%, 
              rgba(10,10,11,0.75) 50%, 
              rgba(10,10,11,0.4) 70%, 
              rgba(10,10,11,0.1) 100%
            )
          `
        }}
      />

      {/* Additional dark gradient from bottom */}
      <div 
        className="absolute inset-0 z-[2]"
        style={{
          background: `
            linear-gradient(to top, 
              rgba(10,10,11,0.9) 0%, 
              rgba(10,10,11,0.3) 30%, 
              transparent 50%
            )
          `
        }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-30 z-[3]" />

      {/* Content */}
      <div 
        ref={contentRef}
        className="relative z-10 w-full px-6 lg:px-12 pt-32 pb-20"
        style={{
          opacity: 0,
          transform: 'translateY(30px)',
          transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div className="max-w-[700px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-px bg-gold" />
            <span className="font-condensed text-label font-medium uppercase text-gold tracking-[0.4em]">
              {heroConfig.eyebrow}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-hero text-white-primary leading-[1.05] mb-6">
            <span className="block">{heroConfig.titleLine1}</span>
            <span className="block italic text-gold-light">{heroConfig.titleLine2}</span>
            <span className="block font-semibold">{heroConfig.titleLine3}</span>
          </h1>

          {/* Subtitle */}
          <p className="font-body text-body-lg text-ash max-w-[480px] mb-10 leading-relaxed">
            {heroConfig.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href={heroConfig.primaryCtaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              {heroConfig.primaryCta}
            </a>
            <a
              href={heroConfig.secondaryCtaHref}
              className="btn-ghost"
            >
              {heroConfig.secondaryCta}
            </a>
          </div>
        </div>

        {/* Circular Badge - Desktop Only */}
        <div className="hidden lg:block absolute right-24 top-1/2 -translate-y-1/2 z-20">
          <div 
            className="w-[140px] h-[140px] rounded-full border border-gold/30 flex flex-col items-center justify-center p-4 text-center bg-obsidian/80 backdrop-blur-sm"
          >
            <span className="font-display text-sm italic text-white-primary leading-tight">
              {heroConfig.badgeText}
            </span>
            <span className="font-condensed text-label-sm uppercase text-silver mt-2 tracking-[0.2em]">
              {heroConfig.badgeSubtext}
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-6 lg:left-12 flex flex-col items-center gap-3 z-20">
        <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent animate-line-pulse" />
        <span className="font-condensed text-label-sm uppercase text-silver tracking-[0.3em]">
          {heroConfig.scrollText}
        </span>
      </div>
    </section>
  );
}
