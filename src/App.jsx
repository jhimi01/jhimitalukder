import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer/Footer";
import Icons from "./component/Icons/Icons";
import Navigation from "./component/Navigation/Navigation";
import Sidebar from "./component/Sidebar/Sidebar";
// import Slider from "./component/Slider";
import bggradient from "./assets/bg.png";

function App() {
  return (
    <>
      <div className="">
      {/* <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div> */}
        <Navigation />
        <div className="absolute right-20 bottom-28">
          <Icons></Icons>
        </div>
        <div className="md:w-4/6 mx-auto mt-10">
          <Outlet></Outlet>
        </div>
        <div>
          <Sidebar></Sidebar>
        </div>
      </div>
      <Footer></Footer>
      <img
        className="absolute -z-20 bottom-20 opacity-30 -left-20"
        src={bggradient}
        alt=""
      />
    </>
  );
}

export default App;
