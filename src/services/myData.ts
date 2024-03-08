export type TimelineType = {
  id: number;
  type: string;
  name: string;
  description: string;
  aquiredSkills: string[];
  time: number;
};

export const timelines = [
  {
    id: 0,
    type: "WorkExperience",
    name: "Virtual Zoom s.r.o",
    description: "front-end software developer",
    aquiredSkills: ["Javascript", "PHP", "TypeScript"],
    time: 2022,
  },
  {
    id: 1,
    type: "WorkExperience",
    name: "BIKE CHANG LONG s.r.o",
    description: "software testing",
    aquiredSkills: ["HTML", "CSS", "Youtrack", "Git", "Postman"],
    time: 2019,
  },

  {
    id: 2,
    type: "Education",
    name: "Metropolitan university Prague",
    description: "International business",
    aquiredSkills: ["teamwork", "public relations"],
    time: 2015,
  },
];

export const workSkills = [
  { skillNum: "skillOne", name: "html" },
  { skillNum: "skillTwo", name: "css" },
  { skillNum: "skillThree", name: "js" },
  { skillNum: "skillFour", name: "php" },
  { skillNum: "skillFive", name: "typescript" },
  { skillNum: "skillSix", name: "git" },
  { skillNum: "skillSeven", name: "nodejs" },
];

export const workTools = [
  { toolNum: "toolOne", name: "react" },
  { toolNum: "toolTwo", name: "nextjs" },
  { toolNum: "toolThree", name: "github" },
  { toolNum: "toolFour", name: "vscode" },
  { toolNum: "toolFive", name: "phpstorm" },
  { toolNum: "toolSix", name: "figma" },
];

export const freeTimeSkills = [
  { skillNum: "skillOne", name: "python" },
  { skillNum: "skillTwo", name: "sql" },
];

export const freeTimeTools = [
  { toolNum: "toolOne", name: "jest" },
  { toolNum: "toolTwo", name: "firebase" },
];

export const publicProjects = [
  {
    name: "ReLink",
    description:
      "Easy to use, mobile friendly website app for change yourself to better version.",
    usedTechs: ["react", "tailwind", "supabase", "typescript"],
    webLink: "https://www.google.com",
    gitHubLink: "https://www.github.com",
  },
  {
    name: "iYummy",
    description:
      "Easy to use, mobile friendly website app for self order and convient.",
    usedTechs: ["react", "tailwind", "supabase", "typescript"],
    webLink: "https://www.google.com",
    gitHubLink: "https://www.github.com",
  },
];
