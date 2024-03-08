import { ReactNode } from "react";

type BlockProps = {
  children: ReactNode;
  name: string;
};

function Block({ children, name }: BlockProps) {
  return (
    <div>
      <span className="text-primary pl-4">function </span>

      <span className="text-[#0ea5e9] ">
        {name}
        <span className="text-[#a855f7]">() &#123;</span>
      </span>

      <ul>{children}</ul>
      <span className="text-[#a855f7] pl-3"> &#x2775;</span>
    </div>
  );
}

export default Block;
