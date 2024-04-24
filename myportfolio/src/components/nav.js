import React from "react";

function Nav({ step, setStep }) {
  return (
    <div>
      <section className="flex flex-col gap-8 md:gap-11 mt-7 text-white tracking-widest">
        <button
          className="capitalize border-[6px] rounded-full w-[85px] h-[85px] "
          style={{
            backgroundColor: step >= 1 ? "#536878" : "#716B6B",
            width: step >= 1 ? "85px" : "85px",
            height: step >= 1 ? "85px" : "85px",
          }}
          onClick={() => setStep(1)}
        >
          home
        </button>
        <button
          className={`capitalize border-[6px] rounded-full  ${
            step >= 2 ? "w-[85px] h-[85px]" : "w-[80px] h-[80px]"
          } md:w-[85px] md:h-[85px]`}
          style={{
            backgroundColor: step >= 2 ? "#536878" : "#716B6B",
          }}
          onClick={() => setStep(2)}
        >
          about
        </button>
        <button
          className={`capitalize border-[6px] rounded-full ${
            step >= 3 ? "w-[85px] h-[85px]" : "w-[80px] h-[80px]"
          } md:w-[85px] md:h-[85px]`}
          style={{
            backgroundColor: step >= 3 ? "#536878" : "#716B6B",
          }}
          onClick={() => setStep(3)}
        >
          projects
        </button>
        <button
          className={`capitalize border-[6px] rounded-full ${
            step >= 4 ? "w-[85px] h-[85px]" : "w-[80px] h-[80px]"
          } md:w-[85px] md:h-[85px]`}
          style={{
            backgroundColor: step >= 4 ? "#536878" : "#716B6B",
          }}
          onClick={() => setStep(4)}
        >
          contact
        </button>
        <button
          className={`capitalize border-[6px] rounded-full mb-3 md:mb-20 ${
            step >= 5 ? "w-[85px] h-[85px]" : "w-[80px] h-[80px]"
          } md:w-[85px] md:h-[85px]`}
          style={{
            backgroundColor: step >= 5 ? "#536878" : "#716B6B",
          }}
          onClick={() => setStep(5)}
        >
          resume
        </button>
      </section>
    </div>
  );
}

export default Nav;
