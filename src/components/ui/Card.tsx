import { cn } from "@/lib/utils";

import { ReactNode } from "react";
import { FaCircle } from "react-icons/fa";

type CardProps = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

function Card({ children, className, style }: CardProps) {
  return (
    <div
      className={cn(
        "w-4/5 m-auto border border-primary rounded-[10px] my-6 flex flex-col",
        className
      )}
      style={style}
    >
      <div className="flex gap-4 pt-3 pb-6 px-6  border-b border-primary items-start">
        <FaCircle className="text-primary text-[10px]" />
        <FaCircle className="text-[#3b82f6] text-[10px]" />
        <FaCircle className="text-[#ef4444] text-[10px]" />
      </div>
      {children}
    </div>
  );
}

export default Card;
