"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { LuAlignJustify } from "react-icons/lu";
import { LuX } from "react-icons/lu";

function Navbar() {
  const [displayNav, setDisplayNav] = useState(false);

  return (
    <>
      <button
        className="text-2xl text-primary"
        onClick={() => setDisplayNav((d) => !d)}
      >
        {displayNav ? <LuX /> : <LuAlignJustify />}
      </button>
      <nav className=" lg:hidden w-full">
        <ul
          className={` flex justify-center items-center flex-col gap-4 ${
            displayNav
              ? " max-h-[300px] opacity-100 pointer-events-auto"
              : "max-h-0 opacity-0 pointer-events-none"
          } transition-all duration-300`}
        >
          <li>
            <Link href="#intro">Home</Link>
          </li>
          <li>
            <Link href="#about"> About</Link>
          </li>
          <li>
            <Link href="#skills">Skills</Link>
          </li>
          <li>
            <Link href="#experience">Experiencies</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
