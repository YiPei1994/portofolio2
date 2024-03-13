import Link from "next/link";
import React from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function Logo() {
  return (
    <div className="flex gap-4 text-3xl ">
      <Link
        className="hover:text-primary"
        href="https://github.com/YiPei1994"
        target="_blank"
      >
        <FaSquareGithub />
      </Link>
      <Link
        className="hover:text-primary"
        href="https://www.linkedin.com/in/yipeizhu/"
        target="_blank"
      >
        <FaLinkedin />
      </Link>
    </div>
  );
}

export default Logo;
