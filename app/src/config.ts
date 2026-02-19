// ============================================================================
// T-room by Regeneresis MD - Site Configuration
// ============================================================================

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "T-room by Regeneresis MD | Men's Wellness & Aesthetics in Raleigh, NC",
  description: "T-room is Regeneresis MD's dedicated men's division — a private space engineered for performance, recovery, and transformation. Science-backed. Results-driven. Built exclusively for men.",
  language: "en",
};

// ============================================================================
// Navigation Configuration
// ============================================================================

export interface NavItem {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  subLogo: string;
  items: NavItem[];
  ctaText: string;
  ctaHref: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "T-room",
  subLogo: "by Regeneresis MD · Raleigh, NC",
  items: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Now", href: "#why-now" },
    { label: "Our Team", href: "#team" },
    { label: "FAQ", href: "#faq" },
  ],
  ctaText: "BOOK NOW",
  ctaHref: "https://regenesismd.com/coming-soon",
};

// ============================================================================
// Hero Section Configuration
// ============================================================================

export interface HeroConfig {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  titleLine3: string;
  subtitle: string;
  primaryCta: string;
  primaryCtaHref: string;
  secondaryCta: string;
  secondaryCtaHref: string;
  badgeText: string;
  badgeSubtext: string;
  scrollText: string;
}

export const heroConfig: HeroConfig = {
  eyebrow: "PERFORMANCE · AESTHETICS · OPTIMIZATION",
  titleLine1: "Your Body.",
  titleLine2: "Optimized.",
  titleLine3: "Your Confidence.",
  subtitle: "T-room is Regeneresis MD's dedicated men's division — a private space engineered for performance, recovery, and transformation. Science-backed. Results-driven. Built exclusively for men.",
  primaryCta: "BOOK FREE CONSULTATION",
  primaryCtaHref: "https://regenesismd.com/coming-soon",
  secondaryCta: "EXPLORE SERVICES",
  secondaryCtaHref: "#services",
  badgeText: "Voted Raleigh's Best MedSpa 2025",
  badgeSubtext: "Regeneresis MD",
  scrollText: "SCROLL TO EXPLORE",
};

// ============================================================================
// About Section Configuration
// ============================================================================

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface AboutConfig {
  sectionLabel: string;
  titleLine1: string;
  titleLine2: string;
  titleHighlight: string;
  description: string;
  features: FeatureItem[];
  stats: StatItem[];
  quote: string;
  quoteAttribution: string;
}

export const aboutConfig: AboutConfig = {
  sectionLabel: "WHAT IS T-room",
  titleLine1: "A Space Built",
  titleLine2: "Exclusively for Men",
  titleHighlight: "Exclusively",
  description: "T-room is Regeneresis MD's private men's wellness division — where performance, confidence, and appearance converge. We built it because men deserve specialized care, not repurposed spa treatments. Every protocol is designed around the male physiology, psychology, and lifestyle.",
  features: [
    {
      icon: "⚕",
      title: "MEDICAL-GRADE PROTOCOLS",
      description: "Physician-led treatments backed by clinical science. Every plan is personalized to your biology."
    },
    {
      icon: "🔒",
      title: "COMPLETELY DISCREET",
      description: "Private consultations, confidential records, and a professional environment where your goals stay between you and your provider."
    },
    {
      icon: "◎",
      title: "RESULTS, NOT PROMISES",
      description: "We measure outcomes. Your progress is tracked, documented, and optimized at every step of your journey."
    }
  ],
  stats: [
    { value: "18+", label: "Years Experience" },
    { value: "4K+", label: "Men Treated" },
    { value: "20+", label: "Services Offered" },
    { value: "100%", label: "Private & Discreet" }
  ],
  quote: "The man who invests in himself is the most powerful man in the room.",
  quoteAttribution: "T-room PHILOSOPHY"
};

// ============================================================================
// Problem Mind Map Configuration
// ============================================================================

