"use client";

import About from "@/components/About";
import Intro from "@/components/Intro";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import { useDisplayNav } from "@/store/useNavDisplay";
import { HiMiniBars4 } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";

function Homepage() {
  const { displayNav, toggleDisplay } = useDisplayNav();
  return (
    <>
      <header className="relative w-full flex justify-between items-center flex-wrap p-4">
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
      <hr />
      <main className="max-w-screen-xl p-4 md:p-8 lg:p-12 m-auto">
        <Intro />
        <About />
        <Skills />
      </main>
      <footer></footer>
    </>
  );
}

export default Homepage;
