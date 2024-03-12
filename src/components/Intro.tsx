import React from "react";
import Image from "next/image";
import dev from "../../public/storyset_me.svg";
import { TypewriterEffectSmooth } from "./animated/Typing";
import Section from "./ui/Section";
import { BackgroundBeams } from "./animated/BackgroundBeams";

function Intro() {
  const words = [
    {
      text: "Hi,",
      className: "text-4xl  md:text-7xl font-bold text-[#e2e8f0]",
    },
    {
      text: "I'm",
      className: "text-4xl  md:text-7xl font-bold text-[#e2e8f0]",
    },
    {
      text: "Yi Pei Zhu",
      className: "text-4xl  md:text-7xl font-bold text-primary",
    },
  ];
  return (
    <Section id="intro" className="min-h-[50vh] relative lg:flex-nowrap">
      <div className="relative z-6  lg:w-fit w-full  pt-5 lg:pt-10">
        <h1 className="text-4xl  md:text-7xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          <TypewriterEffectSmooth className=" text-left" words={words} />
          <span className="text-2xl">software developer</span> <br />
          <span className="text-primary text-2xl ">
            &#123; Front-End &#x2775;
          </span>
        </h1>
        <button className="bg-primary rounded-[10px] py-2 px-4 mt-10">
          <a href="cv.pdf" target="_blank">
            {" "}
            &#60;My resume / &#62;{" "}
          </a>
        </button>
      </div>
      <div className="absolute right-0 top-48 h-fit md:w-[300px] w-[225px] lg:w-[400px] xl:w-max lg:top-36 xl:top-24">
        <Image priority src={dev} alt="dev" />
      </div>
    </Section>
  );
}

export default Intro;
