import { Separator } from "@/components/ui/separator";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Navbar } from "./_components/navbar";

import { Skills } from "./_components/skills";

import Experiences from "./_components/experiences";
import Projects from "./_components/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#09090B]">
      <div className="relative bg-white bg-grid-black/[0.2] dark:bg-[#09090B] dark:bg-grid-white/[0.05]">
        <div className="mx-auto max-w-7xl p-5">
          <Navbar />
          <Hero />
        </div>
        <div className="absolute -bottom-5 left-0 h-10 w-full bg-gradient-to-t from-white xl:bottom-0 xl:h-32"></div>
      </div>
      <div className="mx-auto mt-20 max-w-7xl">
        <Separator />
        <Experiences />
        <Separator />
        <Projects />
        <Separator />
        <Skills />
        <Footer />
      </div>
    </main>
  );
}
