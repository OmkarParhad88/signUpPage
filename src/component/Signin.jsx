import React, { useState } from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const submitData = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signin", { email, password })
      .then((result) => {
        console.log(result.data);
        setMessage(result.data);

        if (result.data === "Login Success") {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };
  const validateEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
    if (email === "") setMessage();

    if (validator.isEmail(email)) {
      setMessage("");
    } else {
      setMessage("enter the valid email id");
    }
  };
  return (
    <div>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
            Sign in
          </h1>
          <form className="mt-6" onSubmit={submitData}>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={validateEmail}
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Login
              </button>
            </div>
          </form>
          <p className="mt-8 text-xs font-light text-center text-gray-700">
            Don't have an account?
            <Link
              to="/"
              className="font-medium text-purple-600 hover:underline"
            >
              Signup
            </Link>
          </p>
          <p className=" mt-8 text-center text-red-700">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
