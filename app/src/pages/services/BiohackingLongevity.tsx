import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star, GraduationCap, BarChart3, Trophy, Phone } from 'lucide-react';

const serviceData = {
  meta: {
    title: "Biohacking & Longevity for Men | Anti‑Aging | The TRoom Raleigh NC",
    description: "Extend your healthspan and optimize longevity with physician‑guided biohacking at The TRoom in Raleigh, NC. Advanced anti‑aging protocols for men under the care of Dr. Bhavna Vaidya, MD."
  },
  hero: {
    eyebrow: "PHYSICIAN‑GUIDED LONGEVITY",
    h1: "Live Longer. Live Better.",
    subheadline: "Aging is inevitable. But how you age is largely up to you. We help men extend their healthspan—the years of life spent in good health—through evidence‑based interventions.",
    supportText: "At The TRoom, longevity and biohacking protocols are designed and overseen by Dr. Bhavna Vaidya, a board‑certified physician with advanced certification in anti‑aging medicine. As the men's health sister brand of Regenesis MD—Raleigh's Top MedSpa 2025—we combine cutting‑edge science with personalized care to help you age on your own terms.",
    primaryCta: "Book Your Longevity Assessment",
    secondaryCta: "Explore Longevity Options"
  },
  trustBlocks: [
    {
      icon: GraduationCap,
      title: "Anti‑Aging Certified MD",
      content: "Dr. Bhavna Vaidya holds advanced certification in anti‑aging medicine (A4M), bringing specialized expertise to every longevity protocol."
    },
    {
      icon: BarChart3,
      title: "Evidence‑Based Protocols",
      content: "We focus on interventions with scientific support—not trendy biohacks with no data. Your longevity plan is grounded in research."
    },
    {
      icon: Trophy,
      title: "Sister Brand of Regenesis MD",
      content: "The TRoom is the dedicated men's longevity division of Regenesis MD, Raleigh's Top MedSpa 2025, known for personalized, forward‑thinking care."
    }
  ],
  executiveVIP: {
    title: "EXECUTIVE LONGEVITY PROGRAM",
    subtitle: "For High‑Achievers Who Plan to Stay That Way",
    benefits: [
      "Comprehensive longevity lab panels quarterly",
      "Priority access to cutting‑edge therapies",
      "Concierge scheduling with flexible appointments",
      "Integrated protocols addressing hormones, nutrition, and cellular health",
      "Direct messaging with your care team"
    ],
    timeline: "Most men notice improved energy, sleep, and vitality within 4–6 weeks, with long‑term benefits compounding over months and years.",
    cta: "Schedule Executive Consult"
  },
  whatWeTreat: {
    intro: "Men come to The TRoom for longevity optimization when they want to stay sharp, strong, and vital as they age—not just live longer, but live better.",
    problems: [
      "Declining energy and vitality with age",
      "Concerns about cognitive decline and brain health",
      "Loss of muscle mass and physical function",
      "Desire to prevent age‑related diseases before they start",
      "Interest in optimizing healthspan, not just lifespan"
    ],
    reassurance: "If you're thinking about longevity now, you're ahead of the curve. The earlier you start optimizing, the better your results."
  },
  serviceMenu: [
    { name: "Longevity Lab Panels", anchor: "labs" },
    { name: "Hormone Optimization", anchor: "hormones" },
    { name: "Cellular Health Protocols", anchor: "cellular" },
    { name: "Cognitive Optimization", anchor: "cognitive" },
    { name: "Nutrition & Fasting Protocols", anchor: "nutrition" }
  ],
  labs: {
    title: "Longevity Lab Panels",
    subtitle: "Comprehensive biomarker assessment to identify your personal longevity opportunities and risks.",
    whatIs: "Our longevity lab panels assess the key biomarkers associated with aging and age‑related disease—from hormones and metabolic function to inflammation and cardiovascular risk—giving us a complete picture of your biological age versus your chronological age.",
    panels: [
      {
        name: "Longevity Baseline",
        tests: ["Comprehensive hormone panel", "Metabolic and insulin markers", "Inflammatory markers (CRP, homocysteine)", "Lipid panel with advanced particle testing", "Thyroid function", "Vitamin D and key nutrients"]
      },
      {
        name: "Advanced Longevity",
        tests: ["Everything in Baseline", "ApoB and Lp(a) cardiovascular risk", "IGF‑1 and growth hormone markers", "Telomere length analysis", "Methylation and detoxification markers", "Gut microbiome assessment"]
      },
      {
        name: "Executive Longevity",
        tests: ["Everything in Advanced", "Whole‑genome or targeted genetic testing", "Continuous glucose monitoring (2 weeks)", "Body composition (DEXA scan)", "VO2 max and fitness assessment", "Cognitive performance testing"]
      }
    ]
  },
  hormones: {
    title: "Hormone Optimization for Longevity",
    subtitle: "Optimal hormone levels are one of the most powerful levers for healthy aging.",
    whatIs: "Hormone optimization for longevity involves maintaining hormone levels in the optimal range for health and vitality—not just 'normal' for your age. This includes testosterone, thyroid, DHEA, and other key hormones that decline with age.",
    benefits: [
      "Maintained muscle mass and strength",
      "Better bone density and reduced fracture risk",
      "Improved cardiovascular health",
      "Enhanced cognitive function and mood",
      "Better metabolic health and body composition",
      "Increased energy and vitality"
    ],
    approach: [
      "Comprehensive hormone assessment",
      "Personalized optimization plan",
      "Bioidentical hormone therapy when appropriate",
      "Regular monitoring and dose optimization",
      "Long‑term health tracking and adjustments"
    ]
  },
  cellular: {
    title: "Cellular Health Protocols",
    subtitle: "Target the cellular mechanisms of aging for true longevity benefits.",
    protocols: [
      {
        name: "NAD+ Optimization",
        description: "NAD+ levels decline dramatically with age. We offer NAD+ precursors and IV therapy to support cellular energy and repair.",
        benefits: "Enhanced mitochondrial function, improved cellular repair, better energy metabolism"
      },
      {
        name: "Senolytic Protocols",
        description: "Senolytics help clear senescent ('zombie') cells that accumulate with age and drive inflammation.",
        benefits: "Reduced inflammation, improved tissue function, potentially extended healthspan"
      },
      {
        name: "Autophagy Enhancement",
        description: "We guide you through fasting‑mimicking protocols and supplements that activate cellular cleanup processes.",
        benefits: "Cellular renewal, metabolic reset, improved insulin sensitivity"
      },
      {
        name: "Mitochondrial Support",
        description: "Targeted supplements and lifestyle interventions to support your cellular powerhouses.",
        benefits: "Better energy production, reduced oxidative stress, improved physical function"
      }
    ]
  },
  cognitive: {
    title: "Cognitive Optimization",
    subtitle: "Keep your mind sharp and reduce the risk of age‑related cognitive decline.",
    whatIs: "Cognitive optimization combines hormone balance, targeted nutrients, lifestyle interventions, and when appropriate, nootropics to support brain health and cognitive function as you age.",
    components: [
      "Hormone optimization (testosterone, thyroid, DHEA all affect brain function)",
      "Targeted nutrients (omega‑3s, B vitamins, magnesium, etc.)",
      "Sleep optimization (critical for brain detoxification)",
      "Exercise protocols (physical activity protects the brain)",
      "Cognitive training and mental stimulation"
    ]
  },
  pricing: {
    title: "Investment in Your Longevity",
    description: "Longevity program pricing varies based on the specific services, lab panels, and duration. During your consultation, we'll create a personalized plan and quote.",
    tiers: [
      {
        name: "Longevity Assessment",
        price: "From $699",
        features: [
          "Comprehensive consultation with Dr. Vaidya",
          "Longevity Baseline lab panel",
          "Biological age assessment",
          "Personalized longevity plan"
        ]
      },
      {
        name: "Longevity Optimization",
        price: "From $599/month",
        features: [
          "Hormone optimization therapy",
          "Cellular health protocols",
          "Quarterly lab monitoring",
          "Nutrition and lifestyle guidance"
        ]
      },
      {
        name: "Executive Longevity Program",
        price: "Custom Quote",
        features: [
          "Everything in Optimization",
          "Advanced genetic testing",
          "NAD+ IV therapy sessions",
          "Priority access to new therapies",
          "Concierge support"
        ]
      }
    ]
  },
  faqs: [
    {
      question: "At what age should I start thinking about longevity?",
      answer: "The earlier the better. While it's never too late to start, the interventions are most effective when started before significant decline. Many men begin serious longevity optimization in their 30s, 40s, or 50s."
    },
    {
      question: "Is hormone therapy safe long‑term?",
      answer: "When properly prescribed and monitored by a qualified physician, bioidentical hormone therapy has a strong safety profile. We use the lowest effective doses and monitor your health markers regularly."
    },
    {
      question: "What's the difference between lifespan and healthspan?",
      answer: "Lifespan is how long you live. Healthspan is how long you live in good health—free from chronic disease and disability. Our focus is on extending healthspan, which often extends lifespan as a side benefit."
    },
    {
      question: "How do you measure biological age?",
      answer: "We use multiple biomarkers, including telomere length, DNA methylation patterns, and comprehensive blood work to estimate your biological age versus your chronological age."
    },
    {
      question: "Are these interventions FDA‑approved?",
      answer: "Some interventions (like hormone therapy) use FDA‑approved medications. Others (like certain supplements and protocols) are evidence‑based but not specifically FDA‑approved for longevity. We always discuss the evidence and risks."
    },
    {
      question: "How is this different from my regular physical?",
      answer: "A standard physical focuses on detecting disease. Our longevity assessment focuses on optimizing function, preventing disease before it starts, and extending your healthspan—going far beyond what insurance covers."
    }
  ],
  cta: {
    title: "Ready to Invest in Your Longevity?",
    description: "Book your longevity assessment with Dr. Vaidya to discover your biological age and create a personalized plan for extending your healthspan.",
    primaryCta: "Book Your Assessment",
    secondaryCta: "Call (919) 555‑1234"
  }
};

