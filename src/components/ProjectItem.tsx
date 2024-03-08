import React from "react";
import { MdOutlineWeb } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
type Project = {
  name: string;
  description: string;
  usedTechs: string[];
  webLink: string;
  gitHubLink: string;
};

type ProjectItemsProps = {
  item: Project;
};

function ProjectItem({ item }: ProjectItemsProps) {
  return (
    <div className="text-[#06b6d4] pl-20 max-w-[500px]">
      &#60;<span className="text-[#ef4444] ">li</span>&#62;
      <div className="text-white flex flex-col items-start  gap-2 px-1 my-2">
        <div className="flex justify-between items-center gap-4 w-4/5">
          {" "}
          <span className="block">Project {item.name}:</span>
          <div className="flex gap-6 text-primary items-center justify-between">
            <a href={item.webLink} target="__blank">
              <MdOutlineWeb className="text-3xl" />
            </a>
            <a href={item.webLink} target="__blank">
              <FaGithub className="text-2xl" />
            </a>
          </div>
        </div>
        <div>
          <p>
            Techs used:
            {item.usedTechs.map((tech, i) => (
              <Image
                key={i}
                className="inline-block m-1"
                src={`/skills/${tech}.png`}
                width={16}
                height={16}
                alt={`${tech}Icon`}
              />
            ))}
          </p>
        </div>
        <p className="hidden md:block md:max-w-[400px] lg:max-w-[550px]">
          {item.description}
        </p>
      </div>
      &#60;/<span className="text-[#ef4444] ">li</span>&#62;
    </div>
  );
}

export default ProjectItem;
