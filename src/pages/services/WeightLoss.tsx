import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star, GraduationCap, BarChart3, Trophy, Phone } from 'lucide-react';

const serviceData = {
  meta: {
    title: "Men's Weight Loss & Body Sculpting | Semaglutide, CoolSculpting | The TRoom Raleigh NC",
    description: "Lose stubborn fat and sculpt your physique with physician-supervised weight loss programs at The TRoom in Raleigh, NC. Semaglutide, body sculpting, and metabolic optimization for men under the care of Dr. Bhavna Vaidya, MD."
  },
  hero: {
    eyebrow: "PHYSICIAN‑SUPERVISED WEIGHT LOSS",
    h1: "Lose the Gut. Keep the Muscle.",
    subheadline: "That stubborn belly fat isn't just about calories—it's about hormones, metabolism, and the right medical approach. We help men lose fat while preserving lean muscle.",
    supportText: "At The TRoom, weight loss is medically supervised by Dr. Bhavna Vaidya, a board‑certified physician with advanced training in metabolic and anti‑aging medicine. As the men's health sister brand of Regenesis MD—Raleigh's Top MedSpa 2025—we combine cutting‑edge medications, body sculpting technology, and personalized nutrition for lasting results.",
    primaryCta: "Book Your Weight Loss Consultation",
    secondaryCta: "See If You Qualify"
  },
  trustBlocks: [
    {
      icon: GraduationCap,
      title: "Board‑Certified MD",
      content: "Not a weight loss coach or online program. Dr. Bhavna Vaidya evaluates your hormones, metabolism, and health history to create a safe, effective plan."
    },
    {
      icon: BarChart3,
      title: "Medical‑Grade Solutions",
      content: "We prescribe FDA‑approved medications and use clinical‑grade body sculpting technology—not gimmicks or unproven supplements."
    },
    {
      icon: Trophy,
      title: "Sister Brand of Regenesis MD",
      content: "The TRoom is the dedicated men's health division of Regenesis MD, Raleigh's Top MedSpa 2025, known for personalized, results‑driven care."
    }
  ],
  executiveVIP: {
    title: "EXECUTIVE BODY TRANSFORMATION",
    subtitle: "For Busy Professionals & High‑Performers",
    benefits: [
      "Concierge scheduling with early morning and evening appointments",
      "Telehealth follow‑ups to minimize office visits",
      "Discreet, private consultations—no group meetings",
      "Integrated approach combining medication, nutrition, and body sculpting",
      "Direct messaging with your care team via secure portal"
    ],
    timeline: "Most men lose 10–15% of body weight within 3–4 months on our medical weight loss protocols.",
    cta: "Schedule Executive Consult"
  },
  whatWeTreat: {
    intro: "Men come to The TRoom for weight loss when diet and exercise alone aren't working—or when they want faster, more predictable results with medical oversight.",
    problems: [
      "Stubborn belly fat that won't budge despite diet and exercise",
      "Weight gain related to low testosterone or hormonal imbalance",
      "Metabolic slowdown with age (men over 35)",
      "Need to lose weight quickly for health, career, or personal reasons",
      "Desire to preserve muscle while losing fat"
    ],
    reassurance: "If you're struggling with any of these, a medically supervised weight loss program may be the solution you've been looking for."
  },
  serviceMenu: [
    { name: "Medical Weight Loss (Semaglutide)", anchor: "medical" },
    { name: "Body Sculpting & CoolSculpting", anchor: "sculpting" },
    { name: "Metabolic Optimization", anchor: "metabolic" },
    { name: "Nutrition & Lifestyle Coaching", anchor: "nutrition" }
  ],
  medical: {
    title: "Medical Weight Loss (Semaglutide & GLP‑1 Therapy)",
    subtitle: "FDA‑approved medications that target the biological drivers of hunger and metabolism—helping you lose weight without constant willpower battles.",
    whatIs: "GLP‑1 receptor agonists like Semaglutide are FDA‑approved medications that mimic a natural hormone to reduce appetite, slow gastric emptying, and improve metabolic function. They're the most effective weight loss medications ever developed.",
    quickFacts: [
      { label: "Typical Results", value: "10–20% body weight loss" },
      { label: "Timeline", value: "3–6 months for full results" },
      { label: "Administration", value: "Weekly injection" },
      { label: "Best For", value: "BMI ≥30 or ≥27 with conditions" }
    ],
    benefits: [
      "Significant, sustained weight loss (clinical trials show 15%+ average)",
      "Reduced hunger and food cravings throughout the day",
      "Improved blood sugar control and metabolic health",
      "Preservation of lean muscle mass with proper protocol",
      "Better energy levels and physical function"
    ],
    howItWorks: [
      "Comprehensive evaluation: Medical history, labs, body composition analysis",
      "Personalized dosing: Start low and titrate to optimal dose for your body",
      "Ongoing monitoring: Regular check‑ins, lab reviews, and dose adjustments",
      "Lifestyle integration: Nutrition guidance and exercise recommendations",
      "Long‑term planning: Transition strategy to maintain results"
    ]
  },
  sculpting: {
    title: "Body Sculpting & CoolSculpting Elite",
    subtitle: "Non‑surgical fat reduction that targets stubborn areas resistant to diet and exercise.",
    whatIs: "CoolSculpting Elite uses controlled cooling (cryolipolysis) to freeze and eliminate fat cells without surgery or downtime. It's FDA‑cleared for multiple body areas and delivers permanent fat reduction.",
    quickFacts: [
      { label: "Treatment Time", value: "35–75 minutes per area" },
      { label: "Results Timeline", value: "8–12 weeks" },
      { label: "Fat Reduction", value: "20–25% per treatment" },
      { label: "Downtime", value: "None—return to normal activity" }
    ],
    treatmentAreas: [
      "Abdomen and love handles (flanks)",
      "Chest (for men with excess fat in this area)",
      "Double chin and jawline",
      "Upper arms",
      "Inner and outer thighs",
      "Back fat and bra line"
    ],
    benefits: [
      "Non‑surgical with no needles or anesthesia",
      "Permanent fat cell elimination",
      "Natural‑looking, gradual results",
      "No downtime—return to work immediately",
      "Can be combined with weight loss medications for enhanced results"
    ]
  },
  metabolic: {
    title: "Metabolic Optimization",
    subtitle: "Fix the underlying metabolic and hormonal issues that make weight loss difficult.",
    whatIs: "Metabolic optimization addresses the root causes of weight gain—hormonal imbalances, insulin resistance, thyroid dysfunction, and inflammation—through targeted testing and treatment.",
    components: [
      {
        title: "Hormone Testing & Optimization",
        description: "Low testosterone, elevated cortisol, and thyroid dysfunction can all sabotage weight loss. We test and treat these imbalances."
      },
      {
        title: "Insulin Sensitivity Protocols",
        description: "Improving insulin sensitivity through medication, nutrition, and lifestyle can dramatically accelerate fat loss."
      },
      {
        title: "Inflammation Reduction",
        description: "Chronic inflammation interferes with metabolism. We identify and address inflammatory triggers."
      },
      {
        title: "Sleep & Stress Optimization",
        description: "Poor sleep and high cortisol make weight loss nearly impossible. We address these critical factors."
      }
    ]
  },
  pricing: {
    title: "Investment in Your Transformation",
    description: "Weight loss program pricing varies based on the specific treatments, medications, and duration. During your consultation, we'll provide a clear, personalized quote.",
    tiers: [
      {
        name: "Medical Weight Loss",
        price: "From $499/month",
        features: [
          "Physician evaluation and lab review",
          "Semaglutide or other GLP‑1 medication",
          "Monthly check‑ins and dose adjustments",
          "Nutrition and lifestyle guidance"
        ]
      },
      {
        name: "CoolSculpting Elite",
        price: "From $750/treatment",
        features: [
          "Personalized treatment plan",
          "Dual applicators for faster results",
          "Multiple body areas available",
          "Package discounts available"
        ]
      },
      {
        name: "Complete Transformation",
        price: "Custom Quote",
        features: [
          "Integrated medical weight loss + body sculpting",
          "Hormone optimization if needed",
          "6‑month comprehensive program",
          "Priority scheduling and support"
        ]
      }
    ]
  },
  faqs: [
    {
      question: "How much weight can I expect to lose?",
      answer: "With Semaglutide and GLP‑1 medications, clinical trials show average weight loss of 15–20% of body weight over 6–12 months. Individual results vary based on adherence, starting weight, and metabolic factors."
    },
    {
      question: "Are weight loss medications safe?",
      answer: "FDA‑approved medications like Semaglutide have extensive safety data. They're prescribed and monitored by our board‑certified physician, with regular check‑ins to manage any side effects."
    },
    {
      question: "Will I lose muscle mass?",
      answer: "Our protocols are designed to preserve lean muscle mass through proper nutrition, resistance exercise recommendations, and hormone optimization when appropriate."
    },
    {
      question: "What happens when I stop the medication?",
      answer: "We develop a transition plan to help maintain your results, including ongoing lifestyle support and potential maintenance dosing. Long‑term success requires sustainable habits."
    },
    {
      question: "Is CoolSculpting painful?",
      answer: "Most men experience intense cold and pressure initially, which subsides as the area numbs. There's minimal discomfort during treatment and mild soreness afterward—similar to a workout."
    },
    {
      question: "How is this different from commercial weight loss programs?",
      answer: "We're a medical practice, not a commercial program. You receive physician oversight, prescription medications, lab monitoring, and personalized care—not one‑size‑fits‑all plans."
    }
  ],
  cta: {
    title: "Ready to Transform Your Body?",
    description: "Book your consultation with Dr. Vaidya to discuss which weight loss approach is right for your goals and lifestyle.",
    primaryCta: "Book Your Consultation",
    secondaryCta: "Call (919) 555‑1234"
  }
};

