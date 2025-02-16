import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Stack from "@/components/stack";
import Contact from "@/components/contact";
import ScrollToTop from "@/components/scroll-top";

export default function Home() {
    return (
        <main className="flex flex-col items-center px-4">
            <Intro />
            <SectionDivider />
            <About />
            <Stack />
            <Projects />
            <Services />
            <Contact />
            <ScrollToTop />
        </main>
    );
}
