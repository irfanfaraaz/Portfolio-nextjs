import About from "@/components/About";
import Calendly from "@/components/Calendly";
import StarsCanvas from "@/components/canvas/Stars";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import { Footer } from "@/components/footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Tech from "@/components/Tech";
export default function Home() {
    return (
        <div className="relative z-0 bg-pri">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />

                <Hero />
            </div>
            <div className="relative z-0">
                <About />
                <Experience />
                <Tech />
                <Projects />
                <div className="sm:mt-40 mt-48">
                    <Calendly />
                    <Contact />
                </div>
                <StarsCanvas />
            </div>
            <Footer />
        </div>
    );
}
