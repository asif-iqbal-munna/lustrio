import React from "react";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import HotelsHome from "../HotelsHome/HotelsHome";
import HomeAbout from "../HomeAbout/HomeAbout";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Category />
      <HomeAbout />
      <HotelsHome />
    </div>
  );
};

export default Home;
