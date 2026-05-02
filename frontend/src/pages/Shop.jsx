import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []); // Add a dependency array to prevent repeated fetching

  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">All Books are Here</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-12">
        {books.map((book) => (
          <Card key={book._id} sx={{ maxWidth: 345 }} className="shadow-lg flex flex-col">
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={book.imgUrl}
                alt={book.bookTitle}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {book.bookTitle}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", marginBottom: "8px" }}
                >
                  {book.bookDescription.length > 100
                    ? book.bookDescription.substring(0, 100) + "..."
                    : book.bookDescription}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="flex justify-center">
              <Link to={`/book/${book._id}`} className="w-full flex justify-center">
                <button className="bg-blue-700 px-6 py-2 text-white rounded font-medium hover:bg-black transition-all ease-in duration-200">
                  Buy Now
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
