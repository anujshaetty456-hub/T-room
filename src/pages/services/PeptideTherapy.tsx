import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star, GraduationCap, BarChart3, Trophy, Phone } from 'lucide-react';

const serviceData = {
  meta: {
    title: "Peptide & Regenerative Therapies for Men | BPC-157, Sermorelin | The TRoom Raleigh NC",
    description: "Accelerate healing, recovery, and performance with physician-guided peptide and regenerative therapies at The TRoom in Raleigh, NC. BPC-157, Sermorelin, TB-500, and stem cell therapies for men under the care of Dr. Bhavna Vaidya, MD."
  },
  hero: {
    eyebrow: "PHYSICIAN‑GUIDED RECOVERY",
    h1: "Recover Faster. Perform Longer.",
    subheadline: "Whether you're healing from an injury, pushing for a PR, or fighting the slow decline of aging—peptides and regenerative therapies can help your body repair and rebuild at the cellular level.",
    supportText: "At The TRoom, peptide and regenerative therapies are prescribed and overseen by Dr. Bhavna Vaidya, a board‑certified physician with advanced training in functional and anti‑aging medicine. As the men's health sister brand of Regenesis MD—Raleigh's Top MedSpa 2025—we bring medical precision to cutting‑edge recovery science.",
    primaryCta: "Book Your Peptide Consultation",
    secondaryCta: "See If Peptides Are Right for You"
  },
  trustBlocks: [
    {
      icon: GraduationCap,
      title: "Board‑Certified MD",
      content: "Not a wellness coach or online peptide shop. Dr. Bhavna Vaidya is a board‑certified physician who evaluates your health history, goals, and labs before recommending any therapy."
    },
    {
      icon: BarChart3,
      title: "Research‑Backed Protocols",
      content: "We use peptides and regenerative therapies with established safety profiles and clinical literature—not experimental compounds with unknown risks."
    },
    {
      icon: Trophy,
      title: "Sister Brand of Regenesis MD",
      content: "The TRoom is the dedicated men's health and performance arm of Regenesis MD, Raleigh's Top MedSpa 2025, known for personalized, data‑driven care."
    }
  ],
  executiveVIP: {
    title: "EXECUTIVE RECOVERY PROTOCOLS",
    subtitle: "For Athletes, Executives & High‑Performers",
    benefits: [
      "Priority scheduling with early morning and evening appointment slots",
      "Concierge lab coordination—we come to you when possible",
      "Stacked protocols combining peptides, IV therapy, and hormone optimization",
      "Performance tracking with structured check‑ins and biomarker monitoring",
      "Discreet, VIP‑level care with private consultation options"
    ],
    timeline: "Most men notice improved recovery and sleep within 2–3 weeks, with visible performance and body composition shifts by week 6–8.",
    cta: "Schedule Executive Consult"
  },
  whatWeTreat: {
    intro: "Men come to The TRoom for peptides and regenerative therapies when conventional approaches aren't delivering the recovery, performance, or anti‑aging results they need.",
    problems: [
      "Slow healing from injuries, surgeries, or overuse",
      "Chronic joint pain, tendonitis, or soft tissue issues",
      "Poor workout recovery and persistent soreness",
      "Declining growth hormone and IGF‑1 with age",
      " desire to optimize performance, body composition, and longevity"
    ],
    reassurance: "If you're dealing with any of these, a consultation with a physician trained in peptide and regenerative medicine can help you understand whether these therapies are appropriate for your situation."
  },
  serviceMenu: [
    { name: "BPC‑157 (Body Protection Compound)", anchor: "bpc157" },
    { name: "Sermorelin (Growth Hormone Secretagogue)", anchor: "sermorelin" },
    { name: "TB‑500 (Thymosin Beta‑4)", anchor: "tb500" },
    { name: "Stem Cell & Exosome Therapy", anchor: "stemcell" },
    { name: "Peptide Stacks & Combinations", anchor: "stacks" }
  ],
  bpc157: {
    title: "BPC‑157 (Body Protection Compound)",
    subtitle: "BPC‑157 is one of the most researched peptides for tissue repair, gut healing, and musculoskeletal recovery.",
    whatIs: "BPC‑157 is a synthetic peptide derived from a protective protein found in the stomach. It has been studied for its ability to accelerate healing in tendons, ligaments, muscles, and the gastrointestinal tract.",
    quickFacts: [
      { label: "Typical Course", value: "4–8 weeks" },
      { label: "Administration", value: "Subcutaneous injection" },
      { label: "Best For", value: "Injury recovery, gut health" },
      { label: "Noticeable Results", value: "2–4 weeks" }
    ],
    benefits: [
      "Accelerated healing of tendons, ligaments, and muscles",
      "Reduced inflammation in joints and soft tissues",
      "Improved gut lining integrity and digestive health",
      "Enhanced blood flow to injured areas",
      "Protection against NSAID‑induced gastric damage"
    ],
    comparison: {
      headers: ["Factor", "BPC‑157 at The TRoom", "Online Peptide Sources"],
      rows: [
        ["Medical Oversight", "Board‑certified MD evaluation and monitoring", "No physician involvement"],
        ["Product Quality", "Sourced from licensed US compounding pharmacies", "Unregulated, often counterfeit"],
        ["Dosing Protocol", "Personalized based on your injury and goals", "Generic, one‑size‑fits‑all"],
        ["Safety Monitoring", "Regular check‑ins and lab review", "No follow‑up or support"],
        ["Integration", "Combined with rehab, nutrition, and other therapies", "Isolated, no comprehensive plan"]
      ]
    }
  },
  sermorelin: {
    title: "Sermorelin (Growth Hormone Secretagogue)",
    subtitle: "Sermorelin stimulates your body's natural growth hormone production—supporting fat loss, muscle preservation, sleep, and recovery.",
    whatIs: "Sermorelin is a growth hormone‑releasing hormone (GHRH) analog that signals your pituitary gland to produce more of your own natural growth hormone. Unlike synthetic HGH, it works with your body's feedback mechanisms.",
    quickFacts: [
      { label: "Typical Course", value: "3–6 months" },
      { label: "Administration", value: "Subcutaneous injection (often nightly)", },
      { label: "Best For", value: "Anti‑aging, body composition, recovery" },
      { label: "Noticeable Results", value: "4–6 weeks" }
    ],
    benefits: [
      "Improved sleep quality and deeper rest",
      "Increased lean muscle mass and strength",
      "Reduction in body fat, especially visceral fat",
      "Faster workout recovery and reduced soreness",
      "Better skin elasticity and collagen production",
      "Enhanced mood, energy, and mental clarity"
    ]
  },
  tb500: {
    title: "TB‑500 (Thymosin Beta‑4)",
    subtitle: "TB‑500 is a powerful regenerative peptide that promotes cell migration, tissue repair, and flexibility.",
    whatIs: "TB‑500 is a synthetic version of thymosin beta‑4, a naturally occurring protein involved in wound healing, cell migration, and tissue regeneration. It's particularly effective for soft tissue injuries and flexibility.",
    quickFacts: [
      { label: "Typical Course", value: "4–8 weeks" },
      { label: "Administration", value: "Subcutaneous injection" },
      { label: "Best For", value: "Soft tissue injuries, flexibility" },
      { label: "Noticeable Results", value: "2–4 weeks" }
    ],
    benefits: [
      "Enhanced wound healing and tissue repair",
      "Improved flexibility and range of motion",
      "Reduced inflammation in injured tissues",
      "Promotion of new blood vessel formation",
      "Support for cardiac and neurological health"
    ]
  },
  stemcell: {
    title: "Stem Cell & Exosome Therapy",
    subtitle: "The most advanced regenerative medicine available—using your body's own healing cells or donor‑derived exosomes to repair damaged tissue.",
    whatIs: "Stem cell therapy uses your body's own regenerative cells (often from adipose tissue or bone marrow) or donor‑derived exosomes to promote healing in damaged joints, tendons, and tissues. Exosomes are cell‑derived vesicles that carry signaling molecules to stimulate repair.",
    conditions: [
      "Knee, hip, and shoulder osteoarthritis",
      "Chronic tendonitis and ligament injuries",
      "Degenerative disc disease and back pain",
      "Hair loss (when combined with PRP)",
      "Aesthetic rejuvenation (facial, skin)"
    ],
    benefits: [
      "Potential to avoid or delay surgery",
      "Natural, drug‑free approach to pain and healing",
      "Long‑lasting results with proper rehabilitation",
      "Minimal downtime compared to surgical options",
      "Can be combined with other regenerative therapies"
    ]
  },
  pricing: {
    title: "Investment in Your Recovery",
    description: "Peptide and regenerative therapy pricing varies based on the specific compounds, dosing protocol, and duration of treatment. During your consultation, we'll provide a clear, personalized quote.",
    tiers: [
      {
        name: "BPC‑157 Protocol",
        price: "From $299/month",
        features: [
          "Physician evaluation and dosing protocol",
          "4–8 week supply of pharmacy‑grade BPC‑157",
          "Injection supplies and training",
          "Monthly check‑in and protocol adjustment"
        ]
      },
      {
        name: "Sermorelin Therapy",
        price: "From $349/month",
        features: [
          "Comprehensive hormone panel",
          "Personalized Sermorelin dosing",
          "Ongoing monitoring and adjustments",
          "Integration with TRT if applicable"
        ]
      },
      {
        name: "Stem Cell Therapy",
        price: "Custom Quote",
        features: [
          "In‑person evaluation and imaging review",
          "Customized treatment plan",
          "Procedure performed in‑office",
          "Post‑procedure rehabilitation protocol"
        ]
      }
    ]
  },
  faqs: [
    {
      question: "Are peptides safe?",
      answer: "When prescribed and monitored by a qualified physician, peptides have a strong safety profile. At The TRoom, we only use peptides from licensed US compounding pharmacies and monitor your response throughout treatment."
    },
    {
      question: "How are peptides administered?",
      answer: "Most peptides are administered via subcutaneous injection (small needle under the skin). We provide thorough training, and many men find the process quick and virtually painless."
    },
    {
      question: "Will peptides show up on a drug test?",
      answer: "Peptides are not banned substances in standard employment drug tests. However, some peptides are prohibited in competitive sports. If you're an athlete, we can design a protocol that's compliant with your sport's regulations."
    },
    {
      question: "How long before I see results?",
      answer: "Most men notice improved sleep and recovery within 2–3 weeks. Body composition changes typically appear by week 6–8. Injury healing timelines vary based on the severity and type of injury."
    },
    {
      question: "Can I combine peptides with TRT?",
      answer: "Yes, many men benefit from combining peptide therapy with testosterone optimization. We often design integrated protocols that address multiple aspects of performance and recovery."
    },
    {
      question: "Are peptides legal?",
      answer: "Peptides prescribed by a licensed physician for a specific medical purpose are legal. We do not support or provide peptides for research-only or non-medical use."
    }
  ],
  cta: {
    title: "Ready to Explore Peptide Therapy?",
    description: "Book your consultation with Dr. Vaidya to discuss whether peptides and regenerative therapies are right for your goals.",
    primaryCta: "Book Your Consultation",
    secondaryCta: "Call (919) 555‑1234"
  }
};

