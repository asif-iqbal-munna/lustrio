import React from "react";
import Header from "../../Shared/Header/Header";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Category />
      <About />
      <h1>Home</h1>
    </div>
  );
};

export default Home;
