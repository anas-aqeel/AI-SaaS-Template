import { FilePenLine, Code, Terminal, Image, Layout, Search, PieChart, Codepen, ShoppingCart, FileText, Activity } from 'lucide-react';

let data = {
  "header": {
    "logo": {
      "src": "your-logo.png",
      "alt": "Rain.ai Logo"
    },
    "companyName": "Rain.ai",
    "navLinks": [
      { "text": "Home", "link": "#" },
      { "text": "About", "link": "#" },
      { "text": "Features", "link": "#" },
      { "text": "Blog", "link": "#" },
      { "text": "Contact", "link": "#" }
    ],
    "buttons": [
      { "text": "Login", "link": "#" },
      { "text": "Sign Up", "link": "#" }
    ]
  },
  "hero": {
    "title": "Accelerate Your Development Workflow with AI-Powered Tools",
    "highlightedWord": "AI-Powered",
    "primaryButton": {
      "text": "Get Started Free →",
      "link": "#"
    },
    "secondaryButton": {
      "text": "Book A Demo",
      "link": "#"
    }
  },
  "placeholderImage": {
    "dimensions": "1084x569"
  },
  "howItWorks": {
    "title": "How Rain.ai Enhances Your Workflow",
    "highlightedWord": "Enhances",
    "steps": [
      {
        "imageDimensions": "392x220",
        "title": "Convert Figma Designs to Tailwind HTML",
        "description": "Streamline your design-to-code process by converting Figma designs directly into responsive Tailwind HTML."
      },
      {
        "imageDimensions": "392x220",
        "title": "Transform HTML to React Components",
        "description": "Easily convert your static HTML into dynamic, reusable React components, reducing development time."
      },
      {
        "imageDimensions": "392x220",
        "title": "Optimize and Generate Code",
        "description": "Use AI to optimize your existing code and generate new, efficient code snippets tailored to your needs."
      }
    ]
  },
  "coreFeatures": [
    {
      "title": "Boost Your Development Efficiency",
      "highlightedWord": "Efficiency",
      "description": "Rain.ai combines powerful AI tools to accelerate your workflow, from design to deployment.",
      "features": [
        "Convert Figma designs to Tailwind HTML effortlessly.",
        "Transform HTML to React components automatically.",
        "Optimize your code with AI-driven recommendations."
      ],
      "buttonText": "Start Optimizing →",
      "imageDimensions": "596X455",
      "direction": "normal"
    },
    {
      "title": "Unleash Creativity with AI-Generated Content",
      "highlightedWord": "Creativity",
      "description": "Generate AI-driven prompts and images that enhance your creative projects and marketing efforts.",
      "buttonText": "Explore AI Creativity →",
      "imageDimensions": "596X455",
      "direction": "reverse",
      "features": []
    },
    {
      "title": "Simplify Complex Workflows",
      "highlightedWord": "Simplify",
      "description": "Rain.ai reduces the complexity of your development tasks, allowing you to focus on innovation.",
      "features": [
        "AI-powered tools for streamlined development.",
        "Generate high-quality, AI-created images.",
        "Transform and optimize code with ease."
      ],
      "buttonText": "Get Started →",
      "imageDimensions": "596X455",
      "direction": "normal"
    }
  ],
  "statistics": [
    {
      "icon": "clock",
      "value": "70%",
      "description": "Time saved on design-to-code conversion with Rain.ai."
    },
    {
      "icon": "chart-bar",
      "value": "85%",
      "description": "Increase in development speed with AI-driven code transformation."
    }
  ],
  "testimonial": {
    "quote": "“Rain.ai has completely transformed our development process. The AI tools are intuitive and save us so much time. Highly recommended!”",
    "author": "- Alex Johnson, Frontend Developer"
  },
  "writingUseCases": [
    {
      "icon": Code,
      "title": "Figma to Tailwind Conversion",
      "description": "Seamlessly convert Figma designs into Tailwind HTML, bridging the gap between design and development."
    },
    {
      "icon": Codepen,
      "title": "HTML to React Conversion",
      "description": "Automatically transform static HTML code into dynamic React components, streamlining your front-end workflow."
    },
    {
      "icon": Terminal,
      "title": "AI Code Optimization",
      "description": "Optimize your existing code with AI recommendations, ensuring cleaner and more efficient codebases."
    },
    {
      "icon": Image,
      "title": "AI Image Generation",
      "description": "Create stunning, AI-generated images from text descriptions or other inputs, perfect for creative and marketing projects."
    },
    {
      "icon": Search,
      "title": "AI Prompt Generation",
      "description": "Generate effective AI prompts tailored to your specific needs, improving AI interactions and outcomes."
    }
  ],
  "pricingPlans": [
    {
      "name": "Free",
      "price": "0",
      "buttonText": "Start For Free",
      "billingInfo": "Free forever with limited features",
      "features": [
        "Convert 5 Figma designs/month",
        "Generate 10 AI Images/month",
        "10 HTML to React conversions/month",
        "20 AI Code Optimizations/month",
        "Basic Support"
      ]
    },
    {
      "name": "Pro",
      "price": "49",
      "buttonText": "Upgrade to Pro",
      "billingInfo": "Billed monthly, cancel anytime",
      "features": [
        "Unlimited Figma to Tailwind conversions",
        "Generate 200 AI Images/month",
        "Unlimited HTML to React conversions",
        "Unlimited AI Code Optimizations",
        "Priority Support"
      ],
      "popular": true
    },
    {
      "name": "Enterprise",
      "price": "199",
      "buttonText": "Upgrade to Enterprise",
      "billingInfo": "Billed annually (save 20%)",
      "features": [
        "Unlimited everything",
        "Custom AI model integrations",
        "Dedicated Support & Account Manager"
      ]
    }
  ],
  "faqs": [
    {
      "question": "What is Rain.ai?",
      "answer": "Rain.ai is a platform offering AI-powered tools to streamline development processes, including design conversion, code transformation, and content generation."
    },
    {
      "question": "How do I get started with Rain.ai?",
      "answer": "Sign up for a free account and explore the features. Upgrade anytime to access more advanced tools."
    },
    {
      "question": "Is there a free trial available?",
      "answer": "Yes, Rain.ai offers a free plan with limited features so you can explore the platform before upgrading."
    },
    {
      "question": "Can I upgrade or downgrade my plan at any time?",
      "answer": "Yes, you can change your subscription plan anytime from your account settings."
    },
    {
      "question": "How does the Figma to Tailwind conversion work?",
      "answer": "Our AI analyzes your Figma designs and automatically generates Tailwind HTML code, saving you hours of manual coding."
    },
    {
      "question": "What support options are available?",
      "answer": "Free users get basic support, while Pro and Enterprise users enjoy priority support and access to a dedicated account manager."
    },
    {
      "question": "How secure is my data on Rain.ai?",
      "answer": "We prioritize security, using industry-standard encryption and compliance protocols to safeguard your data."
    }
  ],
  "callToAction": {
    "trialInfo": "14-Day Free Trial",
    "title": "Transform Your Development Process with Rain.ai",
    "highlightedWord": "Transform",
    "description": "Experience the power of AI in your workflow. Sign up today and start optimizing your development process. No Credit Card Required.",
    "buttonText": "Get Started Free →"
  },
  "footer": {
    "companyName": "Rain.ai",
    "logo": {
      "src": "your-logo.png",
      "alt": "Rain.ai Logo"
    },
    "description": "Rain.ai empowers developers and designers with AI-driven tools to optimize workflows and unleash creativity.",
    "companyLinks": [
      { "text": "Sign In", "link": "#" },
      { "text": "Register", "link": "#" },
      { "text": "Pricing", "link": "#" },
      { "text": "Privacy Policy", "link": "#" },
      { "text": "Careers", "link": "#" }
    ],
    "resourceLinks": [
      { "text": "Blog", "link": "#" },
      { "text": "Case Studies", "link": "#" },
      { "text": "API Documentation", "link": "#" },
      { "text": "Help Center", "link": "#" }
    ],
    "socialLinks": [
      { "platform": "facebook", "link": "#" },
      { "platform": "twitter", "link": "#" },
      { "platform": "instagram", "link": "#" }
    ],
    "copyright": "Copyright © 2024. All Rights Reserved."
  }
}
export default data;
