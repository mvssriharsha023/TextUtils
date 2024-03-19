// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [toggleText, settoggleText] = useState("Enable dark mode");
  const [mode, setmode] = useState("light");
  const [btype, setbtype] = useState("primary");

  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light");
      settoggleText("Enable dark mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setbtype("primary");
    } else {
      setmode("dark");
      settoggleText("Disable dark mode");
      document.body.style.backgroundColor = "#1B1A55";
      document.body.style.color = "whitesmoke";
      setbtype("secondary");
    }
  };

  return (
    <Router>
      <>
        <Navbar
          title="TextUtils"
          home="Home"
          about="About"
          mode={mode}
          toggleText={toggleText}
          toggleMode={toggleMode}
        />

        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>} />
            <Route exact path="/" element={<TextForm
                heading="Enter the text to analyse below"
                btype={btype}
              />} />
          </Routes>
        </div>
      </>
    </Router>
  );
};

export default App;
