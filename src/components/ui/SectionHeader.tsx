import React, { ReactNode } from "react";

type SectionHeaderProps = {
  children: ReactNode;
};

function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <header className="text-4xl text-center mb-6 w-full">{children}</header>
  );
}

export default SectionHeader;
