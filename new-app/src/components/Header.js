import React, { useState } from "react";
import propTypes from "prop-types";
import "./App.css";

function Header(props) {
  const [text, setText] = useState("Enter text here");
  function changeUppercase() {
    let newText = text.toUpperCase();
    setText(newText);
  }
  function changelowercase() {
    let newText = text.toLowerCase();
    setText(newText);
  }
  function handleChange(event) {
    setText(event.target.value); //to set value in text state
  }
  // text = "text" //wrong way to set text
  //   setText("new text"); //right way to change state

  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleChange}
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button onClick={changeUppercase} className="btn btn-primary my-2 py-2">
        Convert To Uppercase
      </button>
      <button
        onClick={changelowercase}
        className="btn btn-primary my-2 mx-3 py-2"
      >
        Convert To lowercase
      </button>

      <div className="container">
        <h2>you text summary</h2>
        <h3>
          {" "}
          {text.split(" ").filter((elm)=>{
            return elm.length!=0
          }).length} words and {text.length} character
        </h3>
        <p>time to read this paragraph {text.length * 0.008} minutes</p>
        <h2 className="py-3">Preview</h2>
        <p className="preview py-2">{text}</p>
      </div>
    </div>
  );
}

export default Header;
Header.propTypes = {
  Home: propTypes.string,
};

// hooks in react
//   const [text, setText] = useState("Enter text here");
//   useState hooks :

// challange
