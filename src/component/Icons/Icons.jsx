import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

const Icons = () => {
    return (
        <div>
            <BsFacebook className="text-4xl"/>
            <AiFillInstagram className="text-4xl my-4"/>
            <AiFillTwitterCircle className="text-4xl"/>
        </div>
    );
};

export default Icons;