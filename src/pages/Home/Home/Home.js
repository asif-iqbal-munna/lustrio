import React from "react";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import HotelsHome from "../HotelsHome/HotelsHome";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeFeedback from "../HomeFeedback/HomeFeedback";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Category />
      <HomeAbout />
      <HotelsHome />
      <HomeFeedback />
    </div>
  );
};

export default Home;
