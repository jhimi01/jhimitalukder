import { AiFillInstagram, AiFillTwitterCircle, AiOutlineGithub } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";


const Icons = () => {
    return (
        <div>
           <a href="https://www.facebook.com/profile.php?id=100070252309405" target="_blank"> <RiFacebookCircleFill className="text-4xl hover:text-indigo-400"/> </a>
            <a href="#"><AiFillInstagram className="text-4xl hover:text-indigo-400 my-4"/></a>
            <a href="#">
            <AiFillTwitterCircle className="text-4xl hover:text-indigo-400"/>
            </a>
            <a href="#">
            <AiOutlineGithub className="text-4xl hover:text-indigo-400 mt-4"/>
            </a>
           
        </div>
    );
};

export default Icons;