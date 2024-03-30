import React from 'react'
import {Link} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import Products from "./components/Products.jsx";
import Users from "./components/Users.jsx";

function App() {
  return (
    <div className="h-screen w-full bg-red-50">
      <nav className="p-5 flex justify-center gap-10">
        <Link to="/Home">Home</Link>
        <Link to="/Products">Products</Link>
        <Link to="/Users">Users</Link>
      </nav>
      <Routes>
        <Route path="/Products" element={<Products />}></Route>
        <Route path="/Users" element={<Users />}></Route>
        <Route path="/Home" element={<Users />}></Route>
        <Route path="/" element={<Users />}></Route>
      </Routes>
    </div>
  );
}
export default App;