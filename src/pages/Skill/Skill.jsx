// import ProgressBar from "@ramonak/react-progress-bar";

import { Helmet } from "react-helmet";


const Skill = () => {
    return (
        <div>
         <Helmet>
            <title>Skill | Jhimi</title>
            <meta name="description" content="Nested component" />
        </Helmet>
                <h3 className="text-3xl text-center mb-5">My <span className="text-indigo-400">Skill</span></h3>

           <div className="md:flex items-center justify-between gap-5">
           <div className="md:w-3/4 w-full mx-auto p-2"  data-aos="fade-right"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine"
     data-aos-duration="900">
            <div className="my-2">
        <h3>HTML</h3>
        <div className="bg-gray-300 rounded-full">
            <div className="bg-indigo-400 rounded-full text-xs leading-none py-1 pl-2" style={{width: '90%'}}>90%</div>
        </div>
    </div>

<div className="my-2">

      <h3>CSS</h3>
      <div className="bg-gray-300 rounded-full">
            <div className="bg-indigo-400 rounded-full text-xs leading-none py-1 pl-2" style={{width: '90%'}}>90%</div>
        </div>
</div>
<div className="my-2">

<h3>JavaScript</h3>
<div className="bg-gray-300 rounded-full">
      <div className="bg-indigo-400 rounded-full text-xs leading-none py-1 pl-2" style={{width: '80%'}}>80%</div>
  </div>
</div>
<div className="my-2">

<h3>React JS</h3>
<div className="bg-gray-300 rounded-full">
      <div className="bg-indigo-400 rounded-full text-xs leading-none py-1 pl-2" style={{width: '80%'}}>85%</div>
  </div>
</div>
<div className="my-2">

<h3>Node JS</h3>
<div className="bg-gray-300 rounded-full">
      <div className="bg-indigo-400 rounded-full text-xs leading-none py-1 pl-2" style={{width: '20%'}}>20%</div>
  </div>
</div>


<div className="my-2">

<h3>Express JS</h3>
<div className="bg-gray-300 rounded-full">
      <div 
     className="bg-indigo-400 rounded-full text-xs leading-none py-1 pl-2" style={{width: '20%'}}>20%</div>
  </div>
</div>

    
            </div>

                <div className="w-full"  data-aos="fade-left"
     data-aos-offset="100"
     data-aos-easing="ease-in-sine"
     data-aos-duration="900">
                    <h3 className="text-lg font-thin">Introducing Jhimi Talukder, a skilled and ambitious developer with expertise in HTML (90%), CSS (90%), and JavaScript (80%). Passionate about creating visually stunning and user-friendly web experiences, I am dedicated to crafting clean and efficient code. While their proficiency in Node.js (20%) and Express.js (20%) is still growing, their enthusiasm and eagerness to learn are unmatched. Continuously staying up-to-date with industry trends, I thrives in collaborative environments, seeking to contribute to dynamic development projects. With a strong foundation in core web technologies, I am well-equipped to tackle challenges and bring innovative ideas to life, creating remarkable digital experiences.
</h3>
                </div>
           </div>
        </div>
    );
};

export default Skill;