import About from "@/components/About";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { TracingBeam } from "@/components/animated/ChasingStar";

export default function Home() {
  return (
    <>
      <header className="relative w-full">
        <Navbar />
      </header>
      <TracingBeam>
        <main className="p-4 md:p-8 lg:p-12 m-auto">
          <Intro />
          <About />
          <Skills />
          <Projects />
        </main>
      </TracingBeam>
      <footer></footer>
    </>
  );
}
