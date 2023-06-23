import { FiArrowUpRight } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { TypeAnimation } from "react-type-animation";
import { Helmet } from "react-helmet";
import LazyLoad from "react-lazy-load";
import './Banner.css';
import pic from '../../assets/my5.png';
// import pic from '../../assets/my6.png';
const Banner = () => {
  return (
    <div className="md:flex items-center justify-between mt-10">
     <Helmet>
            <title>Home | Jhimi</title>
            <meta name="description" content="Nested component" />
        </Helmet>
      <div className="w-full md:w-[70%] h-full" 
      data-aos="fade-right"
    //  data-aos-offset="300"
     data-aos-easing="linear"
     data-aos-duration="700"
     >
      <LazyLoad effect="blur">
      <img
          // className="w-full h-[400px] object-cover shadow-xl shadow-indigo-300/50 hover:grayscale brightness-100 cursor-pointer"
          className="w-[100%] h-[400px] object-cover hover:grayscale"
          src={pic}
        />
        </LazyLoad>
      {/* <LazyLoad effect="blur">
      <img
          className="w-full h-[400px] object-cover bg-indigo-300 shadow-xl shadow-indigo-300/50 hover:grayscale cursor-pointer"
          src="https://i.ibb.co/crQnZhh/pexels-mohamed-abdelghaffar-1698730.jpg"
        />
        </LazyLoad> */}
      </div>
      <div className="md:text-right text-center w-full mx-auto font-thin"  
      data-aos="fade-left"
    //  data-aos-offset="300"
     data-aos-easing="linear"
     data-aos-duration="700"
     >
        <p
          className="text-medium flex items-center md:justify-end  justify-center md:mt-0 mt-3 text-indigo-500"
          style={{ letterSpacing: "2px" }}
        >
          Tangail, Bangladesh <CiLocationOn className="text-xl font-bold" />
        </p>
        <h2 className="text-5xl  ">
          Hello,
          <br />
          {` I'm Ummay Kulsum Jhimi`}
        </h2>
        <p className="ml-auto my-5 text-xl">
          <TypeAnimation
            sequence={[
              "I'm a passionate new developer",
              1000,
              "I love building web applications",
              1000,
              "I enjoy learning new technologies",
              1000,
              "I'm eager to contribute to meaningful projects",
              1000,
            ]}
            speed={{ type: "keyStrokeDelayInMs", value: 150 }}
            deletionSpeed={100}
            style={{ fontSize: "20px" }}
            repeat={Infinity}
          />
        </p>
        <button>
          <a target="_blank"
            href="https://www.linkedin.com/in/jhimi-talukder-801ab227b/"
            className="text-xl flex items-center p-2 gap-1 font-semibold text-indigo-500 shadow-lg shadow-indigo-500/50"
          >
            LinkdIn <FiArrowUpRight />
          </a>
        </button>
        <button>
          <a target="_blank"
            href="https://drive.google.com/file/d/1ylZQZuzV6dk1A2VBVbhrllIlVVICd2IO/view?usp=sharing"
            className="text-xl flex items-center p-2 gap-1 font-semibold text-indigo-500 shadow-lg shadow-indigo-500/50 ml-2"
          >
            Resume <FiArrowUpRight />
          </a>
        </button>
        <div className="mt-3"></div>
      </div>
    </div>
  );
};

export default Banner;
