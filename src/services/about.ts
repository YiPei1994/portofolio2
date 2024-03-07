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
    aquiredSkills: ["Javascript", "Php", "TypeScript"],
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
    type: "education",
    name: "Metropolitan university Prague",
    description: "International business",
    aquiredSkills: ["team player", "manage pressure", "public relations"],
    time: 2015,
  },
];
