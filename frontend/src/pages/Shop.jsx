import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartProvider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";

const Shop = () => {
  const [books, setBooks] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("http://localhost:5000/api/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []); // Add a dependency array to prevent repeated fetching

  return (
    <div className="mt-28 px-4 lg:px-24 transition-colors duration-300">
      <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white">All Books are Here</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-12">
        {books.map((book) => (
          <Card key={book._id} sx={{ maxWidth: 345 }} className="shadow-lg flex flex-col h-full justify-between bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
            <CardActionArea className="flex flex-col flex-grow items-start justify-start">
              <CardMedia
                component="img"
                className="h-64 w-full object-cover"
                image={book.imgUrl}
                alt={book.bookTitle}
              />
              <CardContent className="w-full flex-grow">
                <Typography gutterBottom variant="h5" component="div" className="line-clamp-2 min-h-[64px] text-gray-900 dark:text-white">
                  {book.bookTitle}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ marginBottom: "8px" }}
                  className="line-clamp-3 min-h-[60px] text-gray-600 dark:text-gray-400"
                >
                  {book.bookDescription}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="flex justify-between w-full p-4 mt-auto border-t border-gray-100 dark:border-gray-700">
              <button 
                onClick={() => addToCart(book)}
                className="bg-blue-600 px-4 py-2 text-white rounded font-medium hover:bg-blue-700 transition-all ease-in duration-200"
              >
                Add to Cart
              </button>
              <Link to={`/book/${book._id}`}>
                <button className="bg-gray-800 dark:bg-gray-700 px-4 py-2 text-white rounded font-medium hover:bg-black dark:hover:bg-gray-600 transition-all ease-in duration-200">
                  Details
                </button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
