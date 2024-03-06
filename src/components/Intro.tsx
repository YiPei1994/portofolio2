import React from "react";
import Link from "next/link";
import Image from "next/image";
import dev from "../../public/storyset_me.svg";

function Intro() {
  return (
    <div className="h-[40rem] w-full rounded-md flex flex-col md:flex-row md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Hi, Yi Pei Zhu <br />{" "}
          <span className="text-xl">software developer</span> <br /> &#123;
          <span className="text-primary text-2xl">Front-End</span>&#x2775;
        </h1>
        <button className="bg-primary rounded-[5px] py-2 px-4 mt-10">
          <Link href="#contact"> &#60;Contact / &#62; </Link>
        </button>
      </div>
      <div className="relative">
        {" "}
        <Image
          src={dev}
          alt="dev"
          className="absolute right-0 -top-36 md:relative md:top-0 md:right-0 md:w-[280px] w-[240px] "
        />
      </div>
    </div>
  );
}

export default Intro;
