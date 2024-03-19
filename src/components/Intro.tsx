"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import dev from "../../public/storyset_me.svg";
import { TypewriterEffectSmooth } from "./animated/Typing";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";

const colors = ["#4ade80", "#2dd4bf", "#38bdf8", "#818cf8"];

function Intro() {
  const color = useMotionValue(colors[0]);

  const backgroundImage = useMotionTemplate`radial-gradient(190% 175% at 50% 0%, #0c0a09 50%, ${color})`;
  const border = useMotionTemplate`1x solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    animate(color, colors, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
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
    <motion.section
      style={{
        backgroundImage,
      }}
      id="intro"
      className="min-h-[60vh] lg:min-h-[80vh] xl:min-h-[70vh] relative lg:flex-nowrap overflow-hidden flex flex-col py-8 px-4 md:p-8 lg:p-12   md:flex-row md:items-center md:justify-between md:flex-wrap  m-auto mt-8 lg:mt-16 xl:mt-24  lg:gap-6"
    >
      <div className="relative z-6  lg:w-fit w-full ">
        <h1 className="text-4xl  md:text-7xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          <TypewriterEffectSmooth className=" text-left" words={words} />
          <span className="text-2xl">software developer</span> <br />
          <span className="text-primary text-2xl ">
            &#123; Front-End &#x2775;
          </span>
        </h1>
        <motion.button
          style={{ border, boxShadow }}
          className="rounded-[10px] py-2 px-4 mt-10"
        >
          <a href="cv.pdf" target="_blank">
            {" "}
            &#60;My resume / &#62;{" "}
          </a>
        </motion.button>
      </div>
      <div className="max-xl:absolute right-0 top-48 h-fit md:w-[300px] w-[225px] lg:w-[400px] xl:w-max lg:top-36 xl:top-0">
        <Image priority src={dev} alt="dev" />
      </div>
    </motion.section>
  );
}

export default Intro;
