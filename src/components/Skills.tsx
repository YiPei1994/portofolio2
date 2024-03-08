import Image from "next/image";
import Block from "./ui/Block";
import BlockItem from "./ui/BlockItem";
import { FaHtml5 } from "react-icons/fa";

function Skills() {
  return (
    <section id="skills" className="bg-white text-accent p-6 rounded-[10px]">
      <header className="flex justify-center items-center flex-col  gap-4 pb-4">
        <h2 className="text-4xl text-center">Skills</h2>
      </header>
      <div className="w-full bg-[#0c0a09] border border-primary p-2 rounded-[10px]">
        <div className="p-2">
          <h6>
            {" "}
            <span className="text-[#a855f7]">const</span>{" "}
            <span className="text-primary">skillAtWork</span>{" "}
            <span className="text-[#a855f7]">=</span>{" "}
            <span className="text-[#eab308]"> &#123;</span>
          </h6>
          <Block name="TechnicalSkills">
            <BlockItem itemName="skillOne">
              <Image
                className="inline-block"
                src="/skills/html.png"
                width={24}
                height={24}
                alt="htmlIcon"
              />{" "}
            </BlockItem>
          </Block>
          <span className="text-[#a855f7] pl-3"> &#x2775;</span>
          <p className="text-[#eab308]"> &#x2775;</p>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Skills;
