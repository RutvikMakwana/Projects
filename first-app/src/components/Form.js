import React, { useState } from "react";

export default function Form(props) {
  // State for managing text input
  const [text, setText] = useState("");

  // Function to convert text to uppercase
  const handleOnClickUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  // Function to convert text to lowercase
  const handleOnClickLo = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  // Function to clear text
  const handleOnClickClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };

  // Function to speak the text
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  // Function to stop speaking
  const stopSpeak = () => {
    window.speechSynthesis.cancel();
  };

  // Function to handle text input change
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div
      className="form-group"
      style={{ color: props.mode === "light" ? "black" : "white" }}
    >
      <div className="container">
        <h1>{props.heading}</h1>
        {/* Textarea for input text */}
        <textarea
          style={{
            background: props.mode === "light" ? "white" : "#1950a1",
            color: props.mode === "light" ? "black" : "white",
          }}
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="name"
          rows="10"
        ></textarea>
        {/* Buttons for text transformations */}
        <button className="btn btn-primary" onClick={handleOnClickUp}>
          Change to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleOnClickLo}>
          Change to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleOnClickClear}>
          Clear
        </button>
        {/* Buttons for speech synthesis */}
        <button
          type="submit"
          onClick={speak}
          className="btn btn-warning mx-2 my-2"
        >
          Speak
        </button>
        <button className="btn btn-warning mx-2 my-2" onClick={stopSpeak}>
          Stop
        </button>
      </div>
      {/* Text summary */}
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters{" "}
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

// Default props for the Form component
Form.defaultProps = {
  heading: "Enter text below",
};
