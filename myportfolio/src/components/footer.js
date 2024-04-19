import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="fixed inset-x-0 bottom-0 ">
      <hr className="w-[90vw] h-2 mx-auto" />
      <div className="flex gap-5 mt-7">
        <FaGithub className="text-white text-5xl ml-24" />
        <FaLinkedin className="text-white text-5xl" />
      </div>
    </div>
  );
}

export default Footer;
