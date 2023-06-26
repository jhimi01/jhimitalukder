import { FiArrowUpRight } from "react-icons/fi";
import { BsDownload } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { TypeAnimation } from "react-type-animation";
import { Helmet } from "react-helmet";
import LazyLoad from "react-lazy-load";
import './Banner.css';
import pic from '../../assets/my5.png';
import pdf from '../../assets/Resume of Jhimi.pdf';
const Banner = () => {


  const hnadleDownload = ()=>{
    fetch(pdf).then(response => {
      response.blob().then(blob =>{
        const fileURL = window.URL.createObjectURL(blob);
        const filename = pdf.split("/").pop();
        // Setting various property values
        let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = filename; // Set the filename for the downloaded file
      alink.click();
      })
     
    })
  }



  return (
    <div className="md:flex items-center justify-between mt-10">
     <Helmet>
            <title>Jhimi</title>
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
          <a target="_blank"
            href="https://drive.google.com/file/d/1ylZQZuzV6dk1A2VBVbhrllIlVVICd2IO/view?usp=sharing"
            className="text-xl flex items-center p-2 gap-1 font-semibold text-indigo-500 shadow-lg shadow-indigo-500/50"
          >
            Resume <FiArrowUpRight />
          </a>
        </button>
        <button onClick={hnadleDownload}>
          <p
            className="text-xl flex items-center p-2 gap-2 font-semibold text-indigo-500 shadow-lg shadow-indigo-500/50  ml-3"
          >
           Download<BsDownload />
          </p>
        </button>
    
        <div className="mt-3"></div>
      </div>
    </div>
  );
};

export default Banner;
