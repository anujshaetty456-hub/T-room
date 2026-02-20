import { useEffect, useRef } from 'react';
import { problemsConfig } from '@/config';

export function Problems() {
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
        <div className="text-center max-w-[560px] mx-auto mb-16">
          {/* Section Label */}
          <div className="scroll-reveal flex items-center justify-center gap-4 mb-8">
            <div className="w-8 h-px bg-gold" />
            <span className="font-condensed text-label font-medium uppercase text-gold tracking-[0.4em]">
              {problemsConfig.sectionLabel}
            </span>
            <div className="w-8 h-px bg-gold" />
          </div>

          {/* Heading */}
          <h2 className="scroll-reveal font-display text-h1 text-white-primary leading-tight mb-6">
            <span className="block">{problemsConfig.titleLine1}</span>
            <span className="block italic text-gold-light">{problemsConfig.titleHighlight}</span>
          </h2>

          {/* Description */}
          <p className="scroll-reveal font-body text-body text-ash leading-relaxed">
            {problemsConfig.description}
          </p>
        </div>

        {/* Problem Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-muted-border max-w-7xl mx-auto mb-12">
          {problemsConfig.problems.map((problem, index) => (
            <div
              key={index}
              className="scroll-reveal problem-card p-8 text-center min-h-[180px] flex flex-col items-center justify-center"
            >
              <div className="problem-icon text-2xl text-silver mb-4 transition-colors duration-300">
                {problem.icon}
              </div>
              <h3 className="font-condensed text-sm font-semibold uppercase tracking-[0.1em] text-white-primary mb-3">
                {problem.title}
              </h3>
              <p className="font-body text-body-sm text-silver italic leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="scroll-reveal text-center">
          <a
            href={problemsConfig.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-block"
          >
            {problemsConfig.ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}
