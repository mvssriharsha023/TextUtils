import React, { useState } from "react";

function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase().trim();
    if (text === newText) {
      newText = text.toLowerCase().trim();
      setbtnText("Change to uppercase");
    } else {
      setbtnText("Change to lowercase");
    }
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleCopyClick = () => {
    var sampleText = document.querySelector("#myBox");
    sampleText.select();
    sampleText.setSelectionRange(0, sampleText.length - 1);
    navigator.clipboard.writeText(sampleText.value);
  };

  const [text, setText] = useState("");

  const [btnText, setbtnText] = useState("Change to uppercase");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="10"
            value={text}
            placeholder="Sample text here..."
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className={`btn btn-${props.btype} mx-2 my-1`}
          onClick={handleUpClick}
        >
          {btnText}
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${props.btype} mx-2 my-1`}
          onClick={handleCopyClick}
        >
          Copy to Clipboard
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${props.btype} mx-2 my-1`}
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-4">
        <h3>Your text summary</h3>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
      </div>
    </>
  );
}

export default TextForm;
