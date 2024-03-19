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
        "w-full  border border-primary rounded-[10px]  flex flex-col bg-[#0c0a09] text-[#e2e8f0]",
        className
      )}
      style={style}
    >
      <div className="flex gap-4 pt-3 pb-6 pl-6  border-b border-primary rounded-t-[10px] items-start bg-[#0c0a09]">
        <FaCircle className="text-primary text-[10px]" />
        <FaCircle className="text-[#3b82f6] text-[10px]" />
        <FaCircle className="text-[#ef4444] text-[10px]" />
      </div>
      {children}
    </div>
  );
}

export default Card;
