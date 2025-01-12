import { useEffect, useState } from "react";
import { BsFillCloudSunFill } from "react-icons/bs";
import { BsFillCloudMoonFill } from "react-icons/bs";

const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Update the CSS class on the body element based on the theme
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={handleToggle}
    >
      {isDarkMode ? (
        <BsFillCloudMoonFill className="text-3xl ml-2" />
      ) : (
        <BsFillCloudSunFill className="text-3xl ml-2" />
      )}
    </button>
  );
};

export default Toggle;