export interface ProblemItem {
  icon: string;
  title: string;
  description: string;
}

export interface ProblemsConfig {
  sectionLabel: string;
  titleLine1: string;
  titleLine2: string;
  titleHighlight: string;
  description: string;
  problems: ProblemItem[];
  ctaText: string;
  ctaHref: string;
}

export const problemsConfig: ProblemsConfig = {
  sectionLabel: "RECOGNIZE YOURSELF",
  titleLine1: "You're Not Alone.",
  titleLine2: "We've Seen It All.",
  titleHighlight: "We've Seen It All.",
  description: "Most men silently carry these concerns for years. The difference between struggling and thriving is finding the right solution — before it costs you more.",
  problems: [
    {
      icon: "🔻",
      title: "HAIR LOSS",
      description: "Receding lines, thinning crowns — and the confidence that goes with them"
    },
    {
      icon: "⚖",
      title: "STUBBORN BELLY FAT",
      description: "Diet-resistant weight that won't shift despite your effort"
    },
    {
      icon: "🧬",
      title: "LOW TESTOSTERONE",
      description: "Fatigue, reduced drive, brain fog, mood changes"
    },
    {
      icon: "📉",
      title: "AGING SKIN",
      description: "Lines, sagging, dullness that ages you beyond your years"
    },
    {
      icon: "😶",
      title: "LOW CONFIDENCE",
      description: "Avoiding mirrors, photos, or social situations"
    },
    {
      icon: "⚡",
      title: "ENERGY & FATIGUE",
      description: "Burned out, slow recovery, not performing at your best"
    },
    {
      icon: "💪",
      title: "BODY COMPOSITION",
      description: "Losing muscle, gaining fat regardless of gym effort"
    },
    {
      icon: "🎯",
      title: "CAREER PERCEPTION",
      description: "Looking older or less sharp than your competition"
    }
  ],
  ctaText: "GET A FREE ASSESSMENT",
  ctaHref: "https://regenesismd.com/coming-soon"
};

// ============================================================================
// Services Section Configuration
// ============================================================================

export interface ServiceItem {
  number: string;
  category: string;
  title: string;
  problem: string;
  outcome: string;
}

export interface ServicesConfig {
  sectionLabel: string;
  titleLine1: string;
  titleLine2: string;
  titleHighlight: string;
  viewAllText: string;
  viewAllHref: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  sectionLabel: "TREATMENT MENU",
  titleLine1: "Every Service.",
  titleLine2: "Engineered for Men.",
  titleHighlight: "Engineered for Men.",
  viewAllText: "VIEW ALL SERVICES",
  viewAllHref: "https://regenesismd.com/services",
  services: [
    {
      number: "01",
      category: "Body",
      title: "WEIGHT LOSS & BODY SCULPTING",
      problem: "Stubborn fat resistant to diet and exercise — often hormonal, not motivational.",
      outcome: "Lean, defined physique in weeks"
    },
    {
      number: "02",
      category: "Hair",
      title: "HAIR RESTORATION",
      problem: "Thinning hair and receding hairlines affect how you're perceived — and how you feel.",
      outcome: "Fuller, thicker hair with clinically proven results"
    },
    {
      number: "03",
      category: "Skin",
      title: "SKIN REJUVENATION",
      problem: "Dull, rough, or aging skin makes you look older than you are. Men's skin needs targeted care.",
      outcome: "Clearer, firmer, younger-looking skin"
    },
    {
      number: "04",
      category: "Anti-Aging",
      title: "ANTI-AGING TREATMENTS",
      problem: "Lines, volume loss, and sagging develop silently. Non-surgical interventions reverse a decade.",
      outcome: "Natural, rested, powerful appearance"
    },
    {
      number: "05",
      category: "Hormones",
      title: "TESTOSTERONE & VITALITY",
      problem: "Low T affects energy, libido, focus, muscle, and mood. It's biology — and it's treatable.",
      outcome: "Peak energy, drive, and performance restored"
    },
    {
      number: "06",
      category: "Face",
      title: "FACIAL CONTOURING",
      problem: "A sharper jaw and defined features communicate authority and confidence to the world.",
      outcome: "Stronger, sharper masculine features"
    },
    {
      number: "07",
      category: "Advanced",
      title: "LASER TREATMENTS",
      problem: "Unwanted hair, scarring, pigmentation, or texture issues affecting comfort and appearance.",
      outcome: "Smooth, clear, optimized skin"
    },
    {
      number: "08",
      category: "Wellness",
      title: "PEPTIDES & IV NUTRITION",
      problem: "Performance gaps and chronic fatigue often come from cellular deficiencies standard care misses.",
      outcome: "Cellular performance, accelerated recovery"
    }
  ]
};

