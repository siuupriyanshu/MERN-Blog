// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-e239c.firebaseapp.com",
  projectId: "mern-blog-e239c",
  storageBucket: "mern-blog-e239c.appspot.com",
  messagingSenderId: "233911262391",
  appId: "1:233911262391:web:040b16c7445ec3cdf94132"
};

// Initialize Firebase
  export const app = initializeApp(firebaseConfig);