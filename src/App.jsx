import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer/Footer";
import Icons from "./component/Icons/Icons";
import Navigation from "./component/Navigation/Navigation";
import Sidebar from "./component/Sidebar/Sidebar";
// import Slider from "./component/Slider";
// import ParticleBackground from "./component/ParticleBackground";

function App() {
  return (
    <>
      <div className="w-full  mx-auto">

<Navigation />
<div className="absolute right-20 bottom-20">
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
    </>
  );
}

export default App;
