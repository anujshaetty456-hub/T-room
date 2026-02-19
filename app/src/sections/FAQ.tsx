import { useState, useEffect, useRef } from 'react';
import { faqConfig } from '@/config';
import { Plus } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
      id="faq"
      ref={sectionRef}
      className="relative py-28 lg:py-36 bg-graphite"
    >
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-[900px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            {/* Section Label */}
            <div className="scroll-reveal flex items-center justify-center gap-4 mb-8">
              <div className="w-8 h-px bg-gold" />
              <span className="font-condensed text-label font-medium uppercase text-gold tracking-[0.4em]">
                {faqConfig.sectionLabel}
              </span>
              <div className="w-8 h-px bg-gold" />
            </div>

            {/* Heading */}
            <h2 className="scroll-reveal font-display text-h1 text-white-primary leading-tight">
              <span className="block">{faqConfig.titleLine1}</span>
              <span className="block italic text-gold-light">{faqConfig.titleHighlight}</span>
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-0">
            {faqConfig.faqs.map((faq, index) => (
              <div
                key={index}
                className={`scroll-reveal faq-item ${openIndex === index ? 'open' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  <Plus 
                    className="faq-icon flex-shrink-0 ml-4" 
                    size={24}
                  />
                </button>
                <div className="faq-answer">
                  <p className="font-body text-body text-ash leading-relaxed pr-12">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
