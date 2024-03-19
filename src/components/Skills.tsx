"use client";
import Image from "next/image";
import Block from "./ui/Block";
import BlockItem from "./ui/BlockItem";
import {
  freeTimeSkills,
  freeTimeTools,
  workSkills,
  workTools,
} from "@/services/myData";
import Section from "./ui/Section";
import GitHubCalendar from "react-github-calendar";
import { useEffect, useState } from "react";

function Skills() {
  const [screenRef, setScreenRef] = useState(0);

  useEffect(() => {
    setScreenRef(window.innerWidth);
  }, []);

  return (
    <>
      <Section id="skills" className="md:items-start">
        <div className="w-full bg-[#0c0a09]  px-4 py-8 rounded-[10px] mb-4 md:w-[47%] mt-4 lg:px-8 lg:py-4 gap-2 xl:gap-4 flex flex-col">
          <h6>
            {" "}
            <span className="text-[#a855f7]">const</span>{" "}
            <span className="text-primary">work</span>{" "}
            <span className="text-[#a855f7]">=</span>{" "}
            <span className="text-[#eab308]"> &#123;</span>
          </h6>
          <Block name="useSkills">
            {workSkills.map((skill) => (
              <BlockItem key={skill.skillNum} itemName={skill.skillNum}>
                <Image
                  className="inline-block"
                  src={`/skills/${skill.name}.png`}
                  width={24}
                  height={24}
                  alt={`${skill.name}Icon`}
                />{" "}
              </BlockItem>
            ))}
          </Block>
          <Block name="useTools">
            {workTools.map((tool) => (
              <BlockItem key={tool.toolNum} itemName={tool.toolNum}>
                <Image
                  className="inline-block"
                  src={`/skills/${tool.name}.png`}
                  width={24}
                  height={24}
                  alt={`${tool.name}Icon`}
                />{" "}
              </BlockItem>
            ))}
          </Block>

          <p className="text-[#eab308]"> &#x2775;</p>
        </div>

        <div className="w-full bg-[#0c0a09]  px-4 py-8  rounded-[10px] md:w-[47%]  mt-4 lg:px-8 lg:py-4 gap-2 xl:gap-4 flex flex-col">
          <h6>
            {" "}
            <span className="text-[#a855f7]">const</span>{" "}
            <span className="text-primary">freeTime</span>{" "}
            <span className="text-[#a855f7]">=</span>{" "}
            <span className="text-[#eab308]"> &#123;</span>
          </h6>
          <Block name="useSkills">
            {freeTimeSkills.map((skill) => (
              <BlockItem key={skill.skillNum} itemName={skill.skillNum}>
                <Image
                  className="inline-block"
                  src={`/skills/${skill.name}.png`}
                  width={24}
                  height={24}
                  alt={`${skill.name}Icon`}
                />{" "}
              </BlockItem>
            ))}
          </Block>
          <Block name="useTools">
            {freeTimeTools.map((tool) => (
              <BlockItem key={tool.toolNum} itemName={tool.toolNum}>
                <Image
                  className="inline-block"
                  src={`/skills/${tool.name}.png`}
                  width={24}
                  height={24}
                  alt={`${tool.name}Icon`}
                />{" "}
              </BlockItem>
            ))}
          </Block>
          <p className="text-[#eab308]"> &#x2775;</p>
          <div className="flex items-center justify-center">
            <GitHubCalendar
              username="yipei1994"
              blockMargin={screenRef < 1024 ? 0.6 : screenRef < 1550 ? 1 : 2}
              blockRadius={screenRef < 1024 ? 2 : 4}
              blockSize={screenRef < 1024 ? 4.5 : screenRef < 1550 ? 6 : 7}
              fontSize={screenRef < 1024 ? 6 : screenRef < 1550 ? 8 : 10}
              colorScheme="light"
            />
          </div>
        </div>
      </Section>
    </>
  );
}

export default Skills;