export default function PeptideTherapy() {
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
                href="#symptom-checker" 
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

      {/* BPC-157 Section */}
      <section id="bpc157" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0a0a0b]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Peptide Therapy</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.bpc157.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.bpc157.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">What is BPC‑157?</h3>
              <p className="text-[#888888] leading-relaxed">{serviceData.bpc157.whatIs}</p>
            </div>
            <div className="bg-[#0f0f10] p-6 border border-[#2a2a2a]">
              <h3 className="text-lg font-semibold text-[#b59766] mb-4">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                {serviceData.bpc157.quickFacts.map((fact, i) => (
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
              {serviceData.bpc157.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-[#0f0f10] border border-[#2a2a2a]">
                  <Check className="w-5 h-5 text-[#b59766] flex-shrink-0 mt-0.5" />
                  <span className="text-[#888888] text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300 mt-12 overflow-x-auto">
            <h3 className="text-xl font-semibold text-[#e8e6e3] mb-6">BPC‑157 at The TRoom vs. Online Sources</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#2a2a2a]">
                  {serviceData.bpc157.comparison.headers.map((header, i) => (
                    <th key={i} className={`text-left p-4 ${i === 0 ? 'text-[#e8e6e3]' : 'text-[#b59766]'}`}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {serviceData.bpc157.comparison.rows.map((row, i) => (
                  <tr key={i} className="border-b border-[#1a1a1a]">
                    {row.map((cell, j) => (
                      <td key={j} className={`p-4 ${j === 0 ? 'text-[#888888] font-medium' : 'text-[#888888]'}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sermorelin Section */}
      <section id="sermorelin" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0f0f10]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Growth Hormone Optimization</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.sermorelin.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.sermorelin.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">What is Sermorelin?</h3>
              <p className="text-[#888888] leading-relaxed">{serviceData.sermorelin.whatIs}</p>
            </div>
            <div className="bg-[#0a0a0b] p-6 border border-[#2a2a2a]">
              <h3 className="text-lg font-semibold text-[#b59766] mb-4">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                {serviceData.sermorelin.quickFacts.map((fact, i) => (
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
              {serviceData.sermorelin.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-[#0a0a0b] border border-[#2a2a2a]">
                  <Check className="w-5 h-5 text-[#b59766] flex-shrink-0 mt-0.5" />
                  <span className="text-[#888888] text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TB-500 Section */}
      <section id="tb500" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0a0a0b]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Tissue Regeneration</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.tb500.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.tb500.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">What is TB‑500?</h3>
              <p className="text-[#888888] leading-relaxed">{serviceData.tb500.whatIs}</p>
            </div>
            <div className="bg-[#0f0f10] p-6 border border-[#2a2a2a]">
              <h3 className="text-lg font-semibold text-[#b59766] mb-4">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                {serviceData.tb500.quickFacts.map((fact, i) => (
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
            <div className="grid sm:grid-cols-2 gap-4">
              {serviceData.tb500.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-[#0f0f10] border border-[#2a2a2a]">
                  <Check className="w-5 h-5 text-[#b59766] flex-shrink-0 mt-0.5" />
                  <span className="text-[#888888] text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stem Cell Section */}
      <section id="stemcell" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0f0f10]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Advanced Regenerative Medicine</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.stemcell.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.stemcell.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12">
            <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">What is Stem Cell & Exosome Therapy?</h3>
            <p className="text-[#888888] leading-relaxed max-w-3xl">{serviceData.stemcell.whatIs}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 mt-12 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-6">Common Applications</h3>
              <ul className="space-y-3">
                {serviceData.stemcell.conditions.map((condition, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#b59766] flex-shrink-0 mt-0.5" />
                    <span className="text-[#888888]">{condition}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-6">Key Benefits</h3>
              <ul className="space-y-3">
                {serviceData.stemcell.benefits.map((benefit, i) => (
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
            <Link to="/services/sexual-health" className="text-[#888888] hover:text-[#b59766] transition-colors">Sexual Health</Link>
            <Link to="/services/weight-loss" className="text-[#888888] hover:text-[#b59766] transition-colors">Weight Loss</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
