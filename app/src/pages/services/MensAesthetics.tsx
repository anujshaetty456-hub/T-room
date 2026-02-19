import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star, GraduationCap, BarChart3, Trophy, Phone } from 'lucide-react';

const serviceData = {
  meta: {
    title: "Men's Aesthetics | Botox, Fillers, Skin Rejuvenation | The TRoom Raleigh NC",
    description: "Look refreshed, not done. Men's aesthetic treatments at The TRoom in Raleigh, NC. Botox, dermal fillers, and skin rejuvenation designed specifically for masculine features under Dr. Bhavna Vaidya, MD."
  },
  hero: {
    eyebrow: "PHYSICIAN‑SUPERVISED AESTHETICS",
    h1: "Look Like You. Better.",
    subheadline: "Men's aesthetics isn't about looking different—it's about looking refreshed, well‑rested, and confident. Our approach enhances your masculine features while keeping you looking natural.",
    supportText: "At The TRoom, all aesthetic treatments are performed under the supervision of Dr. Bhavna Vaidya, a board‑certified physician with extensive experience in men's aesthetics. As the men's health sister brand of Regenesis MD—Raleigh's Top MedSpa 2025—we understand the unique anatomical and aesthetic needs of male patients.",
    primaryCta: "Book Your Aesthetic Consultation",
    secondaryCta: "Explore Treatments"
  },
  trustBlocks: [
    {
      icon: GraduationCap,
      title: "Board‑Certified MD",
      content: "Not an aesthetician or nurse injector working alone. Dr. Bhavna Vaidya oversees all treatments with medical precision and artistic judgment."
    },
    {
      icon: BarChart3,
      title: "Masculine‑Focused Approach",
      content: "We understand male facial anatomy and aesthetics. Our treatments enhance masculine features—never feminize or over‑treat."
    },
    {
      icon: Trophy,
      title: "Sister Brand of Regenesis MD",
      content: "The TRoom is the dedicated men's aesthetics division of Regenesis MD, Raleigh's Top MedSpa 2025, known for natural, refined results."
    }
  ],
  executiveVIP: {
    title: "EXECUTIVE AESTHETICS",
    subtitle: "For Professionals Who Need to Look Their Best",
    benefits: [
      "Discreet, private consultation and treatment rooms",
      "Flexible scheduling including early morning and evening appointments",
      "Natural results that enhance without looking 'done'",
      "Minimal downtime protocols for busy schedules",
      "Comprehensive treatment plans addressing multiple concerns"
    ],
    timeline: "Most treatments show results within days to weeks, with optimal outcomes achieved through a personalized treatment plan.",
    cta: "Schedule Executive Consult"
  },
  whatWeTreat: {
    intro: "Men come to The TRoom for aesthetics when they want to look as good as they feel—refreshed, confident, and competitive.",
    problems: [
      "Forehead lines and frown lines that make you look angry or tired",
      "Crow's feet and under‑eye concerns",
      "Loss of jawline definition and facial volume",
      "Uneven skin tone, texture issues, and signs of aging",
      " desire to maintain a competitive, youthful appearance"
    ],
    reassurance: "If you're concerned about any of these, a consultation can help you understand which treatments are right for your goals."
  },
  serviceMenu: [
    { name: "Botox for Men (Brotox)", anchor: "botox" },
    { name: "Dermal Fillers", anchor: "fillers" },
    { name: "Skin Rejuvenation", anchor: "skin" },
    { name: "Laser Treatments", anchor: "laser" },
    { name: "Facial Contouring", anchor: "contouring" }
  ],
  botox: {
    title: "Botox for Men (Brotox)",
    subtitle: "Smooth wrinkles and lines while maintaining natural expression—no frozen look, just a refreshed appearance.",
    whatIs: "Botox is a purified protein that temporarily relaxes the muscles that cause wrinkles. For men, the technique and dosing are different—we preserve masculine features and natural movement.",
    treatmentAreas: [
      "Forehead lines—horizontal lines across the forehead",
      "Frown lines (the '11s')—vertical lines between the brows",
      "Crow's feet—lines around the outer eyes",
      "Brow lift—subtle elevation for a more alert appearance"
    ],
    benefits: [
      "Reduced appearance of wrinkles and fine lines",
      "More relaxed, approachable expression",
      "Prevention of deeper line formation",
      "Quick treatment with no downtime",
      "Results last 3–4 months"
    ],
    whatToExpect: [
      "Consultation to discuss your goals and assess your facial anatomy",
      "Treatment takes 10–20 minutes",
      "Minimal discomfort—most men describe it as a small pinch",
      "Results begin to appear in 3–5 days, full effect by 2 weeks",
      "Return to normal activities immediately"
    ]
  },
  fillers: {
    title: "Dermal Fillers for Men",
    subtitle: "Restore volume, define contours, and enhance masculine features with precision filler placement.",
    whatIs: "Dermal fillers are gel‑like substances that add volume beneath the skin. For men, strategic placement can enhance the jawline, restore mid‑face volume, and address under‑eye hollows—while maintaining a natural, masculine appearance.",
    treatmentAreas: [
      "Jawline enhancement—stronger, more defined jaw",
      "Chin augmentation—improved projection and balance",
      "Under‑eye hollows—reduced tired appearance",
      "Nasolabial folds—smoothed lines from nose to mouth",
      "Cheek volume—restored youthful contours"
    ],
    benefits: [
      "Immediate, visible results",
      "Enhanced masculine facial contours",
      "Restored volume lost with age",
      "Natural appearance when done correctly",
      "Results last 6–18 months depending on the product"
    ],
    whatToExpect: [
      "Consultation to design your treatment plan",
      "Treatment takes 30–60 minutes depending on areas",
      "Topical numbing for comfort",
      "Possible mild swelling or bruising for a few days",
      "Results visible immediately, optimal at 2 weeks"
    ]
  },
  skin: {
    title: "Skin Rejuvenation for Men",
    subtitle: "Improve skin texture, tone, and overall appearance with treatments designed for men's skin.",
    whatIs: "Men's skin is different—thicker, oilier, and with different aging patterns. Our skin rejuvenation treatments are tailored to address these unique characteristics.",
    treatments: [
      {
        name: "Chemical Peels",
        description: "Exfoliate and renew skin for improved texture and tone. We offer various strengths based on your needs and downtime preferences.",
        bestFor: "Uneven skin tone, rough texture, fine lines"
      },
      {
        name: "Microneedling",
        description: "Stimulate collagen production for firmer, smoother skin. Can be combined with PRP for enhanced results.",
        bestFor: "Acne scars, fine lines, overall skin quality"
      },
      {
        name: "Medical‑Grade Skincare",
        description: "Professional‑strength products for daily use. Customized regimens based on your skin type and concerns.",
        bestFor: "Daily maintenance, prevention, addressing specific concerns"
      }
    ]
  },
  laser: {
    title: "Laser Treatments for Men",
    subtitle: "Address multiple concerns with advanced laser technology—from hair removal to skin resurfacing.",
    treatments: [
      {
        name: "Laser Hair Removal",
        description: "Permanent reduction of unwanted hair on the back, chest, shoulders, neck, or other areas.",
        bestFor: "Unwanted body hair, ingrown hairs, razor bumps"
      },
      {
        name: "Laser Skin Resurfacing",
        description: "Improve skin texture, reduce scars, and address signs of aging with fractional laser technology.",
        bestFor: "Acne scars, sun damage, fine lines, uneven texture"
      },
      {
        name: "IPL Photofacial",
        description: "Target sun damage, age spots, and redness for more even skin tone.",
        bestFor: "Sun spots, redness, uneven pigmentation"
      }
    ]
  },
  contouring: {
    title: "Facial Contouring for Men",
    subtitle: "Enhance your natural bone structure and masculine features with a comprehensive approach.",
    whatIs: "Facial contouring combines multiple treatments—fillers, Botox, and sometimes energy‑based devices—to enhance masculine features like a strong jawline, defined chin, and balanced proportions.",
    approach: [
      "Comprehensive facial assessment and photography",
      "Customized treatment plan addressing your specific goals",
      "Strategic use of fillers for structure and definition",
      "Botox for muscle relaxation and brow positioning",
      "Maintenance plan to preserve and enhance results"
    ]
  },
  pricing: {
    title: "Aesthetic Treatment Pricing",
    description: "Pricing varies based on the specific treatments, products used, and areas treated. During your consultation, we'll provide a detailed quote for your personalized plan.",
    tiers: [
      {
        name: "Botox",
        price: "From $12/unit",
        features: [
          "Physician‑supervised treatment",
          "Masculine‑focused technique",
          "Typical treatment: 40–60 units",
          "Results last 3–4 months"
        ]
      },
      {
        name: "Dermal Fillers",
        price: "From $699/syringe",
        features: [
          "Premium filler products",
          "Strategic placement for natural results",
          "Results last 6–18 months",
          "Minimal downtime"
        ]
      },
      {
        name: "Skin Rejuvenation Package",
        price: "From $499",
        features: [
          "Customized treatment plan",
          "Combination of treatments",
          "Medical‑grade skincare included",
          "Package savings"
        ]
      }
    ]
  },
  faqs: [
    {
      question: "Will people know I had work done?",
      answer: "When performed by an experienced provider who understands male aesthetics, treatments should look natural. Our goal is for people to notice you look refreshed—not to wonder what you had done."
    },
    {
      question: "Is there downtime?",
      answer: "Most aesthetic treatments have minimal to no downtime. Botox has none—you can return to work immediately. Fillers may have mild swelling or bruising for a few days. We'll discuss downtime for each treatment during your consultation."
    },
    {
      question: "How long do results last?",
      answer: "Botox typically lasts 3–4 months. Fillers last 6–18 months depending on the product and area treated. Skin rejuvenation results are cumulative and maintained with proper skincare and follow‑up treatments."
    },
    {
      question: "Does it hurt?",
      answer: "Most men find aesthetic treatments very tolerable. Botox feels like small pinches. Fillers involve more sensation but we use numbing to minimize discomfort. We'll ensure you're comfortable throughout."
    },
    {
      question: "How is men's aesthetics different?",
      answer: "Men have different facial anatomy, muscle mass, and aesthetic goals. Our approach preserves masculine features—strong brows, defined jawline, natural expressions—while addressing signs of aging."
    },
    {
      question: "Can I combine treatments?",
      answer: "Absolutely. Many men benefit from combining treatments—like Botox for upper face wrinkles and fillers for jawline definition. We'll design an integrated plan during your consultation."
    }
  ],
  cta: {
    title: "Ready to Explore Men's Aesthetics?",
    description: "Book your consultation with Dr. Vaidya to discuss which aesthetic treatments are right for your goals.",
    primaryCta: "Book Your Consultation",
    secondaryCta: "Call (919) 555‑1234"
  }
};

