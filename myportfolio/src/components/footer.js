import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <hr className="w-[90vw] h-2 mx-auto" />
      <div className="flex gap-3 pb-10">
        <a
          href="https://github.com/Ben-Ricketts"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="text-white text-3xl md:text-5xl ml-5 md:ml-20" />
        </a>
        <a
          href="https://www.linkedin.com/in/benjamin-ricketts-997367265/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-white text-3xl md:text-5xl" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
