import React, { useContext, useEffect, useState } from "react";
import "./Admin.css";
import { useNavigate } from "react-router-dom";
import { loginStatus } from "../../App";
import axios from "axios";

const Login = () => {
  const [details, setDetails] = useState({});
  const navigate = useNavigate()
  const[token,setToken] = useContext(loginStatus)
  const changeData = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(details);
 

    axios
      .post(`https://arambam-server.onrender.com/login`, details)

      .then((res) => {
        console.log(res.data);
        setToken(res.data.token);
      })
      .catch((err) =>console.log(err))
  }
useEffect(() => {
  if (token) {
    navigate("/dashboard");
  }
}, [token, navigate]);
    

  return (
    <section className="admin-container">
 <div className="container p-5">
      <div className="row adminlog">
        <div className="col-lg-6 p-5 mx-auto ">
          <h3 className="text-center mb-4 fs-2 fw-bold text-uppercase " style={{color:"#2E7D32"}}>
            Admin Login
          </h3>

          <form onSubmit={submitHandler}>
            <div className="form-floating">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email Addreess"
                className="  mt-4 form-control"
                onChange={changeData}
              />
              <label>Enter Your Email Addreess</label>
            </div>

            <div className="form-floating">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="mt-3  mb-4 form-control"
                onChange={changeData}
              />
              <label>Password</label>
            </div>
            <button type="submit" className="form-control " >Submit</button>
          </form>
        </div>
      </div>
    </div>
    </section>
   
  );
};

export default Login;
