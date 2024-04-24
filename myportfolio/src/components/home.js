import React from "react";
import displayPicture from "../images/displayPicture.svg";

function Home({ step, setStep }) {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 slide-animation">
      <section className="text-white flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-6xl lg:7xl capitalize">
          ben ricketts,
        </h1>
        <h1 className="text-3xl md:text-5xl capitalize">frontend developer</h1>
        <div className="flex flex-row gap-6 md:gap-16 mt-20">
          <button
            className="border-[6px] w-[110px] md:w-[150px] h-[50px] md:h-[80px] rounded-3xl bg-[#536878] capitalize text-1xl md:text-3xl"
            onClick={() => setStep(3)}
          >
            projects
          </button>
          <button className="border-[6px] w-[110px] md:w-[150px] h-[50px] md:h-[80px] rounded-3xl bg-[#536878] capitalize text-1xl md:text-3xl">
            contact
          </button>
        </div>
      </section>
      <section className="mt-20 flex justify-center mb-5">
        <img
          src={displayPicture}
          alt="Display of Ben"
          style={{ width: "60%" }}
        />
      </section>
    </div>
  );
}

export default Home;
