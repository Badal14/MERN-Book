import React from "react";
import FavBookImg from "../assets/favoritebook.jpg";
import { Link } from "react-router-dom";

const FavBook = () => {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center">
      <div className="md:w-1/2">
        <img src={FavBookImg} alt="" className="rounded md:w-10/12" />
      </div>
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-5xl leading-snug font-bold text-black my-5">
          Find Your Favorite <span className="text-blue-700">Book Here!</span>
        </h2>
        <p className="mb-10 text-lg md:w-5/6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sunt deserunt aspernatur deleniti, qui facilis debitis ducimus? Vitae ad voluptatum veniam maiores, dolores assumenda nihil tenetur nisi eos commodi aliquid!
        </p>
        <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
            <div>
                <h3 className="text-3xl font-bold">800+</h3>
                <p className="text-base">Books Listing</p>
            </div>
            <div>
                <h3 className="text-3xl font-bold">550+</h3>
                <p className="text-base">Registered Users</p>
            </div>
            <div>
                <h3 className="text-3xl font-bold">1200+</h3>
                <p className="text-base">PDF downloads</p>
            </div>
        </div>

        <Link to="/shop" className="mt-12 block"><button className="bg-blue-700 px-6 py-2 text-white rounded font-medium hover:bg-black transition-all ease-in duration-200">Explore More</button></Link>

      </div>
    </div>
  );
};

export default FavBook;
