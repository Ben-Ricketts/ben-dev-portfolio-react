import React from "react";
import aboutMePicture from "../images/aboutme.svg";

function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 text-white m-14">
      <section className="border">
        <h1 className="text-3xl text-center md:text-5xl sm:text-3xl capitalize mb-12">
          about me
        </h1>
        <p className="tracking-wider mb-3">
          Hi, I'm Ben, I'm 28 years old and I live in Tauranga, New Zealand with
          my partner Cassie. I first started developing just over a year ago, I
          am a passionate gamer and one day decided to look into how games were
          developed. I downloaded VS Code and Unity and created my first C#
          script and my journey began.
        </p>
        <p className="tracking-wider mb-3">
          I later decided that I was more interested in developing for the web
          and began learning HTML, CSS and JavaScript. When I decided
          development was something I wanted to pursue professionally, I
          enrolled in an online course with YOOBEE. This is where I have began
          to hone my skills in both UX/UI design and further my knowledge in
          current web technologies.
        </p>
        <p className="tracking-wider mb-3">
          Apart from development, other hobbies I enjoy in my spare time are
          gaming, playing the drums and travelling with my partner.
        </p>
      </section>
      <section className="border flex justify-center mt-16">
        <img src={aboutMePicture} alt="Ben Ricketts" />
      </section>
    </div>
  );
}

export default About;
