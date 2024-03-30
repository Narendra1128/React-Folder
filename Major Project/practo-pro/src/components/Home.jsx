import React, { useEffect, useState } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav.jsx";
import Header from "./partials/Header.jsx";
import axios from "../utils/axios.jsx";

function Home() {
  document.title = "Movie App";
  const [wallpaper, setWallpaper] = useState(null);

  const GetWallpaper = async () => {
    try {
      const response = await axios.get(`/trending/all/day`);
      let num = (Math.random() * response.data.results.length).toFixed();
      setWallpaper(response.data.results[num]);
    } catch (e) {
      console.log("Error", e);
    }
  };

  useEffect(() => {
    !wallpaper && GetWallpaper();
  }, []);

  return (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <Topnav />
        <Header data={wallpaper} />
      </div>
    </>
  );
}

export default Home;
