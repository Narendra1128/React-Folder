import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../utils/axios.jsx"; // axios called from utils
import Loading from "./Loading.jsx";
import { ProductContext } from "../utils/Context.jsx";
import { useNavigate } from "react-router-dom";

function Details() {
  const navigate =  useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  // const getSingleProduct = async () => {
  //   try {
  //     const response = await axios.get(`/products/${id}`); // not calling axios from utils while also giving link /products not baseURL
  //     setProduct(response.data);
  //   } catch (err) {
  //     console.log("err occured while loading details");
  //   }
  // };

  const deleteBtn = (clickedId) => {
    setProducts(
      products.filter((prod, index) => {
        if (prod.id != clickedId) {
          return prod;
        }
      })
    );
    localStorage.setItem("products",JSON.stringify([...products]));
    navigate("/")
  };

  useEffect(() => {
    // getSingleProduct();
    if (products) { //if directly acces details or refresh details page
        setProduct(products.filter((product) => product.id == id)[0]);
      //passes array so used [0] to gte obj
    }
  }, [id, products]); // redresh makes products=null

  return product ? (
    <>
      <div className="w-[70%] h-full m-auto p-[10%] flex justify-between">
        <img
          className="h-[70%] w-[50%] object-contain"
          src={product.image}
          alt={product.title}
        />
        <div className="content w-[50%]">
          <h1 className="text-4xl">{product.title}</h1>
          <h3 className="text-zinc-400 my-2">{product.category}</h3>
          <h2 className="mb-3 text-red-300">${product.price}</h2>
          <p className="mb-[5%]">{product.description}</p>
          <Link
            to={`/edit/${id}`} // Example edit route
            className="mr-4 py-2 px-5 border rounded border-blue-200 text-blue-300"
          >
            Edit
          </Link>
          <button
            onClick={() => deleteBtn(id)} // Example delete route
            className="py-2 px-5 border rounded border-blue-200 text-red-300"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Details;
