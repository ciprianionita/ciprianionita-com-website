"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hook";

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5);

    const [visibleItems, setVisibleItems] = useState(3); // Show first 3 items without class

    const handleLoadMore = () => {
        setVisibleItems((prev) => Math.min(prev + 3, projectsData.length)); // Increase count
    };

    const allVisible = visibleItems >= projectsData.length; // Check if all are visible

    return (
        <section id="projects" className="scroll-mt-28 mb-28" ref={ref}>
            <SectionHeading>My Latest Projects</SectionHeading>
            {projectsData.map((project, index) => (
                <article
                    key={index}
                    className={`group mb-3 sm:mb-8 last:mb-0 ${
                        index < visibleItems ? "" : "hidden"
                    }`}
                >
                    <Project {...project} />
                </article>
            ))}
            <div className="mt-4 text-center">
                <button
                    onClick={handleLoadMore}
                    disabled={allVisible}
                    className={`px-7 py-3 bg-white bg-opacity-10 text-white rounded-full transition-all ${
                        allVisible
                            ? "disabled:scale-100 disabled:bg-opacity-65 cursor-not-allowed"
                            : "hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
                    }`}
                >
                    Load More
                </button>
            </div>
        </section>
    );
}
