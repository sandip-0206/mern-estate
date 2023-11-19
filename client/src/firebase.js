// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3d30a.firebaseapp.com",
  projectId: "mern-estate-3d30a",
  storageBucket: "mern-estate-3d30a.appspot.com",
  messagingSenderId: "1096759270876",
  appId: "1:1096759270876:web:5ed71c348df1bc15fdc319",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