export default function BiohackingLongevity() {
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
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Biomarker Assessment</span>
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
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Hormonal Foundation</span>
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

      {/* Cellular Section */}
      <section id="cellular" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0a0a0b]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Cutting‑Edge Science</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.cellular.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.cellular.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12 grid sm:grid-cols-2 gap-6">
            {serviceData.cellular.protocols.map((protocol, i) => (
              <div key={i} className="p-6 bg-[#0f0f10] border border-[#2a2a2a]">
                <h3 className="text-lg font-semibold text-[#b59766] mb-3">{protocol.name}</h3>
                <p className="text-[#888888] text-sm mb-4">{protocol.description}</p>
                <p className="text-[#e8e6e3] text-sm"><span className="text-[#b59766]">Benefits:</span> {protocol.benefits}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cognitive Section */}
      <section id="cognitive" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0f0f10]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Brain Health</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.cognitive.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.cognitive.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12">
            <p className="text-[#888888] leading-relaxed max-w-3xl">{serviceData.cognitive.whatIs}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 mt-12">
            <h3 className="text-xl font-semibold text-[#e8e6e3] mb-6">Cognitive Optimization Components</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceData.cognitive.components.map((component, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-[#0a0a0b] border border-[#2a2a2a]">
                  <Check className="w-5 h-5 text-[#b59766] flex-shrink-0 mt-0.5" />
                  <span className="text-[#888888] text-sm">{component}</span>
                </div>
              ))}
            </div>
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
