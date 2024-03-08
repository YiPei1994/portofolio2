import { ReactNode } from "react";

type BlockProps = {
  children: ReactNode;
  name: string;
};

function Block({ children, name }: BlockProps) {
  return (
    <div>
      <p>
        {" "}
        <span className="text-[#0ea5e9] pl-4">
          {name}
          <span className="text-[#a855f7]">() &#123;</span>
        </span>
      </p>
      <ul>{children}</ul>
    </div>
  );
}

export default Block;
