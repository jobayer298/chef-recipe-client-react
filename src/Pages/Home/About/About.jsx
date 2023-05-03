import React from 'react';
import img from  '../../../assets/bon.jfif'
const About = () => {
    return (
      <div className="bg-[#272626] py-10">
        <div className="grid md:grid-cols-2 gap-4 my-container py-9  text-white">
          <div className="md:mt-16">
            <h2 className="font-medium text-6xl text-red-600">Bon appetit!</h2>
            <p className="my-7">
              We’re all about plants and have been committed to sustainable
              organic farmers since opening our restaurant in 2010. Our entire
              menu is organic, gluten and wheat free with no refined sugars.
              Each ingredient is of the highest quality, non-GMO and locally
              sourced when available.
            </p>
          </div>
          <div>
            <img className="rounded-lg shadow-2xl" src={img} alt="" />
          </div>
        </div>
      </div>
    );
};

export default About;