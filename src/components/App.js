import React from "react";
import Home from "../components/Home"
import About from "../components/About"
import NavBar from "../components/NavBar"
import{username ,city ,image} from "../data/user"
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
