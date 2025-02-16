"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hook";

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[50rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                My design career began in the printing industry, where I honed
                my skills in layout and typography. But the static nature of
                print eventually led me to explore the dynamic world of web
                development.
            </p>
            <p className="mb-3">
                I took the leap into freelancing, eager to build interactive
                experiences online. Starting on freelancing platforms, I worked
                tirelessly to refine my portfolio and connect with clients. My
                dedication and passion for crafting user-friendly websites
                quickly earned me a solid reputation, leading to direct client
                collaborations.
            </p>
            <p>
                Since then, I&apos;ve partnered with dozens of clients
                worldwide, helping them establish and enhance their online
                presence. From e-commerce sites to custom web applications,
                I&apos;ve had the privilege of bringing their digital visions to
                life. The journey from print to pixels has been an exciting one,
                and I&apos;m thrilled to continue building impactful web
                solutions.
            </p>
        </motion.section>
    );
}
