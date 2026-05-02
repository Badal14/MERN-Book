import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import googleLogo from "../assets/google-logo.svg"; // Ensure the path is correct

const Login = () => {
  const { loginUser } = useContext(AuthContext); // Assuming you have loginUser in context
  const [error, setError] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // Validate if email is registered
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Logged in successfully!");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // If email is not registered or invalid password, handle error
        toast.error("Invalid credentials. Please try again.");
        setError("Invalid credentials. Please try again.");
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // Check if the Google account is linked to a registered email
        const user = result.user;
        if (user.emailVerified) {
          toast.success("Logged in with Google successfully!");
          navigate(from, { replace: true });
        } else {
          toast.error("Google account not linked with a registered user.");
        }
      })
      .catch((error) => {
        toast.error("Error logging in with Google.");
        setError("Error logging in with Google.");
      });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login to your account
            </h1>
            <form onSubmit={handleLogin} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Log in
              </button>
            </form>
            <div className="text-center">
              <p className="text-gray-500 dark:text-gray-400">Or log in with</p>
              <button
                onClick={handleGoogleLogin}
                className="w-full mt-2 flex items-center justify-center border border-gray-300 bg-transparent text-black py-2 px-4 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
              >
                <img
                  src={googleLogo}
                  alt="Google logo"
                  className="h-5 w-5 mr-2"
                />
                Log in with Google
              </button>
            </div>

            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don't have an account?{" "}
              <Link
                to="/sign-up"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500 mx-2"
              >
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Login;