export default function WeightLoss() {
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
                href="https://regenesismd.com/coming-soon" 
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

      {/* Medical Weight Loss Section */}
      <section id="medical" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0a0a0b]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Medical Weight Loss</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.medical.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.medical.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">What is GLP‑1 Therapy?</h3>
              <p className="text-[#888888] leading-relaxed">{serviceData.medical.whatIs}</p>
            </div>
            <div className="bg-[#0f0f10] p-6 border border-[#2a2a2a]">
              <h3 className="text-lg font-semibold text-[#b59766] mb-4">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                {serviceData.medical.quickFacts.map((fact, i) => (
                  <div key={i}>
                    <p className="text-[#888888] text-xs uppercase tracking-wider">{fact.label}</p>
                    <p className="text-[#e8e6e3] font-medium">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 mt-12">
            <h3 className="text-xl font-semibold text-[#e8e6e3] mb-6">Key Benefits</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceData.medical.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-[#0f0f10] border border-[#2a2a2a]">
                  <Check className="w-5 h-5 text-[#b59766] flex-shrink-0 mt-0.5" />
                  <span className="text-[#888888] text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300 mt-12">
            <h3 className="text-xl font-semibold text-[#e8e6e3] mb-6">How It Works</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {serviceData.medical.howItWorks.map((step, i) => (
                <div key={i} className="p-4 bg-[#0f0f10] border border-[#2a2a2a] text-center">
                  <span className="text-[#b59766] text-2xl font-light">0{i + 1}</span>
                  <p className="text-[#888888] text-sm mt-2">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Body Sculpting Section */}
      <section id="sculpting" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0f0f10]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Body Sculpting</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.sculpting.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.sculpting.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">What is CoolSculpting Elite?</h3>
              <p className="text-[#888888] leading-relaxed">{serviceData.sculpting.whatIs}</p>
            </div>
            <div className="bg-[#0a0a0b] p-6 border border-[#2a2a2a]">
              <h3 className="text-lg font-semibold text-[#b59766] mb-4">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                {serviceData.sculpting.quickFacts.map((fact, i) => (
                  <div key={i}>
                    <p className="text-[#888888] text-xs uppercase tracking-wider">{fact.label}</p>
                    <p className="text-[#e8e6e3] font-medium">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 mt-12 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-6">Treatment Areas</h3>
              <ul className="space-y-3">
                {serviceData.sculpting.treatmentAreas.map((area, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#b59766] flex-shrink-0 mt-0.5" />
                    <span className="text-[#888888]">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-6">Key Benefits</h3>
              <ul className="space-y-3">
                {serviceData.sculpting.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#b59766] flex-shrink-0 mt-0.5" />
                    <span className="text-[#888888]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Metabolic Optimization Section */}
      <section id="metabolic" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0a0a0b]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Root Cause Approach</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.metabolic.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.metabolic.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12">
            <p className="text-[#888888] leading-relaxed max-w-3xl">{serviceData.metabolic.whatIs}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 mt-12 grid sm:grid-cols-2 gap-6">
            {serviceData.metabolic.components.map((component, i) => (
              <div key={i} className="p-6 bg-[#0f0f10] border border-[#2a2a2a]">
                <h3 className="text-lg font-semibold text-[#e8e6e3] mb-3">{component.title}</h3>
                <p className="text-[#888888] text-sm">{component.description}</p>
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
            <Link to="/services/hormone-metabolic-health" className="text-[#888888] hover:text-[#b59766] transition-colors">Hormone Health</Link>
            <Link to="/services/sexual-health" className="text-[#888888] hover:text-[#b59766] transition-colors">Sexual Health</Link>
            <Link to="/services/peptide-therapy" className="text-[#888888] hover:text-[#b59766] transition-colors">Peptide Therapy</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
