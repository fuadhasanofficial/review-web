import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Login = () => {
  const { login, googleLogIn } = useContext(AuthContext);
  const navitgate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const handleGoogleLogin = () => {
    googleLogIn()
      .then((result) => {
        console.log(result);
        navitgate(from, { replace: true });
      })
      .then((err) => console.log(err));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password)
      .then((result) => {
        console.log(result.user);
        navitgate(from, { replace: true });
      })
      .catch((err) => console.log(err));
    console.log(email, password);
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <h2 className="text-2xl text-center">Log In</h2>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  name="password"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <label className="label">
                  <Link to="/signup" className="">
                    Sign up
                  </Link>
                </label>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handleGoogleLogin}
                  className="btn bg-yellow-400"
                >
                  Google
                </button>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
