import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star, GraduationCap, BarChart3, Trophy, Phone } from 'lucide-react';

const serviceData = {
  meta: {
    title: "Hormone & Metabolic Health for Men | Testosterone & Low‑T | The TRoom Raleigh NC",
    description: "Restore energy, muscle, focus, and drive with physician-led hormone and metabolic optimization at The TRoom in Raleigh, NC. Testosterone therapy, Low‑T management, Clomid, and advanced hormone protocols for men under the care of Dr. Bhavna Vaidya, MD."
  },
  hero: {
    eyebrow: "PHYSICIAN‑LED MEN'S HEALTH",
    h1: "You're Not \"Getting Old.\" You're Low.",
    subheadline: "The fatigue. The belly fat. The lost drive. These aren't badges of age—they're symptoms. And they're fixable.",
    supportText: "At The TRoom, men's hormone and metabolic care is led by Dr. Bhavna Vaidya, a board‑certified Family Practice and Anti‑Aging Medicine physician with over 20 years of clinical experience in North Carolina. As the men's health sister brand of Regenesis MD—Raleigh's Top MedSpa 2025—we combine advanced hormone testing, testosterone therapies, and metabolic optimization to help you feel strong, clear‑headed, and confident again.",
    primaryCta: "Book Your Free Hormone Assessment",
    secondaryCta: "Take the 60‑Second Low‑T Quiz"
  },
  trustBlocks: [
    {
      icon: GraduationCap,
      title: "Board‑Certified MD",
      content: "Not a 'clinic director' or salesperson. Dr. Bhavna Vaidya holds board certifications in both Family Practice and Anti‑Aging Medicine, bringing real medical depth to every hormone decision."
    },
    {
      icon: BarChart3,
      title: "20 Years, 10,000+ Patients",
      content: "Dr. Vaidya founded her wellness clinic in North Carolina in 2005 and has treated more than 10,000 patients across the Regenesis MD brand family, with a long track record in functional and anti‑aging care."
    },
    {
      icon: Trophy,
      title: "Sister Brand of Regenesis MD",
      content: "The TRoom is the dedicated men's health and performance arm of Regenesis MD, Raleigh's Top MedSpa 2025, known for personalized, data‑driven wellness programs—not one‑size‑fits‑all packages."
    }
  ],
  executiveVIP: {
    title: "EXECUTIVE HORMONE OPTIMIZATION",
    subtitle: "For RTP Executives & Triangle Business Leaders",
    benefits: [
      "Early (7am) or late (7pm) appointments, designed around your schedule",
      "Concierge lab coordination—whenever possible, we arrange labs to come to you",
      "90‑day transformation protocols with structured monthly check‑ins",
      "Discreet, VIP‑level care with option for private, separate experience on‑site",
      "Same‑day access to results and messaging via secure patient portal"
    ],
    timeline: "Most executives see energy improvements within 3 weeks, with visible body‑recomposition and performance shifts by month 3.",
    cta: "Schedule Executive Consult"
  },
  whatWeTreat: {
    intro: "Men rarely come in asking for 'hormone optimization'—they come in because they are tired of feeling tired, gaining weight, and losing their edge even though their labs keep coming back 'normal.'",
    problems: [
      "Low testosterone (Low‑T) and andropause in men 30–65",
      "Sub‑optimal testosterone with 'normal' lab values but classic symptoms",
      "Metabolic slowdown, weight gain around the midsection, and insulin resistance",
      "Poor recovery from workouts, muscle loss, and decreasing strength",
      "Sleep disruption, mood changes, low motivation, and mental clarity issues"
    ],
    reassurance: "If you recognize several of these, it does not automatically mean you need TRT—but it does mean a proper evaluation with a men's hormone specialist is worth your time."
  },
  serviceMenu: [
    { name: "Testosterone Replacement Therapy (TRT)", anchor: "trt" },
    { name: "Testosterone Optimization", anchor: "optimization" },
    { name: "Low Testosterone (Low‑T) Management", anchor: "low-t" },
    { name: "Clomid Therapy (TRT Alternative)", anchor: "clomid" },
    { name: "Comprehensive Hormone Optimization", anchor: "comprehensive" }
  ],
  trt: {
    title: "Testosterone Replacement Therapy (TRT)",
    subtitle: "TRT at The TRoom is not a one‑size‑fits‑all injection mill—it is a physician‑supervised medical therapy grounded in functional and anti‑aging principles.",
    whatIs: "Testosterone Replacement Therapy is the medically supervised restoration of testosterone levels when a man's body is no longer producing enough on its own, using prescription formulations such as injections or other medically appropriate options.",
    howItWorks: [
      "Comprehensive baseline: total and free testosterone, estradiol, SHBG, thyroid markers, metabolic and inflammatory markers",
      "Personalized dosing: selection of the right dosing strategy and frequency for your goals and lifestyle",
      "Ongoing monitoring: repeat labs and symptom reviews at regular intervals with adjustments as needed",
      "Whole‑health integration: hormone therapy is coordinated with your cardiovascular, metabolic, and prostate health"
    ],
    timeline: [
      { week: "Week 1–2", icon: "🌅", title: "Better Sleep & Morning Energy", desc: "Most men notice improved sleep quality and begin waking more rested. Morning energy starts to return." },
      { week: "Week 3–4", icon: "🔥", title: "Libido Returns, Mood Stabilizes", desc: "Sex drive often improves noticeably. Mood becomes more stable, irritability decreases." },
      { week: "Week 6–8", icon: "💪", title: "Strength Gains, Leaner Appearance", desc: "Workouts feel productive again. Strength and endurance increase, muscle definition improves." },
      { week: "Month 3+", icon: "⚡", title: "Full Transformation", desc: "Sustained energy, consistent strength, stable mood. Many men say, 'I feel like I did 10 years ago.'" }
    ],
    benefits: {
      energy: [
        "More consistent energy throughout the day",
        "Improved libido and sexual performance",
        "Better sleep quality and deeper rest",
        "Increased motivation and drive",
        "Higher stamina for work, family, and life"
      ],
      body: [
        "Better workout recovery and strength gains",
        "Preservation and growth of lean muscle",
        "Reduction in stubborn midsection fat",
        "Improved overall body composition",
        "Faster recovery from minor injuries"
      ],
      mental: [
        "Clearer thinking and sharper focus",
        "More stable mood and emotional resilience",
        "Reduced brain fog and forgetfulness",
        "Better stress tolerance and coping",
        "Improved confidence in how you feel"
      ]
    },
    safety: [
      "Testosterone levels (total and free) every 6–12 weeks",
      "Estradiol (E2) to prevent mood changes or gynecomastia",
      "Hematocrit (blood thickness) to reduce clot risk",
      "PSA (prostate‑specific antigen) every 6–12 months",
      "Blood pressure and cardiovascular markers",
      "Lipid panel (cholesterol and triglycerides)"
    ]
  },
  optimization: {
    title: "Testosterone Optimization (Beyond 'Normal' Labs)",
    content: "Many men in their 30s, 40s, and 50s are told their labs are 'normal' while they feel anything but normal. At The TRoom, testosterone optimization means we look at your full hormone and metabolic picture, consider your age, symptoms, and performance goals, and aim for your personal optimal—not just the bottom of a wide reference range.",
    components: [
      { title: "🔬 Advanced Lab Analysis", items: ["Total and free testosterone", "Estradiol balance and ratios", "Thyroid function (TSH, Free T3, Free T4)", "Cortisol patterns and stress hormones", "Metabolic health markers"] },
      { title: "🏃 Lifestyle Interventions", items: ["Sleep optimization protocols", "Nutrition guidance for hormones", "Targeted supplementation", "Stress‑management strategies"] },
      { title: "💉 Medical Therapies", items: ["TRT when clearly indicated", "Clomid as non‑TRT option", "HCG support where appropriate", "Thyroid optimization"] },
      { title: "🔄 Regenerative Integration", items: ["Peptide therapies", "NAD+ and longevity protocols", "Metabolic support", "Cross‑referral to aesthetics"] }
    ]
  },
  lowT: {
    title: "Low Testosterone (Low‑T) Management",
    symptoms: [
      "Daily fatigue even after a full night's sleep",
      "Reduced sex drive or weaker erections",
      "Loss of strength or muscle despite consistent workouts",
      "Weight gain, especially around the waist",
      "Mood changes, irritability, or feeling 'flat'",
      "Brain fog, trouble concentrating",
      "Decreased motivation and drive",
      "Hot flashes or night sweats"
    ],
    process: [
      { step: "1️⃣", title: "Discovery Consultation", desc: "Real conversation—not a sales pitch. 30–45 minutes focused entirely on you and how you feel." },
      { step: "2️⃣", title: "Comprehensive Testing", desc: "Full hormone and metabolic panel. Typical turnaround is 3–5 business days." },
      { step: "3️⃣", title: "Root‑Cause Plan", desc: "Connect the dots between your numbers and symptoms. Every decision explained by a board‑certified physician." },
      { step: "4️⃣", title: "Ongoing Optimization", desc: "Regular follow‑ups, lab reviews, and protocol adjustments to keep you improving." }
    ]
  },
  clomid: {
    title: "Clomid Therapy (TRT Alternative)",
    content: "Some men want the benefits of better testosterone but are not ready for traditional TRT, especially if fertility is a priority. Clomid therapy can stimulate your own testosterone production when appropriate and medically safe.",
    whatIs: "Clomid is a prescription medication that acts at the level of the pituitary gland, encouraging your body to produce more of its own testosterone. It does not replace testosterone from the outside.",
    whoShouldConsider: [
      "Younger men with mildly low or borderline testosterone levels",
      "Men who are actively trying to conceive or want to preserve fertility",
      "Men who prefer to stimulate natural production rather than replace hormones"
    ],
    comparison: [
      { feature: "Preserves fertility", clomid: true, trt: false },
      { feature: "Affects natural production", clomid: "Stimulates your own", trt: "Suppresses over time" },
      { feature: "Delivery method", clomid: "Oral pill", trt: "Injections / other forms" },
      { feature: "Time to results", clomid: "4–8 weeks", trt: "2–4 weeks" },
      { feature: "Effectiveness (severe Low‑T)", clomid: "Variable", trt: "Typically more robust" }
    ]
  },
  comprehensive: {
    title: "Comprehensive Hormone Optimization for Men",
    content: "Because The TRoom is part of the Regenesis MD family, hormone optimization is never limited to chasing one number. We look at how testosterone, thyroid, cortisol, sleep, nutrition, and metabolism all interact.",
    sections: [
      { title: "🔬 Hormone Balancing", items: ["Testosterone optimization", "Estradiol balance", "Thyroid optimization", "Cortisol management"] },
      { title: "⚖️ Metabolic Support", items: ["Insulin sensitivity strategies", "Weight‑management plans", "Blood sugar control", "Nutritional guidance"] },
      { title: "🧬 Regenerative Tools", items: ["Peptide therapies", "NAD+ therapies", "Stem‑cell options", "Longevity strategies"] },
      { title: "💼 Aesthetics & Confidence", items: ["Men's Botox", "Jawline contouring", "Body sculpting", "Coordinated plan"] }
    ]
  },
  location: {
    address: "8020 Creedmoor Road, North Raleigh 27613",
    commutes: [
      { from: "Research Triangle Park (RTP)", time: "~15 minutes" },
      { from: "Downtown Raleigh", time: "~12 minutes" },
      { from: "Cary", time: "~18 minutes" },
      { from: "Durham", time: "~20 minutes" }
    ]
  },
  firstVisit: [
    { step: "Step 1", title: "Private Consultation", desc: "Confidential, judgment‑free conversation about your symptoms, lifestyle, and goals." },
    { step: "Step 2", title: "Advanced Lab Testing", desc: "Comprehensive hormone and metabolic panel covering all key markers." },
    { step: "Step 3", title: "Physician‑Guided Review", desc: "Dr. Vaidya walks you through your numbers in plain language." },
    { step: "Step 4", title: "Custom Plan Selection", desc: "Together you decide: TRT, Clomid, optimization without hormones, or phased approach." },
    { step: "Step 5", title: "Ongoing Optimization", desc: "Regular check‑ins and protocol refinement as your life and goals evolve." }
  ],
  pricing: {
    ranges: [
      { service: "Initial Consultation", price: "$150–$250" },
      { service: "Comprehensive Lab Panel", price: "$200–$400" },
      { service: "TRT (Monthly)", price: "$250–$400/month" },
      { service: "Clomid Therapy (Monthly)", price: "$100–$200/month" },
      { service: "Follow‑Up Labs (Quarterly)", price: "$150–$300" },
      { service: "Follow‑Up Visits (Quarterly)", price: "$75–$150" }
    ]
  },
  faqs: [
    { q: "What is the difference between TRT and testosterone optimization?", a: "TRT replaces testosterone when your body is no longer producing enough, while testosterone optimization may use TRT, Clomid, lifestyle, and metabolic strategies together to move you from 'barely normal' to your personal optimal." },
    { q: "Is testosterone therapy safe?", a: "When managed by a board‑certified physician who monitors labs such as testosterone, estradiol, hematocrit, PSA, and cardiovascular markers, TRT can be used safely in appropriately selected men with informed consent and ongoing follow‑up." },
    { q: "How long does it take to feel better on TRT?", a: "Many men notice changes in energy, mood, or libido within several weeks, with more visible body‑composition changes appearing over 3–6 months." },
    { q: "Can I stay fertile on hormone treatment?", a: "Options such as Clomid therapy or adding HCG to TRT are considered when preserving fertility is a priority. The best approach is determined after detailed evaluation." },
    { q: "How much does TRT cost in Raleigh?", a: "At The TRoom, TRT typically ranges from $250–$400 per month for medication and ongoing support, with $150–$300 for quarterly lab monitoring. Most men can expect a first‑year investment of $4,500–$7,000." },
    { q: "Do you offer payment plans for TRT?", a: "Yes. We offer membership and payment‑plan options with predictable monthly pricing. You can review available options during your consultation." }
  ]
};

