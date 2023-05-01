// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjIcWYvxeWmkKwE6NbgQGNqLSdU5ntVKM",
  authDomain: "chef-recipe-site.firebaseapp.com",
  projectId: "chef-recipe-site",
  storageBucket: "chef-recipe-site.appspot.com",
  messagingSenderId: "758990589150",
  appId: "1:758990589150:web:da4068467095ea7167464f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;