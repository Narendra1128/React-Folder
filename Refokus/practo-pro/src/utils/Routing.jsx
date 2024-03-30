import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home.jsx";
import About from "../Components/About.jsx";
import Shop from "../Components/Shop.jsx";
import UserDetails from "../Components/UserDetails.jsx";


function Routing() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Shop" element={<Shop />}>
        <Route path="/Shop/:name" element={<UserDetails />} />
      </Route>
    </Routes>
  );
}

export default Routing