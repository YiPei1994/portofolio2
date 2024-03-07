import { TimelineType } from "@/services/about";

type TimeListProps = {
  time: TimelineType;
};

function TimeList({ time }: TimeListProps) {
  return (
    <div className="p-6">
      <h6>
        <span className="text-[#a855f7]">class</span>
        <span className="text-[#eab308]"> {time.type}&#123;</span>
      </h6>
      <ul>
        <span className="text-[#0ea5e9] pl-3">
          constructor <span className="text-[#a855f7]">() &#123;</span>
        </span>
        <li className="pl-5">
          <span className="text-[#ef4444] ">this</span>.name= &quot;{time.name}
          &quot;
        </li>
        <li className="pl-5">
          <span className="text-[#ef4444] ">this</span>.description= &quot;
          {time.description}&quot;
        </li>
        <li className="pl-5">
          <span className="text-[#ef4444]">this</span>.time= &quot;{time.time}
          &quot;
        </li>
        <li className="pl-5">
          <span className="text-[#ef4444] ">this</span>.aquiredSkills=[
          {time.aquiredSkills.map((skill) => (
            <span key={skill}>&quot;{skill}&quot;, </span>
          ))}
          ]
        </li>
        <span className="text-[#a855f7] pl-3"> &#x2775;</span>
      </ul>
      <span className="text-[#eab308]"> &#x2775;</span>
    </div>
  );
}

export default TimeList;
