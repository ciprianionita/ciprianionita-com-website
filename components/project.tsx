"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
    title,
    description,
    tags,
    imageUrl,
    url,
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{ scale: scaleProgress, opacity: opacityProgress }}
        >
            <div className="bg-white/10 max-w-[50rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-white/20 transition sm:pl-8 text-white">
                <div className="pt-4 pb-7 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[50%]">
                    <h3 className="text-2xl font-semibold">
                        <Link
                            className="project-link group-hover:underline group-hover:after:inline-block"
                            href={url}
                            target="_blank"
                        >
                            {title}
                        </Link>
                    </h3>
                    <p className="mt-2 leading-relaxed text-white/70">
                        {description}
                    </p>
                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                        {tags.map((tag, index) => (
                            <li
                                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white/70 rounded-full"
                                key={index}
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
                <Image
                    src={imageUrl}
                    alt="Project I worked on"
                    quality={95}
                    className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
                />
            </div>
        </motion.div>
    );
}
