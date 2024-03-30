import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex justify-between items-center ">
        <div className="basis-1/2 bg-red">
          <h1 style={{ fontSize: "10vw" }} className="font-semibold ">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex  px-2">
          <div className="basis-1/3 flex flex-col ">
            <h4 className="text-2xl" style={{ color: "#7D7D7D" }}>
              Socials
            </h4>

            {["Instagram", "Twitter", "LinkedIn"].map((item, index) => (
              <a
                key={index}
                href={`#${item}`}
                style={{ color: "#7D7D7D" }}
                className="block mt-2 text-zinc-500"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/3 flex flex-col">
            <h4
              style={{ color: "#7D7D7D" }}
              className="text-2xl text-zinc-500 "
            >
              Sitemaps
            </h4>
            {["Home", "Work", "Careers", "Contact"].map((item, index) => (
              <a
                style={{ color: "#7D7D7D" }}
                key={index}
                href={`#${item}`}
                className="block mt-2 text-zinc-300"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="basis-2/4 flex flex-col items-end">
            <p className="text-right text-xl text-zinc-400">
              Refokus is pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <img
              style={{
                width: "9vw",
                height: "auto",
                paddingX: "3vw",
              }}
              src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
              alt=""
              className="ml-20 px-4 py-1 mt-4 bg-blue-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
