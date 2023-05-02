import React from "react";
import Header from "../shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="min-h-[calc(100vh-130px)]">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Main;
