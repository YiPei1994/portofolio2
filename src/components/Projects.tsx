import React from "react";
import SectionHeader from "./ui/SectionHeader";
import Card from "./ui/Card";
import ProjectList from "./ProjectList";
import Section from "./ui/Section";

export default function Projects() {
  return (
    <>
      {" "}
      <Section id="projects">
        <div className="lg:flex gap-2">
          <Card>
            <ProjectList> Projects used by others </ProjectList>
          </Card>
          <Card>
            <ProjectList> Projects used by others </ProjectList>
          </Card>
        </div>
      </Section>
    </>
  );
}
