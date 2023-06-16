import Toggle from "../Toggle";
import { TbSparkles } from 'react-icons/tb';

const Navigation = () => {
    return (
        <div className="flex items-center justify-between py-5">
            <div>
            
             <h2 className="font-mono flex items-center text-2xl gap-2"><TbSparkles /> Jhimi Talukder</h2></div>
            <div className="flex items-center justify-center">
            <img className="rounded-full h-12 w-12 object-cover" src="https://i.ibb.co/XC8YjLn/download.jpg" alt="mypicture" />
                <Toggle></Toggle>
            </div>
        </div>
    );
};

export default Navigation;