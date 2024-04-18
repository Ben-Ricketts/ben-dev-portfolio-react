import React from "react";
import { useState } from "react";
import ParticlesComponent from "./components/particles";
import Nav from "./components/nav";
import Home from "./components/home";
import About from "./components/about";
import Footer from "./components/footer";

function App() {
  const [step, setStep] = useState(1);

  return (
    <div>
      <ParticlesComponent id="particles" />
      <hr className="w-[90vw] h-2 mx-auto" style={{ marginTop: "4%" }} />
      <div className="grid grid-cols-12  ">
        <section className="col-span-9">
          {step === 1 && <Home />}
          {step === 2 && <About />}
        </section>
        <Nav step={step} setStep={setStep} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
