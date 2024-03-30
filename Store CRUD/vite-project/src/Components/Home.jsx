import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav.jsx";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context.jsx";
import Loading from "./Loading.jsx";
import axios from "../utils/axios.jsx";

function Home() {
  const { search, pathname } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  // null at start so no worries
  const [products, setProducts] = useContext(ProductContext);
  const [filteredProducts, setfilteredProducts] = useState(null);
  useEffect(() => {
    console.log('eneterd Home')
    if (products) {
      if(!(localStorage.getItem("products"))){
        console.log("setted prod in local")
        localStorage.setItem("products", JSON.stringify([...products]));
      }
      if (category != "undefined") {
        setfilteredProducts(
          products.filter((product) => product.category == category)
        );}
      else if (pathname == "/") {
        setfilteredProducts([...products])}
       // passing ...products and not products
  }},[products,category]); 
  // changing setFilteredProducts to products on every render when page refresh and category changes.
  // 1. product value changes from null to an array on refresh. So to check that we added products.
  // 2. category value changes from nothing in searchbar to something in search bar about category when click on category.
  // 3. didn't added filteredProducts because it is changing too many times. results in infinite loop.
    //  1. Don't know why and where?
    //  2. Adding [...products] in setFiteredProduct. js thinking we are passing new state even though value is same.
    //  3. But also when we change it to (products) again infinte loop starts. So cant point to ...products even though it is affecting it.

  // const getCategory = async () => {
  //   try {
  //     const response = await axios(`/products/category/${category}`);
  //     if (response.data) {
  //       setfilteredProducts(response.data);
  //     }
  //   } catch (err) {
  //     console.log("error");
  //   }
  // };

  // useEffect(() => {
  //   if (category != "undefined") {
  //     setfilteredProducts(products);
      // getCategory();
  //   }
  //   if (!filteredProducts || category == "undefined") {
      //immediately checking if filtered is empty or not.
  //     setfilteredProducts(products);
  //   }
  // }, [category, products]);

  return products ? (
    <>
      <Nav />
      <div className="w-[85%] min-h-full h-fit bg-zinc-100 px-5 pt-[5%] gap-5 flex flex-wrap">
        {filteredProducts &&
          filteredProducts.map((item, id) => (
            <Link
              key={id}
              to={`/Details/${item.id}`}
              className="card p-3 flex flex-col justify-center items-center border shadow rounded w-[18%] h-[40vh] "
            >
              <div
                className="w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3 hover:scale-110"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              ></div>
              <h1 className="text-sm hover:text-blue-300">{item.title}</h1>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
