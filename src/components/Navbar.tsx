import React from "react";
import { FloatingNav } from "./animated/floatingNav";
import { ImHome3 } from "react-icons/im";
import { ImUser } from "react-icons/im";
import { ImCogs } from "react-icons/im";
import { ImEmbed2 } from "react-icons/im";
import { ImPhone } from "react-icons/im";

function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "#intro",
      icon: <ImHome3 className="text-3xl text-primary mr-4" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <ImUser className="text-3xl text-primary mr-4" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <ImCogs className="text-3xl text-primary mr-4" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <ImEmbed2 className="text-3xl text-primary mr-4" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <ImPhone className="text-3xl text-primary mr-4" />,
    },
  ];
  return <FloatingNav navItems={navItems} />;
}

export default Navbar;
