import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star, GraduationCap, BarChart3, Trophy, Phone } from 'lucide-react';

const serviceData = {
  meta: {
    title: "Performance Optimization for Men | Athletic Performance | The TRoom Raleigh NC",
    description: "Maximize athletic performance, recovery, and mental clarity with physician-guided optimization at The TRoom in Raleigh, NC. Comprehensive performance programs for men under the care of Dr. Bhavna Vaidya, MD."
  },
  hero: {
    eyebrow: "PHYSICIAN‑GUIDED OPTIMIZATION",
    h1: "Perform at Your Peak.",
    subheadline: "Whether you're an athlete, executive, or high‑performer—optimization isn't about being 'good enough.' It's about being the best version of yourself, backed by data and medical expertise.",
    supportText: "At The TRoom, performance optimization is led by Dr. Bhavna Vaidya, a board‑certified physician with advanced training in functional and anti‑aging medicine. As the men's health sister brand of Regenesis MD—Raleigh's Top MedSpa 2025—we combine advanced diagnostics, hormone optimization, and cutting‑edge therapies to help you perform at your highest level.",
    primaryCta: "Book Your Performance Assessment",
    secondaryCta: "Explore Optimization Options"
  },
  trustBlocks: [
    {
      icon: GraduationCap,
      title: "Board‑Certified MD",
      content: "Not a performance coach or supplement shop. Dr. Bhavna Vaidya brings medical expertise to every optimization protocol, ensuring safety and efficacy."
    },
    {
      icon: BarChart3,
      title: "Data‑Driven Approach",
      content: "We use comprehensive lab testing, body composition analysis, and biomarker tracking—not guesswork—to optimize your performance."
    },
    {
      icon: Trophy,
      title: "Sister Brand of Regenesis MD",
      content: "The TRoom is the dedicated men's performance division of Regenesis MD, Raleigh's Top MedSpa 2025, known for personalized, results‑driven care."
    }
  ],
  executiveVIP: {
    title: "ELITE PERFORMANCE PROTOCOLS",
    subtitle: "For Athletes, Executives & High‑Performers",
    benefits: [
      "Priority scheduling with flexible appointment times",
      "Comprehensive performance lab panels quarterly",
      "Integrated protocols combining hormones, peptides, and nutrition",
      "Direct access to your care team via secure messaging",
      "Discreet, private consultations with personalized attention"
    ],
    timeline: "Most men notice improved energy and recovery within 2–3 weeks, with peak performance optimization achieved by month 3.",
    cta: "Schedule Elite Consult"
  },
  whatWeTreat: {
    intro: "Men come to The TRoom for performance optimization when they want to push past plateaus and achieve their full potential—physically, mentally, and professionally.",
    problems: [
      "Declining energy and stamina despite adequate sleep",
      "Slow recovery from workouts and physical activity",
      "Brain fog and decreased mental clarity",
      "Difficulty maintaining muscle mass and strength",
      "Desire to optimize for competitive sports or career demands"
    ],
    reassurance: "If you're looking to optimize your performance, a comprehensive assessment with a physician trained in functional medicine can identify opportunities for improvement."
  },
  serviceMenu: [
    { name: "Comprehensive Performance Labs", anchor: "labs" },
    { name: "Hormone Optimization for Athletes", anchor: "hormones" },
    { name: "Peptide Performance Stacks", anchor: "peptides" },
    { name: "IV Nutrition & Recovery", anchor: "iv" },
    { name: "Nutrition & Supplement Protocols", anchor: "nutrition" }
  ],
  labs: {
    title: "Comprehensive Performance Labs",
    subtitle: "Know your numbers. Optimize with precision. Our advanced lab panels reveal the biomarkers that drive performance.",
    whatIs: "Our performance lab panels go beyond standard blood work to assess hormones, metabolic function, inflammation, nutrient status, and cardiovascular health—giving us a complete picture of your physiological baseline.",
    panels: [
      {
        name: "Performance Baseline",
        tests: ["Complete hormone panel (testosterone, free T, estradiol, SHBG)", "Thyroid function (TSH, free T3, free T4)", "Metabolic markers (glucose, insulin, HbA1c)", "Lipid panel with particle size", "Inflammatory markers (CRP, homocysteine)"]
      },
      {
        name: "Elite Athlete Panel",
        tests: ["Everything in Performance Baseline", "Nutrient levels (B12, D, magnesium, zinc)", "Iron panel and ferritin", "Cortisol rhythm (4-point saliva)", "IGF‑1 and growth hormone markers", "Comprehensive metabolic panel"]
      },
      {
        name: "Executive Optimization",
        tests: ["Everything in Elite Athlete Panel", "Advanced lipid panel (NMR)", "ApoB and Lp(a)", "Omega‑3 index", "Food sensitivity screening", "Gut health assessment"]
      }
    ]
  },
  hormones: {
    title: "Hormone Optimization for Athletes",
    subtitle: "Optimal hormone levels are the foundation of peak performance. We optimize your endocrine system for strength, recovery, and mental clarity.",
    whatIs: "Hormone optimization for athletes involves assessing and optimizing testosterone, thyroid, cortisol, growth hormone markers, and other key hormones that drive physical and mental performance.",
    benefits: [
      "Increased lean muscle mass and strength",
      "Faster workout recovery and reduced soreness",
      "Improved mental clarity and focus",
      "Better sleep quality and energy levels",
      "Enhanced libido and overall vitality",
      "Optimized body composition"
    ],
    approach: [
      "Comprehensive hormone assessment with symptom review",
      "Personalized treatment plan based on your goals",
      "Regular monitoring and dose optimization",
      "Integration with training and competition schedules",
      "Long‑term health monitoring and adjustments"
    ]
  },
  peptides: {
    title: "Peptide Performance Stacks",
    subtitle: "Cutting‑edge peptide therapies to accelerate recovery, build muscle, and optimize performance.",
    stacks: [
      {
        name: "Recovery Stack",
        peptides: "BPC‑157 + TB‑500",
        benefits: "Accelerated healing, reduced inflammation, faster recovery from injuries and intense training"
      },
      {
        name: "Growth Stack",
        peptides: "Sermorelin + Ipamorelin",
        benefits: "Increased growth hormone, improved sleep, better body composition, enhanced recovery"
      },
      {
        name: "Performance Stack",
        peptides: "CJC‑1295 + Ipamorelin",
        benefits: "Sustained GH release, improved muscle growth, fat loss, better energy and focus"
      }
    ]
  },
  iv: {
    title: "IV Nutrition & Recovery",
    subtitle: "Rapid nutrient delivery for recovery, hydration, and performance enhancement.",
    whatIs: "IV therapy delivers vitamins, minerals, amino acids, and hydration directly into your bloodstream for maximum absorption and immediate effects—bypassing the digestive system.",
    drips: [
      {
        name: "Performance Drip",
        ingredients: "B‑complex, B12, magnesium, amino acids, taurine",
        benefits: "Pre‑workout energy, enhanced endurance, mental focus"
      },
      {
        name: "Recovery Drip",
        ingredients: "Vitamin C, glutathione, zinc, magnesium, BCAA",
        benefits: "Post‑workout recovery, reduced soreness, immune support"
      },
      {
        name: "Executive Drip",
        ingredients: "High‑dose B12, NAD+ precursor, magnesium, vitamin C",
        benefits: "Mental clarity, stress resilience, sustained energy"
      }
    ]
  },
  pricing: {
    title: "Investment in Your Performance",
    description: "Performance optimization pricing varies based on the specific services, lab panels, and duration. During your consultation, we'll create a personalized plan and quote.",
    tiers: [
      {
        name: "Performance Assessment",
        price: "From $499",
        features: [
          "Comprehensive consultation with Dr. Vaidya",
          "Performance Baseline lab panel",
          "Body composition analysis",
          "Personalized optimization plan"
        ]
      },
      {
        name: "Monthly Optimization",
        price: "From $599/month",
        features: [
          "Hormone optimization therapy",
          "Monthly check‑ins and adjustments",
          "Nutrition and supplement guidance",
          "Priority scheduling"
        ]
      },
      {
        name: "Elite Performance Program",
        price: "Custom Quote",
        features: [
          "Everything in Monthly Optimization",
          "Peptide therapy protocols",
          "Quarterly comprehensive labs",
          "IV therapy sessions",
          "Direct provider access"
        ]
      }
    ]
  },
  faqs: [
    {
      question: "Is hormone optimization safe for athletes?",
      answer: "When properly prescribed and monitored by a qualified physician, hormone optimization is safe and effective. We work within therapeutic ranges and monitor your health markers regularly."
    },
    {
      question: "Will this affect my eligibility for sports competition?",
      answer: "Some therapies may not be allowed in competitive sports. If you're a competitive athlete, we'll design a protocol that's compliant with your sport's regulations while still optimizing your performance."
    },
    {
      question: "How often do I need lab work?",
      answer: "Initial comprehensive labs are required. Follow‑up labs are typically every 3–6 months depending on your protocol and response to treatment."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most men notice improved energy and sleep within 2–3 weeks. Physical performance improvements typically appear by week 6–8, with peak optimization by month 3."
    },
    {
      question: "Can I combine multiple therapies?",
      answer: "Yes, many men benefit from integrated protocols combining hormone optimization, peptides, IV therapy, and nutrition. We design comprehensive plans based on your goals."
    },
    {
      question: "Do you work with personal trainers or coaches?",
      answer: "With your permission, we can collaborate with your trainer, coach, or other healthcare providers to ensure an integrated approach to your optimization."
    }
  ],
  cta: {
    title: "Ready to Optimize Your Performance?",
    description: "Book your performance assessment with Dr. Vaidya to discover your optimization opportunities and create a personalized plan.",
    primaryCta: "Book Your Assessment",
    secondaryCta: "Call (919) 555‑1234"
  }
};

