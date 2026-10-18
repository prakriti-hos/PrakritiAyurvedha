import { createRoot } from "react-dom/client";
import "./Css/index.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Treatment from "./Components/Treatment";
import TreatmentFeedback from "./Components/TreatmentFeedback";
import Product from "./Components/Product";
import Contact from "./Components/Contact";
createRoot(document.getElementById("root")).render(
  <>
    <div>
      <Navbar />
      <Hero />
      <About />
      <Treatment />
      <TreatmentFeedback />
      <Product />
      <Contact />
    </div>
  </>,
);
