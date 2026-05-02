import React, { useState, useEffect } from "react";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import styles for react-toastify

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  // Fetch all books on component mount
  useEffect(() => {
    fetch("http://localhost:5000/api/all-books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data))
      .catch(() => toast.error("Failed to fetch books."));
  }, []);

  // Delete a single book
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/book/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete the book.");
        }
        return res.json();
      })
      .then(() => {
        setAllBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
        toast.error("Book deleted successfully!");
      })
      .catch(() => toast.error("Failed to delete the book."));
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>
      <div className="overflow-x-auto">
        <Table className="lg:w-[1180px]">
          <Table.Head>
            <Table.HeadCell>No.</Table.HeadCell>
            <Table.HeadCell>Book Name</Table.HeadCell>
            <Table.HeadCell>Author</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>
              <span>Actions</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {allBooks.length > 0 ? (
              allBooks.map((book, index) => (
                <Table.Row
                  key={book._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="font-medium text-gray-900 dark:text-white">
                    {index + 1}
                  </Table.Cell>
                  <Table.Cell className="font-medium text-gray-900 dark:text-white">
                    {book.bookTitle}
                  </Table.Cell>
                  <Table.Cell>{book.authorName}</Table.Cell>
                  <Table.Cell>{book.category}</Table.Cell>
                  <Table.Cell>$10.99</Table.Cell>
                  <Table.Cell>
                    <Link
                      to={`/admin/dashboard/edit/${book._id}`}
                      className="font-medium mr-5 text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(book._id)}
                      className="bg-red-600 px-4 py-1 text-white rounded-sm hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </Table.Cell>
                </Table.Row>
              ))
            ) : (
              <Table.Row>
                <Table.Cell colSpan="6" className="text-center py-4">
                  No books found.
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default ManageBooks;
