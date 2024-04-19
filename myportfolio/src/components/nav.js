import React from "react";
import { useState } from "react";
import App from "../App";

function Nav({ step, setStep }) {
  return (
    <div>
      <section className="flex flex-col gap-11 mt-7 text-white tracking-widest ">
        <button
          className="capitalize border-[6px] rounded-full w-[85px] h-[85px]  "
          style={{
            backgroundColor: step >= 1 ? "#536878" : "#716B6B",
            width: step >= 1 ? "95px" : "85px",
            height: step >= 1 ? "95px" : "85px",
          }}
          onClick={() => setStep(1)}
        >
          home
        </button>
        <button
          className={`capitalize border-[6px] rounded-full ${
            step >= 2 ? "w-[85px] h-[85px]" : "w-[70px] h-[70px]"
          } md:w-[85px] md:h-[85px]`}
          style={{
            backgroundColor: step >= 2 ? "#536878" : "#716B6B",
          }}
          onClick={() => setStep(2)}
        >
          about
        </button>
        <button
          className="capitalize border-[6px] rounded-full w-[85px] h-[85px]  "
          style={{ backgroundColor: step >= 3 ? "#536878" : "#716B6B" }}
          onClick={() => setStep(3)}
        >
          projects
        </button>
        <button
          className="capitalize border-[6px] rounded-full w-[85px] h-[85px]  "
          style={{ backgroundColor: step >= 4 ? "#536878" : "#716B6B" }}
          onClick={() => setStep(4)}
        >
          contact
        </button>
        <button
          className="capitalize border-[6px] rounded-full w-[85px] h-[85px]  "
          style={{ backgroundColor: step >= 5 ? "#536878" : "#716B6B" }}
          onClick={() => setStep(5)}
        >
          resume
        </button>
      </section>
    </div>
  );
}

export default Nav;
