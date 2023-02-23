import React from "react";
import { Outlet } from "react-router-dom";
// import { Outlet } from "react-router-dom";
import AiProducts from "../../Components/AiProducts/AiProducts";
import Header from "../../Components/Header/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <AiProducts></AiProducts>
    </div>
  );
};

export default Home;
