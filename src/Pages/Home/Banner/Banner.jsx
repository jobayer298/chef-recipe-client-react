import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
      <div className="banner text-center text-white flex justify-center items-center">
        <div>
          <h2 className="text-5xl font-bold text-[#D54215] ">
            no matter how you cook, <br /> Yumma has many the <br /> recipes
          </h2>
          <p className='font-medium text-[18px] text-gray-200 my-9'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className='btn text-white bg-red-500 border-0'>Explore More</button>
        </div>
      </div>
    );
};

export default Banner;