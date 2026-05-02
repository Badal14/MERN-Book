// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcyOuBKVJALRQKLwjwJLQG7-vZWUGJj38",
  authDomain: "mern-book-inventory-a1c41.firebaseapp.com",
  projectId: "mern-book-inventory-a1c41",
  storageBucket: "mern-book-inventory-a1c41.firebasestorage.app",
  messagingSenderId: "52460502359",
  appId: "1:52460502359:web:cb30fbdc9a584a7af01212"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app