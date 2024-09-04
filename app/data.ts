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
        src: "https://www.figma.com/community/thumbnail?resource_id=747985167520967365&resource_type=plugin",
        alt: "",
        dimensions: "1084x569",
      },
      howItWorks: {
        title: "How Rain.ai Enhances Your Workflow",
        highlightedWord: "Enhances",
        steps: [
          {
            image: {
              src: "https://strapi.dhiwise.com/uploads/618fa90c201104b94458e1fb_639ac4f9dc13a1698627681a_Main_Image_063ee2704f.jpg",
              alt: ""
            },
            title: "Convert Figma Designs to Tailwind HTML",
            description:
              "Streamline your design-to-code process by converting Figma designs directly into responsive Tailwind HTML.",
          },
          {
            image: {
              src: "https://cdn.analyticsvidhya.com/wp-content/uploads/2024/02/Blackbox-ai-01-01-01-scaled.jpg",
              alt: ""
            },
            title: "Transform HTML to React Components",
            description:
              "Easily convert your static HTML into dynamic, reusable React components, reducing development time.",
          },
          {
            image: {
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEiuCbWlOqTnLlnvi-qmKyedpMgTyWGVtqrLcxuYKmc3jke3gTVovEEWsq2nviaRxmgN8&usqp=CAU",
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
          description: "Rain.ai combines powerful AI tools to accelerate your workflow, from design to deployment.",
          features: [
            "Convert Figma designs to Tailwind HTML effortlessly.",
            "Transform HTML to React components automatically.",
            "Optimize your code with AI-driven recommendations.",
          ],
          buttonText: "Start Optimizing →",
          image: {
            src: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/323897865/original/be82b8ac55339792612bebbbc94c6562e9992b4b/convert-figma-or-psd-to-html-and-tailwind-css.png",
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
            src: "https://i.ytimg.com/vi/eMzYXofcYNg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCzDH2ODMOUmhREH565AGbwTsm9pw",
            alt: ""
          },
          direction: "reverse",
          features: [],
        },
        {
          title: "Simplify Complex Workflows",
          highlightedWord: "Simplify",
          description: "Rain.ai reduces the complexity of your development tasks, allowing you to focus on innovation.",
          features: [
            "AI-powered tools for streamlined development.",
            "Generate high-quality, AI-created images.",
            "Transform and optimize code with ease.",
          ],
          buttonText: "Get Started →",
          image: {
            src: "https://composio.dev/wp-content/uploads/2024/05/intro-1024x512.jpg.webp",
            alt: ""
          },
          direction: "normal",
        },
      ],
      statistics: [
        {
          icon: Clock,
          value: "70%",
          description: "Time saved on design-to-code conversion with Rain.ai.",
        },
        {
          icon: ChartBar,
          value: "85%",
          description: "Increase in development speed with AI-driven code transformation.",
        },
      ],
      testimonial: {
        quote:
          "“Rain.ai has completely transformed our development process. The AI tools are intuitive and save us so much time. Highly recommended!”",
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
          src: "https://i.ytimg.com/vi/Vox3xNkbd_Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBJ6Mh1BVih8f6o3GrbhF7efuQxgA",
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
        src: "your-logo.png",
        alt: "Rain.ai Logo",
      },
      companyName: "Rain.ai",
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
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3flIHsvZtK3eU7tEnp-LSEjNznTZCn0dkcA&s",
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
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3flIHsvZtK3eU7tEnp-LSEjNznTZCn0dkcA&s",
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
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3flIHsvZtK3eU7tEnp-LSEjNznTZCn0dkcA&s",
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
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3flIHsvZtK3eU7tEnp-LSEjNznTZCn0dkcA&s",
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
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3flIHsvZtK3eU7tEnp-LSEjNznTZCn0dkcA&s",
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
              src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3flIHsvZtK3eU7tEnp-LSEjNznTZCn0dkcA&s",
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
          src: "https://static.vecteezy.com/system/resources/previews/005/076/592/non_2x/hacker-mascot-for-sports-and-esports-logo-free-vector.jpg",
          alt: "Trustpilot Logo",
          name: "Trustpilot",
        },
        {
          src: "https://img.freepik.com/premium-photo/blue-white-sign-that-says-z-it_1136070-1643.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722988800&semt=ais_hybrid",
          alt: "Trustpilot Logo",
          name: "Trustpilot",
        },
        {
          src: "https://marketplace.canva.com/EAFMNm9ybqQ/1/0/1600w/canva-gold-luxury-initial-circle-logo-qRQJCijq_Jw.jpg",
          alt: "Trustpilot Logo",
          name: "Trustpilot",
        },
        {
          src: "https://marketplace.canva.com/EAF65EWbuV0/4/0/1600w/canva-black-and-blue-simple-creative-illustrative-dragons-e-sport-logo-NO64HUH8vCA.jpg",
          alt: "Trustpilot Logo",
          name: "Trustpilot",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/1280px-Ford_logo_flat.svg.png",
          alt: "Trustpilot Logo",
          name: "Trustpilot",
        },
        {
          src: "https://bcassetcdn.com/public/blog/wp-content/uploads/2022/12/08175139/colored-tulip-logo-design-by-lelevien-dribbble.png",
          alt: "Trustpilot Logo",
          name: "Trustpilot",
        },
        {
          src: "https://media.istockphoto.com/id/1313644269/vector/gold-and-silver-circle-star-logo-template.jpg?s=612x612&w=0&k=20&c=hDqCI9qTkNqNcKa6XS7aBim7xKz8cZbnm80Z_xiU2DI=",
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
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMiM_M4iw0OVNLm2NMZxkBwNZxqMTSVyojBMTqr4aV-uCdRCmL",
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
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMiM_M4iw0OVNLm2NMZxkBwNZxqMTSVyojBMTqr4aV-uCdRCmL",
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
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMiM_M4iw0OVNLm2NMZxkBwNZxqMTSVyojBMTqr4aV-uCdRCmL",
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
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMiM_M4iw0OVNLm2NMZxkBwNZxqMTSVyojBMTqr4aV-uCdRCmL",
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
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMiM_M4iw0OVNLm2NMZxkBwNZxqMTSVyojBMTqr4aV-uCdRCmL",
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
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMiM_M4iw0OVNLm2NMZxkBwNZxqMTSVyojBMTqr4aV-uCdRCmL",
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
      companyName: "Rain.ai",
      logo: {
        src: "your-logo.png",
        alt: "Rain.ai Logo",
      },
      description:
        "Rain.ai empowers developers and designers with AI-driven tools to optimize workflows and unleash creativity.",
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
        question: "What is Rain.ai?",
        answer:
          "Rain.ai is a platform offering AI-powered tools to streamline development processes, including design conversion, code transformation, and content generation.",
      },
      {
        question: "How do I get started with Rain.ai?",
        answer: "Sign up for a free account and explore the features. Upgrade anytime to access more advanced tools.",
      },
      {
        question: "Is there a free trial available?",
        answer:
          "Yes, Rain.ai offers a free plan with limited features so you can explore the platform before upgrading.",
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
        question: "How secure is my data on Rain.ai?",
        answer:
          "We prioritize security, using industry-standard encryption and compliance protocols to safeguard your data.",
      },
    ],
    callToAction: {
      trialInfo: "14-Day Free Trial",
      title: "Transform Your Development Process with Rain.ai",
      highlightedWord: "Transform",
      description:
        "Experience the power of AI in your workflow. Sign up today and start optimizing your development process. No Credit Card Required.",
      buttonText: "Get Started Free →",
    },
  },
}
export default data
