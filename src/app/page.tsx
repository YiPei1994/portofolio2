"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { TracingBeam } from "@/components/animated/ChasingStar";
import Reveal from "@/components/animated/Reveal";

import { useDisplayNav } from "@/store/useNavDisplay";
import { HiMiniBars4 } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";

export default function Home() {
  const { displayNav, toggleDisplay } = useDisplayNav();
  return (
    <>
      <header className="relative w-full flex items-center justify-between p-4 flex-wrap lg:flex-nowrap border border-b-neutral-900">
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
        <main className="py-10">
          <Intro />
          <Reveal type="block" className="xl:overflow-visible">
            <About />
          </Reveal>
          <Reveal type="block">
            {" "}
            <Skills />
          </Reveal>
          <Reveal type="block">
            {" "}
            <Projects />
          </Reveal>
          <Reveal type="block">
            <Contact />
          </Reveal>
        </main>
      </TracingBeam>
      <hr />
      <footer className="flex flex-col gap-2 justify-center items-center py-6">
        <p className="text-sm">Created by Yi Pei Zhu.</p>
        <p className="text-sm">Copyright © 2024 All Rights Reserved</p>
      </footer>
    </>
  );
}
