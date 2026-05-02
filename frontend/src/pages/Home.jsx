import React from "react";
import Banner from "../components/Banner";
import BestSellerBooks from "../components/BestSellerBooks";
import FavBook from "../components/FavBook";
import PromoBanner from "../components/PromoBanner";
import OtherBooks from "./OtherBooks";
// import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <BestSellerBooks />
      <FavBook />
      <PromoBanner />
      <OtherBooks />
    </div>
  );
};

export default Home;
