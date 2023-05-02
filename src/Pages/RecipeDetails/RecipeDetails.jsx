import React from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';

const RecipeDetails = () => {
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
    } = details;
    const handleNavigate = () =>{
        navigate(-1)
    }
    console.log(details);
    return (
      <div className="my-container my-12">
        <div className="card card-side bg-base-100 shadow-xl grid grid-cols-2">
          <figure>
            <img className="h-[450px]" src={chef_photo} />
          </figure>
          <div className="p-8">
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