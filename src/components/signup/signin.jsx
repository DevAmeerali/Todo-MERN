import "./signup.css";
import HeadingComp from "./HeadingComp";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signin = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [Inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!Inputs.email || !Inputs.password) {
      alert("All fields are required!");
      return;
    }
    try {
      const response = await axios.post("http://localhost:1000/api/v1/signin", Inputs);

      // Store token in localStorage
      localStorage.setItem("token", response.data.token);
      setIsLoggedIn(true); // Update login state
      alert(response.data.message);
      setInputs({ email: "", password: "" });
      navigate("/todo");
    } catch (error) {
      console.error("Signin Error:", error);
      if (error.response) {
        alert(error.response.data.message || "Signin failed. Please try again.");
      } else {
        alert("Network error. Please try again later.");
      }
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 column d-flex justify-content-center align-items-center">
            <HeadingComp first="Sign" second="In" />
          </div>
          <div className="col-lg-8 column d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column w-100 p-5">
              <input
                className="p-2 my-3 input-signup"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={Inputs.email}
                onChange={change}
              />
              <input
                className="p-2 my-3 input-signup"
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={Inputs.password}
                onChange={change}
              />
              <button className="btn-signup p-2" onClick={submit}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
