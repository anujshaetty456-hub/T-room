import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star, GraduationCap, BarChart3, Trophy, Phone } from 'lucide-react';

const serviceData = {
  meta: {
    title: "Men's Hair Restoration | PRP, Medical Treatments | The TRoom Raleigh NC",
    description: "Regrow thicker, fuller hair with physician‑supervised hair restoration at The TRoom in Raleigh, NC. PRP therapy, medical treatments, and comprehensive hair loss solutions for men under Dr. Bhavna Vaidya, MD."
  },
  hero: {
    eyebrow: "PHYSICIAN‑SUPERVISED HAIR RESTORATION",
    h1: "Get Your Hair Back.",
    subheadline: "Hair loss doesn't have to be permanent. With the right medical approach, you can stop further loss and regrow thicker, fuller hair—naturally.",
    supportText: "At The TRoom, hair restoration is medically supervised by Dr. Bhavna Vaidya, a board‑certified physician with advanced training in regenerative medicine. As the men's health sister brand of Regenesis MD—Raleigh's Top MedSpa 2025—we combine proven medical treatments with cutting‑edge regenerative therapies for optimal results.",
    primaryCta: "Book Your Hair Consultation",
    secondaryCta: "Explore Treatment Options"
  },
  trustBlocks: [
    {
      icon: GraduationCap,
      title: "Board‑Certified MD",
      content: "Not a hair clinic salesperson. Dr. Bhavna Vaidya evaluates your hair loss pattern, medical history, and goals to create a personalized treatment plan."
    },
    {
      icon: BarChart3,
      title: "Proven Medical Treatments",
      content: "We use FDA‑approved medications and clinically proven therapies—not unproven supplements or gimmicks."
    },
    {
      icon: Trophy,
      title: "Sister Brand of Regenesis MD",
      content: "The TRoom is the dedicated men's health division of Regenesis MD, Raleigh's Top MedSpa 2025, known for personalized, results‑driven care."
    }
  ],
  executiveVIP: {
    title: "EXECUTIVE HAIR RESTORATION",
    subtitle: "For Professionals Who Need Discreet, Effective Solutions",
    benefits: [
      "Private consultation and treatment rooms",
      "Flexible scheduling including early morning and evening appointments",
      "Discreet, natural‑looking results",
      "Comprehensive approach addressing all aspects of hair loss",
      "Direct access to your care team"
    ],
    timeline: "Most men notice reduced shedding within 2–3 months, with visible regrowth by month 4–6. Optimal results typically seen at 12 months.",
    cta: "Schedule Executive Consult"
  },
  whatWeTreat: {
    intro: "Men come to The TRoom for hair restoration when they're ready to take action against hair loss—whether it's just starting or well‑established.",
    problems: [
      "Male pattern baldness (androgenetic alopecia)",
      "Receding hairline and temple loss",
      "Thinning crown and vertex",
      "Diffuse thinning across the scalp",
      "Early‑stage hair loss—acting before it's too late"
    ],
    reassurance: "The earlier you start treatment, the better your results. But even with significant loss, we can often help improve density and appearance."
  },
  serviceMenu: [
    { name: "PRP Hair Therapy", anchor: "prp" },
    { name: "Medical Hair Loss Treatments", anchor: "medical" },
    { name: "Low‑Level Laser Therapy", anchor: "laser" },
    { name: "Hair Loss Prevention", anchor: "prevention" },
    { name: "Combination Protocols", anchor: "combination" }
  ],
  prp: {
    title: "PRP Hair Restoration Therapy",
    subtitle: "Harness your body's own healing power to stimulate hair growth naturally.",
    whatIs: "PRP (Platelet‑Rich Plasma) therapy uses concentrated platelets from your own blood, injected into the scalp to stimulate hair follicles, improve blood supply, and promote new hair growth.",
    howItWorks: [
      "Blood draw—small amount of blood taken from your arm",
      "Centrifuge processing—platelets are concentrated and separated",
      "Scalp injection—PRP is injected into areas of thinning",
      "Activation—growth factors stimulate follicle activity",
      "Results—new hair growth over the following months"
    ],
    benefits: [
      "Natural treatment using your own cells",
      "Stimulates dormant hair follicles",
      "Improves hair thickness and density",
      "No surgery, no downtime",
      "Can be combined with other treatments"
    ],
    whatToExpect: [
      "Series of 3–4 treatments spaced 4–6 weeks apart",
      "Maintenance treatments every 4–6 months",
      "Minimal discomfort with topical numbing",
      "Possible mild scalp tenderness for 1–2 days",
      "Results visible in 3–6 months"
    ]
  },
  medical: {
    title: "Medical Hair Loss Treatments",
    subtitle: "FDA‑approved medications that stop hair loss and promote regrowth.",
    treatments: [
      {
        name: "Finasteride (Propecia)",
        description: "Oral medication that blocks DHT, the hormone responsible for male pattern baldness. Proven to stop hair loss and promote regrowth in most men.",
        benefits: "Stops further hair loss in 90%+ of men, promotes regrowth in 65%"
      },
      {
        name: "Minoxidil (Rogaine)",
        description: "Topical solution that increases blood flow to hair follicles and extends the growth phase of the hair cycle.",
        benefits: "Easy to use at home, effective for crown and vertex"
      },
      {
        name: "Ketoconazole Shampoo",
        description: "Medicated shampoo that reduces scalp inflammation and may help block DHT at the scalp level.",
        benefits: "Reduces inflammation, supports overall hair health"
      },
      {
        name: "Oral Minoxidil",
        description: "Low‑dose oral formulation for men who don't respond well to topical minoxidil.",
        benefits: "Systemic effect, convenient daily dosing"
      }
    ]
  },
  laser: {
    title: "Low‑Level Laser Therapy (LLLT)",
    subtitle: "Stimulate hair growth with painless laser technology.",
    whatIs: "Low‑level laser therapy uses red light energy to stimulate hair follicles, increase blood flow, and promote hair growth. It's FDA‑cleared for treating hair loss in men.",
    benefits: [
      "Painless and non‑invasive",
      "Can be done at home with laser cap devices",
      "No known side effects",
      "Complements other treatments",
      "Convenient and time‑efficient"
    ],
    whatToExpect: [
      "In‑office treatments or at‑home laser cap",
      "3–4 sessions per week for optimal results",
      "Each session takes 15–30 minutes",
      "Results visible in 3–6 months",
      "Ongoing use required to maintain results"
    ]
  },
  prevention: {
    title: "Hair Loss Prevention",
    subtitle: "Stop hair loss before it becomes noticeable.",
    whatIs: "For men in the early stages of hair loss or with a family history, preventive treatment can maintain existing hair and delay or prevent future loss.",
    strategies: [
      "Early intervention with finasteride to block DHT",
      "Minoxidil to maintain follicle health",
      "PRP therapy to stimulate and maintain follicles",
      "Lifestyle and nutritional optimization",
      "Regular monitoring and early adjustment of protocols"
    ]
  },
  combination: {
    title: "Combination Treatment Protocols",
    subtitle: "The most effective approach combines multiple therapies for synergistic results.",
    whatIs: "Research shows that combining treatments—such as finasteride, minoxidil, PRP, and laser therapy—produces better results than any single treatment alone.",
    protocols: [
      {
        name: "Foundation Protocol",
        components: "Finasteride + Minoxidil + Ketoconazole shampoo",
        bestFor: "Early to moderate hair loss, maintenance"
      },
      {
        name: "Advanced Protocol",
        components: "Foundation + PRP therapy",
        bestFor: "Moderate hair loss, seeking regrowth"
      },
      {
        name: "Maximum Protocol",
        components: "Advanced + Laser therapy + Nutritional optimization",
        bestFor: "Significant hair loss, maximum results"
      }
    ]
  },
  pricing: {
    title: "Hair Restoration Pricing",
    description: "Pricing varies based on the specific treatments and protocols. During your consultation, we'll create a personalized plan and quote.",
    tiers: [
      {
        name: "PRP Hair Therapy",
        price: "From $699/session",
        features: [
          "Physician‑supervised treatment",
          "Blood draw and PRP preparation",
          "Scalp injections",
          "Package pricing available"
        ]
      },
      {
        name: "Medical Treatment Plan",
        price: "From $99/month",
        features: [
          "Prescription medications",
          "Monthly monitoring",
          "Protocol adjustments",
          "Ongoing support"
        ]
      },
      {
        name: "Comprehensive Protocol",
        price: "Custom Quote",
        features: [
          "Combination of all treatments",
          "Personalized protocol",
          "Priority scheduling",
          "Maximum results approach"
        ]
      }
    ]
  },
  faqs: [
    {
      question: "How long before I see results?",
      answer: "Most men notice reduced shedding within 2–3 months. Visible regrowth typically begins at 4–6 months, with optimal results at 12 months. Hair grows slowly—patience and consistency are key."
    },
    {
      question: "Will I lose hair if I stop treatment?",
      answer: "Yes, hair loss will typically resume if you stop treatment. The medications and therapies maintain your results—ongoing treatment is necessary to preserve gains."
    },
    {
      question: "Are there side effects?",
      answer: "Finasteride can have sexual side effects in a small percentage of men (less than 2%). Minoxidil may cause scalp irritation. We'll discuss all potential side effects during your consultation."
    },
    {
      question: "Is PRP painful?",
      answer: "PRP involves scalp injections, which can be uncomfortable. We use topical numbing to minimize discomfort. Most men tolerate it well, with mild tenderness for a day or two after."
    },
    {
      question: "Can I combine treatments?",
      answer: "Absolutely. In fact, combining treatments typically produces better results than any single treatment alone. We'll design an integrated protocol based on your goals."
    },
    {
      question: "What if I'm already bald?",
      answer: "PRP and medical treatments work best when there are still some follicles present. If you have significant bald areas with no visible hair, we can discuss whether you're a candidate or if other options might be more appropriate."
    }
  ],
  cta: {
    title: "Ready to Address Your Hair Loss?",
    description: "Book your consultation with Dr. Vaidya to discuss which hair restoration approach is right for your situation and goals.",
    primaryCta: "Book Your Consultation",
    secondaryCta: "Call (919) 555‑1234"
  }
};

