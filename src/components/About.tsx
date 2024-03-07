"use client";

import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";
import Card from "./ui/Card";
import { useTimeline } from "@/store/slideTimeline";
import { timelines } from "@/services/about";
import TimeList from "./ui/TimeList";

function About() {
  const { currentSlide, prevSlide, nextSlide } = useTimeline();
  const slideLength = timelines.length;
  return (
    <section id="about">
      <header className="flex justify-center items-center flex-col  gap-4">
        <h2 className="text-4xl text-center">
          About <span className="text-primary ">Me</span>{" "}
        </h2>
        <p className="px-6">
          Since childhood, my passion for technology has been unwavering.
          Despite choosing the wrong educational path in my teens, I
          rediscovered my love for computers after university. Now, with
          <span className="text-primary uppercase"> c</span>onsistency,{" "}
          <span className="text-primary uppercase"> d</span>edication and{" "}
          <span className="text-primary uppercase"> d</span>iscipline, I
          <span className="text-primary"> &#39;</span>m determined to pursue my
          passion wholeheartedly.
        </p>
      </header>
      <div className="flex items-center gap-4 py-6 justify-center w-full">
        <button
          className="text-primary text-2xl disabled:text-accent"
          disabled={currentSlide === 0}
          onClick={prevSlide}
        >
          <HiChevronLeft />
        </button>
        <h6 className="text-2xl">Timeline</h6>
        <button
          className="text-primary text-2xl disabled:text-accent"
          disabled={currentSlide === slideLength - 1}
          onClick={nextSlide}
        >
          <HiChevronRight />
        </button>
      </div>

      {timelines.map((time) => (
        <div
          key={time.id}
          className={`${currentSlide === time.id ? "block" : "hidden"}`}
        >
          <Card>
            <TimeList time={time} />
          </Card>
        </div>
      ))}
    </section>
  );
}

export default About;
