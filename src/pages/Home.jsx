import React from "react";
import Hero from "../components/Hero";
import Steps from "../components/Steps";
import BentoGrid from "../components/BentoGrid";
import FeatureLine from "../components/FeatureLine";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <>
      <Hero />
      <Steps />
      <BentoGrid />
      <FeatureLine />
      <Testimonials />
      <Pricing />
      <FAQ />
    </>
  );
};

export default Home;
