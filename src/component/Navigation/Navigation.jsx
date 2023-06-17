import Toggle from "../Toggle";
import { TbSparkles } from 'react-icons/tb';

const Navigation = () => {
    return (
        <div className="md:flex-row flex-col  flex items-center justify-between py-5 md:w-5/6 w-full mx-auto">
            <div>
            
             <h2 className="font-mono flex items-center text-2xl gap-2"><TbSparkles /> Jhimi Talukder</h2></div>

            <div className="md:flex items-center justify-center">
            <h2 className="text-center md:block hidden">
                Email <br />
                <span className="underline text-indigo-500 text-sm">talukderjhimi@gmail.com</span>
            </h2>
            <img className="rounded-full h-12 md:mx-3 w-12 mx-auto object-cover hidden md:block" src="https://i.ibb.co/crQnZhh/pexels-mohamed-abdelghaffar-1698730.jpg" alt="mypicture" />
                <Toggle></Toggle>
            </div>
        </div>
    );
};

export default Navigation;