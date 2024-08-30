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
  imageDimensions: string
  direction: string
}

export interface HowItWorkStep {
  imageDimensions: string
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
    primaryButton: Button
    secondaryButton: Button
  }
  placeholderImage: {
    dimensions: string
  }
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
}
