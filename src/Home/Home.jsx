import { useState } from "react";
import HomeBrands from "../BRands/HomeBrands";
import Banner from "./Banner";
import ExtraSec from "./ExtraSec";
import Footer from "./Footer";
import Lastsec from "./Lastsec";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`p-4 ${isDarkMode ? "dark" : ""}`}>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <Banner></Banner>
      <HomeBrands></HomeBrands>
      <ExtraSec></ExtraSec>
      <Lastsec></Lastsec>
      <Footer></Footer>
    </div>
  );
};

export default Home;
