import { ReactNode } from "react";

type BlockItemProps = {
  itemName: string;
  children: ReactNode;
};

function BlockItem({ itemName, children }: BlockItemProps) {
  return (
    <li className="pl-8 my-2">
      <span className="text-[#ef4444] ">{itemName}</span>
      <span className="text-[#a855f7]"> = {children} ;</span>
    </li>
  );
}

export default BlockItem;
