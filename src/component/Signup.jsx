import React, { useState } from "react";
import validator from "validator";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [message, setMessage] = useState("");
  const [checkbox, setCheckbox] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const validateEmail = (e) => {
    const email = e.target.value;
    setEmail(e.target.value);
    if (email) setMessage("");

    if (validator.isEmail(email)) {
      setMessage("true");
    } else {
      setMessage(false);
    }
  };
  const handlecheckbox = () => {
    setCheckbox(!checkbox);
  };
  const submitData = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
            sign up
          </h1>
          <form className="mt-6" onSubmit={submitData}>
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-800"
              >
                Name
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
                onChange={(e) => validateEmail(e)}
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

            <div className="flex items-center mt-7 mb-7">
              <input
                id="link-checkbox"
                type="checkbox"
                checked={checkbox}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={handlecheckbox}
              />
              <label
                htmlFor="link-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the terms and conditions .
              </label>
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
            Do have an account?
            <Link
              to="/signin"
              className="font-medium text-purple-600 hover:underline"
            >
              Signin
            </Link>
          </p>
        </div>
      </div>

      <p className=" items-center">{message}</p>
    </div>
  );
};

export default Signup;
