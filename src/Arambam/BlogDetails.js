import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Home.css";
import RecentByCategory from "./RecentByCategory";
import Categories from "./Categories";
import Aos from "aos";
import 'aos/dist/aos.css'

const BlogDetails = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get(`https://arambam-server.onrender.com/blogs/${id}`)
      .then((res) => setBlogs(res.data));
  });

  useEffect (()=>{
    Aos.init( {duration:1000});


  },[])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section>
        <div className="main-background">
          <div className="background-content">
            <div>
              <h1>Blogs</h1>
              <span>Home / Blog / BlogDetails</span>
            </div>
          </div>
        </div>
      </section>
      <section className="container p-5">
        <div className="row">
          <div className="col-lg-8" style={{ paddingRight: "20px" }}>
            <div>
            <img
              src={blogs.image}
             style={{
          width: "100%",
          height: "80vh",
          objectFit: "cover",
          borderRadius: "5px"
        }}
             
              alt="error"
            />
            <div className="d-flex justify-content-between" data-aos="fade-up">
              <p>
                <i className="bi bi-calendar" style={{ color: "darkblue" }}></i>{" "}
                {blogs.date}
              </p>
              <span>
                <i className="bi bi-book"></i> {blogs.readingtime}
              </span>

              <span>
                <i className="bi bi-star-fill" style={{ color: "goldenrod" }}></i>
                {blogs.rating}
              </span>
            </div>
            <div
              className="mt-3  text-uppercase fw-bolder"
              style={{ fontSize: "27px", color: "olive" }}
              data-aos="fade-up"
            >
              {blogs.title}
            </div>
            <div className="mt-3" style={{ fontSize: "17px" }} data-aos="fade-up">
              {blogs.content}
            </div>
            <div className="d-lg-flex justify-content-around m-3" >
              <div className="fw-bold" style={{ color: "black" }} data-aos="fade-up">
                <span className="fs-5 me-2" style={{ color: "green" }} >
                  Category :
                </span>
                {blogs.category}
              </div>

              <div className="fw-bold" style={{ color: "black" }} data-aos="fade-up">
                <span className="fs-5 me-2" style={{ color: "green" }}>
                  Tags :
                </span>
                {blogs.tags}
              </div>
            </div>
            <div
              className="my-3"
              style={{ textAlign: "justify", lineHeight: "30px" }} data-aos="fade-up"
            >
              Welcome to Arambam – a fresh beginning for curious minds. From
              travel tales and tech trends to food, wellness, and lifestyle
              tips, Arambam brings stories that inspire, inform, and ignite
              ideas. Whether you’re here to explore or express, Arambam is your
              space to start something meaningful. Dive in today!
            </div>
            <div
              className="my-3"
              style={{ textAlign: "justify", lineHeight: "30px" }} data-aos="fade-up"
            >
              {blogs.shortdes}
            </div>
            <div
              className="my-3 p-2"
              style={{
                textAlign: "center",
                textTransform: "capitalize",
                color: "black",
                backgroundColor: "#96f598",
              }} data-aos="fade-up"
            >
              {blogs.quote}
            </div>
            <div
              className="my-3"
              style={{ textAlign: "justify", lineHeight: "30px" }} data-aos="fade-up"
            >
              {blogs.longdes1}
            </div>
            <div
              className="my-3"
              style={{ textAlign: "justify", lineHeight: "30px" }} data-aos="fade-up"
            >
              {blogs.longdes2}
            </div>
          </div>
          </div>
          <div className="col-lg-4 mt-5" style={{ paddingLeft: "20px" }}>
            <h6
              className="text-center mb-4 fs-2 fw-bold text-uppercase "
              style={{ color: "#2E7D32", fontFamily: "Savate" }}
            >
              About Me
            </h6>
            <img
              src={blogs.image1}
              className="card-img-top rounded-circle mx-auto"
              style={{ width: "120px", height: "120px", objectFit: "cover" }}
              alt="error"
            />
            <p className="text-center ">
              {blogs.author}, Authors turn blank pages into adventures, emotions
              into prose, and silence into voices heard for years to come.
            </p>

            <h6 className="mt-4">Follow Us : </h6>
            <div className="d-flex justify-content-center social-icons">
              <i className="bi bi-facebook me-3"></i>

              <i className="bi bi-twitter me-3"></i>

              <i className="bi bi-instagram me-3"></i>

              <i className="bi bi-google me-3"></i>

              <i className="bi bi-pinterest me-3"></i>

              <i className="bi bi-youtube"></i>
            </div>

            <h6
              className="text-center mt-4  fs-4 fw-bold text-uppercase "
              style={{ color: "#2E7D32" }}
            >
              Newsletter
            </h6>
            <form className="mx-5">
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email address..."
              />
              <button type="submit" className="btn btn-success">
                Subscribe
              </button>
            </form>

           
            
             <Categories />
             <RecentByCategory />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
