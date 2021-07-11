import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Menu from "./components/Menu";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";

function App() {
  //Sidebar Functionality

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      <NavBar toggle={toggle} isOpen={isOpen} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Home />
      <AboutUs />
      <Menu />
      <Booking />
      <Contact />
    </div>
  );
}

export default App;
