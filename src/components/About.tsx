"use client";
import { works } from "@/services/about";
import { useState } from "react";
import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";
import { FaCircle } from "react-icons/fa";

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  function handlePrev() {
    if (currentIndex === 0) return;
    console.log(currentIndex);
    setCurrentIndex((c) => c - 1);
  }
  function handleNext() {
    if (currentIndex === 3) return;
    console.log(currentIndex);
    setCurrentIndex((c) => c + 1);
  }
  return (
    <section id="about">
      <header className="flex justify-center items-center gap-4">
        <button className="text-primary text-2xl" onClick={handlePrev}>
          <HiChevronLeft />
        </button>
        <h2 className="text-4xl text-center">
          About <span className="text-primary ">Me</span>{" "}
        </h2>
        <button className="text-primary text-2xl" onClick={handleNext}>
          <HiChevronRight />
        </button>
      </header>
      <div className="w-4/5 m-auto border border-primary rounded-[10px] my-6">
        <div className="flex gap-4 pt-3 pb-6 px-6  border-b border-primary items-start">
          <FaCircle className="text-primary text-[10px]" />
          <FaCircle className="text-[#3b82f6] text-[10px]" />
          <FaCircle className="text-[#ef4444] text-[10px]" />
        </div>
        <div className={`${currentIndex === 0 ? "block" : "hidden"} p-6 `}>
          <h6>
            <span className="text-[#a855f7]">class</span>{" "}
            <span className="text-[#eab308]"> &#123; workExperience</span>
          </h6>
          <ul>
            <span className="text-[#0ea5e9] pl-4">
              {" "}
              constructor <span className="text-[#a855f7]">
                {" "}
                () &#123;
              </span>{" "}
            </span>

            <li>
              <p>
                <span className="text-[#ef4444] pl-8">this</span>.name= &quot;
                &quot;
              </p>
              <p>
                <span className="text-[#ef4444] pl-8">this</span>.description=
                &quot; &quot;
              </p>
              <p>
                <span className="text-[#ef4444] pl-8">this</span>.time= &quot;
                &quot;
              </p>
            </li>

            <span className="text-[#a855f7] pl-4"> &#x2775;</span>
          </ul>
          <span className="text-[#eab308]"> &#x2775;</span>
        </div>
        <div className={`${currentIndex === 1 ? "block" : "hidden"} `}>
          slide 2
        </div>
        <div className={`${currentIndex === 2 ? "block" : "hidden"} `}>
          slide 3
        </div>
      </div>
    </section>
  );
}

export default About;
