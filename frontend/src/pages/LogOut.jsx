import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; // For navigating after logout
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify"; // Optional: for showing logout message

const Logout = () => {
  const { logout } = useContext(AuthContext); // Accessing logout from AuthContext
  const navigate = useNavigate(); // Hook to navigate to a different route after logout

  const handleLogout = () => {
    logout() // Call logout method from context
      .then(() => {
        toast.success("Logout successful!"); // Show success message
        navigate("/"); // Redirect user to the home page
      })
      .catch((error) => {
        toast.error("Logout failed: " + error.message); // Show error message in case of failure
      });
  };

  return (
    <div className="h-screen bg-teal-100 flex items-center justify-center">
      <button
        className="bg-red-700 px-4 py-2 text-white rounded"
        onClick={handleLogout}
      >
        Log Out
      </button>
    </div>
  );
};

export default Logout;
