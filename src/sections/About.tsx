import { useEffect, useRef } from 'react';
import { aboutConfig } from '@/config';

export function About() {
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
      id="about"
      ref={sectionRef}
      className="relative py-28 lg:py-36 bg-charcoal"
    >
      <div className="w-full px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div>
            {/* Section Label */}
            <div className="scroll-reveal flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-gold" />
              <span className="font-condensed text-label font-medium uppercase text-gold tracking-[0.4em]">
                {aboutConfig.sectionLabel}
              </span>
            </div>

            {/* Heading */}
            <h2 className="scroll-reveal font-display text-h1 text-white-primary leading-tight mb-8">
              <span className="block">{aboutConfig.titleLine1}</span>
              <span className="block">
                <em className="text-gold-light not-italic">{aboutConfig.titleHighlight}</em> {aboutConfig.titleLine2}
              </span>
            </h2>

            {/* Gold Divider */}
            <div className="scroll-reveal gold-divider mb-8" />

            {/* Description */}
            <p className="scroll-reveal font-body text-body text-ash max-w-[560px] mb-12 leading-relaxed">
              {aboutConfig.description}
            </p>

            {/* Features */}
            <div className="space-y-8">
              {aboutConfig.features.map((feature, index) => (
                <div key={index} className="scroll-reveal flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 border border-gold/15 flex items-center justify-center text-gold text-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-condensed text-sm font-semibold uppercase tracking-[0.1em] text-white-primary mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-body text-body-sm text-ash leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image and Stats */}
          <div className="scroll-reveal space-y-8">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img 
                src="/images/uploaded/image(8).png" 
                alt="Fit man running - representing active lifestyle"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
            </div>
            
            <div className="card-brackets p-8 lg:p-10">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-px bg-muted-border mb-8">
                {aboutConfig.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-graphite p-6 lg:p-8 text-center"
                  >
                    <div className="font-display text-4xl lg:text-5xl font-semibold text-gold mb-2">
                      {stat.value}
                    </div>
                    <div className="font-condensed text-label-sm uppercase text-silver tracking-[0.2em]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="border-t border-muted-border pt-8">
                <blockquote className="font-display text-lg italic text-ash mb-4">
                  "{aboutConfig.quote}"
                </blockquote>
                <cite className="font-condensed text-label-sm uppercase text-gold tracking-[0.2em] not-italic">
                  {aboutConfig.quoteAttribution}
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
