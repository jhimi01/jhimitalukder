import { FiArrowUpRight } from "react-icons/fi";
import { BsDownload } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { TypeAnimation } from "react-type-animation";
import { Helmet } from "react-helmet";
import LazyLoad from "react-lazy-load";
import "./Banner.css";
import pic3 from "../../../public/pic3.png";
import gradu from "../../../public/gradu.png";
import light from "../../../public/light.png";
import splash from "../../../public/splash.png";
import arrow from "../../../public/arrow.png";
import ides from "../../../public/ides.png";
import curve from "../../../public/curve2.svg";
import pdf from "../../assets/Resume of Jhimi.pdf";
const Banner = () => {
  const hnadleDownload = () => {
    fetch(pdf).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const filename = pdf.split("/").pop();
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = filename; // Set the filename for the downloaded file
        alink.click();
      });
    });
  };

  return (
    <div className="md:flex items-center justify-between mt-10 ">
      <Helmet>
        <title>Jhimi</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <div
        className="w-full h-full relative"
        data-aos="fade-right"
        //  data-aos-offset="300"
        data-aos-easing="linear"
        data-aos-duration="700"
      >
        <div className="absolute hidden lg:block bottom-10 left-3 animatespin ">
          <img src={gradu} className="w-28 h-28" alt="brain" />
        </div>
        <div className="absolute hidden lg:block bottom-40 -rotate-90 -left-16">
          <img src={arrow} className="w-48 h-48" alt="brain" />
        </div>
        <div className="absolute hidden lg:block top-5 z-40 animate-pulse right-20">
          <img src={light} className="w-28 h-28" alt="brain" />
        </div>
        <div className="absolute hidden lg:block bottom-20 right-10 animate-updown">
          <img src={splash} className="w-28 h-28" alt="brain" />
        </div>
        <div className="absolute hidden lg:block right-20 top-5 -z-10">
          <div className="w-24 h-24 blur-2xl bg-yellow-500 rounded-full opacity-80 animate-pulse duration-700"></div>
        </div>
        <div className="absolute hidden lg:block left-12 -top-14 animate-pulse">
          <img src={ides} className="w-28 h-28" alt="" />
        </div>
        <div className="relative">
          <LazyLoad effect="blur">
            <img
              className="h-[400px] object-cover"
              src={pic3}
              alt="Background"
            />
          </LazyLoad>
          <img
            src={curve}
            className="absolute opacity-80 top-0 -z-10 left-0 w-full h-full object-cover pointer-events-none"
            alt="Curve"
          />
        </div>
      </div>
      <div
        className="md:text-right text-center w-full mx-auto font-thin"
        data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="700"
      >
        <p
          className="text-medium flex items-center md:justify-end  justify-center md:mt-0 mt-3 text-indigo-500"
          style={{ letterSpacing: "2px" }}
        >
          Tangail, Bangladesh <CiLocationOn className="text-xl font-bold" />
        </p>
        <h2 className="text-5xl font-normal">
          Hello, I'm
          <br />
          <span className="text-indigo-300"> Ummay Kulsum Jhimi</span>
        </h2>
        <p className="ml-auto my-5 text-xl">
          <TypeAnimation
            sequence={[
              "I'm a passionate new developer",
              1000,
              "I love building meaningful web applications",
              1000,
              "I enjoy learning new technologies",
              1000,
            ]}
            speed={{ type: "keyStrokeDelayInMs", value: 150 }}
            deletionSpeed={100}
            style={{ fontSize: "20px" }}
            repeat={Infinity}
          />
        </p>
        <button>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1v7_ZxnGy9F-J2C0_yTwrNmpmYJlUaZLM/view?usp=sharing"
            className="text-xl flex items-center p-2 gap-1 font-semibold text-indigo-500 shadow-lg shadow-indigo-500/50"
          >
            Resume <FiArrowUpRight />
          </a>
        </button>
        <button onClick={hnadleDownload}>
          <p className="text-xl flex items-center p-2 gap-2 font-semibold text-indigo-500 shadow-lg shadow-indigo-500/50  ml-3">
            Download
            <BsDownload />
          </p>
        </button>

        <div className="mt-3"></div>
      </div>
    </div>
  );
};

export default Banner;
