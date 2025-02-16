import imgNattyPell from "@/public/nattypell.png";
import imgKingSoftware from "@/public/king-software.png";
import imgATBConcessions from "@/public/atbconcessions.png";

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
    },
    {
        title: "King Software",
        description:
            "A WooCommerce store I built for a software license provider. Focused on a clean, modern, and intuitive design, it highlights products, uses clear call-to-actions, and builds trust with detailed guides and partner logos.",
        tags: ["WordPress", "WooCommerce", "PHP", "CSS", "Figma"],
        imageUrl: imgKingSoftware,
    },
    {
        title: "ATB Concessions",
        description:
            "Designed a static HTML website from scratch with Figma and developed it using Astro JS framework for optimal performance and user experience.",
        tags: ["Astro", "HTML", "CSS", "JavaScript", "Figma"],
        imageUrl: imgATBConcessions,
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
