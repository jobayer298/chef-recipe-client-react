import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app)

const Register = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const { createUser, logout , user} = useContext(AuthContext);
  const handleSubmit = (event) => {
    setError("");
    setSuccess("");
    event.preventDefault();
    const form = event.target;
    const displayName = form.displayName.value;
    const password = form.password.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    if (password.length < 6) {
      setError("Password must be greater than 6 character");
      return
    }
    createUser(email, password)
    .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser);
        toast("Registration Successful");
        setSuccess("Registration Successful")
        logout()
        navigate("/login")
    })
    .catch(err =>{
        console.log(err);
        setError(err.message);
    })
    console.log( password, email);

    updateProfile(auth.user, {
      displayName: displayName,
      photoURL: photoURL,
    })
      .then((result) => {
        
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="py-8">
      <form onSubmit={handleSubmit} className="hero my-container">
        <div className="w-[480px]  flex-col ">
          <h1 className="text-5xl mb-5 font-bold  ">Login Register</h1>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <div>
                  <p className="text-red-600">{error}</p>
                  <p className="text-green-600">{success}</p>
                </div>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="displayName"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  Already have an account?
                  <Link className="underline" to="/login">
                    Login
                  </Link>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
