import React, { ReactNode } from "react";

import ProjectItem from "./ProjectItem";

type ProjectListProps = {
  children: ReactNode;
};

export default function ProjectList({ children }: ProjectListProps) {
  return (
    <div className="py-6 my-4 w-full md:m-auto scrollbar-thin h-[400px] overflow-auto">
      <p className="text-[#06b6d4] pl-4">
        &#60;<span className="text-[#ef4444]">article</span>&#62;
      </p>
      <p className="text-[#06b6d4] pl-8">
        &#60;<span className="text-[#ef4444]">template</span>&#62;
      </p>
      <p className="text-[#06b6d4] pl-12">
        &#60;<span className="text-[#ef4444]">h3</span>&#62;
        <span className="text-#e2e8f0">{children}</span>
        &#60;/<span className="text-[#ef4444]">h3</span>&#62;
      </p>
      <p className="text-[#06b6d4] pl-12">
        &#60;<span className="text-[#ef4444]">ul</span>&#62;
      </p>
      {publicProjects.map((project) => (
        <ProjectItem key={project.name} item={project} />
      ))}

      <p className="text-[#06b6d4] pl-12">
        &#60;/<span className="text-[#ef4444]">ul</span>&#62;
      </p>
      <p className="text-[#06b6d4] pl-8">
        &#60;/<span className="text-[#ef4444]">template</span>&#62;
      </p>
      <p className="text-[#06b6d4] pl-4">
        &#60;/<span className="text-[#ef4444]">article</span>&#62;
      </p>
    </div>
  );
}
