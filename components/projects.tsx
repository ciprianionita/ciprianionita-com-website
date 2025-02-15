"use client";

import React from "react";
import Link from "next/link";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hook";

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5);

    return (
        <section id="projects" className="scroll-mt-28 mb-28" ref={ref}>
            <SectionHeading>My Latest Projects</SectionHeading>
            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
            <Link
                className="group flex items-center gap-2 w-fit px-7 py-3 mt-8 mx-auto bg-gray-950 text-white rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                href="#"
            >
                View All
            </Link>
        </section>
    );
}
