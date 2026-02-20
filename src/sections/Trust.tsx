import { useEffect, useRef } from 'react';
import { trustConfig } from '@/config';

export function Trust() {
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
      id="team"
      ref={sectionRef}
      className="relative py-28 lg:py-36 bg-charcoal"
    >
      <div className="w-full px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-[700px] mx-auto mb-16">
          {/* Section Label */}
          <div className="scroll-reveal flex items-center justify-center gap-4 mb-8">
            <div className="w-8 h-px bg-gold" />
            <span className="font-condensed text-label font-medium uppercase text-gold tracking-[0.4em]">
              {trustConfig.sectionLabel}
            </span>
            <div className="w-8 h-px bg-gold" />
          </div>

          {/* Heading */}
          <h2 className="scroll-reveal font-display text-h1 text-white-primary leading-tight">
            <span className="block">{trustConfig.titleLine1}</span>
            <span className="block italic text-gold-light">{trustConfig.titleHighlight}</span>
          </h2>
        </div>

        {/* Doctor-Patient Image */}
        <div className="scroll-reveal max-w-4xl mx-auto mb-16">
          <div className="relative aspect-[16/9] overflow-hidden">
            <img 
              src="/images/uploaded/image(10).png" 
              alt="Doctor consulting with patient - personalized care"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/50 to-transparent" />
          </div>
        </div>
        
        {/* Trust Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-muted-border max-w-6xl mx-auto mb-20">
          {trustConfig.trustItems.map((item, index) => (
            <div
              key={index}
              className="scroll-reveal trust-card p-8 lg:p-10 relative"
            >
              {/* Decorative Number */}
              <span className="absolute top-6 right-6 font-display text-6xl font-light text-gold-dim">
                {item.number}
              </span>

              {/* Icon */}
              <div className="text-2xl mb-6">{item.icon}</div>

              {/* Title */}
              <h3 className="font-condensed text-base font-semibold uppercase tracking-[0.1em] text-white-primary mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-body text-body-sm text-silver leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Doctor Profile */}
        <div className="scroll-reveal max-w-5xl mx-auto">
          <div className="bg-graphite border border-muted-border p-8 lg:p-12">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
              {/* Doctor Image */}
              <div className="relative">
                <div 
                  className="aspect-[3/4] bg-steel flex items-center justify-center overflow-hidden"
                  style={{
                    backgroundImage: `url(${trustConfig.doctorImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLDivElement;
                    target.style.backgroundImage = 'none';
                    target.innerHTML = '<span class="font-display text-6xl text-muted-border">DR. V</span>';
                  }}
                />
              </div>

              {/* Doctor Info */}
              <div className="flex flex-col justify-center">
                <h3 className="font-display text-3xl lg:text-4xl font-light text-white-primary mb-3">
                  {trustConfig.doctorName}
                </h3>
                <span className="font-condensed text-label-sm uppercase text-gold tracking-[0.2em] mb-8 block">
                  {trustConfig.doctorTitle}
                </span>

                <p className="font-body text-body text-ash leading-relaxed mb-8">
                  {trustConfig.doctorBio}
                </p>

                {/* Credentials */}
                <div className="space-y-3">
                  {trustConfig.credentials.map((credential, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-gold mt-1">▸</span>
                      <span className="font-body text-body-sm text-ash">
                        {credential.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