export default function PerformanceOptimization() {
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
                href="#labs" 
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

      {/* Labs Section */}
      <section id="labs" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0a0a0b]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Data‑Driven Optimization</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.labs.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.labs.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12">
            <p className="text-[#888888] leading-relaxed max-w-3xl">{serviceData.labs.whatIs}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 mt-12 grid md:grid-cols-3 gap-6">
            {serviceData.labs.panels.map((panel, i) => (
              <div key={i} className="p-6 bg-[#0f0f10] border border-[#2a2a2a]">
                <h3 className="text-lg font-semibold text-[#b59766] mb-4">{panel.name}</h3>
                <ul className="space-y-2">
                  {panel.tests.map((test, j) => (
                    <li key={j} className="flex items-start gap-2 text-[#888888] text-sm">
                      <Check className="w-4 h-4 text-[#b59766] flex-shrink-0 mt-0.5" />
                      <span>{test}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hormones Section */}
      <section id="hormones" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0f0f10]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Foundation of Performance</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.hormones.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.hormones.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12">
            <p className="text-[#888888] leading-relaxed max-w-3xl">{serviceData.hormones.whatIs}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 mt-12 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-6">Key Benefits</h3>
              <ul className="space-y-3">
                {serviceData.hormones.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#b59766] flex-shrink-0 mt-0.5" />
                    <span className="text-[#888888]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-6">Our Approach</h3>
              <ul className="space-y-3">
                {serviceData.hormones.approach.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#b59766]/20 text-[#b59766] text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                    <span className="text-[#888888]">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Peptides Section */}
      <section id="peptides" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0a0a0b]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Advanced Therapies</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.peptides.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.peptides.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12 grid md:grid-cols-3 gap-6">
            {serviceData.peptides.stacks.map((stack, i) => (
              <div key={i} className="p-6 bg-[#0f0f10] border border-[#2a2a2a]">
                <h3 className="text-lg font-semibold text-[#b59766] mb-2">{stack.name}</h3>
                <p className="text-[#e8e6e3] text-sm font-medium">{stack.peptides}</p>
                <p className="text-[#888888] text-sm mt-3">{stack.benefits}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IV Section */}
      <section id="iv" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0f0f10]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Rapid Recovery</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.iv.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.iv.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12">
            <p className="text-[#888888] leading-relaxed max-w-3xl">{serviceData.iv.whatIs}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 mt-12 grid md:grid-cols-3 gap-6">
            {serviceData.iv.drips.map((drip, i) => (
              <div key={i} className="p-6 bg-[#0a0a0b] border border-[#2a2a2a]">
                <h3 className="text-lg font-semibold text-[#b59766] mb-3">{drip.name}</h3>
                <p className="text-[#888888] text-xs uppercase tracking-wider mb-2">Ingredients</p>
                <p className="text-[#e8e6e3] text-sm mb-4">{drip.ingredients}</p>
                <p className="text-[#888888] text-xs uppercase tracking-wider mb-2">Benefits</p>
                <p className="text-[#888888] text-sm">{drip.benefits}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0a0a0b]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-[#e8e6e3]">{serviceData.pricing.title}</h2>
            <p className="text-[#888888] mt-4 max-w-2xl mx-auto">{serviceData.pricing.description}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 grid md:grid-cols-3 gap-6">
            {serviceData.pricing.tiers.map((tier, index) => (
              <div 
                key={index} 
                className={`p-8 border ${index === 1 ? 'border-[#b59766] bg-[#0f0f10]' : 'border-[#2a2a2a] bg-[#0a0a0b]'}`}
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
      <section className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0f0f10]">
        <div className="max-w-3xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-[#e8e6e3]">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {serviceData.faqs.map((faq, index) => (
              <div 
                key={index}
                className="reveal opacity-0 translate-y-8 transition-all duration-700 border border-[#2a2a2a] bg-[#0a0a0b] overflow-hidden"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#0f0f10] transition-colors"
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
      <section className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0a0a0b]">
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
      <section className="py-12 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0f0f10] border-t border-[#2a2a2a]">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[#888888] hover:text-[#b59766] transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Home
          </Link>
          <div className="flex gap-6 text-sm">
            <Link to="/services/hormone-metabolic-health" className="text-[#888888] hover:text-[#b59766] transition-colors">Hormone Health</Link>
            <Link to="/services/peptide-therapy" className="text-[#888888] hover:text-[#b59766] transition-colors">Peptide Therapy</Link>
            <Link to="/services/iv-therapy" className="text-[#888888] hover:text-[#b59766] transition-colors">IV Therapy</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
