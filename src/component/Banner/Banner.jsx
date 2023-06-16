import { FiArrowUpRight } from 'react-icons/fi';
import { CiLocationOn } from 'react-icons/ci';
const Banner = () => {
    return (
        <div className="flex items-center justify-between mt-10">
            <div className="w-full md:w-[40%] h-full">
                <img className="w-full" src="https://i.ibb.co/W0qVBqc/pexels-roman-odintsov-8018922.jpg" alt="" />
            </div>
            <div className="pr-6 text-right font-thin">
            <p className="text-medium flex items-center justify-end" style={{letterSpacing: '2px'}}>Tangail, Bangladesh <CiLocationOn className='text-2xl font-bold'/></p>
                <h2 className="text-8xl  ">Hello,
                <br />
                   {` I'm Jhimi Talukder`}</h2>
                    <p className="w-5/6 ml-auto my-5 text-xl">I’m a Performance Support Specialist based in sunny Melbourne, Australia. I have unwavering passion and energy for people and customer experience.</p>
                    <button><a href="#" className='text-xl flex items-center gap-1 font-semibold'>LinkdIn <FiArrowUpRight /></a></button>
            </div>
        </div>
    );
};

export default Banner;