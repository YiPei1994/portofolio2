import React from "react";
import { FloatingNav } from "./animated/floatingNav";
import { ImHome3 } from "react-icons/im";
import { ImUser } from "react-icons/im";
import { ImCogs } from "react-icons/im";
import { ImEmbed2 } from "react-icons/im";
import { ImPhone } from "react-icons/im";
import { usePathname } from "next/navigation";

function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/home#intro",
      icon: <ImHome3 className="text-3xl  mr-4" />,
    },
    {
      name: "About",
      link: "/home#about",
      icon: <ImUser className="text-3xl  mr-4" />,
    },
    {
      name: "Skills",
      link: "/home#skills",
      icon: <ImCogs className="text-3xl  mr-4" />,
    },
    {
      name: "Projects",
      link: "/home#projects",
      icon: <ImEmbed2 className="text-3xl  mr-4" />,
    },
    {
      name: "Contact",
      link: "/home#contact",
      icon: <ImPhone className="text-3xl  mr-4" />,
    },
  ];
  return <FloatingNav navItems={navItems} />;
}

export default Navbar;
