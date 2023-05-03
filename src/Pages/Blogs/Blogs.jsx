import React from "react";
import { FaDownload } from "react-icons/fa";
import ReactToPdf from "react-to-pdf";
const Blogs = () => {
  const ref = React.createRef();
  return (
    <div className="my-container">
      <ReactToPdf targetRef={ref} filename="Blogs.pdf">
        {({ toPdf }) => (
          <button
            onClick={toPdf}
            className="text-2xl text-white bg-indigo-500 h-[40px] w-[40px] rounded-full grid place-items-center b mt-3"
          >
            <FaDownload></FaDownload>
          </button>
        )}
      </ReactToPdf>
      <div
        style={{ width: "100%", height: "100%", padding: "30px" }}
        ref={ref}
        className="mt-2"
      >
        <div className="mt-4">
          <h3 className="font-bold text-2xl text-indigo-500">
            1. Tell us the differences between uncontrolled and controlled
            components.
          </h3>
          <p>
            ans: <strong>controlled component</strong>, the form element's data
            is handled by the React component (not DOM) and kept in the
            component's state.
            <strong>uncontrolled component</strong>, where form data is handled
            by the DOM itsel
          </p>
        </div>

        <div className="mt-4">
          <h3 className="font-bold text-2xl text-indigo-500">
            2. How to validate React props using PropTypes
          </h3>
          <p>
            ans: Below are the validators for the basic data types:
            <li>PropTypes.any: The prop can be of any data type</li>
            <li>PropTypes.number: The prop should be a number</li>
            <li>PropTypes.string: The prop should be a string</li>
            <li>PropTypes.func: The prop should be a function</li>
            <li>PropTypes.array: The prop should be an array</li>
            <li>PropTypes.object: The prop should be an object</li>
            <li>PropTypes.symbol: The prop should be a symbol</li>{" "}
          </p>
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-2xl text-indigo-500">
            3. Tell us the difference between nodejs and express js.
          </h3>
          <p>
            ans: Node. js is detailed as "A platform built on Chrome's
            JavaScript runtime for easily building fast, scalable network
            applications.Express is a  node. js web
            application framework
          </p>
        </div>
        <div className="my-4">
          <h3 className="font-bold text-2xl text-indigo-500">
            4. What is a custom hook, and why will you create a custom hook?
          </h3>
          <p>ans: Custom hooks are some reusable function . It reduces the code and make cleaner. We use it cause we don't want to repeat same code in different file.</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
