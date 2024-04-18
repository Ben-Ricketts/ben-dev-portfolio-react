import React from "react";
import displayPicture from "../images/displayPicture.svg";

function Home() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1">
      <section>
        <h1>ben ricketts,</h1>
        <h1>frontend developer</h1>
        <button>projects</button>
        <button>contact</button>
      </section>
      <section>
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
