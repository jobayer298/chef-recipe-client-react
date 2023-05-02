import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import github from '../../assets/github.png'
import google from '../../assets/google-signin-button.png'
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const {user} = useContext(AuthContext)
    
    return (
      <div className="py-8">
        <div className="hero   my-container">
          <div className="w-[480px] flex-col ">
            <h1 className="text-5xl mb-4 font-bold">Login now!</h1>
              <button className='mb-0'>
                <img className="w-[360px] h-[60px]" src={google} alt="" />
              </button>
              <button className='m-0 p-0'>
                <img className="w-[360px] " src={github} alt="" />
              </button>

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
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
                    New to this site?
                    <Link className="underline" to="/register">
                      Register
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;