import React from "react";
import Ctarea from "./Ctarea/Ctarea";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Ctarea></Ctarea>
      <Footer></Footer>
    </div>
  );
};

export default Home;
