import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAsyncProducts } from "../store/actions/ProductsAction";

function Products() {
  const products = useSelector((state) => state.products.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncProducts());
  }, [dispatch]);

  return (
    <div className="w-full h-screen bg-red-50 flex flex-col items-center gap-4">
      <h1 className="text-red-800 pt-5 font-semibold text-2xl">
        Products List
      </h1>
      <ul>
        {products.map((item) => (
          <li key={item.id} className="text-black">
            <h1 className="text-black">
              <span>{item.title}</span>
              <span className="text-red-900 font-bold p-2 cursor-pointer">X</span>
            </h1>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
