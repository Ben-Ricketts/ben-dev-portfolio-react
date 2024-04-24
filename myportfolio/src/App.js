import React from "react";
import { useState } from "react";
import ParticlesComponent from "./components/particles";
import Nav from "./components/nav";
import Home from "./components/home";
import About from "./components/about";
import Footer from "./components/footer";
import Projects from "./components/projects";

function App() {
  const [step, setStep] = useState(1);

  return (
    <div>
      <ParticlesComponent id="particles" />
      <hr className="w-[90vw] h-5 mx-auto mt-6 md:mt-12" />
      <div className="grid grid-cols-12  ">
        <section className="col-span-9 md:col-span-10">
          {step === 1 && <Home step={step} setStep={setStep} />}
          {step === 2 && <About />}
          {step === 3 && <Projects />}
        </section>
        <Nav step={step} setStep={setStep} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
