import React from "react";
import { Card, Button } from "flowbite-react";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {" "}
      {/* Padding to avoid navbar overlap */}
      <div className="max-w-screen-xl mx-auto px-4">
        <h1 className="text-4xl font-semibold text-gray-900 mb-8">
          Latest Blog Posts
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Blog Post 1 */}
          <Card className="shadow-lg bg-white">
            <h5 className="text-2xl font-semibold text-gray-800 mb-4">
              Exploring New Book Releases
            </h5>
            <p className="text-gray-600 mb-4">
              Stay updated with the latest book releases in various genres like
              fiction, non-fiction, and more. Discover new titles and expand
              your reading list!
            </p>
            <div className="flex justify-between items-center">
              <Link
                to="/blog/new-releases"
                className="text-blue-600 hover:underline"
              >
                Read More
              </Link>
              <Button color="gray" size="sm">
                <HiOutlineBookOpen className="mr-2" />
                View Article
              </Button>
            </div>
          </Card>

          {/* Blog Post 2 */}
          <Card className="shadow-lg bg-white">
            <h5 className="text-2xl font-semibold text-gray-800 mb-4">
              How to Manage Your Book Inventory
            </h5>
            <p className="text-gray-600 mb-4">
              Learn the best practices for managing a book inventory, whether
              you're running a bookstore or organizing your personal collection.
              Tips and tools to keep it efficient!
            </p>
            <div className="flex justify-between items-center">
              <Link
                to="/blog/manage-inventory"
                className="text-blue-600 hover:underline"
              >
                Read More
              </Link>
              <Button color="gray" size="sm">
                <HiOutlineBookOpen className="mr-2" />
                View Article
              </Button>
            </div>
          </Card>

          {/* Blog Post 3 */}
          <Card className="shadow-lg bg-white">
            <h5 className="text-2xl font-semibold text-gray-800 mb-4">
              Book Recommendations for 2024
            </h5>
            <p className="text-gray-600 mb-4">
              Explore our curated list of must-read books for 2024! Whether
              you're into thrillers, self-help, or historical fiction, there's
              something for everyone.
            </p>
            <div className="flex justify-between items-center">
              <Link
                to="/blog/book-recs-2024"
                className="text-blue-600 hover:underline"
              >
                Read More
              </Link>
              <Button color="gray" size="sm">
                <HiOutlineBookOpen className="mr-2" />
                View Article
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;
