import React from 'react';
import errorPic from '../../assets/404.avif'
import { Link } from 'react-router-dom';
const Error = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className='text-center'>
          <img
            className="h-[250px] w-[250px] rounded-full shadow-2xl"
            src={errorPic}
            alt=""
          />
          <Link to="/">
            <button className="btn mt-5 border-0  text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Back to home
            </button>
          </Link>
        </div>
      </div>
    );
};

export default Error;