// ============================================================================
// Why Now Section Configuration
// ============================================================================

export interface ReasonItem {
  number: string;
  title: string;
  description: string;
}

export interface StatBoxItem {
  value: string;
  label: string;
}

export interface WhyNowConfig {
  sectionLabel: string;
  titleLine1: string;
  titleLine2: string;
  titleLine3: string;
  titleHighlight: string;
  description: string;
  reasons: ReasonItem[];
  quote: string;
  quoteAttribution: string;
  stats: StatBoxItem[];
  ctaBody: string;
  ctaText: string;
  ctaHref: string;
}

export const whyNowConfig: WhyNowConfig = {
  sectionLabel: "BREAK THE STIGMA",
  titleLine1: "Taking Care of",
  titleLine2: "Yourself Is",
  titleLine3: "Strength.",
  titleHighlight: "Strength.",
  description: "High-performing men in every field — business, sport, entertainment — have long understood that investing in your physical and mental edge is a competitive advantage. T-room is where that advantage begins.",
  reasons: [
    {
      number: "01",
      title: "CAREER & LEADERSHIP EDGE",
      description: "First impressions, executive presence, and visual authority matter. Looking your sharpest positions you ahead of the competition in every room you enter."
    },
    {
      number: "02",
      title: "CONFIDENCE IN EVERY ROOM",
      description: "When you like what you see in the mirror, it changes how you walk into rooms, how you communicate, what you attract, and how others perceive your capability."
    },
    {
      number: "03",
      title: "PHYSICAL PERFORMANCE",
      description: "Optimized hormones, reduced inflammation, and better body composition directly impact your gym performance, recovery speed, and sustained daily energy."
    },
    {
      number: "04",
      title: "LONGEVITY & HEALTH SPAN",
      description: "Prevention is cheaper than treatment. Men who invest in anti-aging and wellness protocols live longer, healthier, more active lives with fewer chronic conditions."
    },
    {
      number: "05",
      title: "MENTAL HEALTH & CLARITY",
      description: "Hormonal balance, better sleep, and improved physical health directly reduce anxiety, depression risk, and cognitive fog that drain your performance."
    }
  ],
  quote: "With the science and knowledge we have, we can extend life and live healthily well past 100 years.",
  quoteAttribution: "Dr. Bhavna Vaidya, MD · Founder, Regeneresis MD",
  stats: [
    { value: "68%", label: "of men report increased confidence after treatment" },
    { value: "3×", label: "more likely perceived as leader after optimization" },
    { value: "40%", label: "of men over 40 have clinically low testosterone" },
    { value: "82%", label: "report improved work performance post-treatment" }
  ],
  ctaBody: "You've been operating below your potential for long enough. T-room exists to bridge the gap between where you are and who you know you can be.",
  ctaText: "START YOUR TRANSFORMATION",
  ctaHref: "https://regenesismd.com/coming-soon"
};

// ============================================================================
// Transformation Section Configuration
// ============================================================================

export interface StepItem {
  step: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  treatments: string;
}

