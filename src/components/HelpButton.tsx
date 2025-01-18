import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown, FaRegQuestionCircle } from "@/assets";

const HelpButton = () => {
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    setIsVisible(!isVisible);
  };

  return (
    <div className="md:flex mx:hidden">
      <button
        className={`flex flex-row gap-2 text-GrayishBlue ${
          isActive ? "text-Orange" : ""
        } hover:text-Orange`}
        onClick={handleClick}
      >
        <span>
          <FaRegQuestionCircle className="w-8 h-6" />
        </span>
        <span>
          <p>Help</p>
        </span>
        <span>
          {isActive ? (
            <IoIosArrowUp className="h-7" />
          ) : (
            <IoIosArrowDown className="h-7" />
          )}
        </span>
      </button>

      {isVisible && (
        <div className="absolute">
          <span>All category</span>
        </div>
      )}
    </div>
  );
};

export default HelpButton;
