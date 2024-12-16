import React from "react";

import Hero from "./components/Hero";
import Detail from "./components/Detail";
import TopPicks from "./components/Toppicks";
import Arrivals from "./components/Arrivals";
import Blogs from "./components/Blogs";
import Social from "./components/Social";





const Home = () => {
  return (
    <>
  
    

      {/* Hero Section */}
      <div className="-mt-16 pt-16">
        <Hero />
        </div>
        <Detail />
        <TopPicks heading="Top Picks For You" />
        <Arrivals />
        <Blogs />
        <Social />




    
    </>
  );
};

export default Home;
