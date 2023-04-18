import React from "react";
import Hero from "./Hero";
import About from "./About";
import Categories from "./Categories/Categories";
import ProductLanding from "./Products";
function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Categories />
      <ProductLanding />
      <About />
    </React.Fragment>
  );
}

export default Home;
