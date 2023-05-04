import React from "react";
import Lottie from "lottie-react";
import bye from '../../../assets/bye.json'

const GetInTouch = () => {
  return (
    <div className=" py-12 mx-auto bg-gray-100">
      <h2 className="font-medium text-6xl mb-8 my-container">Get IN Touch</h2>
      <div className="md:flex justify-between items-center my-container ">
        <div data-aos="zoom-in" className="md:w-1/2">
          <div className="form-group mb-6">
            <input
              type="text"
              className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput7"
              placeholder="Name"
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="email"
              className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="Email address"
            />
          </div>
          <div className="form-group mb-6">
            <textarea
              className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
              id="exampleFormControlTextarea13"
              rows="3"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="form-group form-check text-center mb-6"></div>
          <button
            className="
              w-full
              px-6
              py-4
              btn btn-primary
              font-medium"
          >
            Send
          </button>
        </div>
        <div data-aos="flip-right">
          <Lottie animationData={bye} loop={true}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
