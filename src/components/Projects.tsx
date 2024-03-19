import React from "react";
import Card from "./ui/Card";
import Section from "./ui/Section";
import { StickyScroll } from "./animated/StickyReveal";
import { projects } from "@/services/myData";

export default function Projects() {
  return (
    <>
      {" "}
      <Section id="projects">
        <Card className="w-[100%] md:w-[100%] rounded-[10px]">
          <StickyScroll content={projects} contentClassName="rounded-[10px]" />
        </Card>
      </Section>
    </>
  );
}
