import React, { useEffect } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Home = () => {
  axios.defaults.withCredentials = true;
  // const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3001/home")
      .then((result) => {
        console.log(result);
        if (result.data !== "Success") {
          // navigate("/signin");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: "4rem" }}>this is home page</h1>
    </div>
  );
};

export default Home;
