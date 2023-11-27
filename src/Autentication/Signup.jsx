import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const handleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signup(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => console.log(err));
    console.log(email, password);
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <h2 className="text-2xl text-center">Sign Up</h2>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignup} className="card-body">
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
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Signup"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
