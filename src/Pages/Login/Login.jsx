import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import github from "../../assets/github.png";
import google from "../../assets/google-signin-button.png";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { updateProfile, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";


const auth = getAuth(app)
const Login = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/";
  const { login, googleSignIn, githubSignIn } =
    useContext(AuthContext);
  const handleSubmit = (event) => {
    setError("");
    setSuccess("");
    event.preventDefault();
    const form = event.target;
    const password = form.password.value;
    const email = form.email.value;
    login(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast("Login Successful");
        setSuccess("Login Successful");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
    console.log( password, email);
  };

  const handleGoogleLogin = () =>{
    setError("");
    setSuccess("");
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast("Login Successful");
        setSuccess("Login Successful");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  }
  const handleGithubLogin = () =>{
    setError("");
    setSuccess("");
    githubSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast("Login Successful");
        setSuccess("Login Successful");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  }

  return (
    <div className="py-8">
      <form onSubmit={handleSubmit} className="hero   my-container">
        <div className="w-[480px] flex-col ">
          <h1 className="text-5xl mb-4 font-bold">Login now!</h1>
          {/* <button onClick={handleGoogleLogin} className="mb-0">
            <img className="w-[360px] h-[60px]" src={google} alt="" />
          </button>
          <button onClick={handleGithubLogin} className="m-0 p-0">
            <img className="w-[360px] " src={github} alt="" />
          </button> */}

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <div>
                  <p className="text-red-600">{error}</p>
                  <p className="text-green-600">{success}</p>
                </div>
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
                  New to this site?
                  <Link className="underline" to="/register">
                    Register
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div>
                <button onClick={handleGoogleLogin} className="mb-0">
                  <img className="w-[360px] h-[60px]" src={google} alt="" />
                </button>
                <button onClick={handleGithubLogin} className="m-0 p-0">
                  <img className="w-[360px] " src={github} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
