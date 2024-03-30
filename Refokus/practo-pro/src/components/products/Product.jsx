import React from "react";
import Button from "../shared/Button";
import { useState } from "react";

const Product = ({ val, mover, count }) => {
  const [bgColor, setBgColor] = useState(null);
  return (
    <div className="w-full h-[20rem] py-20 text-white">
      <div
        onMouseEnter={() => {
          mover(count);
          setBgColor(
            [
              `rgb(75, 0, 130,0.1)`, // Dark Purple
              `rgb(255, 0, 255,0.1)`, // Magenta (Pink)
              `rgb(65, 105, 225,0.1)`, // Royal Blue
              `rgb(0, 0, 139,0.1)`, // Dark Blue
            ][count]
          );
        }}
        onMouseLeave={() => setBgColor(`rgb(24, 24, 27)`)}
        className="max-w-screen-xl mx-auto flex items-center justify-between"
        style={{ backgroundColor: bgColor }}
      >
        <h1 className="text-5xl font-semibold">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10">{val.description}</p>
          <div className="flex items-center gap-5">
            {val.live && <Button title="Visit Us" />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
