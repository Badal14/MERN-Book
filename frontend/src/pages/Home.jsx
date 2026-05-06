import React from "react";
import Banner from "../components/Banner";
import BestSellerBooks from "../components/BestSellerBooks";
import FavBook from "../components/FavBook";
import PromoBanner from "../components/PromoBanner";
import OtherBooks from "./OtherBooks";
import CustomFooter from "../components/CustomFooter";

const Home = () => {
  return (
    <div>
      <Banner />
      <BestSellerBooks />
      <FavBook />
      <PromoBanner />
      <OtherBooks />
      <CustomFooter />
    </div>
  );
};

export default Home;
