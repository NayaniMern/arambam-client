import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlog, setFilteredBlog] = useState([]);
  const [filters, setFilters] = useState({
    category: [],
    author: [],
  });

  useEffect (()=>{
    Aos.init( {duration:1000});


  },[])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    axios
      .get("https://arambam-server.onrender.com/blogs")
      .then((res) => {
        setBlogs(res.data);
        setFilteredBlog(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const getUnique = (key) => {
    const values = blogs.map((item) => item[key]);
    const uniqueValues = [...new Set(values)];
    return uniqueValues.filter(Boolean);
  };

  const category = getUnique("category");
  const author = getUnique("author");

  // Apply filters
  useEffect(() => {
    const filtered = blogs.filter((item) => {
      const matchCategory =
        filters.category.length === 0 ||
        filters.category.includes(item.category);
      const matchAuthor =
        filters.author.length === 0 || filters.author.includes(item.author);
      return matchCategory && matchAuthor;
    });
    setFilteredBlog(filtered);
  }, [filters, blogs]);

  // Handle checkbox changes
  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    let updatedValues = filters[name];

    if (checked) {
      updatedValues = [...updatedValues, value];
    } else {
      updatedValues = updatedValues.filter((item) => item !== value);
    }

    setFilters({
      ...filters,
      [name]: updatedValues,
    });
  };

  return (
    <>
      <section>
        <div className="main-background">
          <div className="background-content">
            <div>
              <h1>Blogs</h1>
              <span><NavLink style={{textDecoration:"none",  color: "inherit"}} to ="/">Home</NavLink> / Blogs</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container blogs-container">
        <button
          className="btn btn-primary mt-5  "
          
          data-bs-target="#update"
          data-bs-toggle="modal"
        >
          <i className="bi bi-funnel"></i> Filter
        </button>
        <div className="modal fade" id="update" data-bs-backdrop="static">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="text-center mb-2 fs-3 fw-bold text-uppercase "
                  style={{ color: "#2E7D32" }}
                >
                 Filter
                </h5>
                <button data-bs-dismiss="modal" className="btn-close"></button>
              </div>

              <div className="modal-body">
                <div className="accordion-body mt-3">
                  <div className="filter-group">
                    <h5 style={{color:"brown"}}>Filter by Category :</h5>
                    {category.map((cat) => (
                      <div key={cat} >
                        <input
                          type="checkbox"
                          name="category"

                          value={cat}
                          onChange={handleCheckboxChange}
                          checked={filters.category.includes(cat)}
                        />
                        <label className="ms-2" >{cat}</label>
                      </div>
                    ))}

                    <h5 style={{color:"brown"}} className="mt-3">Filter by Author : </h5>
                    {author.map((auth) => (
                      <div key={auth}>
                        <input
                          type="checkbox"
                          name="author"
                          value={auth}
                          onChange={handleCheckboxChange}
                          checked={filters.author.includes(auth)}
                        />
                        <label className="ms-2">{auth}</label>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3">
                    <button
                      onClick={() => setFilters({ category: [], author: [] })}
                    >
                      Clear All Filters
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-5 overflow-hidden">
          {filteredBlog.map((blog, index) => (
            <div
              key={index}
              className="service-data col-md-6 col-lg-3 col-xl-4 mb-3"
              data-aos="fade-up-left"
            >
              <div className="card bg-transparent w-100 h-100 shadow">
                <img
                  src={blog.image}
                  className="container p-2 w-100 h-100"
                  alt="error"
                />

                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="fw-bolder">
                      <i className="bi bi-calendar"></i> {blog.date}
                    </p>
                    <span
                      className="fw-bolder"
                      style={{ color: "goldenrod", fontSize: "17px" }}
                    >
                      {blog.category}
                    </span>
                    <span className="fw-bolder">
                      <i className="bi bi-person-fill"></i> {blog.author}
                    </span>
                  </div>

                  <h3
                    className="text-center mb-4 fw-bold text-captalize"
                    style={{ color: "#2E7D32", fontSize: "21px" }}
                  >
                    {blog.title}
                  </h3>

                  <p className="mb-3" style={{ fontSize: "16px" }}>
                    {blog.content}
                  </p>
                  <NavLink to={`/blogDetails/${blog._id}`}>
                    <button>Read More</button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blogs;
