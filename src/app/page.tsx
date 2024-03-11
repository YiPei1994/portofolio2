"use client";

import About from "@/components/About";
import Intro from "@/components/Intro";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { TracingBeam } from "@/components/animated/ChasingStar";

import { useDisplayNav } from "@/store/useNavDisplay";
import { HiMiniBars4 } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";

export default function Home() {
  const { displayNav, toggleDisplay } = useDisplayNav();
  return (
    <>
      <header className="relative w-full flex items-center justify-between p-4 flex-wrap lg:flex-nowrap">
        <Logo />
        <button className="text-xl lg:hidden" onClick={() => toggleDisplay()}>
          {displayNav ? (
            <HiMiniBars4 />
          ) : (
            <HiOutlineXMark className="text-primary" />
          )}
        </button>
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
