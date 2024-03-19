import { TimelineType } from "@/services/myData";
import Image from "next/image";

type TimeListProps = {
  time: TimelineType;
};

function TimeList({ time }: TimeListProps) {
  return (
    <div className="p-12 flex flex-col w-full">
      <h6>
        <span className="text-[#a855f7]">class</span>
        <span className="text-[#eab308]"> {time.type} &#123;</span>
      </h6>
      <ul>
        <span className="text-[#0ea5e9] pl-4">
          constructor <span className="text-[#a855f7]">() &#123;</span>
        </span>
        <li className="pl-8">
          <span className="text-[#ef4444] ">this</span>.name= &quot;{time.name}
          &quot;
        </li>
        <li className="pl-8">
          <span className="text-[#ef4444] ">this</span>.description= &quot;
          {time.description}&quot;
        </li>
        <li className="pl-8">
          <span className="text-[#ef4444]">this</span>.time= {time.time},
        </li>
        {time.aquiredSkills?.length !== 0 && (
          <li className="pl-8 flex flex-wrap">
            <span className="text-[#ef4444] ">this</span>.aquiredSkills=
            <span className="text-[#eab308]">[</span>
            {time.aquiredSkills?.map((tech, i) => (
              <Image
                key={i}
                className="inline-block mx-2"
                src={`/skills/${tech}.png`}
                width={24}
                height={24}
                alt={`${tech}Icon`}
              />
            ))}
            <span className="text-[#eab308]">]</span>
          </li>
        )}
        <span className="text-[#a855f7] pl-3"> &#x2775;</span>
      </ul>
      <span className="text-[#eab308]"> &#x2775;</span>
    </div>
  );
}

export default TimeList;
