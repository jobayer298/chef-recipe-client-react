import React, { useState } from "react";
import "./Chef.css";
import { Link } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";
 import { toast } from "react-toastify";
 import { LazyLoadImage } from "react-lazy-load-image-component";
 import "react-lazy-load-image-component/src/effects/blur.css";

const Chef = ({ c }) => {
  const [buttonDisable, setButtonDisable] = useState(false);
  const handleDisable = () => {
    setButtonDisable(true);
    toast("🦄 Added To Favorite!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const {
    id,
    chef_name,
    chef_photo,
    years_of_experience,
    number_of_recipes,
    likes,
  } = c;
  return (
    <div className="card chef-card  shadow-2xl my-2 p-4">
      <figure>
        <LazyLoadImage
          className="h-[200px] w-[200px] rounded-full"
          effect="blur"
          src={chef_photo}
          alt="chef"
          placeholderSrc="/5223909.png"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className=" font-bold text-3xl text-white text-center">
          {chef_name}
        </h2>
        <div className="text-white m-0 p-0">
          <p>Experience: {years_of_experience} years </p>
          <p>Total Recipe: {number_of_recipes}</p>
          <div className="flex">
            <p></p>
            <p className="flex gap-2">
              <FaThumbsUp></FaThumbsUp>
              {likes}
            </p>
          </div>
        </div>
        <div className="card-actions justify-center">
          <button
            disabled={buttonDisable}
            onClick={handleDisable}
            className="btn btn-wide border-0  text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          >
            Add To Favorite
          </button>
          <Link to={`/details/${id}`}>
            <button className="btn btn-primary btn-wide border-0  text-white bg-red-500">
              View Recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chef;
