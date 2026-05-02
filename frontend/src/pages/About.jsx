import React from "react";
import { Card, Button } from "flowbite-react";
import { HiUser, HiMail } from "react-icons/hi";

const About = () => {
  return (
    <div className="p-6 pt-20">
      {" "}
      {/* Added pt-20 to give space for the navbar */}
      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our platform! We are dedicated to providing the best
          service and content for book enthusiasts, authors, and businesses.
        </p>
        <p className="text-lg text-gray-700">
          Our goal is to connect readers with quality books, make it easier for
          authors to publish, and ensure that businesses have access to the best
          content available.
        </p>
      </section>
      {/* Team Section */}
      <section className="mb-16">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gray-100 shadow-lg p-6">
            <div className="flex flex-col items-center">
              <HiUser className="text-4xl text-blue-500 mb-4" />
              <h5 className="text-xl font-semibold text-gray-800">John Doe</h5>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
          </Card>

          <Card className="bg-gray-100 shadow-lg p-6">
            <div className="flex flex-col items-center">
              <HiUser className="text-4xl text-green-500 mb-4" />
              <h5 className="text-xl font-semibold text-gray-800">
                Jane Smith
              </h5>
              <p className="text-gray-600">Lead Developer</p>
            </div>
          </Card>

          <Card className="bg-gray-100 shadow-lg p-6">
            <div className="flex flex-col items-center">
              <HiUser className="text-4xl text-yellow-500 mb-4" />
              <h5 className="text-xl font-semibold text-gray-800">
                Mark Johnson
              </h5>
              <p className="text-gray-600">Marketing Manager</p>
            </div>
          </Card>
        </div>
      </section>
      {/* Contact Section */}
      <section className="mb-16">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
          Contact Us
        </h3>
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="w-full sm:w-1/2">
            <Card className="p-6 shadow-lg">
              <h5 className="text-xl font-semibold text-gray-800 mb-4">
                Get in Touch
              </h5>
              <p className="text-gray-600 mb-4">
                Feel free to reach out to us for any inquiries or support. We
                are here to help!
              </p>
              <Button color="blue" href="mailto:support@example.com">
                <HiMail className="mr-2" />
                Email Us
              </Button>
            </Card>
          </div>
          <div className="w-full sm:w-1/2">
            <Card className="p-6 shadow-lg">
              <h5 className="text-xl font-semibold text-gray-800 mb-4">
                Visit Us
              </h5>
              <p className="text-gray-600 mb-4">
                You can visit us at our office for a more personal touch or to
                schedule a meeting.
              </p>
              <Button color="green" href="https://www.google.com/maps">
                View on Map
              </Button>
            </Card>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section>
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
          <h4 className="text-2xl font-semibold">Join Our Platform Today!</h4>
          <p className="text-lg mb-4">
            Whether you're a reader, an author, or a business, our platform has
            everything you need.
          </p>
          <Button color="light" href="/signup">
            Sign Up Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
