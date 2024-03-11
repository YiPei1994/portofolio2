"use client";

import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";
import Card from "./ui/Card";
import { useTimeline } from "@/store/slideTimeline";
import { timelines } from "@/services/myData";
import TimeList from "./ui/TimeList";
import Hobbies from "./Hobbies";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./animated/Reveal";
import Section from "./ui/Section";

function About() {
  const { currentSlide, prevSlide, nextSlide } = useTimeline();
  const slideLength = timelines.length;

  return (
    <>
      <Section id="about">
        <div className="flex justify-center items-center flex-col   gap-4 md:items-start  md:flex-row lg:justify-start lg:items-start lg:w-min lg:flex-col">
          <p className="w-[90%] md:w-3/5 md:mt-6 lg:w-full">
            Since childhood, my passion for technology has been unwavering.
            Despite choosing the wrong educational path in my teens, I
            rediscovered my love for computers after university. Now, with
            <span className="text-primary uppercase"> c</span>onsistency,{" "}
            <span className="text-primary uppercase"> d</span>edication and{" "}
            <span className="text-primary uppercase"> d</span>iscipline, I&#39;m
            determined to pursue my passion wholeheartedly.
          </p>

          <Card className="w-max max-w-[400px] lg:ml-0">
            <Hobbies>Other than coding</Hobbies>
          </Card>
        </div>

        <div className="lg:flex lg:flex-col gap-10 items-center justify-center w-full">
          <div className="flex items-center gap-4 py-6 justify-center w-full lg:flex">
            <button
              className="text-primary text-2xl disabled:text-accent"
              disabled={currentSlide === 0}
              onClick={prevSlide}
            >
              <HiChevronLeft />
            </button>
            <h6 className="text-2xl">Timeline</h6>
            <button
              className="text-primary text-2xl disabled:text-accent "
              disabled={currentSlide === slideLength - 1}
              onClick={nextSlide}
            >
              <HiChevronRight />
            </button>
          </div>
          <div className="w-full overflow-hidden  relative h-fit min-h-[425px]">
            {timelines.map((time) => (
              <Card
                key={time.id}
                style={{
                  transform: `translateX(${105 * (time.id - currentSlide)}%)`,
                }}
                className={`transition-all  duration-300  min-h-[380px] w-max max-w-[400px]  h-auto absolute lg:mr-4 ${
                  time.id - currentSlide < 0 ? "opacity-0" : ""
                }`}
              >
                <TimeList time={time} />
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

export default About;
