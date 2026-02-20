import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star, GraduationCap, BarChart3, Trophy, Phone } from 'lucide-react';

const serviceData = {
  meta: {
    title: "IV & Injectable Therapies for Men | Vitamin IV Drips | The TRoom Raleigh NC",
    description: "Rapid hydration, nutrient delivery, and wellness boosts with physician‑supervised IV therapy at The TRoom in Raleigh, NC. Custom IV drips and injectable therapies for men under the care of Dr. Bhavna Vaidya, MD."
  },
  hero: {
    eyebrow: "PHYSICIAN‑SUPERVISED IV THERAPY",
    h1: "Fuel Your Body. Fast.",
    subheadline: "When you need rapid results—whether it's recovery from a tough workout, an immune boost, or a hangover cure—IV therapy delivers nutrients directly to your bloodstream for maximum absorption and immediate effects.",
    supportText: "At The TRoom, all IV therapies are formulated and supervised by Dr. Bhavna Vaidya, a board‑certified physician with advanced training in functional medicine. As the men's health sister brand of Regenesis MD—Raleigh's Top MedSpa 2025—we combine medical expertise with a comfortable, private experience designed for men.",
    primaryCta: "Book Your IV Session",
    secondaryCta: "Explore IV Options"
  },
  trustBlocks: [
    {
      icon: GraduationCap,
      title: "Board‑Certified MD",
      content: "Not an IV lounge with no medical oversight. Dr. Bhavna Vaidya formulates and oversees all IV protocols to ensure safety and efficacy."
    },
    {
      icon: BarChart3,
      title: "Pharmacy‑Grade Ingredients",
      content: "We use only high‑quality, medical‑grade vitamins, minerals, and nutrients sourced from reputable compounding pharmacies."
    },
    {
      icon: Trophy,
      title: "Sister Brand of Regenesis MD",
      content: "The TRoom is the dedicated men's wellness division of Regenesis MD, Raleigh's Top MedSpa 2025, known for personalized, results‑driven care."
    }
  ],
  executiveVIP: {
    title: "EXECUTIVE IV PROTOCOLS",
    subtitle: "For Busy Professionals & High‑Performers",
    benefits: [
      "Priority scheduling with flexible appointment times",
      "Private IV suite for discreet, comfortable sessions",
      "Mobile IV options—coming to your home or office",
      "Custom formulations based on your specific needs",
      "Package pricing for regular wellness optimization"
    ],
    timeline: "Most IV sessions take 30–60 minutes, with effects felt immediately or within hours depending on the formulation.",
    cta: "Schedule Executive IV"
  },
  whatWeTreat: {
    intro: "Men come to The TRoom for IV therapy when they want rapid results that oral supplements simply can't deliver.",
    problems: [
      "Dehydration and fatigue from travel or intense training",
      "Hangover recovery after business events or celebrations",
      "Immune support during cold and flu season",
      "Pre‑event boost for important meetings or competitions",
      "Post‑workout recovery and muscle soreness",
      "General wellness optimization and energy enhancement"
    ],
    reassurance: "If you're looking for rapid hydration and nutrient delivery, IV therapy may be the solution you need."
  },
  serviceMenu: [
    { name: "Performance IV Drip", anchor: "performance" },
    { name: "Recovery IV Drip", anchor: "recovery" },
    { name: "Immunity IV Drip", anchor: "immunity" },
    { name: "Executive IV Drip", anchor: "executive" },
    { name: "Hangover Relief IV", anchor: "hangover" },
    { name: "Injectable Boosters", anchor: "boosters" }
  ],
  performance: {
    title: "Performance IV Drip",
    subtitle: "Pre‑workout energy, endurance enhancement, and mental focus—delivered directly to your bloodstream.",
    ingredients: ["B‑Complex vitamins (B1, B2, B3, B5, B6)", "Methylcobalamin (B12)", "Magnesium", "Taurine", "Amino acid blend (BCAAs)", "Electrolytes"],
    benefits: [
      "Sustained energy without the crash",
      "Enhanced endurance and stamina",
      "Improved mental clarity and focus",
      "Better muscle function and reduced cramping",
      "Optimal hydration for peak performance"
    ],
    bestFor: "Pre‑workout, pre‑competition, important meetings, or anytime you need sustained energy and focus."
  },
  recovery: {
    title: "Recovery IV Drip",
    subtitle: "Accelerate post‑workout recovery, reduce soreness, and get back to training faster.",
    ingredients: ["Vitamin C (high dose)", "Glutathione", "Zinc", "Magnesium", "BCAAs", "Electrolytes", "Anti‑inflammatory support"],
    benefits: [
      "Reduced muscle soreness and inflammation",
      "Faster recovery between training sessions",
      "Immune system support during intense training",
      "Antioxidant protection against oxidative stress",
      "Rehydration and electrolyte replenishment"
    ],
    bestFor: "Post‑workout, post‑competition, after intense physical activity, or during high‑volume training blocks."
  },
  immunity: {
    title: "Immunity IV Drip",
    subtitle: "Fortify your immune system with high‑dose vitamins and antioxidants.",
    ingredients: ["Vitamin C (high dose)", "Zinc", "Selenium", "B‑Complex vitamins", "Glutathione", "Vitamin D3"],
    benefits: [
      "Enhanced immune system function",
      "Reduced severity and duration of illness",
      "Antioxidant protection",
      "Faster recovery when you're feeling run down",
      "Preventive support during cold and flu season"
    ],
    bestFor: "Cold and flu season, before travel, when feeling run down, or as part of a regular wellness routine."
  },
  executive: {
    title: "Executive IV Drip",
    subtitle: "Mental clarity, stress resilience, and sustained energy for high‑performing professionals.",
    ingredients: ["High‑dose B12", "NAD+ precursor", "Magnesium", "Vitamin C", "B‑Complex vitamins", "Taurine", "L‑Carnitine"],
    benefits: [
      "Enhanced mental clarity and cognitive function",
      "Improved stress resilience",
      "Sustained energy without jitters",
      "Better mood and motivation",
      "Cellular energy production support"
    ],
    bestFor: "Before important presentations, during high‑stress periods, business travel recovery, or regular cognitive optimization."
  },
  hangover: {
    title: "Hangover Relief IV",
    subtitle: "Rapid relief from hangover symptoms—get back to feeling like yourself fast.",
    ingredients: ["Normal saline (rapid hydration)", "B‑Complex vitamins", "Magnesium", "Anti‑nausea medication", "Anti‑inflammatory support", "Electrolytes"],
    benefits: [
      "Rapid rehydration",
      "Relief from headache and nausea",
      "Energy restoration",
      "Electrolyte balance",
      "Get back to your day quickly"
    ],
    bestFor: "After celebrations, business events, or anytime you need rapid hangover relief."
  },
  boosters: {
    title: "Injectable Boosters",
    subtitle: "Quick injections for targeted benefits—takes just minutes.",
    shots: [
      {
        name: "B12 Energy Shot",
        description: "Methylcobalamin B12 for energy, mood, and metabolism support.",
        bestFor: "Weekly energy and metabolism boost"
      },
      {
        name: "Glutathione Shot",
        description: "The master antioxidant for detoxification, skin health, and immune support.",
        bestFor: "Antioxidant protection and detoxification"
      },
      {
        name: "Vitamin D Shot",
        description: "High‑dose vitamin D3 for immune function, bone health, and mood.",
        bestFor: "Monthly vitamin D optimization"
      },
      {
        name: "MIC Shot (Lipotropic)",
        description: "Methionine, Inositol, and Choline to support fat metabolism and liver health.",
        bestFor: "Weight loss support and liver detox"
      }
    ]
  },
  pricing: {
    title: "IV Therapy Pricing",
    description: "Individual sessions and package pricing available. All IV therapies include a brief medical screening to ensure safety.",
    tiers: [
      {
        name: "Single IV Session",
        price: "From $199",
        features: [
          "Choice of standard IV formulation",
          "Medical screening included",
          "30–60 minute session",
          "Comfortable, private setting"
        ]
      },
      {
        name: "IV Package (4 Sessions)",
        price: "From $699",
        features: [
          "4 IV sessions of your choice",
          "Priority scheduling",
          "Save over single sessions",
          "Shareable with family"
        ]
      },
      {
        name: "Monthly IV Membership",
        price: "From $299/month",
        features: [
          "2 IV sessions per month",
          "2 booster shots per month",
          "10% off additional services",
          "VIP scheduling"
        ]
      }
    ]
  },
  faqs: [
    {
      question: "How long does an IV therapy session take?",
      answer: "Most IV sessions take 30–60 minutes depending on the formulation and your individual needs. Booster shots take just a few minutes."
    },
    {
      question: "How quickly will I feel the effects?",
      answer: "Many people feel the effects during or immediately after the session. Some formulations, like energy drips, provide immediate benefits, while others, like immunity support, build over time."
    },
    {
      question: "Is IV therapy safe?",
      answer: "When administered by qualified medical professionals, IV therapy is very safe. We conduct a brief medical screening before your first session and use only pharmacy‑grade ingredients."
    },
    {
      question: "How often can I get IV therapy?",
      answer: "Frequency depends on your individual needs and the specific formulation. Some clients come weekly for performance or recovery, while others come monthly for general wellness. We'll help you determine the right schedule."
    },
    {
      question: "Can I combine IV therapy with other treatments?",
      answer: "Yes, IV therapy complements many of our other services including hormone optimization, peptide therapy, and aesthetics. We can design an integrated plan."
    },
    {
      question: "Do you offer mobile IV therapy?",
      answer: "Mobile IV services are available for executive clients. Contact us to discuss mobile options for your home or office."
    }
  ],
  cta: {
    title: "Ready to Experience IV Therapy?",
    description: "Book your IV session today and feel the difference that direct nutrient delivery can make.",
    primaryCta: "Book Your IV Session",
    secondaryCta: "Call (919) 555‑1234"
  }
};

