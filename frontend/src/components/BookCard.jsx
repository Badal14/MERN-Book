import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CartContext } from "../context/CartProvider";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { FaCartShopping } from "react-icons/fa6";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const BookCard = ({ headline, books }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="my-16 px-4 lg:px-24">
      <h2 className="text-5xl text-center font-bold text-gray-900 dark:text-white my-5">
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
            <SwiperSlide key={book._id} className="h-auto pb-12">
              <Link
                to={`/book/${book._id}`}
                className="flex flex-col h-full p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 bg-white dark:bg-gray-800"
              >
                <div className="relative w-full">
                  <img
                    src={book.imgUrl}
                    alt={book.bookTitle}
                    className="w-full h-72 object-cover rounded-lg"
                  />
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addToCart(book);
                    }}
                    className="absolute top-3 right-3 bg-blue-700 hover:bg-black p-2 rounded transition-colors"
                  >
                    <FaCartShopping className="w-4 h-4 text-white" />
                  </button>
                </div>

                {/* Title and Author */}
                <div className="mt-4 space-y-2 flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white line-clamp-2 min-h-[56px]">
                    {book.bookTitle}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">{book.authorName}</p>
                </div>

                {/* Price */}
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-lg font-bold text-blue-700 dark:text-blue-400">
                    ${book.price || "29.99"}
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
