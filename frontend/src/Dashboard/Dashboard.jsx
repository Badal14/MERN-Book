import React, { useState, useEffect } from "react";
import { HiBookOpen, HiUsers, HiCurrencyDollar, HiClock } from "react-icons/hi";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/all-books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  const totalBooks = books.length;
  // Mock calculations for demo purposes to make it look alive
  const totalUsers = 1250 + (totalBooks * 3);
  const totalSales = (totalBooks * 29.99 * 5).toLocaleString("en-US", { style: "currency", currency: "USD" });
  
  // Sort books (simulate newest first by reversing array)
  const recentBooks = [...books].reverse().slice(0, 5);

  if (loading) {
    return (
      <div className="flex-1 p-8 flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Dashboard Overview
        </h2>
        <Link to="/admin/dashboard/upload">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-0.5">
            + New Book
          </button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Card 1: Users */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Total Users</p>
            <h3 className="text-4xl font-black text-gray-900 dark:text-white">{totalUsers.toLocaleString()}</h3>
          </div>
          <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
            <HiUsers className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
        </div>

        {/* Card 2: Books */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Total Books</p>
            <h3 className="text-4xl font-black text-gray-900 dark:text-white">{totalBooks}</h3>
          </div>
          <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
            <HiBookOpen className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
        </div>

        {/* Card 3: Sales */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Total Revenue</p>
            <h3 className="text-4xl font-black text-gray-900 dark:text-white">{totalSales}</h3>
          </div>
          <div className="w-16 h-16 rounded-full bg-yellow-100 dark:bg-yellow-900/50 flex items-center justify-center">
            <HiCurrencyDollar className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-800/50">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <HiClock className="w-6 h-6 text-indigo-500" />
            Recently Uploaded Books
          </h3>
          <Link to="/admin/dashboard/manage" className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">
            View All →
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider">
                <th className="py-4 px-6 font-semibold">Book Title</th>
                <th className="py-4 px-6 font-semibold hidden md:table-cell">Author</th>
                <th className="py-4 px-6 font-semibold">Category</th>
                <th className="py-4 px-6 font-semibold text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {recentBooks.length > 0 ? (
                recentBooks.map((book) => (
                  <tr key={book._id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        <img src={book.imgUrl} alt={book.bookTitle} className="w-12 h-16 object-cover rounded shadow-sm" />
                        <span className="font-bold text-gray-900 dark:text-white">{book.bookTitle}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-300 font-medium hidden md:table-cell">{book.authorName}</td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
                        {book.category || "General"}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <span className="text-green-600 dark:text-green-400 font-bold flex items-center justify-end gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span> Active
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-12 text-center text-gray-500 dark:text-gray-400 text-lg">
                    No books found. Click "+ New Book" to upload one!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
