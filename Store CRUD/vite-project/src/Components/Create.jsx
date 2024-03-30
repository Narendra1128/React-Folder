import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ProductContext } from "../utils/Context.jsx";
import { nanoid } from "nanoid";
import {  toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const [products, setProducts] = useContext(ProductContext);

  const onSubmit = (data) => {
    data.id = nanoid();
    setProducts([...products, data]); // if not used ()=> then acces prev data.
    localStorage.setItem("products", JSON.stringify([...products, data]));
    toast.success('Product saved successfully')
    navigate("/");
  };

  return (
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
        {...register("imageLink", { required: true })}
      />

      <input
        className="rounded-lg border border-blue-950 w-1/2 p-3 mb-3"
        type="text"
        placeholder="title"
        {...register("title", { required: true })}
      />

      <div className="w-1/2 flex justify-between">
        <input
          className="rounded-lg border border-blue-950 p-3 mb-3 w-[49%]"
          type="text"
          placeholder="category"
          {...register("category", { required: true })}
        />

        <input
          className="rounded-lg border border-blue-950 p-3 mb-3 w-[49%]"
          type="number"
          placeholder="price"
          {...register("price", { required: true })}
        />
      </div>

      <textarea
        name=""
        {...register("description", { required: true })}
        placeholder="Provide message here"
        id=""
        rows="10"
        className="rounded-lg text-1xl p-3 w-1/2 mb-3 bg-zinc-100"
      ></textarea>

      <div className="w-1/2 click:bg-red-300">
        <button
          className="border border-gray-300 rounded-md py-2 px-5 text-blue-500 self-left"
          to="/create"
          type="submit"
        >
          Add New Product
        </button>
      </div>
    </form>
  );
}

export default Create;
