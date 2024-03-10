import React from "react";
import { FloatingNav } from "./animated/floatingNav";
import { ImHome3 } from "react-icons/im";
import { ImUser } from "react-icons/im";
import { ImCogs } from "react-icons/im";
import { ImEmbed2 } from "react-icons/im";
import { ImPhone } from "react-icons/im";

import Link from "next/link";
import { useDisplayNav } from "@/store/useNavDisplay";
import { Button } from "./ui/button";

function Navbar() {
  const { displayNav, toggleDisplay } = useDisplayNav();
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
  return (
    <>
      <nav className="w-full lg:w-auto lg:ml-auto">
        <ul
          className={`${
            displayNav
              ? "max-h-0 opacity-0 pointer-events-none"
              : "max-h-[350px] opacity-100 pointer-events-auto"
          } flex justify-center flex-col items-center gap-4 transition-all duration-300 w-full lg:max-h-fit lg:opacity-100 lg:flex-row lg:pointer-events-auto`}
        >
          <li>
            <Link
              className="hover:text-primary"
              onClick={toggleDisplay}
              href="#about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-primary"
              onClick={toggleDisplay}
              href="#skills"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-primary"
              onClick={toggleDisplay}
              href="#projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <button className="bg-primary rounded-[5px] py-2 px-4">
              <Link onClick={toggleDisplay} href="#contact">
                Contact
              </Link>
            </button>
          </li>
        </ul>
      </nav>
      <FloatingNav navItems={navItems} />
    </>
  );
}

export default Navbar;
