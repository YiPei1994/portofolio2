import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
type SectionProps = {
  children: ReactNode;
  id: string;
  className?: string;
};

function Section({ children, id, className }: SectionProps) {
  return (
    <section
      className={cn(
        "flex flex-col p-4 md:p-8 lg:p-12   md:flex-row md:items-center md:justify-between md:flex-wrap  m-auto lg:my-16 xl:my-24 lg:flex-nowrap lg:gap-6",
        className
      )}
      id={id}
    >
      {children}
    </section>
  );
}

export default Section;