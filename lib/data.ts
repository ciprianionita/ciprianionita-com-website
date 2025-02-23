import imgNattyPell from "@/public/nattypell.png";
import imgKingSoftware from "@/public/king-software.png";
import imgATBConcessions from "@/public/atbconcessions.png";
import imgEsthemax from "@/public/esthemax.png";
import imgTSA from "@/public/torontostrikingacademy.png";
import imgLiquidBeauty from "@/public/liquidbeauty.png";

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
