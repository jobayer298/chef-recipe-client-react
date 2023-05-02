import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Blogs from '../Pages/Blogs/Blogs';
import RecipeDetails from '../Pages/RecipeDetails/RecipeDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/details/:id",
        element: <RecipeDetails></RecipeDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`),
      },
    ],
  },
]);

export default router