export interface TransformationConfig {
  sectionLabel: string;
  titleLine1: string;
  titleLine2: string;
  titleHighlight: string;
  steps: StepItem[];
  testimonials: TestimonialItem[];
}

export const transformationConfig: TransformationConfig = {
  sectionLabel: "THE T-room JOURNEY",
  titleLine1: "From Where You Are.",
  titleLine2: "To Where You're Going.",
  titleHighlight: "To Where You're Going.",
  steps: [
    {
      step: "STEP 01",
      title: "RECOGNIZE",
      description: "You notice what's changing — hair, energy, body, confidence. You decide it's time to stop waiting and act."
    },
    {
      step: "STEP 02",
      title: "CONSULT",
      description: "A private, judgment-free assessment with our medical team. Your goals, your biology, your personalized plan."
    },
    {
      step: "STEP 03",
      title: "TRANSFORM",
      description: "Science-backed treatments tailored to you — monitored, adjusted, and optimized continuously for real results."
    },
    {
      step: "STEP 04",
      title: "PERFORM",
      description: "Sharper. More confident. More energy. The version of you that was always there — now fully unlocked."
    }
  ],
  testimonials: [
    {
      quote: "I avoided photos for three years. Six months in, my colleagues are asking what changed. My energy is back, my confidence is through the roof. Best investment I've ever made in myself.",
      author: "Marcus T.",
      role: "Executive, 44",
      treatments: "Testosterone Optimization + Body Sculpting"
    },
    {
      quote: "I was skeptical going in. Now I tell every guy I know about this place. The team treats you like an athlete, not a spa customer. Real results, zero judgment, total professionalism.",
      author: "Derek R.",
      role: "Entrepreneur, 38",
      treatments: "Hair Restoration + Skin Rejuvenation"
    },
    {
      quote: "The discreet environment makes all the difference. No awkward questions, no judgment. Just a medical team that listens and a plan that actually works.",
      author: "James K.",
      role: "Attorney, 51",
      treatments: "Anti-Aging Treatments + IV Nutrition"
    }
  ]
};

// ============================================================================
// Trust & Authority Section Configuration
// ============================================================================

export interface TrustItem {
  number: string;
  icon: string;
  title: string;
  description: string;
}

export interface CredentialItem {
  text: string;
}

export interface TrustConfig {
  sectionLabel: string;
  titleLine1: string;
  titleLine2: string;
  titleHighlight: string;
  trustItems: TrustItem[];
  doctorName: string;
  doctorTitle: string;
  doctorBio: string;
  doctorImage: string;
  credentials: CredentialItem[];
}

