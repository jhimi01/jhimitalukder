import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "./slider.css";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Skill from "../pages/Skill/Skill";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";

const Slider = () => {
  return (
    <div className="sliderContentMain">
      <AwesomeSlider animation="cubeAnimation" className="slider-content">
        <div>
          <Home></Home>
        </div>

        <div>
          <About></About>
        </div>

        <div>
          <Skill></Skill>
        </div>

        <div>
          <Projects></Projects>
        </div>
        <div>
          <Contact></Contact>
        </div>
        <div>
          <Projects></Projects>
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Slider;
