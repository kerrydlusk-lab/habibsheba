/**
 * ====================================================================
 * PORTFOLIO DATA CONFIGURATION
 * ====================================================================
 * Edit this file to update your personal details, services, skills, 
 * and portfolio projects easily without touching the HTML markup.
 */

const portfolioData = {
  personalInfo: {
    fullName: "Md. Habibur Rahman",
    shortName: "Habibur Rahman",
    professionalTitle: "Web Designer & Full Stack Web Developer",
    experienceYears: "4+ Years",
    tagline: "Crafting High-Performance Websites & Seamless Digital Experiences",
    websiteUrl: "https://newnagorweb.com/",
    whatsappNumber: "+8801954150038",
    whatsappClean: "8801954150038",
    emailAddress: "webhubservice44@gmail.com",
    location: "Dhaka, Bangladesh (Available Worldwide)",
    availabilityBadge: "AVAILABLE FOR WEB PROJECTS",
    heroRotatingTitles: [
      "Modern Websites",
      "WordPress Development",
      "E-commerce Solutions",
      "Creative Web Experiences"
    ],
    bioSummary: "Specialized in building clean, responsive, and SEO-optimized web solutions tailored for business growth. Over 4+ years of hands-on experience turning ideas into sleek, lightning-fast digital realities.",
    aboutDetailed: "I am a passionate Web Designer and Full Stack Web Developer with 4+ years of experience delivering pixel-perfect, highly responsive, and SEO-friendly websites. My focus is on writing clean, modular, and maintainable code that guarantees blazing fast load times and intuitive user journeys. Whether you need a bespoke business website, high-converting landing page, or robust WordPress e-commerce store, I build solutions engineered to perform effortlessly across all devices."
  },

  metrics: [
    { label: "Years Experience", value: "4+", icon: "bi-award" },
    { label: "Completed Projects", value: "35+", icon: "bi-check2-circle" },
    { label: "Code Quality", value: "100%", icon: "bi-code-slash" },
    { label: "Client Support", value: "24/7", icon: "bi-headset" }
  ],

  services: [
    {
      id: "web-design",
      title: "Professional Website Design",
      icon: "bi-palette",
      summary: "Modern, visually engaging, and user-centric layouts tailored specifically to your brand identity.",
      features: [
        "Figma & Wireframe translation",
        "Mobile-first responsive design",
        "Modern glassmorphism & UI trends",
        "Accessible color contrast & UX hierarchy"
      ]
    },
    {
      id: "full-stack",
      title: "Full Stack Web Development",
      icon: "bi-cpu",
      summary: "End-to-end web architecture combining responsive frontend interfaces with secure, reliable backend integrations.",
      features: [
        "Robust PHP & MySQL logic",
        "RESTful API integration",
        "Clean, maintainable codebase",
        "Performance-driven architecture"
      ]
    },
    {
      id: "wordpress",
      title: "WordPress Website Development",
      icon: "bi-wordpress",
      summary: "Custom WordPress setups, theme customization, Elementor tailoring, and lightweight plugin configurations.",
      features: [
        "Custom theme styling",
        "Easy-to-manage client dashboards",
        "Bloat-free plugin implementation",
        "Secure user access & backups"
      ]
    },
    {
      id: "ecommerce",
      title: "E-commerce Website Development",
      icon: "bi-bag-check",
      summary: "High-converting online stores with streamlined checkout flows, product catalogs, and payment gateway readiness.",
      features: [
        "WooCommerce integration",
        "Optimized product landing pages",
        "Cart & checkout UX streamlining",
        "Inventory and order notifications"
      ]
    },
    {
      id: "landing-page",
      title: "Landing Page Design",
      icon: "bi-lightning-charge",
      summary: "High-impact, conversion-focused landing pages built to turn visitors into leads and paying clients.",
      features: [
        "Persuasive visual hierarchy",
        "Speedy above-the-fold loading",
        "Clear call-to-action (CTA) funnels",
        "A/B test ready structure"
      ]
    },
    {
      id: "business-web",
      title: "Business Website Development",
      icon: "bi-briefcase",
      summary: "Credible and corporate web presences built to establish industry authority and generate continuous inquiries.",
      features: [
        "Company branding showcase",
        "Service catalog & team sections",
        "Interactive lead capture forms",
        "Direct WhatsApp & email integration"
      ]
    },
    {
      id: "redesign",
      title: "Website Redesign",
      icon: "bi-arrow-repeat",
      summary: "Revitalize outdated websites with contemporary aesthetics, improved usability, and modern mobile responsiveness.",
      features: [
        "Visual & architectural overhaul",
        "Mobile usability enhancement",
        "Preserved SEO link structures",
        "Enhanced engagement metrics"
      ]
    },
    {
      id: "speed-optimization",
      title: "Website Speed Optimization",
      icon: "bi-speedometer2",
      summary: "Comprehensive performance tuning to boost Google Core Web Vitals, minimize bounce rates, and load in under 2 seconds.",
      features: [
        "Asset minification & compression",
        "Image optimization & lazy loading",
        "Browser cache header strategy",
        "Critical CSS render path tuning"
      ]
    },
    {
      id: "seo-friendly",
      title: "SEO-Friendly Website Development",
      icon: "bi-search",
      summary: "On-page search engine optimization built right into your semantic markup and metadata from day one.",
      features: [
        "Semantic HTML5 tag hierarchy",
        "Schema markup & meta headers",
        "Fast TTFB and mobile indexing",
        "Automated XML sitemap & robots.txt"
      ]
    }
  ],

  skills: [
    { name: "HTML5", category: "frontend", level: "95%", icon: "bi-filetype-html" },
    { name: "CSS3 & Modern CSS", category: "frontend", level: "92%", icon: "bi-filetype-css" },
    { name: "JavaScript (Vanilla/ES6+)", category: "frontend", level: "88%", icon: "bi-filetype-js" },
    { name: "Bootstrap 5", category: "frontend", level: "94%", icon: "bi-bootstrap" },
    { name: "PHP", category: "backend", level: "85%", icon: "bi-filetype-php" },
    { name: "Laravel", category: "backend", level: "78%", icon: "bi-layers" },
    { name: "MySQL", category: "backend", level: "84%", icon: "bi-database" },
    { name: "WordPress & WooCommerce", category: "cms", level: "92%", icon: "bi-wordpress" },
    { name: "Responsive Web Design", category: "core", level: "98%", icon: "bi-phone" },
    { name: "SEO Fundamentals", category: "core", level: "88%", icon: "bi-graph-up-arrow" }
  ],

  process: [
    {
      step: "01",
      title: "Discovery & Planning",
      icon: "bi-compass",
      description: "Gathering business goals, audience expectations, functional needs, and creating a tailored project roadmap."
    },
    {
      step: "02",
      title: "UI/UX Design",
      icon: "bi-pencil-square",
      description: "Crafting wireframes and glassmorphic modern layouts prioritizing responsive aesthetics, readability, and visual impact."
    },
    {
      step: "03",
      title: "Clean Development",
      icon: "bi-code-square",
      description: "Writing semantic HTML5, modular CSS3, and efficient JavaScript code structured for scale and effortless maintenance."
    },
    {
      step: "04",
      title: "Testing & Optimization",
      icon: "bi-shield-check",
      description: "Rigorous cross-browser checks, Core Web Vitals speed tuning, mobile responsiveness audit, and SEO validation."
    },
    {
      step: "05",
      title: "Deployment & Support",
      icon: "bi-rocket-takeoff",
      description: "Seamless launch to live hosting (including GitHub Pages or custom servers) paired with helpful ongoing guidance."
    }
  ],

  projects: [
    {
      id: "shop-ui",
      title: "Modern Shop UI E-commerce Store",
      category: "ecommerce",
      categoryLabel: "E-commerce",
      image: "assets/images/project1.jpg",
      isDemo: true,
      summary: "A sleek, responsive digital storefront featuring interactive shopping carts, product showcases, and friction-free user flows.",
      tags: ["HTML5", "CSS3", "JavaScript", "E-commerce", "Responsive"],
      demoUrl: "https://newnagorweb.com/",
      codeUrl: "https://github.com/",
      featured: true
    },
    {
      id: "startup-web",
      title: "Tech Startup & SaaS Presentation",
      category: "business",
      categoryLabel: "Business Website",
      image: "assets/images/project2.jpg",
      isDemo: true,
      summary: "Modern dark-themed corporate presence with interactive product pricing matrices, feature breakdowns, and lead funnels.",
      tags: ["Bootstrap 5", "UI/UX", "JavaScript", "Business"],
      demoUrl: "https://newnagorweb.com/",
      codeUrl: "https://github.com/",
      featured: true
    },
    {
      id: "hotel-landing",
      title: "Boutique Hotel & Resort Landing Page",
      category: "landing",
      categoryLabel: "Landing Page",
      image: "assets/images/project3.jpg",
      isDemo: true,
      summary: "High-conversion luxury hospitality page with dynamic room preview carousels, instant inquiry prompts, and responsive booking UI.",
      tags: ["Landing Page", "CSS Grid", "Glassmorphism", "Conversion"],
      demoUrl: "https://newnagorweb.com/",
      codeUrl: "https://github.com/",
      featured: true
    },
    {
      id: "consulting-hub",
      title: "Strategic Consulting Corporate Hub",
      category: "business",
      categoryLabel: "Business Website",
      image: "assets/images/project4.jpg",
      isDemo: true,
      summary: "Authoritative business hub designed for professional service firms, highlighting service tiers, case studies, and booking forms.",
      tags: ["Web Design", "Responsive", "SEO-Friendly", "Corporate"],
      demoUrl: "https://newnagorweb.com/",
      codeUrl: "https://github.com/",
      featured: false
    },
    {
      id: "digital-app",
      title: "Digital App Showcase Platform",
      category: "webdev",
      categoryLabel: "Web Development",
      image: "assets/images/project5.jpg",
      isDemo: true,
      summary: "Interactive software showcase featuring interactive mockup previews, user review sections, and instant download CTAs.",
      tags: ["Full Stack", "JavaScript", "Performance", "Modern UI"],
      demoUrl: "https://newnagorweb.com/",
      codeUrl: "https://github.com/",
      featured: false
    },
    {
      id: "travel-portal",
      title: "Global Travel & Tour Portal",
      category: "webdev",
      categoryLabel: "Web Development",
      image: "assets/images/project6.jpg",
      isDemo: true,
      summary: "Visual travel destination discovery hub with filterable tour packages, itinerary overviews, and mobile-friendly inquiry widgets.",
      tags: ["WordPress", "Responsive", "CSS Animation", "Tourism"],
      demoUrl: "https://newnagorweb.com/",
      codeUrl: "https://github.com/",
      featured: false
    }
  ],

  testimonialsConfig: {
    status: "coming_soon", // "coming_soon" or "active"
    message: "Client Feedback Coming Soon",
    subtext: "Currently partnering with select businesses on cutting-edge web projects. Genuine client testimonials will be published here upon project completions.",
    callToAction: "Work with Habibur on your next project and become our next featured success story!"
  }
};

// Export to window object for global client access in main.js
if (typeof window !== "undefined") {
  window.portfolioData = portfolioData;
}
