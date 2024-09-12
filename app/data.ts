import {
  ChartBar,
  Clock,
  Code,
  Codepen,
  Facebook,
  Image,
  Instagram,
  Linkedin,
  MapPin,
  Search,
  Star,
  Terminal,
  Twitter,
} from "lucide-react"

import headerImg from "../public/images/header.png" 
import blackboxImg from "../public/images/blackbox.jpg" 
import codeImg from "../public/images/code.png" 
import companyImg from "../public/images/company.jpg" 
import company2Img from "../public/images/company2.webp" 
import company3Img from "../public/images/company3.webp" 
import composeImg from "../public/images/compose.webp" 
import featureImg from "../public/images/feature.jpg" 
import figmaToReact from "../public/images/figma-to-react.webp" 
import generatorImg from "../public/images/generator.jpg" 
import logoImg from "../public/images/logo.webp" 
import strappiImg from "../public/images/strappi.jpg" 
import userImg from "../public/images/user.jpg" 
import user2Img from "../public/images/user2.jpg" 

let data = {
  page: {
    home: {
      hero: {
        title: "Accelerate Your Development Workflow with AI-Powered Tools",
        highlightedWord: "AI-Powered",
        primaryButton: {
          text: "Get Started Free →",
          link: "#",
        },
        secondaryButton: {
          text: "Book A Demo",
          link: "#",
        },
      },
      image: {
        src: headerImg,
        alt: "",
        dimensions: "1084x569",
      },
      howItWorks: {
        title: "How Wind.AI Enhances Your Workflow",
        highlightedWord: "Enhances",
        steps: [
          {
            image: {
              src: strappiImg,
              alt: ""
            },
            title: "Convert Figma Designs to Tailwind HTML",
            description:
              "Streamline your design-to-code process by converting Figma designs directly into responsive Tailwind HTML.",
          },
          {
            image: {
              src: blackboxImg,
              alt: ""
            },
            title: "Transform HTML to React Components",
            description:
              "Easily convert your static HTML into dynamic, reusable React components, reducing development time.",
          },
          {
            image: {
              src: figmaToReact,
              alt: ""
            },
            title: "Optimize and Generate Code",
            description:
              "Use AI to optimize your existing code and generate new, efficient code snippets tailored to your needs.",
          },
        ],
      },
      coreFeatures: [
        {
          title: "Boost Your Development Efficiency",
          highlightedWord: "Efficiency",
          description: "Wind.AI combines powerful AI tools to accelerate your workflow, from design to deployment.",
          features: [
            "Convert Figma designs to Tailwind HTML effortlessly.",
            "Transform HTML to React components automatically.",
            "Optimize your code with AI-driven recommendations.",
          ],
          buttonText: "Start Optimizing →",
          image: {
            src: codeImg,
            alt: ""
          },
          direction: "normal",
        },
        {
          title: "Unleash Creativity with AI-Generated Content",
          highlightedWord: "Creativity",
          description:
            "Generate AI-driven prompts and images that enhance your creative projects and marketing efforts.",
          buttonText: "Explore AI Creativity →",
          image: {
            src: featureImg,
            alt: ""
          },
          direction: "reverse",
          features: [],
        },
        {
          title: "Simplify Complex Workflows",
          highlightedWord: "Simplify",
          description: "Wind.AI reduces the complexity of your development tasks, allowing you to focus on innovation.",
          features: [
            "AI-powered tools for streamlined development.",
            "Generate high-quality, AI-created images.",
            "Transform and optimize code with ease.",
          ],
          buttonText: "Get Started →",
          image: {
            src: composeImg,
            alt: ""
          },
          direction: "normal",
        },
      ],
      statistics: [
        {
          icon: Clock,
          value: "70%",
          description: "Time saved on design-to-code conversion with Wind.AI.",
        },
        {
          icon: ChartBar,
          value: "85%",
          description: "Increase in development speed with AI-driven code transformation.",
        },
      ],
      testimonial: {
        quote:
          "“Wind.AI has completely transformed our development process. The AI tools are intuitive and save us so much time. Highly recommended!”",
        author: "- Alex Johnson, Frontend Developer",
      },
      writingUseCases: [
        {
          icon: Code,
          title: "Figma to Tailwind Conversion",
          description:
            "Seamlessly convert Figma designs into Tailwind HTML, bridging the gap between design and development.",
        },
        {
          icon: Codepen,
          title: "HTML to React Conversion",
          description:
            "Automatically transform static HTML code into dynamic React components, streamlining your front-end workflow.",
        },
        {
          icon: Terminal,
          title: "AI Code Optimization",
          description:
            "Optimize your existing code with AI recommendations, ensuring cleaner and more efficient codebases.",
        },
        {
          icon: Image,
          title: "AI Image Generation",
          description:
            "Create stunning, AI-generated images from text descriptions or other inputs, perfect for creative and marketing projects.",
        },
        {
          icon: Search,
          title: "AI Prompt Generation",
          description:
            "Generate effective AI prompts tailored to your specific needs, improving AI interactions and outcomes.",
        },
      ],
    },
    about: {
      // About Page Data
      hero: {
        title: "A Magical Tool For Seamless Collaboration",
        highlightedWord: "Collaboration",
        description: "Mastering the Art of AI Tool: Unleashing the Power of Automated Creativity with AIMug™",
        backgroundColor: "#111022",
        textColor: "white",
      },
      aboutSection: {
        title: "Create Something New with AIMug, that are simple to use",
        description:
          "There are more than 80+ use cases and templates to pick from to meet all of your writing demands. Let’s Communicate with your customers with emotions",
        features: [
          {
            icon: Star,
            text: "Rated 4.8, 1,000+ Reviews",
            color: "#00E3F2",
          },
          {
            icon: MapPin,
            text: "Rated 4.8, 1,000+ Reviews",
            color: "#5772fd",
          },
        ],
        buttonText: "Get Started →",
        image: {
          src: generatorImg,
          alt: ""
        },
        backgroundColor: "#111022",
        textColor: "white",
      },
    },
    contact: {
      hero: {
        title: "Our Dynamic Team are Waiting for Reach you",
        highlightedWord: "Waiting",
        description: "Mastering the Art of AI Tool: Unleashing the Power of Automated Creativity with AIMug™",
        backgroundColor: "#111022",
        textColor: "white",
      },
      contactSection: {
        title: "Contact us",
        description: "Whatever your goal - we will get you there.",
        backgroundColor: "bg-neutral-900", // Assuming this from the class name "bg-neutral-900"
        textColor: "white",
        form: {
          fields: [
            {
              type: "text",
              id: "hs-tac-input-name",
              label: "Name",
              placeholder: "Name",
            },
            {
              type: "email",
              id: "hs-tac-input-email",
              label: "Email",
              placeholder: "Email",
            },

            {
              type: "textarea",
              id: "hs-tac-message",
              label: "Tell us about your project",
              placeholder: "This is a textarea placeholder",
            },
          ],
          submitButtonText: "Submit",
          requiredFieldsMessage: "All fields are required",
        },
        contactInfo: [
          {
            icon: "location", // You can replace with SVG path or image URL
            title: "Our address:",
            address: "300 Bath Street, Tay House<br />Glasgow G2 4JR, United Kingdom",
          },
          {
            icon: "mail", // You can replace with SVG path or image URL
            title: "Email us:",
            email: "hello@example.so",
            mailto: "mailto:hello@example.so", // For creating a clickable mailto link
          },
          {
            icon: "briefcase", // You can replace with SVG path or image URL
            title: "We're hiring",
            description:
              "We're thrilled to announce that we're expanding our team and looking for talented individuals like you to join us.",
            linkText: "Job openings",
            linkUrl: "#", // Add the actual URL for job openings here
          },
        ],
      },
    },
    pricing: {
      hero: {
        title: "A Magical Tool For Seamless Collaboration",
        highlightedWord: "Collaboration",
        description: "Mastering the Art of AI Tool: Unleashing the Power of Automated Creativity with AIMug™",
        backgroundColor: "#111022",
        textColor: "white",
      },
    },
  },
  components: {
    header: {
      logo: {
        src: logoImg,
        alt: "Wind.AI Logo",
      },
      companyName: "Wind.AI",
      navLinks: [
        { text: "Home", link: "/" },
        { text: "About", link: "/about" },
        { text: "Pricing", link: "/pricing" },
        { text: "Contact", link: "/contact" },
      ],
      buttons: [
        { text: "Login", link: "/signin" },
        { text: "Sign Up", link: "/signup" },
      ],
    },
    Services: {
      title: "We deliver great quality and performance while offering you the most recent AI Business products.",
      servicesList: [
        {
          icon: Codepen,
          title: "HTML to React Conversion",
          description:
            "Automatically transform static HTML code into dynamic React components, streamlining your front-end workflow.",
        },
        {
          icon: Terminal,
          title: "AI Code Optimization",
          description:
            "Optimize your existing code with AI recommendations, ensuring cleaner and more efficient codebases.",
        },
        {
          icon: Image,
          title: "AI Image Generation",
          description:
            "Create stunning, AI-generated images from text descriptions or other inputs, perfect for creative and marketing projects.",
        },
        {
          icon: Search,
          title: "AI Prompt Generation",
          description:
            "Generate effective AI prompts tailored to your specific needs, improving AI interactions and outcomes.",
        },
      ],
      backgroundColor: "#111022",
      textColor: "white",
    },
    testimonialsSection: {
      title: "AIMug. Received ⭐️ 4.8/5 Stars in Over 10,000+ Reviews.",
      testimonials: [
        {
          author: {
            image: {
              src: userImg,
              alt: ""
            },
            name: "Dianne Russell",
            position: "Content Creator",
          },
          quote: "Great tool for content writing, Love it!",
          comment: "This is the best thing that has happened to my team in a while! Makes post text something.",
          platform: "Trustpilot",
          rating: 5,
        },
        {
          author: {
            image: {
              src: userImg,
              alt: ""
            },
            name: "Dianne Russell",
            position: "Content Creator",
          },
          quote: "Great tool for content writing, Love it!",
          comment: "This is the best thing that has happened to my team in a while! Makes post text something.",
          platform: "Trustpilot",
          rating: 5,
        },
        {
          author: {
            image: {
              src: userImg,
              alt: ""
            },
            name: "Dianne Russell",
            position: "Content Creator",
          },
          quote: "Great tool for content writing, Love it!",
          comment: "This is the best thing that has happened to my team in a while! Makes post text something.",
          platform: "Trustpilot",
          rating: 5,
        },
        {
          author: {
            image: {
              src: userImg,
              alt: ""
            },
            name: "Dianne Russell",
            position: "Content Creator",
          },
          quote: "Great tool for content writing, Love it!",
          comment: "This is the best thing that has happened to my team in a while! Makes post text something.",
          platform: "Trustpilot",
          rating: 5,
        },
        {
          author: {
            image: {
              src: userImg,
              alt: ""
            },
            name: "Dianne Russell",
            position: "Content Creator",
          },
          quote: "Great tool for content writing, Love it!",
          comment: "This is the best thing that has happened to my team in a while! Makes post text something.",
          platform: "Trustpilot",
          rating: 5,
        },
        {
          author: {
            image: {
              src: userImg,
              alt: ""
            },
            name: "Dianne Russell",
            position: "Content Creator",
          },
          quote: "Great tool for content writing, Love it!",
          comment: "This is the best thing that has happened to my team in a while! Makes post text something.",
          platform: "Trustpilot",
          rating: 5,
        },
      ],
      backgroundColor: "#111022",
      textColor: "white",
    },
    trustedBySection: {
      title: "Trusted by 10.8k+ teams, agencies and freelancers.",
      brands: [
        {
          src: userImg,
          alt: "Trustpilot Logo",
          name: "Trustpilot",
        },
        {
          src: userImg,
          alt: "Trustpilot Logo",
          name: "Trustpilot",
        },
        {
          src: company2Img,
          alt: "Trustpilot Logo",
          name: "Trustpilot",
        },
        {
          src: company3Img,
          alt: "Trustpilot Logo",
          name: "Trustpilot",
        },
        {
          src: company3Img,
          alt: "Trustpilot Logo",
          name: "Trustpilot",
        },
        {
          src: company3Img,
          alt: "Trustpilot Logo",
          name: "Trustpilot",
        },
        {
          src: company3Img,
          alt: "Vertigo Logo",
          name: "Vertigo",
        },
      ],
      backgroundColor: "#111022",
      textColor: "white",
    },
    teamSection: {
      title: "Our Genius Team",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      members: [
        {
          image:
          {
            src: user2Img,
            alt: ""
          },
          name: "Martin Vaccaro",
          position: "Game Player",
          socialLinks: [
            {
              platform: Linkedin,
              link: "#",
            },
            {
              platform: Twitter,
              link: "#",
            },
            {
              platform: Facebook,
              link: "#",
            },
            {
              platform: Instagram,
              link: "#",
            },
          ],
        },
        {
          image:
          {
            src: user2Img,
            alt: ""
          },
          name: "Martin Vaccaro",
          position: "Game Player",
          socialLinks: [
            {
              platform: Linkedin,
              link: "#",
            },
            {
              platform: Twitter,
              link: "#",
            },
            {
              platform: Facebook,
              link: "#",
            },
            {
              platform: Instagram,
              link: "#",
            },
          ],
        },
        {
          image:
          {
            src: user2Img,
            alt: ""
          },
          name: "Martin Vaccaro",
          position: "Game Player",
          socialLinks: [
            {
              platform: Linkedin,
              link: "#",
            },
            {
              platform: Twitter,
              link: "#",
            },
            {
              platform: Facebook,
              link: "#",
            },
            {
              platform: Instagram,
              link: "#",
            },
          ],
        },
        {
          image:
          {
            src: user2Img,
            alt: ""
          },
          name: "Martin Vaccaro",
          position: "Game Player",
          socialLinks: [
            {
              platform: Linkedin,
              link: "#",
            },
            {
              platform: Twitter,
              link: "#",
            },
            {
              platform: Facebook,
              link: "#",
            },
            {
              platform: Instagram,
              link: "#",
            },
          ],
        },
        {
          image:
          {
            src: user2Img,
            alt: ""
          },
          name: "Martin Vaccaro",
          position: "Game Player",
          socialLinks: [
            {
              platform: Linkedin,
              link: "#",
            },
            {
              platform: Twitter,
              link: "#",
            },
            {
              platform: Facebook,
              link: "#",
            },
            {
              platform: Instagram,
              link: "#",
            },
          ],
        },
        {
          image:
          {
            src: user2Img,
            alt: ""
          },
          name: "Martin Vaccaro",
          position: "Game Player",
          socialLinks: [
            {
              platform: Linkedin,
              link: "#",
            },
            {
              platform: Twitter,
              link: "#",
            },
            {
              platform: Facebook,
              link: "#",
            },
            {
              platform: Instagram,
              link: "#",
            },
          ],
        },
      ],
      backgroundColor: "#0a0913",
      textColor: "white",
    },
    pricingPlans: [
      {
        name: "Free",
        price: "0",
        buttonText: "Start For Free",
        billingInfo: "Free forever with limited features",
        features: [
          "Convert 5 Figma designs/month",
          "Generate 10 AI Images/month",
          "10 HTML to React conversions/month",
          "20 AI Code Optimizations/month",
          "Basic Support",
        ],
      },
      {
        name: "Pro",
        price: "49",
        buttonText: "Upgrade to Pro",
        billingInfo: "Billed monthly, cancel anytime",
        features: [
          "Unlimited Figma to Tailwind conversions",
          "Generate 200 AI Images/month",
          "Unlimited HTML to React conversions",
          "Unlimited AI Code Optimizations",
          "Priority Support",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "199",
        buttonText: "Upgrade to Enterprise",
        billingInfo: "Billed annually (save 20%)",
        features: ["Unlimited everything", "Custom AI model integrations", "Dedicated Support & Account Manager"],
      },
    ],
    footer: {
      companyName: "Wind.AI",
      logo: {
        src: logoImg,
        alt: "Wind.AI Logo",
      },
      description:
        "Wind.AI empowers developers and designers with AI-driven tools to optimize workflows and unleash creativity.",
      companyLinks: [
        { text: "Sign In", link: "#" },
        { text: "Register", link: "#" },
        { text: "Pricing", link: "#" },
        { text: "Privacy Policy", link: "#" },
        { text: "Careers", link: "#" },
      ],
      resourceLinks: [
        { text: "Blog", link: "#" },
        { text: "Case Studies", link: "#" },
        { text: "API Documentation", link: "#" },
        { text: "Help Center", link: "#" },
      ],
      socialLinks: [
        { platform: "facebook", link: "#" },
        { platform: "twitter", link: "#" },
        { platform: "instagram", link: "#" },
      ],
      copyright: "Copyright © 2024. All Rights Reserved.",
    },
    faqs: [
      {
        question: "What is Wind.AI?",
        answer:
          "Wind.AI is a platform offering AI-powered tools to streamline development processes, including design conversion, code transformation, and content generation.",
      },
      {
        question: "How do I get started with Wind.AI?",
        answer: "Sign up for a free account and explore the features. Upgrade anytime to access more advanced tools.",
      },
      {
        question: "Is there a free trial available?",
        answer:
          "Yes, Wind.AI offers a free plan with limited features so you can explore the platform before upgrading.",
      },
      {
        question: "Can I upgrade or downgrade my plan at any time?",
        answer: "Yes, you can change your subscription plan anytime from your account settings.",
      },
      {
        question: "How does the Figma to Tailwind conversion work?",
        answer:
          "Our AI analyzes your Figma designs and automatically generates Tailwind HTML code, saving you hours of manual coding.",
      },
      {
        question: "What support options are available?",
        answer:
          "Free users get basic support, while Pro and Enterprise users enjoy priority support and access to a dedicated account manager.",
      },
      {
        question: "How secure is my data on Wind.AI?",
        answer:
          "We prioritize security, using industry-standard encryption and compliance protocols to safeguard your data.",
      },
    ],
    callToAction: {
      trialInfo: "14-Day Free Trial",
      title: "Transform Your Development Process with Wind.AI",
      highlightedWord: "Transform",
      description:
        "Experience the power of AI in your workflow. Sign up today and start optimizing your development process. No Credit Card Required.",
      buttonText: "Get Started Free →",
    },
  },
}
export default data
