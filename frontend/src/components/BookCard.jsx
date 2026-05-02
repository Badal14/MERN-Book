// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { FaCartShopping } from "react-icons/fa6";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const BookCard = ({ headline, books }) => {
  return (
    <div className="my-16 px-4 lg:px-24">
      <h2 className="text-5xl text-center font-bold text-black my-5">
        {headline}
      </h2>
      {/* Book Cards */}
      <div className="mt-12">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {books.map((book) => (
            <SwiperSlide key={book._id}>
              <Link
                to={`/book/${book._id}`}
                className="block p-4 border rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
              >
                <div className="relative">
                  <img
                    src={book.imgUrl}
                    alt={book.bookTitle}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute top-3 right-3 bg-blue-700 hover:bg-black p-2 rounded">
                    <FaCartShopping className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Title and Author */}
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {book.bookTitle}
                  </h3>
                  <p className="text-sm text-gray-600">{book.authorName}</p>
                </div>

                {/* Price */}
                <div className="mt-2">
                  <p className="text-lg font-bold text-blue-700">
                    ${book.price || "10.00"}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCard;
