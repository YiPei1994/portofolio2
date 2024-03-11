import Image from "next/image";
import Block from "./ui/Block";
import BlockItem from "./ui/BlockItem";
import {
  freeTimeSkills,
  freeTimeTools,
  workSkills,
  workTools,
} from "@/services/myData";
import SectionHeader from "./ui/SectionHeader";
import Section from "./ui/Section";

function Skills() {
  return (
    <>
      <Section id="skills">
        <div className="w-full bg-[#0c0a09] border border-primary p-2 rounded-[10px] mb-4 md:w-[47%] mt-4">
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
        </div>
        <div className="w-full bg-[#0c0a09] border border-primary p-2 rounded-[10px] md:w-[47%] mt-4">
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
        </div>
      </Section>
    </>
  );
}

export default Skills;
