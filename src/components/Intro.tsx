import React from "react";
import Link from "next/link";
import Image from "next/image";
import dev from "../../public/storyset_me.svg";
import { TypewriterEffectSmooth } from "./animated/Typing";

function Intro() {
  const words = [
    {
      text: "Hi,",
      className: "text-4xl  md:text-7xl font-bold text-white",
    },
    {
      text: "I'm",
      className: "text-4xl  md:text-7xl font-bold text-white",
    },
    {
      text: "Yi Pei Zhu",
      className: "text-4xl  md:text-7xl font-bold text-primary",
    },
  ];
  return (
    <section className="h-fix min-h-[25rem] xl:min-h-[70vh] w-full  flex flex-col md:flex-row md:items-center md:justify-center  bg-grid-white/[0.02] relative overflow-hidden  m-auto py-6">
      <div className=" max-w-7xl  mx-auto relative z-6 md:w-3/5 w-full pt-5 lg:pt-10 md:pt-0">
        <h1 className="text-4xl  md:text-7xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          <TypewriterEffectSmooth className=" text-left" words={words} />
          <span className="text-2xl">software developer</span> <br />
          <span className="text-primary text-2xl ">
            &#123; Front-End &#x2775;
          </span>
        </h1>
        <button className="bg-primary rounded-[5px] py-2 px-4 mt-10">
          <Link href="#contact"> &#60;Contact / &#62; </Link>
        </button>
      </div>
      <div className="relative md:w-2/5">
        {" "}
        <Image
          src={dev}
          alt="dev"
          className="absolute right-0 -top-32 md:relative md:top-0 md:right-0 md:w-[280px] w-[225px] lg:w-fit"
        />
      </div>
    </section>
  );
}

export default Intro;
