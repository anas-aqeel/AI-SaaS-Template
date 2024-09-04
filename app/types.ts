interface Image {
  src: string
  alt: string
}
export interface NavLink {
  text: string
  link: string
}

export interface Button {
  text: string
  link: string
}

export interface Feature {
  title: string
  highlightedWord: string
  description: string
  features: string[]
  buttonText: string
  image: Image
  direction: string
}

export interface HowItWorkStep {
  image: Image
  title: string
  description: string
}

export interface Statistic {
  icon: any
  value: string
  description: string
}

export interface PricingPlan {
  name: string
  price: string
  buttonText: string
  billingInfo: string
  features: string[]
  popular?: boolean
}

export interface UseCase {
  icon: any
  title: string
  description: string
}

export interface FAQ {
  question: string
  answer: string
}

// New Types (with distinct names)

export interface AboutSectionFeature {
  icon: any
  text: string
  color: string
}

export interface TrustedBrand {
  src: string
  alt: string
  name: string
}

export interface TeamSectionMember {
  image: Image
  name: string
  position: string
  socialLinks: { platform: any; link: string }[]
}

export interface TestimonialSectionAuthor {
  image: Image
  name: string
  position: string
}

export interface TestimonialSection {
  author: TestimonialSectionAuthor
  quote: string
  comment: string
  platform: string
  rating: number
}

export interface Service {
  icon: any
  title: string
  description: string
}

// --- Combined Data interface ---

export interface Data {
  header: {
    logo: {
      src: string
      alt: string
    }
    companyName: string
    navLinks: NavLink[]
    buttons: Button[]
  }
  hero: {
    title: string
    highlightedWord: string
    description: string
    backgroundColor: string
    textColor: string
  }
  image: Image
  howItWorks: {
    title: string
    highlightedWord: string
    steps: HowItWorkStep[]
  }
  coreFeatures: Feature[]
  statistics: Statistic[]
  testimonial: {
    quote: string
    author: string
  }
  writingUseCases: UseCase[]
  pricingPlans: PricingPlan[]
  faqs: FAQ[]
  callToAction: {
    trialInfo: string
    title: string
    highlightedWord: string
    description: string
    buttonText: string
  }
  footer: {
    companyName: string
    logo: {
      src: string
      alt: string
    }
    description: string
    companyLinks: NavLink[]
    resourceLinks: NavLink[]
    socialLinks: { platform: string; link: string }[]
    copyright: string
  }
  // New data properties:
  about: {
    title: string
    description: string
    features: AboutSectionFeature[]
    buttonText: string
    image: Image
    backgroundColor: string
    textColor: string
  }
  trustedBy: {
    title: string
    brands: TrustedBrand[]
    backgroundColor: string
    textColor: string
  }
  team: {
    title: string
    description: string
    members: TeamSectionMember[]
    backgroundColor: string
    textColor: string
  }
  testimonials: {
    title: string
    testimonials: TestimonialSection[]
    backgroundColor: string
    textColor: string
  }
  services: {
    title: string
    servicesList: Service[]
    backgroundColor: string
    textColor: string
  }
}
export interface FormField {
  type: string
  id: string
  label: string
  placeholder: string
}

export interface ContactInfoItem {
  icon: string
  title: string
  address?: string
  email?: string
  mailto?: string
  description?: string
  linkText?: string
  linkUrl?: string
}

export interface ContactSection {
  title: string
  description: string
  backgroundColor: string
  textColor: string
  form: {
    fields: FormField[]
    submitButtonText: string
    requiredFieldsMessage: string
  }
  contactInfo: ContactInfoItem[]
}
