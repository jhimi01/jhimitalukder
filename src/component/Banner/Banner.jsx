import { FiArrowUpRight } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { TypeAnimation } from "react-type-animation";
const Banner = () => {
  return (
    <div className="md:flex items-center justify-between mt-10">
      <div className="w-full md:w-[50%] h-full" 
      data-aos="fade-right"
    //  data-aos-offset="300"
     data-aos-easing="linear"
     data-aos-duration="700"
     >
        <img
          className="w-full h-[400px] object-cover bg-indigo-300 shadow-xl shadow-indigo-300/50 hover:grayscale cursor-pointer"
          src="https://i.ibb.co/crQnZhh/pexels-mohamed-abdelghaffar-1698730.jpg"
        />
      </div>
      <div className="text-right w-full font-thin"  
      data-aos="fade-left"
    //  data-aos-offset="300"
     data-aos-easing="linear"
     data-aos-duration="700"
     >
        <p
          className="text-medium flex items-center justify-end text-indigo-500"
          style={{ letterSpacing: "2px" }}
        >
          Tangail, Bangladesh <CiLocationOn className="text-xl font-bold" />
        </p>
        <h2 className="text-6xl  ">
          Hello,
          <br />
          {` I'm Jhimi Talukder`}
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
          <a
            href="#"
            className="text-xl flex items-center p-2 gap-1 font-semibold text-indigo-500 shadow-lg shadow-indigo-500/50"
          >
            LinkdIn <FiArrowUpRight />
          </a>
        </button>
        <div className="mt-3"></div>
      </div>
    </div>
  );
};

export default Banner;
