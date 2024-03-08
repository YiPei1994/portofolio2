import React, { ReactNode } from "react";

type SectionHeaderProps = {
  children: ReactNode;
};

function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <header className="flex justify-center items-center flex-col  gap-4 w-full">
      {children}
    </header>
  );
}

export default SectionHeader;
