import { Outlet } from "react-router-dom";
import "./App.css";
import Icons from "./component/Icons/Icons";
import Navigation from "./component/Navigation/Navigation";
import Sidebar from "./component/Sidebar/Sidebar";
import bggradient from "./assets/bg.png";

function App() {
  return (
    <>
      <div className="">
        <Navigation />
        <div className="fixed right-20 bottom-28">
          <Icons></Icons>
        </div>
        <div className="">
          <Sidebar></Sidebar>
        </div>
        <div className="md:w-[80%] mx-2 md:mx-auto mt-5 md:mt-10">
          <Outlet></Outlet>
        </div>
      </div>
      <img
        className="absolute -z-20 bottom-20 opacity-30 -left-20"
        src={bggradient}
        alt="gradient"
      />
    </>
  );
}

export default App;
