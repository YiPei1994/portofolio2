import { cn } from "@/lib/utils";
import React, { CSSProperties, ReactNode } from "react";
type SectionProps = {
  children: ReactNode;
  id: string;
  className?: string;
  style?: CSSProperties;
};

function Section({ children, id, className, style }: SectionProps) {
  return (
    <section
      style={style}
      className={cn(
        "flex flex-col pt-16 px-4 md:p-8 lg:p-12  md:flex-row md:items-center md:justify-between md:flex-wrap  m-auto   lg:flex-nowrap lg:gap-6",
        className
      )}
      id={id}
    >
      {children}
    </section>
  );
}

export default Section;
