function Hobbies() {
  return (
    <div className="p-4 flex flex-col">
      <h6>
        <span className="text-[#a855f7]">class</span>
        <span className="text-[#eab308]"> hobbies &#123;</span>
      </h6>
      <ul>
        <span className="text-[#0ea5e9] pl-4">
          constructor <span className="text-[#a855f7]">() &#123;</span>
        </span>
        <li className="pl-8">
          <span className="text-[#ef4444] ">this</span>.hobbyOne=
          &quot;Gym&quot;
        </li>
        <li className="pl-8">
          <span className="text-[#ef4444] ">this</span>.hobbyTwo=&quot; Stand-up
          comedy&quot;
        </li>
        <li className="pl-8">
          <span className="text-[#ef4444]">this</span>.hobbyThree=&quot;
          Reading&quot;
        </li>

        <span className="text-[#a855f7] pl-3"> &#x2775;</span>
      </ul>
      <span className="text-[#eab308]"> &#x2775;</span>
    </div>
  );
}

export default Hobbies;
