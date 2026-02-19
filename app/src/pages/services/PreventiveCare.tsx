import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star, GraduationCap, BarChart3, Trophy, Phone } from 'lucide-react';

const serviceData = {
  meta: {
    title: "Preventive & Diagnostic Care for Men | Health Screenings | The TRoom Raleigh NC",
    description: "Stay ahead of health issues with comprehensive preventive care at The TRoom in Raleigh, NC. Advanced diagnostics, health screenings, and proactive wellness for men under Dr. Bhavna Vaidya, MD."
  },
  hero: {
    eyebrow: "PROACTIVE MEN'S HEALTH",
    h1: "Know Your Numbers. Own Your Health.",
    subheadline: "Most men wait until something's wrong to see a doctor. The smart ones get ahead of problems before they start. Our preventive care helps you catch issues early—when they're easiest to treat.",
    supportText: "At The TRoom, preventive and diagnostic care is led by Dr. Bhavna Vaidya, a board‑certified physician with over 20 years of experience in men's health. As the men's health sister brand of Regenesis MD—Raleigh's Top MedSpa 2025—we combine comprehensive screening with personalized wellness planning to keep you performing at your best.",
    primaryCta: "Book Your Health Screening",
    secondaryCta: "Explore Screenings"
  },
  trustBlocks: [
    {
      icon: GraduationCap,
      title: "Board‑Certified MD",
      content: "Not a screening clinic with rotating staff. Dr. Bhavna Vaidya personally reviews your results and creates your wellness plan."
    },
    {
      icon: BarChart3,
      title: "Comprehensive Screening",
      content: "We go beyond basic physicals to assess hormones, metabolism, cardiovascular risk, and more—giving you a complete picture."
    },
    {
      icon: Trophy,
      title: "Sister Brand of Regenesis MD",
      content: "The TRoom is the dedicated men's health division of Regenesis MD, Raleigh's Top MedSpa 2025, known for thorough, personalized care."
    }
  ],
  executiveVIP: {
    title: "EXECUTIVE HEALTH PROGRAM",
    subtitle: "For Leaders Who Take Their Health Seriously",
    benefits: [
      "Comprehensive half‑day health assessment",
      "All lab work completed on‑site or via concierge service",
      "Same‑day results review with Dr. Vaidya",
      "Personalized wellness roadmap with actionable steps",
      "Priority follow‑up and ongoing monitoring"
    ],
    timeline: "Complete assessment and results review in one visit. Ongoing monitoring and optimization based on your personalized plan.",
    cta: "Schedule Executive Assessment"
  },
  whatWeTreat: {
    intro: "Men come to The TRoom for preventive care when they want to stay ahead of health issues—not just react to them.",
    problems: [
      "Need for comprehensive annual physical beyond what insurance covers",
      "Family history of heart disease, diabetes, or cancer",
      "Desire to optimize health and performance proactively",
      "Concerns about hormone levels, metabolism, or energy",
      "Wanting a baseline for tracking health over time"
    ],
    reassurance: "Preventive care is an investment in your future. The earlier you identify and address issues, the better your long‑term outcomes."
  },
  serviceMenu: [
    { name: "Comprehensive Health Screening", anchor: "screening" },
    { name: "Hormone & Metabolic Panel", anchor: "hormones" },
    { name: "Cardiovascular Risk Assessment", anchor: "cardio" },
    { name: "Cancer Screening", anchor: "cancer" },
    { name: "Nutritional Assessment", anchor: "nutrition" },
    { name: "Genetic Testing", anchor: "genetic" }
  ],
  screening: {
    title: "Comprehensive Health Screening",
    subtitle: "A complete picture of your current health status—beyond what a standard physical provides.",
    whatIs: "Our comprehensive health screening includes a detailed medical history review, physical examination, extensive lab work, and body composition analysis. We look at markers that standard physicals often miss.",
    components: [
      "Detailed medical history and lifestyle review",
      "Comprehensive physical examination",
      "Complete blood count (CBC)",
      "Comprehensive metabolic panel",
      "Lipid panel with advanced markers",
      "Thyroid function tests",
      "Inflammatory markers",
      "Vitamin and mineral levels",
      "Body composition analysis",
      "Blood pressure and cardiovascular assessment"
    ],
    benefits: [
      "Early detection of potential health issues",
      "Baseline for tracking health changes over time",
      "Identification of risk factors before symptoms appear",
      "Personalized recommendations for optimization",
      "Peace of mind knowing your health status"
    ]
  },
  hormones: {
    title: "Hormone & Metabolic Panel",
    subtitle: "Hormones drive everything from energy and mood to body composition and sexual function. Know where you stand.",
    whatIs: "Our hormone and metabolic panel assesses the key hormones and metabolic markers that affect men's health—including testosterone, thyroid, cortisol, insulin, and more.",
    markers: [
      { name: "Testosterone Panel", includes: "Total testosterone, free testosterone, SHBG, estradiol" },
      { name: "Thyroid Function", includes: "TSH, free T3, free T4, reverse T3" },
      { name: "Metabolic Markers", includes: "Glucose, insulin, HbA1c, lipid panel" },
      { name: "Adrenal Function", includes: "Cortisol (AM/PM), DHEA‑S" },
      { name: "Growth Factors", includes: "IGF‑1, growth hormone markers" },
      { name: "Nutrient Levels", includes: "Vitamin D, B12, magnesium, zinc, iron panel" }
    ]
  },
  cardio: {
    title: "Cardiovascular Risk Assessment",
    subtitle: "Heart disease is the #1 killer of men. Know your risk and take action to protect your heart.",
    whatIs: "Our cardiovascular risk assessment goes beyond basic cholesterol to evaluate multiple risk factors for heart disease and stroke—helping you understand your risk and take preventive action.",
    components: [
      "Advanced lipid panel (including particle size)",
      "ApoB and Lp(a) cardiovascular risk markers",
      "Homocysteine and inflammatory markers",
      "Blood pressure assessment",
      "Body composition and waist circumference",
      "Family history and lifestyle risk factor review",
      "Optional: Coronary calcium score referral"
    ],
    benefits: [
      "Comprehensive understanding of heart disease risk",
      "Early identification of issues before symptoms",
      "Personalized prevention strategies",
      "Monitoring of treatment effectiveness",
      "Peace of mind or early warning—both valuable"
    ]
  },
  cancer: {
    title: "Cancer Screening",
    subtitle: "Early detection saves lives. We help you stay on top of recommended cancer screenings.",
    whatIs: "Our cancer screening services help detect cancer early when it's most treatable. We follow evidence‑based guidelines and personalize screening based on your age, family history, and risk factors.",
    screenings: [
      {
        name: "Prostate Cancer Screening",
        description: "PSA testing and digital rectal exam based on age and risk factors",
        recommended: "Men 50+ (earlier with family history)"
      },
      {
        name: "Colorectal Cancer Screening",
        description: "Referral for colonoscopy or stool‑based testing",
        recommended: "Men 45+"
      },
      {
        name: "Testicular Exam",
        description: "Physical exam and self‑exam education",
        recommended: "All men, especially 15–35"
      },
      {
        name: "Skin Cancer Screening",
        description: "Full‑body skin exam for suspicious lesions",
        recommended: "Annually for all men"
      }
    ]
  },
  nutrition: {
    title: "Nutritional Assessment",
    subtitle: "Optimize your diet and supplementation based on your individual needs and goals.",
    whatIs: "Our nutritional assessment evaluates your current diet, identifies deficiencies, and provides personalized recommendations for optimization—whether your goal is performance, weight management, or longevity.",
    components: [
      "Dietary intake review and analysis",
      "Micronutrient testing (vitamins, minerals, antioxidants)",
      "Food sensitivity testing (optional)",
      "Body composition analysis",
      "Metabolic rate assessment (optional)",
      "Personalized nutrition recommendations"
    ]
  },
  genetic: {
    title: "Genetic Testing",
    subtitle: "Understand your genetic predispositions and personalize your health strategy.",
    whatIs: "Genetic testing can reveal predispositions to certain health conditions, medication responses, and optimal nutrition and exercise strategies. We offer targeted genetic panels to help personalize your wellness plan.",
    panels: [
      {
        name: "Health Risk Panel",
        description: "Identifies genetic predispositions to various health conditions"
      },
      {
        name: "Pharmacogenomics",
        description: "How your genes affect medication response—helps optimize prescriptions"
      },
      {
        name: "Nutrigenomics",
        description: "How your genes affect nutrition and metabolism—personalize your diet"
      },
      {
        name: "Fitness Genetics",
        description: "Optimal exercise types based on your genetic profile"
      }
    ]
  },
  pricing: {
    title: "Preventive Care Pricing",
    description: "Investing in preventive care now can save significant costs and health issues down the road. We offer transparent pricing for all our screening services.",
    tiers: [
      {
        name: "Essential Screening",
        price: "From $499",
        features: [
          "Comprehensive consultation with Dr. Vaidya",
          "Basic hormone and metabolic panel",
          "Lipid panel",
          "Body composition analysis",
          "Personalized wellness recommendations"
        ]
      },
      {
        name: "Comprehensive Assessment",
        price: "From $999",
        features: [
          "Everything in Essential",
          "Advanced hormone panel",
          "Cardiovascular risk markers",
          "Nutritional assessment",
          "Detailed wellness roadmap"
        ]
      },
      {
        name: "Executive Health Program",
        price: "From $2,499",
        features: [
          "Half‑day comprehensive assessment",
          "All advanced lab panels",
          "Genetic testing included",
          "Same‑day results review",
          "1‑year follow‑up plan"
        ]
      }
    ]
  },
  faqs: [
    {
      question: "How often should I get a comprehensive health screening?",
      answer: "We recommend a comprehensive screening annually for men over 35, or earlier if you have risk factors. Some markers may be checked more frequently based on your individual situation."
    },
    {
      question: "Is this covered by insurance?",
      answer: "Many of our advanced screenings go beyond what insurance typically covers. We provide transparent pricing and can provide documentation for HSA/FSA reimbursement when applicable."
    },
    {
      question: "How is this different from my annual physical?",
      answer: "A standard physical is often brief and limited in scope. Our comprehensive screening includes extensive lab work, advanced markers, and dedicated time with the physician to review results and create a personalized plan."
    },
    {
      question: "What if you find something concerning?",
      answer: "If we identify any concerning findings, Dr. Vaidya will discuss them with you and recommend appropriate next steps—whether that's lifestyle changes, treatment, or referral to a specialist."
    },
    {
      question: "Can I combine this with other treatments?",
      answer: "Absolutely. Many men combine their preventive screening with hormone optimization, aesthetic treatments, or other services. We can design an integrated plan."
    },
    {
      question: "How long does the screening take?",
      answer: "The initial consultation and blood draw typically take 60–90 minutes. Results are usually available within 1–2 weeks, followed by a comprehensive results review appointment."
    }
  ],
  cta: {
    title: "Ready to Take Control of Your Health?",
    description: "Book your comprehensive health screening with Dr. Vaidya and get a complete picture of your health status.",
    primaryCta: "Book Your Screening",
    secondaryCta: "Call (919) 555‑1234"
  }
};

