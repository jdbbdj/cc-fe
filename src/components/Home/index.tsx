import React from "react";
import Hero from "./Hero";
import Header from "../Global/Header";
import Footer from "../Global/Footer";
import Navbar from "../Global/Navbar";
import Categories from "./Categories/Categories";

function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Categories />
    </React.Fragment>
  );
}

export default Home;