export default function IVTherapy() {
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
                href="#performance" 
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

      {/* Performance IV Section */}
      <section id="performance" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0a0a0b]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Energy & Focus</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.performance.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.performance.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">Key Ingredients</h3>
              <ul className="space-y-2">
                {serviceData.performance.ingredients.map((ingredient, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#b59766] flex-shrink-0 mt-0.5" />
                    <span className="text-[#888888]">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">Benefits</h3>
              <ul className="space-y-2">
                {serviceData.performance.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#b59766] flex-shrink-0 mt-0.5" />
                    <span className="text-[#888888]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 mt-8 p-6 bg-[#0f0f10] border border-[#2a2a2a]">
            <p className="text-[#b59766] font-medium">Best For:</p>
            <p className="text-[#888888] mt-2">{serviceData.performance.bestFor}</p>
          </div>
        </div>
      </section>

      {/* Recovery IV Section */}
      <section id="recovery" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0f0f10]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Post‑Workout</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.recovery.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.recovery.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">Key Ingredients</h3>
              <ul className="space-y-2">
                {serviceData.recovery.ingredients.map((ingredient, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#b59766] flex-shrink-0 mt-0.5" />
                    <span className="text-[#888888]">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">Benefits</h3>
              <ul className="space-y-2">
                {serviceData.recovery.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#b59766] flex-shrink-0 mt-0.5" />
                    <span className="text-[#888888]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 mt-8 p-6 bg-[#0a0a0b] border border-[#2a2a2a]">
            <p className="text-[#b59766] font-medium">Best For:</p>
            <p className="text-[#888888] mt-2">{serviceData.recovery.bestFor}</p>
          </div>
        </div>
      </section>

      {/* Immunity IV Section */}
      <section id="immunity" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0a0a0b]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Immune Support</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.immunity.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.immunity.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">Key Ingredients</h3>
              <ul className="space-y-2">
                {serviceData.immunity.ingredients.map((ingredient, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#b59766] flex-shrink-0 mt-0.5" />
                    <span className="text-[#888888]">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">Benefits</h3>
              <ul className="space-y-2">
                {serviceData.immunity.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#b59766] flex-shrink-0 mt-0.5" />
                    <span className="text-[#888888]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 mt-8 p-6 bg-[#0f0f10] border border-[#2a2a2a]">
            <p className="text-[#b59766] font-medium">Best For:</p>
            <p className="text-[#888888] mt-2">{serviceData.immunity.bestFor}</p>
          </div>
        </div>
      </section>

      {/* Executive IV Section */}
      <section id="executive" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0f0f10]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Mental Performance</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.executive.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.executive.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">Key Ingredients</h3>
              <ul className="space-y-2">
                {serviceData.executive.ingredients.map((ingredient, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#b59766] flex-shrink-0 mt-0.5" />
                    <span className="text-[#888888]">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">Benefits</h3>
              <ul className="space-y-2">
                {serviceData.executive.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#b59766] flex-shrink-0 mt-0.5" />
                    <span className="text-[#888888]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 mt-8 p-6 bg-[#0a0a0b] border border-[#2a2a2a]">
            <p className="text-[#b59766] font-medium">Best For:</p>
            <p className="text-[#888888] mt-2">{serviceData.executive.bestFor}</p>
          </div>
        </div>
      </section>

      {/* Hangover IV Section */}
      <section id="hangover" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0a0a0b]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Rapid Relief</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.hangover.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.hangover.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">Key Ingredients</h3>
              <ul className="space-y-2">
                {serviceData.hangover.ingredients.map((ingredient, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#b59766] flex-shrink-0 mt-0.5" />
                    <span className="text-[#888888]">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">Benefits</h3>
              <ul className="space-y-2">
                {serviceData.hangover.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#b59766] flex-shrink-0 mt-0.5" />
                    <span className="text-[#888888]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 mt-8 p-6 bg-[#0f0f10] border border-[#2a2a2a]">
            <p className="text-[#b59766] font-medium">Best For:</p>
            <p className="text-[#888888] mt-2">{serviceData.hangover.bestFor}</p>
          </div>
        </div>
      </section>

      {/* Boosters Section */}
      <section id="boosters" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0f0f10]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Quick Boosts</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.boosters.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.boosters.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12 grid sm:grid-cols-2 gap-6">
            {serviceData.boosters.shots.map((shot, i) => (
              <div key={i} className="p-6 bg-[#0a0a0b] border border-[#2a2a2a]">
                <h3 className="text-lg font-semibold text-[#b59766] mb-2">{shot.name}</h3>
                <p className="text-[#888888] text-sm mb-3">{shot.description}</p>
                <p className="text-[#e8e6e3] text-sm"><span className="text-[#b59766]">Best For:</span> {shot.bestFor}</p>
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
            <Link to="/services/performance-optimization" className="text-[#888888] hover:text-[#b59766] transition-colors">Performance</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
