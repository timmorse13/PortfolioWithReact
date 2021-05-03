import React from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact"


function App() {
  return (
    <div>
      <Header />
      <About />
      {/* <Contact /> */}
      <Project />
    </div>
  );
}

export default App;
