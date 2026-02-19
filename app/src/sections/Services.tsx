import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { servicesConfig } from '@/config';
import { ArrowRight } from 'lucide-react';

// Map services to their internal page routes
const serviceRoutes: Record<string, string> = {
  'WEIGHT LOSS & BODY SCULPTING': '/services/weight-loss',
  'HAIR RESTORATION': '/services/hair-restoration',
  'SKIN REJUVENATION': '/services/mens-aesthetics',
  'ANTI-AGING TREATMENTS': '/services/biohacking-longevity',
  'TESTOSTERONE & VITALITY': '/services/hormone-metabolic-health',
  'FACIAL CONTOURING': '/services/mens-aesthetics',
  'LASER TREATMENTS': '/services/mens-aesthetics',
  'PEPTIDES & IV NUTRITION': '/services/peptide-therapy'
};

export function Services() {
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
      id="services"
      ref={sectionRef}
      className="relative py-28 lg:py-36 bg-charcoal"
    >
      <div className="w-full px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 max-w-7xl mx-auto">
          <div>
            {/* Section Label */}
            <div className="scroll-reveal flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-gold" />
              <span className="font-condensed text-label font-medium uppercase text-gold tracking-[0.4em]">
                {servicesConfig.sectionLabel}
              </span>
            </div>

            {/* Heading */}
            <h2 className="scroll-reveal font-display text-h1 text-white-primary leading-tight">
              <span className="block">{servicesConfig.titleLine1}</span>
              <span className="block italic text-gold-light">{servicesConfig.titleHighlight}</span>
            </h2>
          </div>

          {/* View All Button */}
          <div className="scroll-reveal mt-8 lg:mt-0">
            <Link
              to="/services/hormone-metabolic-health"
              className="btn-ghost inline-flex items-center gap-2"
            >
              View All Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-muted-border max-w-7xl mx-auto">
          {servicesConfig.services.map((service, index) => {
            const route = serviceRoutes[service.title] || '/services/hormone-metabolic-health';
            return (
              <Link
                key={index}
                to={route}
                className="scroll-reveal service-card p-8 lg:p-10 relative group cursor-pointer block"
              >
                {/* Category Tag */}
                <div className="absolute top-6 right-6">
                  <span className="font-condensed text-label-sm uppercase text-silver border border-muted-border px-2 py-1">
                    {service.category}
                  </span>
                </div>

                {/* Large Number */}
                <div className="font-display text-6xl font-light text-muted-border group-hover:text-gold-dim transition-colors duration-400 mb-6">
                  {service.number}
                </div>

                {/* Service Name */}
                <h3 className="font-condensed text-base font-semibold uppercase tracking-[0.05em] text-white-primary mb-4">
                  {service.title}
                </h3>

                {/* Problem Text */}
                <p className="font-body text-body-sm text-silver leading-relaxed mb-6">
                  {service.problem}
                </p>

                {/* Outcome */}
                <div className="flex items-center gap-2">
                  <span className="text-gold">→</span>
                  <span className="font-condensed text-label-sm uppercase tracking-[0.1em] text-teal">
                    {service.outcome}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