export default function PreventiveCare() {
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
                href="#screening" 
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

      {/* Comprehensive Screening Section */}
      <section id="screening" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0a0a0b]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Complete Assessment</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.screening.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.screening.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12">
            <p className="text-[#888888] leading-relaxed max-w-3xl">{serviceData.screening.whatIs}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 mt-12 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">Screening Components</h3>
              <ul className="space-y-2">
                {serviceData.screening.components.map((component, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#b59766] flex-shrink-0 mt-0.5" />
                    <span className="text-[#888888]">{component}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">Benefits</h3>
              <ul className="space-y-2">
                {serviceData.screening.benefits.map((benefit, i) => (
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

      {/* Hormones Section */}
      <section id="hormones" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0f0f10]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Hormonal Health</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.hormones.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.hormones.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12">
            <p className="text-[#888888] leading-relaxed max-w-3xl">{serviceData.hormones.whatIs}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceData.hormones.markers.map((marker, i) => (
              <div key={i} className="p-4 bg-[#0a0a0b] border border-[#2a2a2a]">
                <h3 className="text-[#b59766] font-medium mb-2">{marker.name}</h3>
                <p className="text-[#888888] text-sm">{marker.includes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cardio Section */}
      <section id="cardio" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0a0a0b]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Heart Health</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.cardio.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.cardio.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12">
            <p className="text-[#888888] leading-relaxed max-w-3xl">{serviceData.cardio.whatIs}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 mt-12 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">Assessment Components</h3>
              <ul className="space-y-2">
                {serviceData.cardio.components.map((component, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#b59766] flex-shrink-0 mt-0.5" />
                    <span className="text-[#888888]">{component}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">Benefits</h3>
              <ul className="space-y-2">
                {serviceData.cardio.benefits.map((benefit, i) => (
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

      {/* Cancer Section */}
      <section id="cancer" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0f0f10]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Early Detection</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.cancer.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.cancer.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12">
            <p className="text-[#888888] leading-relaxed max-w-3xl">{serviceData.cancer.whatIs}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 mt-12 grid sm:grid-cols-2 gap-6">
            {serviceData.cancer.screenings.map((screening, i) => (
              <div key={i} className="p-6 bg-[#0a0a0b] border border-[#2a2a2a]">
                <h3 className="text-lg font-semibold text-[#b59766] mb-2">{screening.name}</h3>
                <p className="text-[#888888] text-sm mb-3">{screening.description}</p>
                <p className="text-[#e8e6e3] text-sm"><span className="text-[#b59766]">Recommended:</span> {screening.recommended}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Section */}
      <section id="nutrition" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0a0a0b]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Nutritional Health</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.nutrition.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.nutrition.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12">
            <p className="text-[#888888] leading-relaxed max-w-3xl">{serviceData.nutrition.whatIs}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 mt-12">
            <h3 className="text-xl font-semibold text-[#e8e6e3] mb-6">Assessment Components</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceData.nutrition.components.map((component, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-[#0f0f10] border border-[#2a2a2a]">
                  <Check className="w-5 h-5 text-[#b59766] flex-shrink-0 mt-0.5" />
                  <span className="text-[#888888] text-sm">{component}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Genetic Section */}
      <section id="genetic" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0f0f10]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Personalized Medicine</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.genetic.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.genetic.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12">
            <p className="text-[#888888] leading-relaxed max-w-3xl">{serviceData.genetic.whatIs}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 mt-12 grid sm:grid-cols-2 gap-6">
            {serviceData.genetic.panels.map((panel, i) => (
              <div key={i} className="p-6 bg-[#0a0a0b] border border-[#2a2a2a]">
                <h3 className="text-lg font-semibold text-[#b59766] mb-2">{panel.name}</h3>
                <p className="text-[#888888] text-sm">{panel.description}</p>
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
            <Link to="/services/weight-loss" className="text-[#888888] hover:text-[#b59766] transition-colors">Weight Loss</Link>
            <Link to="/services/performance-optimization" className="text-[#888888] hover:text-[#b59766] transition-colors">Performance</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
