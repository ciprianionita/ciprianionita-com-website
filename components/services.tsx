"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { servicesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hook";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export default function Services() {
    const { ref } = useSectionInView("Services");

    return (
        <section
            ref={ref}
            id="services"
            className="mb-28 max-w-[50rem] scroll-mt-28 text-center sm:mb-40"
        >
            <SectionHeading>My Services</SectionHeading>
            <ul className="grid sm:grid-cols-3 gap-4">
                {servicesData.map((service, index) => (
                    <motion.li
                        className="px-5 py-3 bg-white/10 rounded-xl"
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={index}
                    >
                        <h3 className="mb-2 text-xl">{service.title}</h3>
                        <p className="text-white/70">{service.description}</p>
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}
