import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Ticker } from "@/components/sections/ticker";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function PortfolioPage() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
