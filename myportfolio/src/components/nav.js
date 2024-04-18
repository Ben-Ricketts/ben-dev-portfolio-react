import React from "react";
import { useState } from "react";
import App from "../App";

function Nav({ setStep }) {
  return (
    <div>
      <section className="flex flex-col border text-white">
        <button onClick={() => setStep(1)}>home</button>
        <button onClick={() => setStep(2)}>about</button>
        <button>projects</button>
        <button>contact</button>
        <button>resume</button>
      </section>
    </div>
  );
}

export default Nav;
