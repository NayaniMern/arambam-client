import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const RecentByCategory = ({ limit = 5 }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    fetch(`https://arambam-server.onrender.com/blogs?_limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [limit]);
  

  if (loading) {
    return (
      <aside className="mt-3" style={{ padding: "16px", background: "#f4f4f4" }}>
        <p>Loading recent posts...</p>
      </aside>
    );
  }

  return (
    <aside className="mt-3" style={{ padding: "16px", background: "#f4f4f4" }}>
      <h4
        className="text-center mb-4 fs-2 fw-bold text-uppercase"
        style={{ color: "#2E7D32", fontFamily: "Savate" }}
      >
        Recent Posts
      </h4>
      {blogs.map((blog, index) => (
        <div key={index}>
          <div className="d-flex mb-3">
            <img
              src={blog.image}
              className="w-25"
              style={{ height: "80px", objectFit: "cover" }}
              alt="blog"
            />
            <NavLink
              to={`/blogdetails/${blog._id}`}
              style={{ textDecoration: "none", color: "#333", marginLeft: "10px" }}
              className="d-flex align-items-center"
            >
              <p className="m-0">{blog.title}</p>
            </NavLink>
          </div>
        </div>
      ))}
    </aside>
  );
};

export default RecentByCategory;
