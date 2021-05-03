import React from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import About from "./components/About";


function App() {
  return (
    <div className="proj" style={{backgroundColor:"black"}}>
      <Header />
      <About />
      <Project />
    </div>
  );
}

export default App;
