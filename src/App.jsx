import "./App.css";
import Banner from "./component/Banner/Banner";
import Icons from "./component/Icons/Icons";
import Navigation from "./component/Navigation/Navigation";
// import Slider from "./component/Slider";
// import ParticleBackground from "./component/ParticleBackground";

function App() {
  return (
    <div className="w-full md:w-5/6 mx-auto">

      <Navigation />
  <div className="absolute right-20 bottom-20">
<Icons></Icons>
  </div>
  <Banner></Banner>
    </div>
  );
}

export default App;
