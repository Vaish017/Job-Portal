import React from "react";
import Hero from "../components/Hero";
import PopularVacancies from "../components/PopularVacancies";
import HowWorks from "../components/HowWorks";
import Categories from "../components/Categories";
import Jobs from "../components/Jobs";
import Testimonials from "../components/Testimonials";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { setQuery } = useContext(AppContext);

  useEffect(() => {
    setQuery("");
  }, []);
  return (
    <div>
      <Hero />
      <PopularVacancies />
      <HowWorks />
      <Categories />
      <Jobs />
      <Testimonials />
    </div>
  );
};

export default Home;
