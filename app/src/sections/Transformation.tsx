import { useEffect, useRef } from 'react';
import { transformationConfig } from '@/config';
import { Star } from 'lucide-react';

export function Transformation() {
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
      className="relative py-28 lg:py-36 bg-obsidian"
    >
      <div className="w-full px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-[700px] mx-auto mb-20">
          {/* Section Label */}
          <div className="scroll-reveal flex items-center justify-center gap-4 mb-8">
            <div className="w-8 h-px bg-gold" />
            <span className="font-condensed text-label font-medium uppercase text-gold tracking-[0.4em]">
              {transformationConfig.sectionLabel}
            </span>
            <div className="w-8 h-px bg-gold" />
          </div>

          {/* Heading */}
          <h2 className="scroll-reveal font-display text-h1 text-white-primary leading-tight">
            <span className="block">{transformationConfig.titleLine1}</span>
            <span className="block italic text-gold-light">{transformationConfig.titleHighlight}</span>
          </h2>
        </div>

        {/* Active Lifestyle Image */}
        <div className="scroll-reveal max-w-4xl mx-auto mb-16">
          <div className="relative aspect-[16/9] overflow-hidden">
            <img 
              src="/images/uploaded/image(2).png" 
              alt="Active man surfing - living life to the fullest"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 to-transparent" />
          </div>
        </div>
        
        {/* Steps Flow */}
        <div className="relative max-w-5xl mx-auto mb-24">
          {/* Connecting Line */}
          <div 
            className="absolute top-[30px] left-0 right-0 h-px hidden lg:block"
            style={{
              background: 'linear-gradient(to right, transparent, var(--muted-border), var(--gold), var(--muted-border), transparent)'
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {transformationConfig.steps.map((step, index) => (
              <div
                key={index}
                className="scroll-reveal text-center relative"
              >
                {/* Step Label */}
                <span className="font-condensed text-label-sm uppercase text-gold tracking-[0.25em] mb-4 block">
                  {step.step}
                </span>

                {/* Circle */}
                <div className="step-circle mx-auto mb-6">
                  <span className="font-display text-2xl font-semibold">
                    {['I', 'II', 'III', 'IV'][index]}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-condensed text-lg font-semibold uppercase text-white-primary mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-body text-body-sm text-silver leading-relaxed max-w-[200px] mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-muted-border max-w-6xl mx-auto">
          {transformationConfig.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="scroll-reveal testimonial-card p-8 lg:p-10"
            >
              {/* Quote Mark */}
              <div className="font-display text-5xl text-gold leading-none mb-4">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-body text-body italic text-ash leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div>
                <span className="font-condensed text-label-sm uppercase text-gold tracking-[0.2em] block mb-1">
                  {testimonial.author} | {testimonial.role}
                </span>
                <span className="font-body text-body-sm text-silver">
                  {testimonial.treatments}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