export const trustConfig: TrustConfig = {
  sectionLabel: "WHY T-room",
  titleLine1: "Medical Excellence.",
  titleLine2: "Uncompromising Standards.",
  titleHighlight: "Uncompromising Standards.",
  trustItems: [
    {
      number: "01",
      icon: "⚕️",
      title: "BOARD-CERTIFIED MEDICINE",
      description: "Every treatment is physician-overseen. Dr. Vaidya is dual board-certified in Family Practice and Anti-Aging Medicine, with 18+ years of clinical expertise."
    },
    {
      number: "02",
      icon: "🔬",
      title: "ADVANCED TECHNOLOGY",
      description: "We invest in the latest medical-grade equipment and FDA-cleared protocols — the same technology used by elite performance centers across the country."
    },
    {
      number: "03",
      icon: "🛡️",
      title: "SAFETY-FIRST ALWAYS",
      description: "Comprehensive health assessment before every treatment plan. Your safety and health outcomes take priority over results — always, without compromise."
    },
    {
      number: "04",
      icon: "🎯",
      title: "PERSONALIZED PROTOCOLS",
      description: "No two men are the same. Your treatment plan is built around your labs, your goals, your timeline, and your lifestyle — not a generic menu."
    },
    {
      number: "05",
      icon: "📍",
      title: "RALEIGH'S TRUSTED NAME",
      description: "Voted Raleigh's Best MedSpa 2025. Featured in Vanity Fair and recognized by RealSelf. Thousands of satisfied patients throughout the Carolinas."
    },
    {
      number: "06",
      icon: "🔒",
      title: "TOTAL PRIVACY",
      description: "Confidential consultations, private treatment rooms, and professional discretion. Your information and your results belong to you alone."
    }
  ],
  doctorName: "Dr. Bhavna Vaidya, MD",
  doctorTitle: "Founder & Medical Director · Regeneresis MD & T-room",
  doctorBio: "Dr. Vaidya founded her Family Wellness Clinic in Clayton, NC in 2005 and has since become one of the most respected names in functional and anti-aging medicine in the Southeast. She created T-room with a clear vision: men deserve a dedicated, medically sophisticated wellness space that respects their unique biology and goals.",
  doctorImage: "https://static.showit.co/800/gzxqDXhjRWyOHjeZTdnCTg/218569/dr_bhavnavaidya-tank-10.jpg",
  credentials: [
    { text: "Board-Certified, Family Practice Medicine" },
    { text: "Certified, Association for Anti-Aging Medicine (A4M)" },
    { text: "18+ Years Clinical Experience" },
    { text: "Voted Raleigh's Best MedSpa Provider 2025" },
    { text: "Featured: Vanity Fair · RealSelf · Wellness Life" },
    { text: "Specialization: Hormonal Optimization, Regenerative Medicine" }
  ]
};

// ============================================================================
// FAQ Section Configuration
// ============================================================================

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQConfig {
  sectionLabel: string;
  titleLine1: string;
  titleLine2: string;
  titleHighlight: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  sectionLabel: "FAQ",
  titleLine1: "Answers to the Questions",
  titleLine2: "You Haven't Asked Yet.",
  titleHighlight: "You Haven't Asked Yet.",
  faqs: [
    {
      question: "Is this really just for men?",
      answer: "Yes. T-room is Regeneresis MD's dedicated men's division. Every treatment protocol, every room, and every staff interaction is designed around the male experience. You won't feel out of place — because this was built for you."
    },
    {
      question: "Is my information completely private?",
      answer: "Absolutely. T-room operates under full HIPAA confidentiality. Your consultation, treatment history, and results are private. We maintain total discretion as a fundamental principle of our practice."
    },
    {
      question: "How is this different from a regular spa or barber?",
      answer: "T-room is a physician-led medical facility. Every service is clinical grade, medically supervised, and built on evidence-based protocols. We deliver measurable, lasting results — not relaxation services."
    },
    {
      question: "How soon will I see results?",
      answer: "Timelines vary by treatment. Some men notice changes within days (energy and hormonal optimization). Aesthetic results like skin rejuvenation and hair restoration develop over weeks to months. Your provider will give you specific, realistic timelines at your consultation."
    },
    {
      question: "Do I need a referral to book a consultation?",
      answer: "No referral needed. Simply book your free consultation online or call our office. We'll complete a health assessment and discuss your goals. No pressure, no commitment required at the first visit."
    },
    {
      question: "Are these treatments safe?",
      answer: "Every treatment offered at T-room is FDA-cleared and performed under medical supervision by trained professionals. A full health history and lab work review is completed before any protocol begins. Safety is never compromised."
    }
  ]
};

// ============================================================================
// Booking CTA Section Configuration
// ============================================================================

export interface BookingOption {
  icon: string;
  title: string;
  description: string;
}

export interface BookingConfig {
  sectionLabel: string;
  titleLine1: string;
  titleLine2: string;
  titleHighlight: string;
  subtitle: string;
  primaryCta: string;
  primaryCtaHref: string;
  secondaryCta: string;
  secondaryCtaHref: string;
  options: BookingOption[];
}

