import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Ads from "./components/Ads";
import Spinner from "./components/Spinner";

import "./styles/App.css";

function App() {
  let [searchData, setSearchData] = useState("welcome"); //hook to store searchData

  return (
    <>
      <Navbar setSearchData={setSearchData} />
      {/* Below code use to toggle between spinner component and Ads component */}
      {searchData === "spinner" ? <Spinner /> : <Ads searchData={searchData} />}
    </>
  );
}

export default App;
