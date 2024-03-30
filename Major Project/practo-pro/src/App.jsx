import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="w-full h-screen flex bg-[#1F1E24] text-white">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