export const bookingConfig: BookingConfig = {
  sectionLabel: "TAKE THE FIRST STEP",
  titleLine1: "The Best Version of You",
  titleLine2: "Is One Conversation Away.",
  titleHighlight: "Is One Conversation Away.",
  subtitle: "Your free consultation is private, pressure-free, and built around your goals. 30 minutes. No obligation. Just clarity on what's possible for you.",
  primaryCta: "BOOK FREE CONSULTATION",
  primaryCtaHref: "https://regenesismd.com/coming-soon",
  secondaryCta: "CALL OUR OFFICE",
  secondaryCtaHref: "tel:+19195551234",
  options: [
    {
      icon: "📋",
      title: "FREE ASSESSMENT",
      description: "Comprehensive health & goals review with your provider"
    },
    {
      icon: "🔬",
      title: "LAB REVIEW",
      description: "Hormonal panel & blood work analysis included at no cost"
    },
    {
      icon: "📍",
      title: "CUSTOM PLAN",
      description: "Leave with a personalized protocol built for your goals"
    }
  ]
};

// ============================================================================
// Footer Configuration
// ============================================================================

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  logo: string;
  subLogo: string;
  description: string;
  location: string;
  website: string;
  websiteHref: string;
  bookText: string;
  bookHref: string;
  services: FooterLink[];
  company: FooterLink[];
  instagram: string;
  instagramHref: string;
  press: string[];
  copyright: string;
  medicalDisclaimer: string;
}

export const footerConfig: FooterConfig = {
  logo: "T-room",
  subLogo: "Men's Wellness by Regeneresis MD",
  description: "A private space engineered for performance, recovery, and transformation. Science-backed. Results-driven. Built exclusively for men.",
  location: "Raleigh, NC",
  website: "regenesismd.com",
  websiteHref: "https://regenesismd.com",
  bookText: "Book Now",
  bookHref: "https://regenesismd.com/coming-soon",
  services: [
    { label: "Hormone & Metabolic Health", href: "/services/hormone-metabolic-health" },
    { label: "Sexual Health", href: "/services/sexual-health" },
    { label: "Peptide Therapy", href: "/services/peptide-therapy" },
    { label: "Weight Loss", href: "/services/weight-loss" },
    { label: "Performance Optimization", href: "/services/performance-optimization" },
    { label: "Biohacking & Longevity", href: "/services/biohacking-longevity" },
    { label: "IV Therapy", href: "/services/iv-therapy" },
    { label: "Men's Aesthetics", href: "/services/mens-aesthetics" },
    { label: "Hair Restoration", href: "/services/hair-restoration" },
    { label: "Preventive Care", href: "/services/preventive-care" }
  ],
  company: [
    { label: "About T-room", href: "#about" },
    { label: "About Regeneresis MD", href: "https://regenesismd.com/about" },
    { label: "Our Team", href: "#team" },
    { label: "Membership", href: "https://regenesismd.com/membership" },
    { label: "Book Now", href: "https://regenesismd.com/coming-soon" }
  ],
  instagram: "@regenesismd_raleigh",
  instagramHref: "https://instagram.com/regenesismd_raleigh",
  press: ["Vanity Fair", "RealSelf", "Wellness Life"],
  copyright: "© 2026 T-room · A Division of Regeneresis MD · Raleigh, NC · All Rights Reserved",
  medicalDisclaimer: "Medical services supervised by Dr. Bhavna Vaidya, MD"
};

// ============================================================================
// Sticky Bar Configuration
// ============================================================================

export interface StickyBarConfig {
  text: string;
  ctaText: string;
  ctaHref: string;
}

export const stickyBarConfig: StickyBarConfig = {
  text: "READY TO TAKE CONTROL? YOUR FREE CONSULTATION AWAITS.",
  ctaText: "BOOK FREE CONSULTATION →",
  ctaHref: "https://regenesismd.com/coming-soon"
};
