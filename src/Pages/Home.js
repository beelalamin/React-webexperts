import React from "react";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import About from "../Components/About";
import Portfolios from "../Components/Portfolios";
import Aboutus from "../Components/Aboutus";
import Workflow from "../Components/Workflow";
import Blogs from "../Components/Blogs";
import Footer from "../Components/Footer";
import Brands from "../Components/Brands";

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Portfolios />
      <Aboutus />
      <Workflow />
      <Blogs />
      <Brands />
      <Footer />
    </div>
  );
}

export default Home;
