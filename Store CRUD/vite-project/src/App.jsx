import React from "react";
import Routing from "./utils/Routing.jsx";
import { Link, useLocation } from "react-router-dom";

function App() {
  const {search, pathname} = useLocation();
  return (
    <div className="w-full h-screen flex">
      {((pathname != "/") || search.length > 0) && (
        <Link
          to="/"
          className={`absolute top-[3%] left-[17%] text-md text-red-800`}
        >
          Home
        </Link>
      )}
      <Routing />
    </div>
  );
}

export default App;
