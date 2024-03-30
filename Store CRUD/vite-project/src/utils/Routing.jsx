import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from "../Components/Home.jsx";
import Edit from "../Components/Edit.jsx";
import Details from "../Components/Details.jsx";
import Create from "../Components/Create.jsx";

function Routing() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/Details/:id" element={<Details />} />
    </Routes>
  );
}

export default Routing;