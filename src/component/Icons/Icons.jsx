import { AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiOutlineGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { RiFacebookCircleFill } from "react-icons/ri";


const Icons = () => {
    return (
        <div className="md:block hidden">
           <a href="https://www.facebook.com/profile.php?id=100070252309405" target="_blank"> <RiFacebookCircleFill className="text-4xl hover:text-indigo-400"/> </a>
            <a href="https://www.linkedin.com/in/jhimi-talukder-801ab227b" target="_blank"><AiFillLinkedin className="text-4xl hover:text-indigo-400 my-4 rounded-full"/></a>
            <a href="https://github.com/jhimi01" target="_blank">
            <AiOutlineGithub className="text-4xl hover:text-indigo-400 mt-4"/>
            </a>
           
        </div>
    );
};

export default Icons;