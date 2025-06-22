import React, { useContext, useEffect, useState } from "react";
import { loginStatus } from "../../App";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [token, setToken] = useContext(loginStatus);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (token === "") {
      navigate("/admin"); 
    } else {
      axios
        .get("https://arambam-server.onrender.com/dashboard", {
          headers: {
            "x-token": token,
          },
        })
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token, navigate]);

  return (
    <div className="container-fluid">
      <div className="row dashboard">
        <aside className="col-lg-3 main">
          <h1
            className="text-center mb-4 fs-2 fw-bold text-uppercase"
            style={{ color: "#2E7D32", fontFamily: "Savate" }}
          >
            Welcome {user.name}
          </h1>
          <Link to="">
            <button>Admin Dashboard</button>
          </Link>
          <Link to="addBlogs">
            <button>Add Blogs</button>
          </Link>
          <Link to="viewBlogs">
            <button>View Blogs</button>
          </Link>
          <Link to="viewEnquiries">
            <button>View Enquiries</button>
          </Link>
           <Link to="viewArticles">
            <button>View Articles</button>
          </Link>
          <Link to="logout">
            <button onClick={() => setToken("")}>Logout</button>
          </Link>
        </aside>
        <div className="col-lg-9 overflow-x-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
