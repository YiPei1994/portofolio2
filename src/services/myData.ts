export type TimelineType = {
  id: number;
  type: string;
  name: string;
  description: string;
  aquiredSkills?: string[];
  time: number;
};

export const timelines = [
  {
    id: 0,
    type: "WorkExperience",
    name: "Virtual Zoom s.r.o",
    description: "front-end software developer",
    aquiredSkills: ["js", "php", "typescript", "react"],
    time: 2022,
  },
  {
    id: 1,
    type: "WorkExperience",
    name: "BIKE CHANG LONG s.r.o",
    description: "software testing",
    aquiredSkills: ["html", "css", "git"],
    time: 2019,
  },

  {
    id: 2,
    type: "Education",
    name: "Metropolitan university Prague",
    description: "International business",
    aquiredSkills: ["thinking", "teamwork"],
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
  { skillNum: "skillThree", name: "native" },
];

export const freeTimeTools = [
  { toolNum: "toolOne", name: "jest" },
  { toolNum: "toolTwo", name: "firebase" },
  { toolNum: "toolThree", name: "expo" },
];

export const hobbies = [
  "Gym/exercise",
  "attending Stand-up comedy",
  "Reading books/manga",
  "Watching anime/movie",
];

export const projects = [
  {
    title: "Honey Bee",
    description: "Static website for local bee community.",
    usedTechs: ["nextjs", "tailwind", "typescript", "figma"],
    web: "https://honeybee-p6105zwal-yipei1994s-projects.vercel.app/",
    github: "https://github.com/YiPei1994/honeybee",
    content: "/projects/honeyBee.png",
  },
  {
    title: "iYummy",
    description:
      "Easy to use, mobile friendly website app for self order and convient.",
    usedTechs: ["react", "tailwind", "supabase", "typescript"],
    web: "https://www.google.com/",
    github: "https://github.com/",
  },
];
