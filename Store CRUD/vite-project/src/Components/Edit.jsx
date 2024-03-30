import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ProductContext } from "../utils/Context.jsx";
import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { id } = useParams();

  const [products, setProducts] = useContext(ProductContext);

  const onSubmit = (data) => {
    if (products) {
      const pi = products.findIndex((p) => p.id == id);
      const ogData = [...products][pi];

      const keys = Object.keys(data);

      keys.forEach((key) => {
        if (data[key]) {
          ogData[key] = data[key];
        }
      });
      ogData.updatedId = nanoid();
      const copyData = [...products];
      copyData[pi] = ogData;
      setProducts(copyData);
      navigate("/");
    }
  };
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <>
      <form
        className="flex flex-col items-center p-[5%] w-screen h-screen"
        action=""
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="mb-3 text-2xl p-2 w-1/2">Add New Product</h1>
        <input
          className="rounded-lg border border-blue-950 w-1/2 p-3 mb-3"
          type="text"
          placeholder="image link"
          {...register("image")}
        />

        <input
          className="rounded-lg border border-blue-950 w-1/2 p-3 mb-3"
          type="text"
          placeholder="title"
          {...register("title")}
        />

        <div className="w-1/2 flex justify-between">
          <input
            className="rounded-lg border border-blue-950 p-3 mb-3 w-[49%]"
            type="text"
            placeholder="category"
            {...register("category")}
          />

          <input
            className="rounded-lg border border-blue-950 p-3 mb-3 w-[49%]"
            type="number"
            placeholder="price"
            {...register("price")}
          />
        </div>

        <textarea
          name=""
          {...register("description")}
          placeholder="Provide message here"
          id=""
          rows="10"
          className="rounded-lg text-1xl p-3 w-1/2 mb-3 bg-zinc-100"
        ></textarea>

        <div className="w-1/2 click:bg-red-300">
          <button
            className="border border-gray-300 rounded-md py-2 px-5 text-blue-500 self-left"
            type="submit"
          >
            Edit Product
          </button>
        </div>
      </form>
    </>
  );
}
export default Edit;
