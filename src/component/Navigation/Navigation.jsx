import Toggle from "../Toggle";
import { TbSparkles } from "react-icons/tb";

const Navigation = () => {
  return (
    <div className="md:flex-row flex-col  flex items-center justify-between py-5 md:w-5/6 w-full mx-auto">
      <div>
        <h2 className="font-mono flex items-center text-2xl gap-2">
          <TbSparkles />
          Ummay Kulsum Jhimi
        </h2>
      </div>

      <div className="md:flex items-center justify-center">
        <h2 className="text-center md:block hidden">
          Email <br />
          <span className="underline text-indigo-500 text-sm">
            talukderjhimi@gmail.com
          </span>
        </h2>

        <Toggle></Toggle>
      </div>
    </div>
  );
};

export default Navigation;
