"use client";

import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";
import Card from "./ui/Card";
import { useTimeline } from "@/store/slideTimeline";
import { timelines } from "@/services/myData";
import TimeList from "./ui/TimeList";
import Hobbies from "./Hobbies";
import { motion } from "framer-motion";
import Reveal from "./animated/Reveal";
import Section from "./ui/Section";

function About() {
  const { currentSlide, prevSlide, nextSlide } = useTimeline();
  const slideLength = timelines.length;

  return (
    <Section
      id="about"
      className="bg-[#e2e8f0] text-[#27272a] xl:z-40 relative lg:justify-start"
    >
      <div className="flex justify-center items-center flex-col gap-6  md:flex-row lg:justify-start lg:items-start lg:w-2/5 lg:flex-col xl:w-2/5">
        <div className="w-[90%] md:w-3/5  lg:w-full">
          <Reveal type="text">
            <h4 className="text-4xl mb-2  lg:mb-6">
              Know who i <span className="text-primary uppercase">am</span>{" "}
            </h4>
          </Reveal>
          <Reveal type="text">
            <p>
              Since childhood, my passion for technology has been unwavering.
              Despite choosing the wrong educational path in my teens, I
              rediscovered my love for computers after university. Now, with
              <span className="text-primary uppercase"> c</span>onsistency,{" "}
              <span className="text-primary uppercase"> d</span>edication and{" "}
              <span className="text-primary uppercase"> d</span>iscipline,
              I&#39;m determined to pursue my passion wholeheartedly.
            </p>
          </Reveal>
        </div>

        <Card className="lg:ml-0">
          <Hobbies>Other than coding</Hobbies>
        </Card>
      </div>

      <div className="lg:flex lg:flex-col gap-10 items-center justify-center w-full lg:w-2/5  xl:absolute xl:-right-[300px] xl:w-[1000px] xl:overflow-hidden xl:p-6 xl:bg-neutral-800/25 rounded-[10px]">
        <div className="flex items-center gap-4 py-6 justify-center w-full lg:flex xl:hidden">
          <button
            className="text-primary text-2xl font-bold disabled:opacity-0"
            disabled={currentSlide === 0}
            onClick={prevSlide}
          >
            <HiChevronLeft />
          </button>
          <h6 className="text-2xl">Timeline</h6>
          <button
            className="text-primary font-bold text-2xl disabled:opacity-0 "
            disabled={currentSlide === slideLength - 1}
            onClick={nextSlide}
          >
            <HiChevronRight />
          </button>
        </div>
        <motion.div
          whileHover={{ left: -150 }}
          transition={{ duration: 2 }}
          className="flex flex-col gap-4 items-stretch justify-center relative min-h-[425px] w-full  xl:left-[150px] xl:flex-row xl:w-max"
        >
          {timelines.map((time) => (
            <Card
              key={time.id}
              className={`max-xl:absolute max-lg:left-[50%] max-lg:-translate-x-[50%] top-0 transition-all md:w-[450px] lg:w-[500px] duration-300 lg:left-0 min-h-[380px] xl:w-[400px] ${
                currentSlide === time.id
                  ? "max-xl:opacity-100"
                  : "max-xl:opacity-0"
              }`}
            >
              <TimeList time={time} />
            </Card>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

export default About;
