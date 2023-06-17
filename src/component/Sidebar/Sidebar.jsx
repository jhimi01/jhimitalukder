import { AiFillHome, AiFillPhone } from "react-icons/ai";
import { FaTools, FaUserAlt } from "react-icons/fa";
import { HiDocumentDuplicate } from "react-icons/hi";
import { NavLink } from "react-router-dom";
// import { BiSolidContact } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="text-3xl md:absolute  md:top-36 left-10">
      <div className=" p-2 group">
        <NavLink  to="/" className={( {isActive} ) => isActive? "text-indigo-500  shadow-lg shadow-indigo-500/50": " "
          }
        >
          <AiFillHome className="cursor-pointer border-indigo-500 border rounded-full p-1"/> <span className="hidden">home</span>
        </NavLink>
           
      </div>

      <div className=" p-2">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-500 shadow-lg shadow-indigo-500/50"
              : " "
          }
        >
          <FaUserAlt className="cursor-pointer border-indigo-500 border rounded-full p-1" />
        </NavLink>
      </div>

      <div className=" p-2">
        <NavLink
          to="/skill"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-500 shadow-lg shadow-indigo-500/50"
              : ""
          }
        >
         <FaTools className="cursor-pointer border-indigo-500 border rounded-full p-1" />
        </NavLink>
      </div>

      <div className=" p-2">
        <NavLink
          to="/project"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-500 shadow-lg shadow-indigo-500/50"
              : ""
          }
        >
         <HiDocumentDuplicate className="cursor-pointer border-indigo-500 border rounded-full p-1" />
        </NavLink>
      </div>

      <div className=" p-2">
      <NavLink
  to="/contact"
  className={({ isActive }) =>
    isActive ? "text-indigo-500 shadow-lg shadow-indigo-500/50" : ""
  }
>
  <AiFillPhone className="cursor-pointer border-indigo-500 border rounded-full p-1" />
</NavLink>

      </div>
    </div>
  );
};

export default Sidebar;
