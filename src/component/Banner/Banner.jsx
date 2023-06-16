import { FiArrowUpRight } from 'react-icons/fi';
import { CiLocationOn } from 'react-icons/ci';
import { TypeAnimation } from 'react-type-animation';
const Banner = () => {


    return (
        <div className="flex items-center justify-between">
            <div className="w-full md:w-[40%] h-full">
                <img className="w-full" src="https://i.ibb.co/W0qVBqc/pexels-roman-odintsov-8018922.jpg" alt="" />
            </div>
            <div className="pr-6 text-right font-thin w-5/6">
            <p className="text-medium flex items-center justify-end" style={{letterSpacing: '2px'}}>Tangail, Bangladesh <CiLocationOn className='text-2xl font-bold'/></p>
                <h2 className="text-8xl  ">Hello,
                <br />
                   {` I'm Jhimi Talukder`}</h2>
                    <p className="ml-auto my-5 text-xl"><TypeAnimation
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
              speed={{type: 'keyStrokeDelayInMs', value: 150}}
              deletionSpeed={100}
              style={{ fontSize: '1.5em' }}
              repeat={Infinity}
            /></p>
                    <button><a href="#" className='text-xl flex items-center gap-1 font-semibold'>LinkdIn <FiArrowUpRight /></a></button> <div className="mt-3">
      
          </div>
            </div>
        </div>
    );
};

export default Banner;