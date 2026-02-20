import { useEffect, useRef } from 'react';
import { whyNowConfig } from '@/config';
import { ArrowRight } from 'lucide-react';

export function WhyNow() {
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
      id="why-now"
      ref={sectionRef}
      className="relative py-28 lg:py-36 bg-graphite"
    >
      <div className="w-full px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 max-w-7xl mx-auto">
          {/* Left Column */}
          <div>
            {/* Section Label */}
            <div className="scroll-reveal flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-gold" />
              <span className="font-condensed text-label font-medium uppercase text-gold tracking-[0.4em]">
                {whyNowConfig.sectionLabel}
              </span>
            </div>

            {/* Heading */}
            <h2 className="scroll-reveal font-display text-h1 text-white-primary leading-tight mb-8">
              <span className="block">{whyNowConfig.titleLine1}</span>
              <span className="block">{whyNowConfig.titleLine2}</span>
              <span className="block italic text-gold-light">{whyNowConfig.titleHighlight}</span>
            </h2>

            {/* Description */}
            <p className="scroll-reveal font-body text-body text-ash leading-relaxed mb-12 max-w-[480px]">
              {whyNowConfig.description}
            </p>

            {/* Reasons List */}
            <div className="space-y-0">
              {whyNowConfig.reasons.map((reason, index) => (
                <div
                  key={index}
                  className="scroll-reveal why-reason border-b border-muted-border py-6 cursor-default"
                >
                  <div className="flex gap-6">
                    <span className="reason-number font-display text-4xl font-light text-gold-dim transition-colors duration-300">
                      {reason.number}
                    </span>
                    <div>
                      <h3 className="font-condensed text-base font-semibold uppercase tracking-[0.05em] text-white-primary mb-2">
                        {reason.title}
                      </h3>
                      <p className="font-body text-body-sm text-silver leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Family Image */}
            <div className="scroll-reveal relative aspect-[16/10] overflow-hidden mb-8">
              <img 
                src="/images/uploaded/image(5).png" 
                alt="Family enjoying life together - why health matters"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 to-transparent" />
            </div>
            
            {/* Quote Block */}
            <div className="scroll-reveal bg-steel border-l-[3px] border-gold p-8 lg:p-10 mb-8">
              <blockquote className="font-display text-2xl lg:text-3xl font-light italic text-white-primary leading-snug mb-6">
                "{whyNowConfig.quote}"
              </blockquote>
              <cite className="font-condensed text-label-sm uppercase text-gold tracking-[0.2em] not-italic">
                {whyNowConfig.quoteAttribution}
              </cite>
            </div>

            {/* Stats Grid */}
            <div className="scroll-reveal grid grid-cols-2 gap-px bg-muted-border mb-8">
              {whyNowConfig.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-graphite p-6"
                >
                  <div className="font-display text-4xl font-semibold text-gold mb-2">
                    {stat.value}
                  </div>
                  <div className="font-body text-body-sm text-silver leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Block */}
            <div className="scroll-reveal bg-steel border border-muted-border p-8">
              <p className="font-body text-body text-ash leading-relaxed mb-6">
                {whyNowConfig.ctaBody}
              </p>
              <a
                href={whyNowConfig.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2"
              >
                {whyNowConfig.ctaText}
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
