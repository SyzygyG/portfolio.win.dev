import { Dock } from "@/components/layout/Dock";
import { Footer } from "@/components/layout/Footer";
import { Ticker } from "@/components/layout/Ticker";
import { Topbar } from "@/components/layout/Topbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Credentials } from "@/components/sections/Credentials";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Page() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Topbar />
      <main id="main-content">
        <Hero />
        <Ticker />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Credentials />
        <Contact />
      </main>
      <Footer />
      <Dock />
    </>
  );
}
