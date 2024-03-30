import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";

function Nav() {
  const [products, setProducts] = useContext(ProductContext);

  let uniqueCategory = products && products.reduce((acc, cv) => [...acc, cv.category], []);
  uniqueCategory = [...new Set(uniqueCategory)];

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},0.3)`;
  };

  return (
    <nav className="w-[15%] h-screen flex flex-col items-center pt-5 bg-zinc-50">
      <Link
        className="border border-gray-300 rounded-md py-2 px-5 text-blue-500"
        to="/create"
      >
        Add New Product
      </Link>
      <hr className="my-3 w-[80%]" />
      <h1 className="text-2xl w-[80%] mb-3">{}</h1>
      <ul className="w-[80%] pl-4">
        {uniqueCategory.map((cat, id) => {
          return (
            <Link
              key={id}
              to={`/?category=${cat}`}
              className="flex items-center mb-2 hover:text-sky-600"
            >
              <span
                style={{ backgroundColor: color() }}
                className={`rounded-full mr-2 w-[15px] h-[15px]`}
              ></span>
              {cat}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
