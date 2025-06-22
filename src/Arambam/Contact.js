import React, { useEffect } from 'react'
import "./Home.css"
import SendEnquiry from './SendEnquiry'
import Aos from "aos";
import 'aos/dist/aos.css'
import { NavLink } from 'react-router-dom';

const Contact = () => {

  useEffect(()=>{
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
              <h1>Contact Us</h1>
              <span><NavLink style={{textDecoration:"none",  color: "inherit"}} to ="/">Home</NavLink> / Contact</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container p-5">
    <div className="text-center mb-4">
      <h2 className="text-center mb-4 fs-2 fw-bold text-uppercase " style={{color:"#2E7D32",fontFamily:"Savate"}}>Connect with Our Team</h2>
      <p className="mb-5 px-5" style={{fontSize:"16px"}}>We're here to help you with anything you need. Whether you have a question, feedback, or a project idea, our team is ready to assist you. Reach out to us and let's start the conversation!</p>
    </div>

    <div className="row overflow-hidden">
    
      <div className="col-lg-6 mb-3 " data-aos="fade-left" >
        <div className="contact-box" style={{background:"rgb(187, 242, 187)"}}>
          <h5 className="mb-4 fw-bold" style={{color:"brown"}}>Get in Touch with Us</h5>
          <SendEnquiry/>
         
        </div>
      </div>

      
      <div className="col-lg-6  contact-details " style={{paddingLeft:"50px"}} data-aos="fade-right">
        <h5 className="mb-4 fw-bold" style={{color:"brown"}}>Contact Details</h5>
        <p className="mb-3 px-5" style={{fontSize:"16px", color:"#36454F"}}>If you prefer to reach us directly, you can use the information below. Our team is available during business hours to support you.</p>

        <div className="icon-box">
          <i className="bi bi-geo-alt-fill"></i>
          <div>
            <strong>Address : </strong>
           24/7 Creative Avenue,
Banjara Hills, Hyderabad,
Telangana - 500034, India
          </div>
        </div>

        <div className="icon-box">
          <i className="bi bi-telephone-fill"></i>
          <div>
            <strong>Mobile : </strong>
            +91 98765 43210
          </div>
        </div>

        <div className="icon-box">
          <i className="bi bi-clock-fill"></i>
          <div>
            <strong>Availability : </strong>
            Monday to Saturday, 9:00 AM - 5:00 PM
          </div>
        </div>

        <div className="icon-box">
          <i className="bi bi-envelope-fill"></i>
          <div>
            <strong>Email : </strong>
            contact@arambam.com
          </div>
        </div>

        <div className="mt-3">
          <strong>Social Media:</strong>
          <div className="social-icons mt-2">
            <i className="bi bi-facebook me-3"></i>
      <i className="bi bi-twitter-x me-3"></i>
        <i className="bi bi-instagram me-3"></i>
        <i className="bi bi-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
  </div>

      </section>
       <section className="container px-5 mb-5  ">
        <div className="row">
          <div className="col-lg-12 map  p-1">
           
            <iframe

  title="Google Map showing 24/7 Creative Avenue, Banjara Hills, Hyderabad, Telangana - 500034, India"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2794987853973!2d78.43396827402374!3d17.412348903748313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97314981aa63%3A0x5dcb14506626d0!2sBanjara%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1717831050000!5m2!1sen!2sin"

              width="100%"
              height="450"
              style={{ border: 0 }}
              className='shadow'
              allowfullscreen="yes"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      </>
  )
}

export default Contact