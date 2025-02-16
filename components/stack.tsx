"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { stackData } from "@/lib/data";
import { useSectionInView } from "@/lib/hook";
import { motion } from "framer-motion";
import Image from "next/image";

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

export default function Stack() {
    const { ref } = useSectionInView("Stack");

    return (
        <section
            ref={ref}
            id="stack"
            className="mb-28 max-w-[50rem] scroll-mt-28 text-center sm:mb-40"
        >
            <SectionHeading>My Stack</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-8 text-lg text-gray-800">
                {stackData.map((stack, index) => (
                    <motion.li
                        className="hover:!scale-110 transition"
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={index}
                    >
                        <Image
                            className="opacity-80"
                            width={72}
                            height={72}
                            src={stack.url}
                            alt={stack.title}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}
