import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ title = "Start a Project" }) => {
  return (
    <div className="w-fit px-4 py-1.5 bg-zinc-100 text-gray-600 rounded-full flex items-center justify-between gap-2 ">
      <span className="text-md font-normal">{title}</span>
      <IoIosReturnRight />
    </div>
  );
};

export default Button;