export default function MensAesthetics() {
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
                href="#botox" 
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

      {/* Botox Section */}
      <section id="botox" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0a0a0b]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Wrinkle Reduction</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.botox.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.botox.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12">
            <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">What is Botox for Men?</h3>
            <p className="text-[#888888] leading-relaxed max-w-3xl">{serviceData.botox.whatIs}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 mt-12 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">Treatment Areas</h3>
              <ul className="space-y-2">
                {serviceData.botox.treatmentAreas.map((area, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#b59766] flex-shrink-0 mt-0.5" />
                    <span className="text-[#888888]">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">Benefits</h3>
              <ul className="space-y-2">
                {serviceData.botox.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#b59766] flex-shrink-0 mt-0.5" />
                    <span className="text-[#888888]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300 mt-12">
            <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">What to Expect</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {serviceData.botox.whatToExpect.map((step, i) => (
                <div key={i} className="p-4 bg-[#0f0f10] border border-[#2a2a2a]">
                  <span className="text-[#b59766] text-2xl font-light">0{i + 1}</span>
                  <p className="text-[#888888] text-sm mt-2">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fillers Section */}
      <section id="fillers" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0f0f10]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Volume & Contour</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.fillers.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.fillers.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12">
            <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">What are Dermal Fillers?</h3>
            <p className="text-[#888888] leading-relaxed max-w-3xl">{serviceData.fillers.whatIs}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 mt-12 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">Treatment Areas</h3>
              <ul className="space-y-2">
                {serviceData.fillers.treatmentAreas.map((area, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#b59766] flex-shrink-0 mt-0.5" />
                    <span className="text-[#888888]">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">Benefits</h3>
              <ul className="space-y-2">
                {serviceData.fillers.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#b59766] flex-shrink-0 mt-0.5" />
                    <span className="text-[#888888]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300 mt-12">
            <h3 className="text-xl font-semibold text-[#e8e6e3] mb-4">What to Expect</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {serviceData.fillers.whatToExpect.map((step, i) => (
                <div key={i} className="p-4 bg-[#0a0a0b] border border-[#2a2a2a]">
                  <span className="text-[#b59766] text-2xl font-light">0{i + 1}</span>
                  <p className="text-[#888888] text-sm mt-2">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skin Rejuvenation Section */}
      <section id="skin" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0a0a0b]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Skin Quality</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.skin.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.skin.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12">
            <p className="text-[#888888] leading-relaxed max-w-3xl">{serviceData.skin.whatIs}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 mt-12 grid md:grid-cols-3 gap-6">
            {serviceData.skin.treatments.map((treatment, i) => (
              <div key={i} className="p-6 bg-[#0f0f10] border border-[#2a2a2a]">
                <h3 className="text-lg font-semibold text-[#b59766] mb-2">{treatment.name}</h3>
                <p className="text-[#888888] text-sm mb-4">{treatment.description}</p>
                <p className="text-[#e8e6e3] text-sm"><span className="text-[#b59766]">Best For:</span> {treatment.bestFor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laser Section */}
      <section id="laser" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0f0f10]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Advanced Technology</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.laser.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.laser.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12 grid md:grid-cols-3 gap-6">
            {serviceData.laser.treatments.map((treatment, i) => (
              <div key={i} className="p-6 bg-[#0a0a0b] border border-[#2a2a2a]">
                <h3 className="text-lg font-semibold text-[#b59766] mb-2">{treatment.name}</h3>
                <p className="text-[#888888] text-sm mb-4">{treatment.description}</p>
                <p className="text-[#e8e6e3] text-sm"><span className="text-[#b59766]">Best For:</span> {treatment.bestFor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facial Contouring Section */}
      <section id="contouring" className="py-24 px-6 sm:px-8 lg:px-16 xl:px-24 bg-[#0a0a0b]">
        <div className="max-w-5xl mx-auto">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#b59766] text-sm font-semibold tracking-[0.2em] uppercase">Comprehensive Approach</span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#e8e6e3] mt-4">{serviceData.contouring.title}</h2>
            <p className="text-xl text-[#888888] mt-4">{serviceData.contouring.subtitle}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 mt-12">
            <p className="text-[#888888] leading-relaxed max-w-3xl">{serviceData.contouring.whatIs}</p>
          </div>

          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 mt-12">
            <h3 className="text-xl font-semibold text-[#e8e6e3] mb-6">Our Approach</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceData.contouring.approach.map((step, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-[#0f0f10] border border-[#2a2a2a]">
                  <span className="w-6 h-6 bg-[#b59766]/20 text-[#b59766] text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                  <span className="text-[#888888] text-sm">{step}</span>
                </div>
              ))}
            </div>
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
            <Link to="/services/hair-restoration" className="text-[#888888] hover:text-[#b59766] transition-colors">Hair Restoration</Link>
            <Link to="/services/weight-loss" className="text-[#888888] hover:text-[#b59766] transition-colors">Weight Loss</Link>
            <Link to="/services/hormone-metabolic-health" className="text-[#888888] hover:text-[#b59766] transition-colors">Hormone Health</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
