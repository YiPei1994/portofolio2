import React from "react";
import SectionHeader from "./ui/SectionHeader";
import Card from "./ui/Card";
import ProjectList from "./ProjectList";

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col py-6">
      <SectionHeader>
        <h2 className="text-4xl text-white">Projects</h2>
      </SectionHeader>

      <div className="lg:flex gap-2">
        <Card className="max-w-[550px]">
          <ProjectList> Projects used by others </ProjectList>
        </Card>
        <Card className="max-w-[550px]">
          <ProjectList> Projects used by others </ProjectList>
        </Card>
      </div>
    </section>
  );
}