export default function HormoneMetabolicHealth() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [checkedSymptoms, setCheckedSymptoms] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
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

  const toggleSymptom = (index: number) => {
    setCheckedSymptoms(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div ref={sectionRef} className="bg-obsidian min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-graphite to-obsidian" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(ellipse 80% 50% at 80% 50%, rgba(184,146,42,0.15), transparent)'
        }} />
        <div className="relative z-10 w-full px-6 lg:px-12 py-32">
          <div className="max-w-4xl">
            <div className="scroll-reveal flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-gold" />
              <span className="font-condensed text-label font-medium uppercase text-gold tracking-[0.4em]">
                {serviceData.hero.eyebrow}
              </span>
            </div>
            <h1 className="scroll-reveal font-display text-5xl lg:text-7xl text-white-primary leading-tight mb-6">
              {serviceData.hero.h1}
            </h1>
            <p className="scroll-reveal font-display text-2xl lg:text-3xl text-gold-light italic mb-8">
              {serviceData.hero.subheadline}
            </p>
            <p className="scroll-reveal font-body text-lg text-ash leading-relaxed mb-10 max-w-2xl">
              {serviceData.hero.supportText}
            </p>
            <div className="scroll-reveal flex flex-wrap gap-4 mb-8">
              <a href="https://regenesismd.com/coming-soon" target="_blank" rel="noopener noreferrer" className="btn-gold">
                {serviceData.hero.primaryCta}
              </a>
              <a href="https://regenesismd.com/coming-soon" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                {serviceData.hero.secondaryCta}
              </a>
            </div>
            <div className="scroll-reveal flex flex-wrap gap-6 text-sm text-silver">
              <span className="flex items-center gap-2"><Check size={16} className="text-gold" /> Board‑Certified MD</span>
              <span className="flex items-center gap-2"><Check size={16} className="text-gold" /> 20+ Years Experience</span>
              <span className="flex items-center gap-2"><Check size={16} className="text-gold" /> 10,000+ Patients Treated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Authority Block */}
      <section className="py-20 bg-charcoal">
        <div className="w-full px-6 lg:px-12">
          <h2 className="scroll-reveal font-display text-3xl text-white-primary text-center mb-12">
            Physician‑Led, Not Franchise‑Run
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {serviceData.trustBlocks.map((block, idx) => (
              <div key={idx} className="scroll-reveal bg-graphite p-8 border border-muted-border">
                <block.icon size={32} className="text-gold mb-4" />
                <h3 className="font-condensed text-lg font-semibold uppercase text-white-primary mb-3">{block.title}</h3>
                <p className="font-body text-sm text-ash leading-relaxed">{block.content}</p>
              </div>
            ))}
          </div>
          <p className="scroll-reveal text-center text-ash text-sm mt-8 max-w-3xl mx-auto">
            When digital assistants and review platforms look for a trusted men's hormone doctor in Raleigh, they see something unique: a board‑certified physician with decades of experience, award‑winning practices, and an established local presence.
          </p>
          
          {/* Feature Image */}
          <div className="scroll-reveal max-w-3xl mx-auto mt-12">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img 
                src="/images/uploaded/image(7).png" 
                alt="Fit man in starting position - ready for transformation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Executive VIP Callout */}
      <section className="py-16 bg-graphite">
        <div className="w-full px-6 lg:px-12">
          <div className="scroll-reveal max-w-4xl mx-auto bg-steel border-l-4 border-gold p-8 lg:p-12">
            <div className="flex items-center gap-2 mb-4">
              <Star size={20} className="text-gold fill-gold" />
              <span className="font-condensed text-label font-semibold uppercase text-gold tracking-[0.2em]">{serviceData.executiveVIP.title}</span>
            </div>
            <h3 className="font-display text-2xl text-white-primary mb-2">{serviceData.executiveVIP.subtitle}</h3>
            <p className="text-ash text-sm mb-6">Your calendar is packed. Your protocol shouldn't be.</p>
            <ul className="space-y-3 mb-6">
              {serviceData.executiveVIP.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3 text-ash text-sm">
                  <Check size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
            <p className="text-ash text-sm mb-6 italic">{serviceData.executiveVIP.timeline}</p>
            <a href="https://regenesismd.com/coming-soon" target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex items-center gap-2">
              {serviceData.executiveVIP.cta} <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* What We Treat */}
      <section className="py-20 bg-obsidian">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="scroll-reveal font-display text-3xl text-white-primary mb-6">What We Treat Under Hormone & Metabolic Health</h2>
            <p className="scroll-reveal font-body text-ash leading-relaxed mb-8">{serviceData.whatWeTreat.intro}</p>
            <div className="scroll-reveal grid md:grid-cols-2 gap-4 mb-8">
              {serviceData.whatWeTreat.problems.map((problem, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-ash text-sm">{problem}</span>
                </div>
              ))}
            </div>
            <p className="scroll-reveal text-ash text-sm italic border-l-2 border-gold pl-4">{serviceData.whatWeTreat.reassurance}</p>
          </div>
        </div>
      </section>

      {/* Service Menu */}
      <section className="py-12 bg-charcoal sticky top-20 z-40 border-y border-muted-border">
        <div className="w-full px-6 lg:px-12">
          <div className="flex flex-wrap items-center gap-4 justify-center">
            <span className="font-condensed text-label-sm uppercase text-silver tracking-[0.2em]">Jump to:</span>
            {serviceData.serviceMenu.map((item, idx) => (
              <a key={idx} href={`#${item.anchor}`} className="font-condensed text-sm uppercase text-ash hover:text-gold transition-colors">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TRT Section */}
      <section id="trt" className="py-20 bg-obsidian">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="scroll-reveal font-display text-4xl text-white-primary mb-4">{serviceData.trt.title}</h2>
            <p className="scroll-reveal font-body text-ash leading-relaxed mb-12 max-w-3xl">{serviceData.trt.subtitle}</p>
            
            <div className="scroll-reveal bg-graphite p-8 mb-12 border border-muted-border">
              <h3 className="font-condensed text-lg font-semibold uppercase text-white-primary mb-4">What Is TRT?</h3>
              <p className="text-ash text-sm leading-relaxed">{serviceData.trt.whatIs}</p>
            </div>

            <h3 className="scroll-reveal font-display text-2xl text-white-primary mb-6">How TRT at The TRoom Works</h3>
            <div className="scroll-reveal grid md:grid-cols-2 gap-4 mb-12">
              {serviceData.trt.howItWorks.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-charcoal p-4">
                  <span className="text-gold font-bold">{idx + 1}.</span>
                  <span className="text-ash text-sm">{item}</span>
                </div>
              ))}
            </div>

            <h3 className="scroll-reveal font-display text-2xl text-white-primary mb-6">What to Expect & When: TRT Results Timeline</h3>
            <div className="scroll-reveal grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {serviceData.trt.timeline.map((item, idx) => (
                <div key={idx} className="bg-charcoal p-6 border-t-2 border-gold">
                  <span className="text-2xl mb-2 block">{item.icon}</span>
                  <span className="font-condensed text-label-sm uppercase text-gold tracking-[0.15em] block mb-2">{item.week}</span>
                  <h4 className="font-condensed text-sm font-semibold text-white-primary mb-2">{item.title}</h4>
                  <p className="text-ash text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="scroll-reveal font-display text-2xl text-white-primary mb-6">Benefits Men Pursue with TRT</h3>
            <div className="scroll-reveal grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-graphite p-6 border border-muted-border">
                <h4 className="font-condensed text-sm font-semibold uppercase text-gold mb-4">🔋 Energy & Vitality</h4>
                <ul className="space-y-2">
                  {serviceData.trt.benefits.energy.map((item, idx) => (
                    <li key={idx} className="text-ash text-xs flex items-start gap-2"><Check size={12} className="text-gold mt-0.5 flex-shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-graphite p-6 border border-muted-border">
                <h4 className="font-condensed text-sm font-semibold uppercase text-gold mb-4">💪 Body Composition</h4>
                <ul className="space-y-2">
                  {serviceData.trt.benefits.body.map((item, idx) => (
                    <li key={idx} className="text-ash text-xs flex items-start gap-2"><Check size={12} className="text-gold mt-0.5 flex-shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-graphite p-6 border border-muted-border">
                <h4 className="font-condensed text-sm font-semibold uppercase text-gold mb-4">🧠 Mental Clarity</h4>
                <ul className="space-y-2">
                  {serviceData.trt.benefits.mental.map((item, idx) => (
                    <li key={idx} className="text-ash text-xs flex items-start gap-2"><Check size={12} className="text-gold mt-0.5 flex-shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="scroll-reveal bg-steel p-8 border-l-4 border-gold">
              <h3 className="font-condensed text-lg font-semibold uppercase text-white-primary mb-4">Safety & Monitoring: How We Ensure TRT Is Safe</h3>
              <p className="text-ash text-sm mb-4">Dr. Vaidya's background in family and anti‑aging medicine means your TRT is integrated into your broader health.</p>
              <div className="grid md:grid-cols-2 gap-3">
                {serviceData.trt.safety.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check size={14} className="text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-ash text-xs">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Low-T Management with Symptom Checker */}
      <section id="low-t" className="py-20 bg-charcoal">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="scroll-reveal font-display text-3xl text-white-primary mb-6">Low Testosterone (Low‑T) Management</h2>
            <p className="scroll-reveal text-ash mb-8">Low testosterone is not just a number on a lab slip—it's a pattern of symptoms that slowly erodes how you show up at work, at home, and in the gym.</p>
            
            <div className="scroll-reveal bg-graphite p-8 mb-8 border border-muted-border">
              <h3 className="font-condensed text-lg font-semibold uppercase text-white-primary mb-6">Common Signs of Low Testosterone (Interactive Symptom Checker)</h3>
              <p className="text-ash text-sm mb-4">Check any that apply to you:</p>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                {serviceData.lowT.symptoms.map((symptom, idx) => (
                  <button
                    key={idx}
                    onClick={() => toggleSymptom(idx)}
                    className={`flex items-center gap-3 p-3 text-left transition-all ${checkedSymptoms.includes(idx) ? 'bg-gold-dim border border-gold' : 'bg-charcoal border border-muted-border hover:border-ash'}`}
                  >
                    <div className={`w-5 h-5 border flex items-center justify-center ${checkedSymptoms.includes(idx) ? 'border-gold bg-gold' : 'border-ash'}`}>
                      {checkedSymptoms.includes(idx) && <Check size={14} className="text-obsidian" />}
                    </div>
                    <span className={`text-sm ${checkedSymptoms.includes(idx) ? 'text-white-primary' : 'text-ash'}`}>{symptom}</span>
                  </button>
                ))}
              </div>
              <div className="text-center">
                <p className="text-silver text-sm mb-2">You've checked {checkedSymptoms.length}/8 symptoms</p>
                {checkedSymptoms.length >= 3 && (
                  <div className="bg-gold-dim border border-gold p-4 mt-4">
                    <p className="text-gold text-sm font-semibold mb-2">⚠️ You have several symptoms commonly associated with low testosterone.</p>
                    <p className="text-ash text-xs">It doesn't automatically mean you need TRT, but it DOES mean a proper evaluation is worth your time.</p>
                    <a href="https://regenesismd.com/coming-soon" target="_blank" rel="noopener noreferrer" className="btn-gold mt-4 inline-block text-xs">
                      Book Free 15‑Minute Assessment
                    </a>
                  </div>
                )}
              </div>
            </div>

            <h3 className="scroll-reveal font-display text-2xl text-white-primary mb-6">The TRoom's Low‑T Management Process</h3>
            <div className="scroll-reveal grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {serviceData.lowT.process.map((step, idx) => (
                <div key={idx} className="bg-graphite p-6 text-center">
                  <span className="text-3xl mb-2 block">{step.step}</span>
                  <h4 className="font-condensed text-sm font-semibold text-white-primary mb-2">{step.title}</h4>
                  <p className="text-ash text-xs">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clomid Section with Comparison Table */}
      <section id="clomid" className="py-20 bg-obsidian">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="scroll-reveal font-display text-3xl text-white-primary mb-4">Clomid Therapy (TRT Alternative)</h2>
            <p className="scroll-reveal text-ash leading-relaxed mb-8">{serviceData.clomid.content}</p>
            
            <div className="scroll-reveal bg-graphite p-8 mb-8 border border-muted-border">
              <h3 className="font-condensed text-lg font-semibold uppercase text-white-primary mb-4">What Is Clomid Therapy for Men?</h3>
              <p className="text-ash text-sm leading-relaxed">{serviceData.clomid.whatIs}</p>
            </div>

            <h3 className="scroll-reveal font-display text-xl text-white-primary mb-4">Who Might Consider Clomid Instead of TRT?</h3>
            <ul className="scroll-reveal space-y-2 mb-8">
              {serviceData.clomid.whoShouldConsider.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-ash text-sm">
                  <Check size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="scroll-reveal font-display text-xl text-white-primary mb-4">Clomid vs TRT: Which Is Right for You?</h3>
            <div className="scroll-reveal overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-muted-border">
                    <th className="text-left p-4 font-condensed text-sm uppercase text-silver">Consideration</th>
                    <th className="text-left p-4 font-condensed text-sm uppercase text-gold">Clomid</th>
                    <th className="text-left p-4 font-condensed text-sm uppercase text-white-primary">TRT</th>
                  </tr>
                </thead>
                <tbody>
                  {serviceData.clomid.comparison.map((row, idx) => (
                    <tr key={idx} className="border-b border-muted-border">
                      <td className="p-4 text-ash text-sm">{row.feature}</td>
                      <td className="p-4 text-ash text-sm">
                        {typeof row.clomid === 'boolean' ? (row.clomid ? '✅ Yes' : '❌ No') : row.clomid}
                      </td>
                      <td className="p-4 text-ash text-sm">
                        {typeof row.trt === 'boolean' ? (row.trt ? '✅ Yes' : '❌ No') : row.trt}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Location & First Visit */}
      <section className="py-20 bg-charcoal">
        <div className="w-full px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="scroll-reveal font-display text-2xl text-white-primary mb-6">Men's Hormone Clinic in Raleigh's Triangle Region</h2>
              <p className="scroll-reveal text-ash mb-6">The TRoom is centrally located in North Raleigh at {serviceData.location.address}, serving men across the Triangle.</p>
              <div className="scroll-reveal space-y-3">
                {serviceData.location.commutes.map((commute, idx) => (
                  <div key={idx} className="flex justify-between text-sm">
                    <span className="text-ash">From {commute.from}</span>
                    <span className="text-gold">{commute.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="scroll-reveal font-display text-2xl text-white-primary mb-6">What to Expect at Your First Visit</h2>
              <div className="scroll-reveal space-y-4">
                {serviceData.firstVisit.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="font-condensed text-gold font-semibold">{step.step}</span>
                    <div>
                      <h4 className="font-condensed text-sm font-semibold text-white-primary">{step.title}</h4>
                      <p className="text-ash text-xs">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-obsidian">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="scroll-reveal font-display text-3xl text-white-primary text-center mb-8">Pricing & Membership Philosophy</h2>
            <p className="scroll-reveal text-ash text-center mb-8">Premium Care with Transparent Pricing</p>
            <div className="scroll-reveal bg-graphite border border-muted-border">
              {serviceData.pricing.ranges.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 border-b border-muted-border last:border-b-0">
                  <span className="text-ash text-sm">{item.service}</span>
                  <span className="text-gold font-semibold">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="scroll-reveal text-center mt-8">
              <a href="https://regenesismd.com/coming-soon" target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex items-center gap-2">
                Discuss Pricing in Your Consultation <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-charcoal">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="scroll-reveal font-display text-3xl text-white-primary text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-0">
              {serviceData.faqs.map((faq, idx) => (
                <div key={idx} className={`faq-item border-b border-muted-border ${openFaq === idx ? 'open' : ''}`}>
                  <button
                    className="faq-question w-full text-left py-6 flex justify-between items-center"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    <span className="font-condensed text-base uppercase tracking-[0.05em] text-white-primary pr-8">{faq.q}</span>
                    <span className="faq-icon text-gold text-2xl flex-shrink-0">+</span>
                  </button>
                  <div className={`faq-answer overflow-hidden transition-all duration-400 ${openFaq === idx ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                    <p className="text-ash text-sm leading-relaxed pr-12">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-graphite">
        <div className="w-full px-6 lg:px-12 text-center">
          <h2 className="scroll-reveal font-display text-3xl text-white-primary mb-6">Ready to Take Control?</h2>
          <p className="scroll-reveal text-ash mb-8 max-w-xl mx-auto">Your free consultation is private, pressure-free, and built around your goals. 30 minutes. No obligation.</p>
          <div className="scroll-reveal flex flex-wrap justify-center gap-4">
            <a href="https://regenesismd.com/coming-soon" target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex items-center gap-2">
              <Phone size={16} /> Book Free Hormone Assessment
            </a>
            <Link to="/" className="btn-ghost">← Back to Home</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
