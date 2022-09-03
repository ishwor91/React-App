import React, { useState } from "react";

function About() {
  const [myStyle, setmyStyle] = useState({
    backgroundColor: "rgba(0,0,0,0.9",
    color: "white",
  });
  const [btntext, setbtntext] = useState("Enable Dark Mode");

  let toggleStyle = () => {
    if (myStyle.color === "white") {
      setmyStyle({
        backgroundColor: "white",
        color: "black",
      });
      setbtntext("Enable Dark Mode");
      setInterval(() => {
        document.title = "dark mode is amazing";
      }, 2000);
      setInterval(() => {
        document.title = "dark mode is now amazing";
      }, 1500);
    } else {
      setmyStyle({
        backgroundColor: "rgba(0,0,0,0.9",
        color: "white",
      });
      setbtntext("Enable Light Mode");
    }
  };

  return (
    <>
      <div className="container my-4 py-4 px-5" style={myStyle}>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum fuga
          incidunt, et facere veniam repudiandae, quidem vel amet dicta ducimus
          labore perspiciatis minus natus libero ullam minima illo error
          aliquam.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, numquam.</p>
        <button className="btn btn-primary my-3" onClick={toggleStyle}>
          {btntext}
        </button>
      </div>
    </>
  );
}

export default About;
//react router dom isnatall comand = (npm install react-router-dom)
