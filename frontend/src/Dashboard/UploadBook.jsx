import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UploadBook = () => {
  const bookCategory = [
    "Fiction", "Non-Fiction", "Self-Help", "Biography", "Science", "Fantasy",
    "Romance", "Thriller", "Mystery", "Historical", "Horror", "Adventure",
    "Psychology", "Philosophy", "Poetry", "Health & Wellness", "Business",
    "Cooking", "Art & Design", "Children's", "Politics", "Technology", "Travel",
    "Sports", "True Crime", "Religion & Spirituality", "Humor", "Young Adult",
  ];

  // handle book submission
  const handleBookSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imgUrl = form.imgUrl.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    const price = form.price.value || "10.99";

    // Check if all fields are filled
    if (!bookTitle || !authorName || !imgUrl || !category || !bookDescription || !bookPDFURL) {
      toast.error("All fields are required!");
      return;
    }

    // Create the book object from the form data
    const bookObj = {
      bookTitle,
      authorName,
      imgUrl,
      category,
      bookDescription,
      bookPDFURL,
      price
    };

    // Send data to the database using fetch
    fetch("http://localhost:5000/api/upload-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObj), // Send the form data directly (bookObj)
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Book uploaded successfully!");
        form.reset(); // Reset form after successful submission
      })
      .catch((err) => {
        console.error("Error uploading book:", err);
        toast.error("Error uploading book. Please try again.");
      });
  };

  return (
    <div className="px-4 my-12 max-w-4xl mx-auto">
      <h2 className="mb-8 text-3xl font-bold text-center">Upload Your Book</h2>
      {/* Form */}
      <form onSubmit={handleBookSubmit} className="w-full space-y-6">
        {/* First Row: Book Title and Author Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Book Title */}
          <div>
            <label htmlFor="bookTitle" className="block mb-2 font-semibold">
              Book Title
            </label>
            <input
              type="text"
              id="bookTitle"
              name="bookTitle"
              placeholder="Book Title"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Author Name */}
          <div>
            <label htmlFor="authorName" className="block mb-2 font-semibold">
              Author
            </label>
            <input
              type="text"
              id="authorName"
              name="authorName"
              placeholder="Author"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Second Row: Image URL and Book Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Book Image URL */}
          <div>
            <label htmlFor="imgUrl" className="block mb-2 font-semibold">
              Book Image URL
            </label>
            <input
              type="text"
              id="imgUrl"
              name="imgUrl"
              placeholder="Book Image URL"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Book Category */}
          <div>
            <label htmlFor="category" className="block mb-2 font-semibold">
              Category
            </label>
            <select
              id="category"
              name="category"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a category</option>
              {bookCategory.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Third Row: Book Description */}
        <div>
          <label htmlFor="bookDescription" className="block mb-2 font-semibold">
            Book Description
          </label>
          <textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Book Description"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="6"
            required
          ></textarea>
        </div>

        {/* Row: Book PDF URL and Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="bookPDFURL" className="block mb-2 font-semibold">
              Book PDF URL
            </label>
            <input
              type="text"
              id="bookPDFURL"
              name="bookPDFURL"
              placeholder="Book PDF URL"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="price" className="block mb-2 font-semibold">
              Price ($)
            </label>
            <input
              type="number"
              step="0.01"
              id="price"
              name="price"
              placeholder="10.99"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Upload Book Button */}
        <div>
          <button
            type="submit"
            className="w-full p-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Upload Book
          </button>
        </div>
      </form>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default UploadBook;
