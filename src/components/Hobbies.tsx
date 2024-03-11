import { hobbies } from "@/services/myData";
import { ReactNode } from "react";

type HobbiesProps = {
  children: ReactNode;
};

function Hobbies({ children }: HobbiesProps) {
  return (
    <div className="py-6 my-4 w-full md:m-auto scrollbar-thin h-fit overflow-auto">
      <p className="text-[#06b6d4] pl-4">
        &#60;<span className="text-[#ef4444]">aside</span>&#62;
      </p>
      <p className="text-[#06b6d4] pl-8">
        &#60;<span className="text-[#ef4444]">div</span>&#62;
      </p>
      <p className="text-[#06b6d4] pl-12">
        &#60;<span className="text-[#ef4444]">h3</span>&#62;
        <span className="text-white">{children}</span>
        &#60;/<span className="text-[#ef4444]">h3</span>&#62;
      </p>
      <p className="text-[#06b6d4] pl-12">
        &#60;<span className="text-[#ef4444]">ul</span>&#62;
      </p>
      <ul>
        {hobbies.map((hobby) => (
          <li className="pl-16 text-[#06b6d4] pr-4" key={hobby}>
            &#60;<span className="text-[#ef4444] ">li</span>&#62;{" "}
            <span className="text-white">{hobby}</span> &#60;/
            <span className="text-[#ef4444] ">li</span>&#62;{" "}
          </li>
        ))}
      </ul>
      <p className="text-[#06b6d4] pl-12">
        &#60;/<span className="text-[#ef4444]">ul</span>&#62;
      </p>
      <p className="text-[#06b6d4] pl-8">
        &#60;/<span className="text-[#ef4444]">div</span>&#62;
      </p>
      <p className="text-[#06b6d4] pl-4">
        &#60;/<span className="text-[#ef4444]">aside</span>&#62;
      </p>
    </div>
  );
}

export default Hobbies;
