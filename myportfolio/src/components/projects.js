import React from "react";
import project1 from "../images/project1.svg";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaSass } from "react-icons/fa";

function Projects() {
  return (
    <React.Fragment>
      <div className="slide-animation">
        <h1 className="text-white text-3xl md:text-5xl md:ml-12 text-center md:mb-10 mt-5">
          Projects
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 slide-animation">
        <section className="m-3">
          <a
            href="https://safe-house-automation-system.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h1 className="text-white capitalize text-center underline mb-5 md:text-3xl">
              safe house
            </h1>
          </a>
          <p className="text-white text-xs md:text-lg mb-3 md:ml-5">
            This project is a UI for a home automation system i designed and
            programmed for a project as part of my course. This project
            challenged me on multiple aspects. I had gone into it with limited
            knowledge on UI/UX design principles but I gained a lot of knowledge
            in aspects such as font selection, white space, and millers law (7
            +-2) .
          </p>
          <p className="text-white text-xs md:text-lg md:ml-5">
            This project also challenged me in terms of programming. It was the
            largest project I had attempted which meant I had to learn a SCSS
            methodology and I had to keep my files clean and readable to the
            best of my abilities.
          </p>
        </section>
        <section>
          <div className="flex justify-center">
            <a
              href="https://safe-house-automation-system.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={project1}
                alt="Project 1 thumbnail"
                style={{ width: "90%" }}
                className="ml-2"
              />
            </a>
          </div>
          <div className="flex gap-3 mt-2 justify-center">
            <p className="text-white">Built with:</p>
            <FaHtml5 className="text-[#E34C26]" />
            <FaCss3Alt className="text-[#264DE4]" />
            <IoLogoJavascript className="text-[#FFFF00]" />
            <FaSass className="text-[#cc6699]" />
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default Projects;