export default function HairRestoration() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-[#0a0a0b]">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0b] via-[#0f0f10] to-[#0a0a0b]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#b59766]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#b59766]/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16 xl:px-24 py-24">
          <div className="max-w-4xl">
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
              <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">
                {serviceData.hero.eyebrow}
              </span>
            </div>
            
            <h1 className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-[#e8e6e3] mt-6 leading-[0.95] tracking-tight">
              {serviceData.hero.h1}
            </h1>
            
            <p className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 text-xl sm:text-2xl text-[#b59766] mt-8 font-light leading-relaxed max-w-2xl">
              {serviceData.hero.subheadline}
            </p>
            
            <p className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300 text-base text-[#888888] mt-6 leading-relaxed max-w-2xl">
              {serviceData.hero.supportText}
            </p>
            
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-400 flex flex-wrap gap-4 mt-10">
              <a 
                href="https://regenesismd.com/coming-soon" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#b59766] text-[#0a0a0b] font-semibold text-sm tracking-[0.1em] hover:bg-[#c4a675] transition-colors duration-300"
              >
                {serviceData.hero.primaryCta}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#prp" 
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#4a4a4a] text-[#e8e6e3] font-medium text-sm tracking-[0.1em] hover:border-[#b59766] hover:text-[#b59766] transition-colors duration-300"
              >
                {serviceData.hero.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Blocks */}
      <section className="py-20 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0f0f10]">
        <div className="grid md:grid-cols-3 gap-8">
          {serviceData.trustBlocks.map((block, index) => (
            <div 
              key={index}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 p-8 border-l-2 border-[#b59766] bg-[#0a0a0b]"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <block.icon className="w-8 h-8 text-[#b59766] mb-4" />
              <h3 className="text-lg font-semibold text-[#e8e6e3] mb-3">{block.title}</h3>
              <p className="text-[#888888] text-sm leading-relaxed">{block.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Executive VIP */}
      <section className="py-20 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0a0a0b]">
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 max-w-4xl mx-auto text-center border border-[#b59766]/30 p-10 sm:p-16 relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0a0a0b] px-6">
            <Star className="w-6 h-6 text-[#b59766]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-[#e8e6e3] tracking-wide">{serviceData.executiveVIP.title}</h2>
          <p className="text-[#b59766] mt-2 text-sm tracking-wider uppercase">{serviceData.executiveVIP.subtitle}</p>
          <ul className="mt-8 space-y-3 text-left max-w-2xl mx-auto">
            {serviceData.executiveVIP.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-3 text-[#888888]">
                <Check className="w-5 h-5 text-[#b59766] flex-shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[#e8e6e3] italic">{serviceData.executiveVIP.timeline}</p>
          <a 
            href="https://regenesismd.com/coming-soon" 
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-[#b59766] text-[#0a0a0b] font-semibold text-sm tracking-[0.1em] hover:bg-[#c4a675] transition-colors duration-300"
          >
            {serviceData.executiveVIP.cta}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* What We Treat */}
      <section className="py-20 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0f0f10]">
        <div className="max-w-4xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <p className="text-[#888888] text-lg leading-relaxed">{serviceData.whatWeTreat.intro}</p>
            <ul className="mt-8 space-y-4">
              {serviceData.whatWeTreat.problems.map((problem, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-[#b59766] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-[#e8e6e3]">{problem}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[#b59766] italic">{serviceData.whatWeTreat.reassurance}</p>
          </div>
        </div>
      </section>

      {/* Service Menu Navigation */}
      <section className="py-16 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0a0a0b] border-y border-[#2a2a2a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#888888] text-sm uppercase tracking-wider mb-6">On this page:</p>
          <div className="flex flex-wrap gap-3">
            {serviceData.serviceMenu.map((item, index) => (
              <a
                key={index}
                href={`#${item.anchor}`}
                className="px-5 py-2 bg-[#0f0f10] border border-[#4a4a4a] text-[#e8e6e3] text-sm hover:border-[#b59766] hover:text-[#b59766] transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PRP Section */}
      <section id="prp" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0a0a0b]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Regenerative Therapy</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.prp.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.prp.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12">
            <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">What is PRP Hair Therapy?</h3>
            <p className="text-[#888888] leading-relaxed max-w-3xl">{serviceData.prp.whatIs}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 mt-12">
            <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">How It Works</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {serviceData.prp.howItWorks.map((step, i) => (
                <div key={i} className="p-4 bg-[#0f0f10] border border-[#2a2a2a]">
                  <span className="text-[#b59766] text-2xl font-light">0{i + 1}</span>
                  <p className="text-[#888888] text-sm mt-2">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300 mt-12 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">Benefits</h3>
              <ul className="space-y-2">
                {serviceData.prp.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#b59766] flex-shrink-0 mt-0.5" />
                    <span className="text-[#888888]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">What to Expect</h3>
              <ul className="space-y-2">
                {serviceData.prp.whatToExpect.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#b59766] flex-shrink-0 mt-0.5" />
                    <span className="text-[#888888]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Treatments Section */}
      <section id="medical" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0f0f10]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">FDA‑Approved</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.medical.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.medical.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12 grid sm:grid-cols-2 gap-6">
            {serviceData.medical.treatments.map((treatment, i) => (
              <div key={i} className="p-6 bg-[#0a0a0b] border border-[#2a2a2a]">
                <h3 className="text-lg font-semibold text-[#b59766] mb-2">{treatment.name}</h3>
                <p className="text-[#888888] text-sm mb-4">{treatment.description}</p>
                <p className="text-[#e8e6e3] text-sm"><span className="text-[#b59766]">Benefits:</span> {treatment.benefits}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laser Section */}
      <section id="laser" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0a0a0b]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Laser Technology</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.laser.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.laser.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12">
            <p className="text-[#888888] leading-relaxed max-w-3xl">{serviceData.laser.whatIs}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 mt-12 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">Benefits</h3>
              <ul className="space-y-2">
                {serviceData.laser.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#b59766] flex-shrink-0 mt-0.5" />
                    <span className="text-[#888888]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">What to Expect</h3>
              <ul className="space-y-2">
                {serviceData.laser.whatToExpect.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#b59766] flex-shrink-0 mt-0.5" />
                    <span className="text-[#888888]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Section */}
      <section id="prevention" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0f0f10]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Early Intervention</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.prevention.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.prevention.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12">
            <p className="text-[#888888] leading-relaxed max-w-3xl">{serviceData.prevention.whatIs}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 mt-12">
            <h3 className="text-xl font-semibold text-[#e8e6e3] mb-6">Prevention Strategies</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceData.prevention.strategies.map((strategy, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-[#0a0a0b] border border-[#2a2a2a]">
                  <Check className="w-5 h-5 text-[#b59766] flex-shrink-0 mt-0.5" />
                  <span className="text-[#888888] text-sm">{strategy}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Combination Section */}
      <section id="combination" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0a0a0b]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Synergistic Approach</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.combination.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.combination.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12">
            <p className="text-[#888888] leading-relaxed max-w-3xl">{serviceData.combination.whatIs}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 mt-12 grid md:grid-cols-3 gap-6">
            {serviceData.combination.protocols.map((protocol, i) => (
              <div key={i} className="p-6 bg-[#0f0f10] border border-[#2a2a2a]">
                <h3 className="text-lg font-semibold text-[#b59766] mb-2">{protocol.name}</h3>
                <p className="text-[#888888] text-sm mb-4">{protocol.components}</p>
                <p className="text-[#e8e6e3] text-sm"><span className="text-[#b59766]">Best For:</span> {protocol.bestFor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0f0f10]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-[#e8e6e3]">{serviceData.pricing.title}</h2>
            <p className="text-[#888888] mt-4 max-w-2xl mx-auto">{serviceData.pricing.description}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 grid md:grid-cols-3 gap-6">
            {serviceData.pricing.tiers.map((tier, index) => (
              <div 
                key={index} 
                className={`p-8 border ${index === 1 ? 'border-[#b59766] bg-[#0a0a0b]' : 'border-[#2a2a2a] bg-[#0f0f10]'}`}
              >
                <h3 className="text-xl font-semibold text-[#e8e6e3]">{tier.name}</h3>
                <p className="text-2xl font-light text-[#b59766] mt-2">{tier.price}</p>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#888888] text-sm">
                      <Check className="w-4 h-4 text-[#b59766] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0a0a0b]">
        <div className="max-w-3xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-[#e8e6e3]">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {serviceData.faqs.map((faq, index) => (
              <div 
                key={index}
                className="reveal opacity-0 translate-y-8 transition-all duration-700 border border-[#2a2a2a] bg-[#0f0f10] overflow-hidden"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#0a0a0b] transition-colors"
                >
                  <span className="text-[#e8e6e3] font-medium pr-4">{faq.question}</span>
                  <span className={`text-[#b59766] text-2xl flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96' : 'max-h-0'}`}
                >
                  <p className="px-6 pb-6 text-[#888888] leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0f0f10]">
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-[#e8e6e3]">{serviceData.cta.title}</h2>
          <p className="text-[#888888] mt-4">{serviceData.cta.description}</p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a 
              href="https://regenesismd.com/coming-soon" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#b59766] text-[#0a0a0b] font-semibold text-sm tracking-[0.1em] hover:bg-[#c4a675] transition-colors duration-300"
            >
              {serviceData.cta.primaryCta}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="tel:+19195551234" 
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#4a4a4a] text-[#e8e6e3] font-medium text-sm tracking-[0.1em] hover:border-[#b59766] hover:text-[#b59766] transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              {serviceData.cta.secondaryCta}
            </a>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0a0a0b] border-t border-[#2a2a2a]">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[#888888] hover:text-[#b59766] transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Home
          </Link>
          <div className="flex gap-6 text-sm">
            <Link to="/services/mens-aesthetics" className="text-[#888888] hover:text-[#b59766] transition-colors">Aesthetics</Link>
            <Link to="/services/hormone-metabolic-health" className="text-[#888888] hover:text-[#b59766] transition-colors">Hormone Health</Link>
            <Link to="/services/peptide-therapy" className="text-[#888888] hover:text-[#b59766] transition-colors">Peptide Therapy</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
