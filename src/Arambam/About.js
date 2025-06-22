import React, { useEffect } from "react";
import "./Home.css";
import abo from "./assets/about.jpg";
import t1 from "./assets/t1.jpg"
import t2 from "./assets/t2.jpg"
import t3 from "./assets/t3.jpg"
import t4 from "./assets/t4.jpg"
import Aos from "aos";
import 'aos/dist/aos.css'
import { NavLink } from "react-router-dom";

const About = () => {
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
              <h1>About Us</h1>
              <span><NavLink style={{textDecoration:"none",  color: "inherit"}} to ="/">Home</NavLink> / About</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container p-5 story-container">
        <div className="row overflow-hidden align-items-center">
          <div className="col-lg-6 mb-4 " data-aos="fade-right">
            <img
              src={abo}
              className="w-100 h-100 shadow"
              style={{ borderRadius: "60px" }}
              alt="error"
            />
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <h2
              className="text-center mb-4 fs-2 fw-bold text-uppercase " style={{color:"#2E7D32",fontFamily:"Savate"}}
            >
              <i className="bi bi-lightbulb text-warning me-2"></i>Our Origin
              Story
            </h2>
            <p>
              <strong>Arambam</strong> was born in
              <strong>2023</strong> out of a deep desire to carve out a
              thoughtful space on the internet — a space where words matter and
              community thrives. It all started when
              <strong>Nayani</strong> , a curious writer and self-taught
              developer, began documenting ideas, inspirations, and reflections
              during quiet evenings.
            </p>

            <p>
              What began as a humble digital notebook quickly evolved into a
              dynamic platform. Early blog posts touched on everything from
              personal growth to tech tutorials. Surprisingly, those early
              stories struck a chord. Comments flowed in. Emails followed. What
              was once a solo journey became a shared experience.
            </p>

            <p>
              Encouraged by this response, Nayani expanded the blog — not just
              in topics, but in vision. Collaborators joined in. Guest
              contributors shared their voices. And slowly, the blog transformed
              from a quiet corner into a thriving community space for readers
              from over 30 countries.
            </p>

            <p>
              Today, <strong>Arambam</strong> stands as a modern journal for the
              curious — a place where learning meets storytelling, and passion
              meets purpose.
            </p>
          </div>
        </div>
      </section>

      <section className="p-5 text-center bg-light">
        <div className="container mission">
          <h2
            className="text-center mb-4 fs-2 fw-bold text-uppercase " style={{color:"#2E7D32",fontFamily:"Savate"}}
          >
            <i className="bi bi-lightbulb text-warning me-2"></i>Our Mission
          </h2>
          <p className="lead">
            To create high-quality content that helps people grow —
            intellectually, creatively, and emotionally.
          </p>

          <div className="row overflow-hidden mt-4">
            <div className="col-md-4 mb-4" data-aos="flip-up">
              <div className="p-4 border rounded border-primary bg-light">
                <i className="bi bi-person-raised-hand fa-2x text-primary mb-2"></i>
                <h5 className="text-primary">Personal Development</h5>
                <p>Mindset, motivation, habits, clarity, and self-awareness.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4" data-aos="flip-down">
              <div className="p-4 border rounded border-success bg-white">
                <i className="bi bi-briefcase fa-2x text-success mb-2"></i>
                <h5 className="text-success">Career & Creativity</h5>
                <p>
                  Productivity, freelancing, creative thinking, and
                  entrepreneurship.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4" data-aos="flip-up">
              <div className="p-4 border rounded border-warning bg-light">
                <i className="bi bi-airplane fa-2x text-warning mb-2"></i>
                <h5 className="text-warning">Lifestyle & Travel</h5>
                <p>Travel guides, destinations, and mindful living insights.</p>
              </div>
            </div>
            <div className="col-md-6 mb-4" data-aos="flip-up">
              <div className="p-4 border rounded border-info bg-white">
                <i className="bi bi-laptop fa-2x text-info mb-2"></i>
                <h5 className="text-info">Tech, Tools & Tutorials</h5>
                <p>
                  Tech simplified, tool reviews, and how-to guides for creators.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4" data-aos="flip-down">
              <div className="p-4 border rounded border-danger bg-light">
                <i className="bi bi-globe fa-2x text-danger mb-2"></i>
                <h5 className="text-danger">Culture & Commentary</h5>
                <p>
                  Trends, media, and big ideas viewed through a hopeful lens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-5">
        <div className="container">
          <div className="row overflow-hidden">
            <div className="col-md-6 mb-3 " data-aos="zoom-in-right">
               <h2
           className="text-center mb-4 fs-2 fw-bold text-uppercase " style={{color:"#2E7D32",fontFamily:"Savate"}}
          >
                <i className="bi bi-heart-fill text-danger me-2"></i>Our Values
              </h2>
              <ul className="text-justify">
                <li className="mb-3" style={{fontSize:"16px"}}>
                  <strong className="me-2 ">Depth over noise:</strong> We prioritize quality over
                  clicks.
                </li>
                <li className="mb-3" style={{fontSize:"16px"}}>
                  <strong className="me-2 ">Empathy over ego:</strong> Reader-first content,
                  always.
                </li>
                <li className="mb-3" style={{fontSize:"16px"}}>
                  <strong className="me-2 ">Curiosity over certainty:</strong> Asking questions,
                  staying open.
                </li>
                <li className="mb-3" style={{fontSize:"16px"}}>
                  <strong className="me-2 ">Transparency over trends:</strong> Honest lessons, no
                  hype.
                </li>
              </ul>
            </div>

            <div className="col-md-6 mb-3 bg-light" data-aos="zoom-in-left">
              <h2
            className="text-center mb-4 fs-2 fw-bold text-uppercase " style={{color:"#2E7D32",fontFamily:"Savate"}}
          >
                <i className="bi bi-people-fill text-info me-2"></i>Who We Write
                For
              </h2>
              <ul className="text-justify">
                <li className="mb-3" style={{fontSize:"16px"}}>Lifelong learners</li>
                <li className="mb-3" style={{fontSize:"16px"}}>Dreamers and builders</li>
                <li className="mb-3" style={{fontSize:"16px"}}>Creatives seeking inspiration</li>
                <li className="mb-3" style={{fontSize:"16px"}}>Professionals navigating purpose</li>
                <li className="mb-3" style={{fontSize:"16px"}}>Curious minds tired of clickbait</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-3 px-5">
        <div className="container">
          <div className="row overflow-hidden">
           
            <div className="col-md-6 mb-3 bg-light" data-aos="zoom-in-right">
              <h2
           className="text-center mb-4 fs-2 fw-bold text-uppercase " style={{color:"#2E7D32",fontFamily:"Savate"}}
          >
                <i className="bi bi-star-fill text-warning me-2"></i>Let’s Stay
                Connected
              </h2>
              <ul className="list-unstyled">
                <li className="mb-3" style={{fontSize:"16px"}}>
                  <i className="bi bi-envelope-fill me-2"></i>Subscribe to our
                  newsletter
                </li >
                <li className="mb-3" style={{fontSize:"16px"}}>
                  <i className="bi bi-instagram me-2"></i>Follow us on
                  Instagram, Facebook, Twitter, LinkedIn
                </li>
                <li className="mb-3" style={{fontSize:"16px"}}>
                  <i className="bi bi-chat-dots-fill me-2"></i>Contact us
                  anytime
                </li>
              </ul>
            </div>

          
            <div className="col-md-6  " data-aos="zoom-in-left">
              <h2
           className="text-center mb-4 fs-2 fw-bold text-uppercase " style={{color:"#2E7D32",fontFamily:"Savate"}}
          >
                <i className="bi bi-rocket-takeoff-fill text-success me-2"></i>
                Looking Ahead
              </h2>
              <ul className="list-unstyled">
                <li className="mb-3" style={{fontSize:"16px"}}>
                  <i className="bi bi-mic-fill me-2"></i>Launching a podcast
                </li >
                <li className="mb-3" style={{fontSize:"16px"}}>
                  <i className="bi bi-book-fill me-2"></i>Free guides and eBooks
                </li>
                <li className="mb-3" style={{fontSize:"16px"}}>
                  <i className="bi bi-lightbulb-fill me-2"></i>Online workshops
                </li>
                <li className="mb-3" style={{fontSize:"16px"}}>
                  <i className="bi bi-globe me-2"></i>Members-only community
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
  <h2
   className="text-center mb-4 fs-2 fw-bold text-uppercase " style={{color:"#2E7D32",fontFamily:"Savate"}}
  >
    Meet Our Team
  </h2>
  <div className="row overflow-hidden justify-content-center gy-4">

    
    <div className="col-sm-6 col-md-4 col-lg-3" data-aos="flip-up">
      <div className="card h-100 shadow text-center">
        <div className="card-body">
          <img
            src={t1}
            alt="error"
            className="rounded-circle mb-3"
            width="100"
            height="100"
          />
          <h5 className="card-title mb-1">Lakshmi Reddy</h5>
          <p className="fw-bold" style={{color:"#1B5E20"}}>Founder & Editor-in-Chief</p>
          <p className="card-text">Leads editorial direction, curates inspiring stories, and ensures content quality.</p>
        </div>
      </div>
    </div>

 
    <div className="col-sm-6 col-md-4 col-lg-3" data-aos="flip-right">
      <div className="card h-100 shadow text-center">
        <div className="card-body">
          <img
            src={t2}
            alt="error"
            className="rounded-circle mb-3"
            width="100"
            height="100"
          />
          <h5 className="card-title mb-1">Ravi Kumar</h5>
          <p className="fw-bold" style={{color:"#1B5E20"}}>Tech & SEO Lead</p>
          <p className="card-text">Builds and maintains the website, boosts SEO performance, and analyzes traffic data.</p>
        </div>
      </div>
    </div>

   
    <div className="col-sm-6 col-md-4 col-lg-3" data-aos="flip-left">
      <div className="card h-100 shadow text-center">
        <div className="card-body">
          <img
            src={t3}
            alt="error"
            className="rounded-circle mb-3"
            width="100"
            height="100"
          />
          <h5 className="card-title mb-1">Anusha Kolli</h5>
          <p className="fw-bold" style={{color:"#1B5E20"}}>Content Strategist</p>
          <p className="card-text">Plans blog topics, works with contributors, and ensures a unified voice and tone.</p>
        </div>
      </div>
    </div>

 
    <div className="col-sm-6 col-md-4 col-lg-3" data-aos="flip-down">
      <div className="card h-100 shadow text-center">
        <div className="card-body">
          <img
            src={t4}
            alt="error"
            className="rounded-circle mb-3"
            width="100"
            height="100"
          />
          <h5 className="card-title mb-1">Srinivas Ch</h5>
          <p className="fw-bold" style={{color:"#1B5E20"}}>Community Manager</p>
          <p className="card-text">Engages with the audience, manages interactions, and strengthens community ties.</p>
        </div>
      </div>
    </div>

  </div>
</section>


      
    </>
  );
};

export default About;
