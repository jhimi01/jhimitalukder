import { AiFillPhone } from "react-icons/ai";
import { BsFillCalendar2HeartFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const About = () => {
  return (
    <div className="md:flex items-center justify-between mx-auto gap-5">
      <div
        className="w-2/3 h-full flex flex-col items-center"
        style={{ borderRight: "1px dashed #333" }}
      >
        <img
          className="w-[70px] mb-5 rounded-full h-[70px] object-cover"
          src="https://i.ibb.co/XC8YjLn/download.jpg"
          alt=""
        />
        <h3 className="text-2xl font-bold mb-3">JHIMI TALUKDER</h3>
        <h5 className="text-xl mb-3 text-gray-400">Joniour developer</h5>
        <div className="text-start mt-3">
          <div
            style={{ borderBottom: "1px dashed #333", padding: "7px 0" }}
          >
            <h4 className="gap-4 flex items-center text-lg font-thin">
              <FaUser className="text-indigo-400" /> Jhimi Talukder
            </h4>
          </div>
          <div
            style={{ borderBottom: "1px dashed #333", padding: "7px 0" }}
          >
            <h4 className="gap-4 flex items-center text-lg font-thin">
              <BsFillCalendar2HeartFill className="text-indigo-400" />{" "}
              15.12.2004
            </h4>
          </div>
          <div
            style={{ borderBottom: "1px dashed #333", padding: "7px 0" }}
          >
            <h4 className="gap-4 flex items-center text-lg font-thin">
              <GoLocation className="text-indigo-400" /> Tangail, Bangladesh
            </h4>
          </div>
          <div
            style={{ borderBottom: "1px dashed #333", padding: "7px 0" }}
          >
            <h4 className="gap-4 flex items-center text-lg font-thin">
              <AiFillPhone className="text-indigo-400" /> +8801754001888
            </h4>
          </div>
        </div>
      </div>
      <div
        className="w-full p-4 text-start"
        style={{ borderBottom: "1px dashed #333" }}
      >
        <div className="py-3">
          <h3
            className="text-3xl font-semibold pb-3"
            style={{ borderBottom: "1px dashed #333" }}
          >
            About <span className="text-indigo-600">me</span>
          </h3>

          <p>
            My name is <span className="text-indigo-400">Jhimi Talukder</span>. I am a junior, and I am very
            passionate and dedicated to my work. With 20 years experience as a
            professional a graphic designer, I have acquired the skills and
            knowledge.
          </p>
        </div>
        <div>
          <h3
            className="text-3xl font-semibold pb-3"
            style={{ borderBottom: "1px dashed #333" }}
          >
            Educational <span className="text-indigo-600">Qualification</span>
          </h3>
          <div  style={{ borderBottom: "1px dashed #333" }}>
           <h3 className="text-lg"> Tangail Polytechnic Institute, Tangail — <span className="text-indigo-400">Expecting Degree</span></h3>
            <span className="text-sm text-gray-500">
               [January 2024 ] 
            </span>
            <span className="text-sm"> 
              Passionate and innovative Diploma in Computer Science Technology
              student with a flair for combining technical expertise in web
              development with a creative mindset to deliver captivating user
              experiences.
            </span>
          </div>
          <div>
          <h3 className="text-lg">
          Shohid Mizanur Rahman High School, Tangail — <span className="text-indigo-400">SSC</span>
          </h3>
        
            <span className="text-xs text-gray-500"> [Feb 2019] </span>
            <span className="text-sm">
              I passed my Secondary School Certificate( SSC ) in 2019 from my
              hometown school.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
