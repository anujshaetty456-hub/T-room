import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star, GraduationCap, BarChart3, Trophy, Phone } from 'lucide-react';

const serviceData = {
  hero: {
    eyebrow: "PHYSICIAN-LED MEN'S SEXUAL HEALTH",
    h1: "ED Isn't Just \"Plumbing.\" It's a Signal.",
    subheadline: "The frustration. The embarrassment. The excuses. These aren't just 'aging'—they're treatable medical conditions with proven solutions.",
    supportText: "At The TRoom, men's sexual health care is led by Dr. Bhavna Vaidya, MD—board-certified in Family Practice and Anti-Aging Medicine with 20+ years treating hormone imbalances and metabolic issues at Regenesis MD, Raleigh's Top MedSpa 2025.",
    primaryCta: "Book Your Free ED Assessment",
    secondaryCta: "Take 60-Second ED Self-Check"
  },
  trustBlocks: [
    {
      icon: GraduationCap,
      title: "Board-Certified MD",
      content: "Dr. Bhavna Vaidya's dual certifications mean she understands ED's vascular, hormonal, and metabolic root causes—not just symptoms."
    },
    {
      icon: BarChart3,
      title: "20 Years, 10,000+ Patients",
      content: "Since 2005, Dr. Vaidya has treated 10,000+ patients through Regenesis MD with hormone replacement and wellness protocols."
    },
    {
      icon: Trophy,
      title: "Sister Brand of Regenesis MD",
      content: "The TRoom leverages Raleigh's Top MedSpa 2025 infrastructure for premium, discreet sexual health integrating GAINSWave®, P-Shot®, hormones, and peptides."
    }
  ],
  executiveVIP: {
    title: "EXECUTIVE SEXUAL PERFORMANCE PROTOCOL",
    subtitle: "RTP Leaders - High-Performers - Discreet Results",
    benefits: [
      "After-hours appointments (7PM slots available)",
      "Concierge coordination—no shared waiting rooms",
      "90-day transformation combining GAINSWave® + P-Shot® + hormone sync",
      "Private entrance + VIP communication",
      "Same-day results via secure portal"
    ],
    timeline: "Most executives report firmness/confidence improvements in 3-4 weeks.",
    cta: "Schedule Executive ED Consult"
  },
  symptoms: [
    "Erections not firm enough for intercourse",
    "Difficulty maintaining erection during intercourse",
    "Reduced frequency/quality of morning erections",
    "Decreased sexual desire or libido",
    "Softer erections than 1-2 years ago",
    "Performance anxiety affecting reliability",
    "Peyronie's disease (curvature/pain)",
    "Taking 30+ minutes to achieve erection"
  ],
  conditions: [
    "Erectile Dysfunction (all severities)",
    "Peyronie's Disease (curvature, plaque, pain)",
    "Low Libido (hormonal, stress-related)",
    "Performance Anxiety",
    "Post-Prostate Treatment ED",
    "Age-Related Decline"
  ],
  gainswave: {
    title: "GAINSWave® Therapy",
    subtitle: "GAINSWave® uses acoustic shockwaves to regenerate penile blood vessels—the same technology orthopedic surgeons use for non-healing fractures. FDA-cleared. Drug-free. 20-min sessions.",
    technology: [
      "Angiogenesis (new blood vessel formation)",
      "Neovascularization (artery repair)",
      "Endothelial function (nitric oxide production ↑180%)",
      "Plaque fragmentation (Peyronie's treatment)"
    ],
    timeline: [
      { phase: "Sessions 1-3", result: "Improved sensitivity, better morning erections" },
      { phase: "Sessions 4-6", result: "Noticeably firmer erections, easier to maintain" },
      { phase: "Sessions 7-12", result: "Peak vascular remodeling (75%+ 'like my 20s')" },
      { phase: "6-12 Months", result: "Natural function sustained" }
    ],
    comparison: [
      { feature: "Mechanism", gainswave: "Rebuilds vessels", pills: "Temporary dilation" },
      { feature: "Duration", gainswave: "1-2 years", pills: "4-36 hours" },
      { feature: "Side Effects", gainswave: "Minimal", pills: "Headache, flushing" },
      { feature: "Daily Meds", gainswave: "None", pills: "Planned/PRN" },
      { feature: "Root Cause", gainswave: "Fixed", pills: "Symptoms only" }
    ]
  },
  pshot: {
    title: "P-Shot® (Priapus Shot)",
    content: "Your own platelet-rich plasma (PRP) regenerates penile tissue—increasing girth, sensitivity, firmness naturally.",
    process: "Blood draw → double-spin centrifugation → concentrated PRP → micro-injections",
    results: [
      "Week 1: Sensitivity ↑",
      "Week 3-6: Firmness + girth noticeable",
      "Month 3: Peak regeneration",
      "18 months: Booster recommended"
    ]
  },
  trimix: {
    title: "Trimix Injections",
    content: "Trimix (alprostadil + phentolamine + papaverine) bypasses vascular/hormonal issues entirely—delivering 80-90% reliable erections even when pills/GAINSWave® fail.",
    howItWorks: [
      "Triple-action: Arterial dilation + venous trapping + smooth muscle relaxation",
      "Onset: 5-15 minutes",
      "Duration: 30-90 minutes (dose-dependent)",
      "Reliability: Works when Viagra fails 30-40% of cases"
    ]
  },
  programs: {
    title: "90-Day Sexual Wellness Transformation Programs",
    tiers: [
      { name: "EXECUTIVE", price: "$7,500", includes: "GAINSWave®12 + P-Shot®2 + Trimix 6mo + TRT + concierge" },
      { name: "PERFORMANCE", price: "$5,500", includes: "GAINSWave®12 + P-Shot®1 + Trimix 3mo + labs" },
      { name: "STARTER", price: "$3,600", includes: "GAINSWave®6 + Trimix 3mo" }
    ],
    successRates: [
      { severity: "Mild", single: "60-70%", program: "90%+" },
      { severity: "Moderate", single: "40-50%", program: "85%" },
      { severity: "Severe", single: "20-30%", program: "70%" }
    ]
  },
  faqs: [
    { q: "What causes ED and how do you treat it?", a: "Approximately 70% of ED cases stem from vascular issues, 20% from hormonal imbalances. We use GAINSWave® for vascular causes, hormone optimization for hormonal causes, and Trimix for immediate reliability." },
    { q: "Is GAINSWave® therapy safe and FDA-approved?", a: "Yes, GAINSWave® is FDA-cleared for improved blood flow and uses the same ESWT technology orthopedic surgeons use. Side effects are minimal with mild soreness in <5% of patients." },
    { q: "How much does GAINSWave® cost in Raleigh, NC?", a: "GAINSWave® at The TRoom: $2,400-$3,600 for 6-12 sessions. Equivalent to 2-5 years of daily Cialis for 1-2 years of natural erections." },
    { q: "What is the P-Shot® and what results should I expect?", a: "The P-Shot® uses your platelet-rich plasma to regenerate penile tissue. Average girth increase 0.5-1 inch, length +0.25-0.75 inch. 85% report stronger spontaneous erections." },
    { q: "Are there side effects with Trimix injections?", a: "Trimix side effects are minimal when properly trained (<5% incidence). Rare risks include priapism (<1%)—we provide auto-inject reversal kit and comprehensive training." },
    { q: "Does insurance cover ED treatments?", a: "Insurance rarely covers GAINSWave®/P-Shot® (elective wellness). Trimix sometimes covered (70% of PPO plans). We provide superbills for reimbursement submission." }
  ]
};

