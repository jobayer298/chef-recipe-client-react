import React, { useState } from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';
import { toast } from 'react-toastify';

const RecipeDetails = () => {
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
    const navigation = useNavigation()
    if(navigation.state === 'loading'){
        return <Spinner></Spinner>
    }
    const details = useLoaderData()
    const {
      id,
      chef_name,
      chef_photo,
      years_of_experience,
      number_of_recipes,
      likes,
      short_bio,
      recipe,
      ingredients1,
      ingredients2,
      ingredients3
    } = details;
    console.log(details);
    return (
      <div className="my-container my-12">
        <div className="card card-side bg-base-100 shadow-xl grid grid-cols-2">
          <figure>
            <img className="h-[450px]" src={chef_photo} />
          </figure>
          <div className="p-8">
            <div className="flex justify-end">
              <button
                disabled={buttonDisable}
                onClick={handleDisable}
                className="btn border-0  text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              >
                Add To Favorite
              </button>
            </div>
            <h2 className="card-title font-bold text-2xl">{chef_name}</h2>
            <p className="my-5">{short_bio}</p>
            <div className="flex items-center gap-3">
              <div className="bg-indigo-500 p-5 rounded-lg text-white h-[145px]">
                <p className="font-bold text-[18px]">Likes</p>
                <p>{likes}</p>
              </div>

              <div className="bg-indigo-500 p-5 rounded-lg text-white h-[145px] overflow-x-auto">
                <p className="font-bold text-[18px]">Recipe</p>
                {recipe.map((r, index) => (
                  <p key={index}>
                    {(index += 1)}. {r}
                  </p>
                ))}
              </div>
              <div className="bg-indigo-500 p-5 rounded-lg text-white h-[145px] ">
                <p className="font-bold text-[18px]">Years of experience</p>
                <p>{years_of_experience}+</p>
              </div>
            </div>
            <div>
              <h2 className="font-medium text-2xl my-3">Recipe made of: </h2>
              <div className="grid grid-cols-3 font-medium">
                {recipe.map((r, index) => (
                  <p className="underline" key={index}>
                    {r}
                  </p>
                ))}
              </div>
              <div className="grid grid-cols-3">
                <div className="">
                  {ingredients1.map((r, index) => (
                    <p key={index}>
                      {(index += 1)}. {r}
                    </p>
                  ))}
                </div>
                <div>
                  {ingredients2.map((r, index) => (
                    <p key={index}>
                      {(index += 1)}. {r}
                    </p>
                  ))}
                </div>
                <div>
                  {ingredients3.map((r, index) => (
                    <p key={index}>
                      {(index += 1)}. {r}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="card-actions mt-5 justify-center">
              <Link to="/">
                <button className="btn btn-primary">Back to home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default RecipeDetails;