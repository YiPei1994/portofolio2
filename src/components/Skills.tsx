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
import { useEffect, useRef } from "react";

function Skills() {
  let screenRef = useRef<number>(0);

  useEffect(() => {
    screenRef.current = window.innerWidth;
  }, []);

  return (
    <>
      <Section id="skills" className="md:items-start">
        <div className="w-full bg-[#0c0a09] border border-primary p-2 rounded-[10px] mb-4 md:w-[47%] mt-4 lg:px-8 lg:py-4">
          <div className="p-2">
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
                    className="inline-block h-auto"
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
        </div>
        <div className="w-full bg-[#0c0a09] border border-primary p-2 rounded-[10px] md:w-[47%] mt-4 lg:px-8 lg:py-4">
          <div className="p-2 ">
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
          </div>
          <div className="flex items-center justify-center">
            <GitHubCalendar
              username="yipei1994"
              blockMargin={
                screenRef.current < 1024
                  ? 0.6
                  : screenRef.current < 1550
                  ? 1
                  : 2
              }
              blockRadius={screenRef.current < 1024 ? 2 : 4}
              blockSize={
                screenRef.current < 1024
                  ? 4.5
                  : screenRef.current < 1550
                  ? 6
                  : 7
              }
              fontSize={
                screenRef.current < 1024 ? 6 : screenRef.current < 1550 ? 8 : 10
              }
              colorScheme="light"
            />
          </div>
        </div>
      </Section>
    </>
  );
}

export default Skills;
