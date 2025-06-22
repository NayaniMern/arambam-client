import React, { useEffect } from "react";
import banner from "./assets/Blog-Banner-Buyatab.png";
import "./Home.css";
import one from "./assets/image1.jpg"
import two from "./assets/image2.jpg"
import three from "./assets/image3.png"
import four from "./assets/image4.png"
import image5 from "./assets/image5.jpg"
import profile1 from "./assets/f1.avif"
import profile2 from "./assets/f2.avif"
import profile3 from "./assets/f4.avif"
import profile4 from "./assets/f3.avif"
import profile5 from "./assets/f5.avif"
import { NavLink } from "react-router-dom";

import Author from "./Author";
import Counter from "./Counter";
import Testimonials from "./Testimonials";
import Aos from "aos";
import 'aos/dist/aos.css'



const Home = () => {
  useEffect (()=>{
    Aos.init( {duration:1000});


  },[])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section>
        <div className="main-banner">
          <img src={banner} className="w-100" alt="Banner" />

          <div className="banner-content">
            <div data-aos="zoom-in">
              <h3>Where Every Thought Begins</h3>
              <h1>Welcome to Arambam</h1>
              <p>
                A space for stories, ideas, knowledge, and opinions — curated by
                passionate authors.
              </p>
              <NavLink to ="/blogs">
                <button>Explore Blogs</button>
              </NavLink>
            
            </div>
          </div>
        </div>
      </section>
      <section className="container px-4 py-5">
        <h2 className="text-center mb-4 fs-2 fw-bold text-uppercase " style={{color:"#2E7D32",fontFamily:"Savate"}}>Latest from the Blog</h2>
        <div className="row overflow-hidden">
          <div className="col-lg-6 col-xl-3 mb-3" data-aos="flip-left">
           
            <div className="card h-100 blog-card">
               <img src={one} className="w-100 h-75" alt="error"/>
              <div className="card-body">
                <h5 className="card-title">5 Places You Must Visit in 2025</h5>
                <p className="card-author"><img src={profile1} style={{width:"30px", height:"30px",borderRadius:"20px", marginRight:"10px"}} alt="error"/>Ayesna R.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-3 mb-3 " data-aos="flip-right">
            <div className="card h-100 blog-card">
              <img src={two} className="w-100 h-75" alt="error"/>
              <div className="card-body">
                <h5 className="card-title">The Future of AI in Everyday Life</h5>
                <p className="card-author"><img src={profile2} style={{width:"30px", height:"30px",borderRadius:"20px", marginRight:"10px"}} alt="error"/>Daniel M.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-3 mb-3  " data-aos="flip-left">
            
            <div className="card h-100 blog-card">
              <img src={three} className="w-100 h-75" alt="error"/>
              <div className="card-body">
                <h5 className="card-title">Healthy Eating on a Budget</h5>
                <p className="card-author"><img src={profile3} style={{width:"30px", height:"30px",borderRadius:"20px", marginRight:"10px"}} alt="error"/>Akira G.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-3 mb-3 " data-aos="flip-right">
            <div className="card h-100 blog-card">
              <img src={four} className="w-100 h-75" alt="error"/>
              <div className="card-body">
                <h5 className="card-title">Finding Balance Through Mindfulness</h5>
                <p className="card-author"><img src={profile4} style={{width:"30px", height:"30px",borderRadius:"20px", marginRight:"10px"}} alt="error"/>Arun D.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     <section className="container px-5 py-3">
  <h2 className="text-center mb-4 fs-2 fw-bold text-uppercase " style={{color:"#2E7D32",fontFamily:"Savate"}}>Explore Topics</h2>
  <div className="d-flex flex-wrap justify-content-center gap-3">
    <span className="topic-badge d-flex align-items-center gap-2">
      <i className="bi bi-geo-alt-fill" style={{ color: "black", background: "#C8E6C9", borderRadius: "30px", padding: "5px" }}></i>
      Travel
    </span>
    <span className="topic-badge d-flex align-items-center gap-2">
      <i className="bi bi-cpu" style={{ color: "black", background: "#BBDEFB", borderRadius: "30px", padding: "5px" }}></i>
      Tech
    </span>
    <span className="topic-badge d-flex align-items-center gap-2">
      <i className="bi bi-egg-fried" style={{ color: "black", background: "#FFF9C4", borderRadius: "30px", padding: "5px" }}></i>
      Food
    </span>
    <span className="topic-badge d-flex align-items-center gap-2">
      <i className="bi bi-heart-pulse" style={{ color: "black", background: "#F8BBD0", borderRadius: "30px", padding: "5px" }}></i>
      Wellness
    </span>
    <span className="topic-badge d-flex align-items-center gap-2">
      <i className="bi bi-stars" style={{ color: "black", background: "#E1BEE7", borderRadius: "30px", padding: "5px" }}></i>
      Lifestyle
    </span>
    <span className="topic-badge d-flex align-items-center gap-2">
      <i className="bi bi-globe2" style={{ color: "black", background: "#B2EBF2", borderRadius: "30px", padding: "5px" }}></i>
      Science
    </span>
    <span className="topic-badge d-flex align-items-center gap-2">
      <i className="bi bi-briefcase-fill" style={{ color: "black", background: "#D7CCC8", borderRadius: "30px", padding: "5px" }}></i>
      Career
    </span>
  </div>
</section>
<Author/>

<section className="container py-5">
  <h2 className="text-center mb-4 fs-2 fw-bold text-uppercase " style={{color:"#2E7D32",fontFamily:"Savate"}}>
    Did You Know?
  </h2>
  <div className="row overflow-hidden ">
    <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-left">
      <div className="p-4 border rounded shadow-sm bg-light h-100">
        <div className="mb-3 text-success fs-3">
          <i className="bi bi-journal-text"></i>
        </div>
        <h5 className="fw-bold" style={{color:"brown"}}>Words Matter</h5>
        <p >The average blog post is 1,236 words long — but posts over 2,000 words get more backlinks.</p>
      </div>
    </div>

    <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up">
      <div className="p-4 border rounded shadow-sm bg-light h-100">
        <div className="mb-3 text-success fs-3">
          <i className="bi bi-lightbulb"></i>
        </div>
        <h5 className="fw-bold" style={{color:"brown"}}>Ideas Everywhere</h5>
        <p>Over 7 million blog posts are published every day across the internet.</p>
      </div>
    </div>

    <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-right">
      <div className="p-4 border rounded shadow-sm bg-light h-100">
        <div className="mb-3 text-success fs-3">
          <i className="bi bi-book-half"></i>
        </div>
        <h5 className="fw-bold" style={{color:"brown"}}>Readers' Preference</h5>
        <p >Listicles and "how-to" posts are the most consumed blog formats worldwide.</p>
      </div>
    </div>

    <div className="col-md-6 col-lg-6 mb-4" data-aos="fade-right">
      <div className="p-4 border rounded shadow-sm bg-light h-100">
        <div className="mb-3 text-success fs-3">
          <i className="bi bi-graph-up"></i>
        </div>
        <h5 className="fw-bold" style={{color:"brown"}}>SEO Secret</h5>
        <p >Updating old blog posts can boost organic traffic by over 70% in some cases.</p>
      </div>
    </div>

    <div className="col-md-6 col-lg-6 mb-4" data-aos="fade-left">
      <div className="p-4 border rounded shadow-sm bg-light h-100">
        <div className="mb-3 text-success fs-3">
          <i className="bi bi-alarm"></i>
        </div>
        <h5 className="fw-bold" style={{color:"brown"}}>Short Attention Span</h5>
        <p >You have just 8 seconds to capture a reader’s attention — make your intro strong!</p>
      </div>
    </div>
  </div>
</section>
<Counter/>

      <section className="container px-5 py-4">
        <div className="row overflow-hidden align-items-center profile">
          <div className="col-md-3 text-center" data-aos="fade-up-right">
            <img src={profile5} className="h-100 w-100" alt="error"/>
          </div>
          <div className="col-md-9 mt-3" data-aos="fade-up-left">
            <h2>Who’s Behind the Blog?</h2>
            <p>
              I'm Samantha, a curious soul who loves sharing thoughts, stories,
              and ideas that spark conversation and inspiration.
            </p>
            <NavLink to="/about">
            <button >
              Read More About Me
            </button>
            </NavLink>
            
          </div>
        </div>
      </section>

      <section className="container px-5 py-4">
        <div className="row overflow-hidden align-items-center">
          <div className="col-md-7" data-aos="fade-down-right">
            <h2>Join the Community</h2>
            <p>
              Get the latest blogs delivered to your inbox. No spam, just value.
            </p>
            <form className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Your email"
              />
              <button type="submit" className="btn btn-success">
                Subscribe
              </button>
            </form>
          </div>
          <div className="col-md-5 mt-3  text-center" style={{paddingLeft:"20px"}} data-aos="fade-down-left">
            <img src={image5} className="w-100 h-100" alt="error"/>
          </div>
        </div>
      </section>
      <Testimonials/>

      <section className="feedback-section text-center p-5 bg-light">
        <div className="container">
          <h2>Have questions or feedback?</h2>
          <p>
            We’d love to hear from you! Whether you have suggestions, ideas, or
            just want to connect.
          </p>
          <NavLink to="/contact">
           <button>Contact Us</button>
          </NavLink>
        
        </div>
      </section>
    </>
  );
};

export default Home;
