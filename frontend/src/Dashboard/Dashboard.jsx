import React from "react";
import { Card, Button, Table, Tooltip } from "flowbite-react";
import { HiChartPie, HiArrowSmRight, HiShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Main Content */}
      <div className="flex-1 p-8"> {/* Increased padding to make the content larger */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8"> {/* Increased margin for heading */}
          Welcome to the Dashboard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10"> {/* Increased gap between cards */}
          {/* Card 1 */}
          <Card className="bg-blue-100 p-6 shadow-lg">
            <h5 className="text-xl font-semibold text-gray-800">Total Users</h5>
            <p className="text-5xl font-bold text-gray-900 mt-2">1,250</p> {/* Increased text size */}
            <Tooltip content="Number of users registered on the platform">
              <Button className="mt-4 w-full bg-blue-500 text-white">
                View Details
              </Button>
            </Tooltip>
          </Card>

          {/* Card 2 */}
          <Card className="bg-green-100 p-6 shadow-lg">
            <h5 className="text-xl font-semibold text-gray-800">Total Books</h5>
            <p className="text-5xl font-bold text-gray-900 mt-2">500</p> {/* Increased text size */}
            <Tooltip content="Total books uploaded to the platform">
              <Button className="mt-4 w-full bg-green-500 text-white">
                View Details
              </Button>
            </Tooltip>
          </Card>

          {/* Card 3 */}
          <Card className="bg-yellow-100 p-6 shadow-lg">
            <h5 className="text-xl font-semibold text-gray-800">Total Sales</h5>
            <p className="text-5xl font-bold text-gray-900 mt-2">$10,000</p> {/* Increased text size */}
            <Tooltip content="Total revenue generated from book sales">
              <Button className="mt-4 w-full bg-yellow-500 text-white">
                View Details
              </Button>
            </Tooltip>
          </Card>
        </div>

        <div className="mt-10"> {/* Increased margin for the table section */}
          <h3 className="text-2xl font-semibold text-gray-900 mb-6"> {/* Increased margin and text size */}
            Recent Activity
          </h3>
          <Table hoverable={true}>
            <Table.Head>
              <Table.HeadCell>Activity</Table.HeadCell>
              <Table.HeadCell>Date</Table.HeadCell>
              <Table.HeadCell>Status</Table.HeadCell>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>User registered</Table.Cell>
                <Table.Cell>Dec 20, 2024</Table.Cell>
                <Table.Cell className="text-green-500">Completed</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Book uploaded</Table.Cell>
                <Table.Cell>Dec 18, 2024</Table.Cell>
                <Table.Cell className="text-blue-500">In Progress</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Sale made</Table.Cell>
                <Table.Cell>Dec 15, 2024</Table.Cell>
                <Table.Cell className="text-yellow-500">Pending</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