export default function SexualHealth() {
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
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-graphite to-obsidian" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(ellipse 80% 50% at 80% 50%, rgba(184,146,42,0.15), transparent)'
        }} />
        <div className="relative z-10 w-full px-6 lg:px-12 py-32">
          <div className="max-w-4xl">
            <div className="scroll-reveal flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-gold" />
              <span className="font-condensed text-label font-medium uppercase text-gold tracking-[0.4em]">{serviceData.hero.eyebrow}</span>
            </div>
            <h1 className="scroll-reveal font-display text-5xl lg:text-7xl text-white-primary leading-tight mb-6">{serviceData.hero.h1}</h1>
            <p className="scroll-reveal font-display text-2xl lg:text-3xl text-gold-light italic mb-8">{serviceData.hero.subheadline}</p>
            <p className="scroll-reveal font-body text-lg text-ash leading-relaxed mb-10 max-w-2xl">{serviceData.hero.supportText}</p>
            <div className="scroll-reveal flex flex-wrap gap-4 mb-8">
              <a href="https://regenesismd.com/coming-soon" target="_blank" rel="noopener noreferrer" className="btn-gold">{serviceData.hero.primaryCta}</a>
              <a href="https://regenesismd.com/coming-soon" target="_blank" rel="noopener noreferrer" className="btn-ghost">{serviceData.hero.secondaryCta}</a>
            </div>
            <div className="scroll-reveal flex flex-wrap gap-6 text-sm text-silver">
              <span className="flex items-center gap-2"><Check size={16} className="text-gold" /> Board-Certified MD</span>
              <span className="flex items-center gap-2"><Check size={16} className="text-gold" /> 20+ Years</span>
              <span className="flex items-center gap-2"><Check size={16} className="text-gold" /> 10,000+ Patients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="py-20 bg-charcoal">
        <div className="w-full px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {serviceData.trustBlocks.map((block, idx) => (
              <div key={idx} className="scroll-reveal bg-graphite p-8 border border-muted-border">
                <block.icon size={32} className="text-gold mb-4" />
                <h3 className="font-condensed text-lg font-semibold uppercase text-white-primary mb-3">{block.title}</h3>
                <p className="font-body text-sm text-ash leading-relaxed">{block.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive VIP */}
      <section className="py-16 bg-graphite">
        <div className="w-full px-6 lg:px-12">
          <div className="scroll-reveal max-w-4xl mx-auto bg-steel border-l-4 border-gold p-8 lg:p-12">
            <div className="flex items-center gap-2 mb-4">
              <Star size={20} className="text-gold fill-gold" />
              <span className="font-condensed text-label font-semibold uppercase text-gold tracking-[0.2em]">{serviceData.executiveVIP.title}</span>
            </div>
            <h3 className="font-display text-2xl text-white-primary mb-2">{serviceData.executiveVIP.subtitle}</h3>
            <ul className="space-y-3 mb-6">
              {serviceData.executiveVIP.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-ash text-sm"><Check size={16} className="text-gold mt-0.5 flex-shrink-0" />{b}</li>
              ))}
            </ul>
            <p className="text-ash text-sm mb-6 italic">{serviceData.executiveVIP.timeline}</p>
            <a href="https://regenesismd.com/coming-soon" target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex items-center gap-2">{serviceData.executiveVIP.cta} <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      {/* Symptom Checker */}
      <section className="py-20 bg-obsidian">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="scroll-reveal font-display text-3xl text-white-primary mb-6">Interactive ED Symptom Checker</h2>
            <p className="scroll-reveal text-ash mb-6">Check all that apply to you:</p>
            <div className="scroll-reveal grid md:grid-cols-2 gap-3 mb-6">
              {serviceData.symptoms.map((s, i) => (
                <button key={i} onClick={() => toggleSymptom(i)} className={`flex items-center gap-3 p-3 text-left transition-all ${checkedSymptoms.includes(i) ? 'bg-gold-dim border border-gold' : 'bg-charcoal border border-muted-border hover:border-ash'}`}>
                  <div className={`w-5 h-5 border flex items-center justify-center ${checkedSymptoms.includes(i) ? 'border-gold bg-gold' : 'border-ash'}`}>
                    {checkedSymptoms.includes(i) && <Check size={14} className="text-obsidian" />}
                  </div>
                  <span className={`text-sm ${checkedSymptoms.includes(i) ? 'text-white-primary' : 'text-ash'}`}>{s}</span>
                </button>
              ))}
            </div>
            <p className="text-silver text-sm mb-2 text-center">You've checked {checkedSymptoms.length}/8 symptoms</p>
            {checkedSymptoms.length >= 3 && (
              <div className="scroll-reveal bg-gold-dim border border-gold p-6 text-center mt-4">
                <p className="text-gold text-sm font-semibold mb-2">⚠️ You have multiple signs of treatable erectile dysfunction.</p>
                <p className="text-ash text-xs mb-4">70% of cases relate to vascular issues or low testosterone—both fixable with modern protocols.</p>
                <a href="https://regenesismd.com/coming-soon" target="_blank" rel="noopener noreferrer" className="btn-gold text-xs">Get Your Personalized ED Treatment Plan</a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* GAINSWave */}
      <section className="py-20 bg-charcoal">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Star size={18} className="text-gold fill-gold" />
              <span className="font-condensed text-label-sm uppercase text-gold tracking-[0.2em]">MOST REQUESTED</span>
            </div>
            <h2 className="scroll-reveal font-display text-4xl text-white-primary mb-4">{serviceData.gainswave.title}</h2>
            <p className="scroll-reveal text-ash leading-relaxed mb-8 max-w-3xl">{serviceData.gainswave.subtitle}</p>
            
            <h3 className="scroll-reveal font-display text-xl text-white-primary mb-4">Technology</h3>
            <div className="scroll-reveal grid md:grid-cols-2 gap-4 mb-8">
              {serviceData.gainswave.technology.map((t, i) => (
                <div key={i} className="flex items-start gap-3 bg-graphite p-4 border border-muted-border">
                  <Check size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-ash text-sm">{t}</span>
                </div>
              ))}
            </div>

            <h3 className="scroll-reveal font-display text-xl text-white-primary mb-4">Results Timeline</h3>
            <div className="scroll-reveal grid md:grid-cols-4 gap-4 mb-8">
              {serviceData.gainswave.timeline.map((t, i) => (
                <div key={i} className="bg-graphite p-4 border-t-2 border-gold">
                  <span className="font-condensed text-label-sm uppercase text-gold tracking-[0.15em] block mb-2">{t.phase}</span>
                  <p className="text-ash text-xs">{t.result}</p>
                </div>
              ))}
            </div>

            <h3 className="scroll-reveal font-display text-xl text-white-primary mb-4">GAINSWave® vs ED Pills</h3>
            <div className="scroll-reveal overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-muted-border">
                    <th className="text-left p-4 font-condensed text-sm uppercase text-silver">Consideration</th>
                    <th className="text-left p-4 font-condensed text-sm uppercase text-gold">GAINSWave®</th>
                    <th className="text-left p-4 font-condensed text-sm uppercase text-white-primary">Viagra/Cialis</th>
                  </tr>
                </thead>
                <tbody>
                  {serviceData.gainswave.comparison.map((row, i) => (
                    <tr key={i} className="border-b border-muted-border">
                      <td className="p-4 text-ash text-sm">{row.feature}</td>
                      <td className="p-4 text-gold text-sm">{row.gainswave}</td>
                      <td className="p-4 text-ash text-sm">{row.pills}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* P-Shot & Trimix */}
      <section className="py-20 bg-obsidian">
        <div className="w-full px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="scroll-reveal bg-graphite p-8 border border-muted-border">
              <h2 className="font-display text-2xl text-white-primary mb-4">{serviceData.pshot.title}</h2>
              <p className="text-ash text-sm mb-6">{serviceData.pshot.content}</p>
              <div className="bg-charcoal p-4 mb-6">
                <span className="font-condensed text-label-sm uppercase text-silver block mb-2">Process</span>
                <p className="text-ash text-xs">{serviceData.pshot.process}</p>
              </div>
              <h4 className="font-condensed text-sm font-semibold text-white-primary mb-3">Results Timeline</h4>
              <ul className="space-y-2">
                {serviceData.pshot.results.map((r, i) => (
                  <li key={i} className="text-ash text-xs flex items-start gap-2"><Check size={12} className="text-gold mt-0.5 flex-shrink-0" />{r}</li>
                ))}
              </ul>
            </div>
            <div className="scroll-reveal bg-graphite p-8 border border-muted-border">
              <h2 className="font-display text-2xl text-white-primary mb-4">{serviceData.trimix.title}</h2>
              <p className="text-ash text-sm mb-6">{serviceData.trimix.content}</p>
              <h4 className="font-condensed text-sm font-semibold text-white-primary mb-3">How Trimix Works</h4>
              <ul className="space-y-2">
                {serviceData.trimix.howItWorks.map((h, i) => (
                  <li key={i} className="text-ash text-xs flex items-start gap-2"><Check size={12} className="text-gold mt-0.5 flex-shrink-0" />{h}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-charcoal">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="scroll-reveal font-display text-3xl text-white-primary mb-8 text-center">{serviceData.programs.title}</h2>
            <div className="scroll-reveal grid md:grid-cols-3 gap-6 mb-12">
              {serviceData.programs.tiers.map((tier, i) => (
                <div key={i} className="bg-graphite p-6 border border-muted-border text-center">
                  <span className="font-condensed text-label font-semibold uppercase text-gold tracking-[0.2em] block mb-2">{tier.name}</span>
                  <span className="font-display text-3xl text-white-primary block mb-4">{tier.price}</span>
                  <p className="text-ash text-xs">{tier.includes}</p>
                </div>
              ))}
            </div>
            <h3 className="scroll-reveal font-display text-xl text-white-primary mb-4 text-center">Success by Severity</h3>
            <div className="scroll-reveal overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-muted-border">
                    <th className="text-left p-4 font-condensed text-sm uppercase text-silver">ED Severity</th>
                    <th className="text-left p-4 font-condensed text-sm uppercase text-silver">Single Therapy</th>
                    <th className="text-left p-4 font-condensed text-sm uppercase text-gold">TRoom Program</th>
                  </tr>
                </thead>
                <tbody>
                  {serviceData.programs.successRates.map((row, i) => (
                    <tr key={i} className="border-b border-muted-border">
                      <td className="p-4 text-ash text-sm">{row.severity}</td>
                      <td className="p-4 text-ash text-sm">{row.single}</td>
                      <td className="p-4 text-gold text-sm font-semibold">{row.program}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-obsidian">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="scroll-reveal font-display text-3xl text-white-primary text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-0">
              {serviceData.faqs.map((faq, idx) => (
                <div key={idx} className={`faq-item border-b border-muted-border ${openFaq === idx ? 'open' : ''}`}>
                  <button className="faq-question w-full text-left py-6 flex justify-between items-center" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
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
          <h2 className="scroll-reveal font-display text-3xl text-white-primary mb-6">Ready to Restore Your Confidence?</h2>
          <p className="scroll-reveal text-ash mb-8 max-w-xl mx-auto">Your free consultation is private, pressure-free, and built around your goals.</p>
          <div className="scroll-reveal flex flex-wrap justify-center gap-4">
            <a href="https://regenesismd.com/coming-soon" target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex items-center gap-2"><Phone size={16} /> Book Free ED Assessment</a>
            <Link to="/" className="btn-ghost">← Back to Home</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
