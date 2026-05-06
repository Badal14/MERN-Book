import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";
import Blog from "../pages/Blog";
import SingleBook from "../pages/SingleBook";
import Cart from "../pages/Cart";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Dashboard from "../Dashboard/Dashboard";
import UploadBook from "../Dashboard/UploadBook";
import ManageBooks from "../Dashboard/ManageBooks";
import EditBooks from "../Dashboard/EditBooks";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import LogOut from "../pages/LogOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: ({ params }) => fetch(`http://localhost:5000/api/book/${params.id}`),
      },
      { path: "/cart", element: <Cart /> },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/dashboard/upload",
        element: <PrivateRoute><UploadBook /></PrivateRoute>,
      },
      {
        path: "/admin/dashboard/manage",
        element: <PrivateRoute><ManageBooks /></PrivateRoute>,
      },
      {
        path: "/admin/dashboard/edit/:id",
        element: <PrivateRoute><EditBooks /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/api/book/${params.id}`),
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path:"/logout",
    element:<LogOut/>
  }
]);

export default router;
