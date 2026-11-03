import imgNattyPell from "@/public/nattypell.png";
import imgKingSoftware from "@/public/king-software.png";
import imgATBConcessions from "@/public/atbconcessions.png";
import imgEsthemax from "@/public/esthemax.png";
import imgTSA from "@/public/torontostrikingacademy.png";
import imgLiquidBeauty from "@/public/liquidbeauty.png";
import imgClinicaPrestige from "@/public/clinicaprestige.png";
import imgNewActivcont from "@/public/newactivcont.png";
import imgSRMFPBA from "@/public/srmfpba.png";
import imgUntoldCreators from "@/public/untoldcreators.png";
import imgNotariatMagurele from "@/public/notariatmagurele.png";
import imgScentoverse from "@/public/scentoverse.png";
import imgSmartDrivingPro from "@/public/smartdrivingpro.png";
import imgDrBray from "@/public/drbray.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Stack",
        hash: "#stack",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Services",
        hash: "#services",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const stackData = [
    {
        title: "WordPress",
        url: "/icon-wordpress.svg",
    },
    {
        title: "WooCommerce",
        url: "/icon-woocommerce.svg",
    },
    {
        title: "React",
        url: "/icon-react.svg",
    },
    {
        title: "Next.js",
        url: "/icon-nextjs.svg",
    },
    {
        title: "Astro JS",
        url: "/icon-astro.svg",
    },
    {
        title: "Figma",
        url: "/icon-figma.svg",
    },
] as const;

export const projectsData = [
    {
        title: "Clinica Prestige",
        description:
            "Designed and developed a custom WordPress block theme for a medical clinic, with Gutenberg blocks for specialties, doctors, imaging services and online booking.",
        tags: ["WordPress", "Gutenberg", "PHP", "SCSS", "JavaScript"],
        imageUrl: imgClinicaPrestige,
        url: "https://www.clinicaprestige.ro",
    },
    {
        title: "New Activcont",
        description:
            "Designed and developed a WordPress site for an accounting firm with Elementor and WooCommerce, featuring online service orders and a client portal for documents.",
        tags: ["WordPress", "WooCommerce", "Elementor", "PHP", "SCSS"],
        imageUrl: imgNewActivcont,
        url: "https://newactivcont.ro",
    },
    {
        title: "SRMFPBA",
        description:
            "Designed and developed a custom WordPress block theme for a Romanian medical society, with Gutenberg blocks, bilingual content and course pages with registration forms.",
        tags: ["WordPress", "Gutenberg", "PHP", "SCSS", "JavaScript"],
        imageUrl: imgSRMFPBA,
        url: "https://srmfpba.ro",
    },
    {
        title: "Untold Creators by Visa",
        description:
            "Developed a custom WordPress block theme for a music mentorship program, with a creators section and a public voting system for favorite creators.",
        tags: ["WordPress", "PHP", "SCSS", "JavaScript"],
        imageUrl: imgUntoldCreators,
        url: "https://www.untoldcreators.com",
    },
    {
        title: "Birou Notarial Oancea & Ciuhan",
        description:
            "Developed a static website for a notary office with Astro and Tailwind CSS, using Sanity CMS to manage FAQs and required-document lists.",
        tags: ["Astro", "Tailwind CSS", "Sanity", "Vercel"],
        imageUrl: imgNotariatMagurele,
        url: "https://www.notariatmagurele.ro",
    },
    {
        title: "Scentoverse",
        description:
            "Developed a WooCommerce perfume store on WordPress, with custom features for referrals, a customer wallet, perfume samples and partner pages.",
        tags: ["WordPress", "WooCommerce", "Elementor", "PHP", "SCSS"],
        imageUrl: imgScentoverse,
        url: "https://scentoverse.ro",
    },
    {
        title: "Smart Driving PRO",
        description:
            "Designed and developed a WordPress site with Elementor for a Cardiff driving school, with lesson pages, student testimonials, a booking page and a blog.",
        tags: ["WordPress", "Elementor", "PHP", "SCSS", "JavaScript"],
        imageUrl: imgSmartDrivingPro,
        url: "https://smartdrivingpro.com",
    },
    {
        title: "Dr. Peter Bray",
        description:
            "Designed and developed a custom WordPress theme with Elementor for a Toronto plastic surgeon, with a before-and-after gallery and a resource center.",
        tags: ["WordPress", "Elementor", "PHP", "SCSS", "JavaScript"],
        imageUrl: imgDrBray,
        url: "https://drbray.ca",
    },
    {
        title: "Natty Pell",
        description:
            "I built an ecommerce store for a local handmade leather goods brand, integrating payment and shipping services. First I designed the website in Figma and then developed it.",
        tags: ["WordPress", "WooCommerce", "Divi", "CSS", "Figma"],
        imageUrl: imgNattyPell,
        url: "https://nattypell.ro",
    },
    {
        title: "King Software",
        description:
            "A WooCommerce store I built for a software license provider. Focused on a clean, modern, and intuitive design, it highlights products, uses clear call-to-actions, and builds trust with detailed guides and partner logos.",
        tags: ["WordPress", "WooCommerce", "PHP", "CSS", "Figma"],
        imageUrl: imgKingSoftware,
        url: "https://king-software.ciprianionita.net",
    },
    {
        title: "ATB Concessions",
        description:
            "Designed a static HTML website from scratch with Figma and developed it using Astro JS framework for optimal performance and user experience.",
        tags: ["Astro", "HTML", "CSS", "JavaScript", "Figma"],
        imageUrl: imgATBConcessions,
        url: "https://atbconcessions.co.uk",
    },
    {
        title: "Esthemax",
        description:
            "Developed an e-commerce website using WooCommerce and Elementor. I tailored the design to match the client's branding and implemented a functionality for easy product bundles creation.",
        tags: ["WordPress", "WooCommerce", "PHP", "CSS", "JavaScript"],
        imageUrl: imgEsthemax,
        url: "https://esthemax.ca",
    },
    {
        title: "Toronto Striking Academy",
        description:
            "Built a WordPress + WooCommerce site for a MMA gym. Features: custom visuals, class schedules, memberships, merchandise, and a blog.",
        tags: ["WordPress", "WooCommerce", "PHP", "CSS", "JavaScript"],
        imageUrl: imgTSA,
        url: "https://www.torontostrikingacademy.com",
    },
    {
        title: "Liquid Beauty",
        description:
            "Modified a WordPress website for a medical spa. I enhanced the site with a before-and-after gallery, FAQ accordions, custom contact forms, and subtle animations. Also fixed the accessibility issues to make it legally compliant.",
        tags: ["WordPress", "PHP", "CSS", "JavaScript"],
        imageUrl: imgLiquidBeauty,
        url: "https://www.liquidbeauty.com",
    },
] as const;

export const servicesData = [
    {
        title: "Web Development",
        description:
            "Bringing ideas to life with robust and scalable web solutions.",
    },
    {
        title: "Web Design",
        description:
            "Crafting visually captivating and user-friendly websites for online success.",
    },
    {
        title: "SEO Optimization",
        description:
            "Elevating online visibility and driving organic traffic through strategies.",
    },
] as const;
