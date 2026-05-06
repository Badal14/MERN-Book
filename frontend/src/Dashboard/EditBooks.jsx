import React from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditBooks = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Add this hook
  const { bookTitle, authorName, imgUrl, category, bookDescription, bookPDFURL, price } = useLoaderData();

  const bookCategory = [
    "Fiction", "Non-Fiction", "Self-Help", "Biography", "Science", "Fantasy",
    "Romance", "Thriller", "Mystery", "Historical", "Horror", "Adventure",
    "Psychology", "Philosophy", "Poetry", "Health & Wellness", "Business",
    "Cooking", "Art & Design", "Children's", "Politics", "Technology", "Travel",
    "Sports", "True Crime", "Religion & Spirituality", "Humor", "Young Adult",
  ];

  const handleBookSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imgUrl = form.imgUrl.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    const price = form.price.value;

    if (!bookTitle || !authorName || !imgUrl || !category || !bookDescription || !bookPDFURL) {
      toast.error("All fields are required!");
      return;
    }

    const bookObj = {
      bookTitle,
      authorName,
      imgUrl,
      category,
      bookDescription,
      bookPDFURL,
      price
    };

    fetch(`http://localhost:5000/api/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Book updated successfully!");
        setTimeout(() => {
          navigate("/admin/dashboard/manage"); // Redirect to the manageBooks page
        }, 1500); // Add a slight delay for the toast message
      })
      .catch((err) => {
        console.error("Error updating book:", err);
        toast.error("Error updating book. Please try again.");
      });
  };

  return (
    <div className="px-4 my-12 max-w-4xl mx-auto">
      <h2 className="mb-8 text-3xl font-bold text-center">Update Book Information</h2>
      <form onSubmit={handleBookSubmit} className="w-full space-y-6">
        {/* Book Title and Author */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="bookTitle" className="block mb-2 font-semibold">
              Book Title
            </label>
            <input
              type="text"
              id="bookTitle"
              name="bookTitle"
              defaultValue={bookTitle}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="authorName" className="block mb-2 font-semibold">
              Author
            </label>
            <input
              type="text"
              id="authorName"
              name="authorName"
              defaultValue={authorName}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Image URL and Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="imgUrl" className="block mb-2 font-semibold">
              Book Image URL
            </label>
            <input
              type="text"
              id="imgUrl"
              name="imgUrl"
              defaultValue={imgUrl}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="category" className="block mb-2 font-semibold">
              Category
            </label>
            <select
              id="category"
              name="category"
              defaultValue={category}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a category</option>
              {bookCategory.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="bookDescription" className="block mb-2 font-semibold">
            Book Description
          </label>
          <textarea
            id="bookDescription"
            name="bookDescription"
            defaultValue={bookDescription}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="6"
            required
          ></textarea>
        </div>

        {/* PDF URL and Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="bookPDFURL" className="block mb-2 font-semibold">
              Book PDF URL
            </label>
            <input
              type="text"
              id="bookPDFURL"
              name="bookPDFURL"
              defaultValue={bookPDFURL}
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
              defaultValue={price}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full p-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Update Book
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default EditBooks;