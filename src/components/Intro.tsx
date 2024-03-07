import React from "react";
import Link from "next/link";
import Image from "next/image";
import dev from "../../public/storyset_me.svg";

function Intro() {
  return (
    <section className="h-fix min-h-[25rem] w-full  flex flex-col md:flex-row md:items-center md:justify-center  bg-grid-white/[0.02] relative overflow-hidden  m-auto ">
      <div className=" max-w-7xl  mx-auto relative z-10 md:w-3/5 w-full pt-20 md:pt-0">
        <h1 className="text-4xl  md:text-7xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Hi, I&#39;m <span className="text-primary">Yi Pei Zhu</span> <br />{" "}
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
