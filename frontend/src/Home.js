import React, { Fragment } from 'react';
import HeroSection from './components/HeroSection';
import Trusted from './components/Trusted';
import Services from './components/Services';
import FeaturedProduct from "./components/FeaturedProduct";


const Home = () => {
  const data = {
    name: "e- Kalyanam",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeaturedProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home; 