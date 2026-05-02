import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signOut,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Google sign-in provider
  const googleProvider = new GoogleAuthProvider();

  // Handle Google sign-in
  const handleGoogleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider); // Firebase function to sign in with Google
  };

  // Logout function
  const logout = () => {
    setLoading(true);
    return signOut(auth) // Firebase function to log out
      .catch((error) => {
        console.error("Error during sign-out:", error.message);
      });
  };

  useEffect(() => {
    // Listen to authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set the current user
      setLoading(false); // Set loading to false when state changes
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  // Return the context with necessary values
  const authInfo = {
    user,
    createUser,
    loading,
    handleGoogleSignIn,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
