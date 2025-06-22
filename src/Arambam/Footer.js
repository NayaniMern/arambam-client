import React from 'react';
import './Home.css'; // Link to the custom styles below
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer text-white ">
      <div className="container p-5">
        <div className="row text-center text-md-start">

         
          <div className=" col-md-6 col-lg-4 col-xl-4 mb-4">
            <h4 className="text-center fs-2 fw-bold text-uppercase " style={{color:"#96f598",fontFamily:"Savate"}}>Arambam</h4>
            <p className="footer-desc">
              A fresh beginning for curious minds. Explore inspiring stories from travel, tech, wellness, lifestyle & more.
            </p>
          </div>

       
          <div className=" col-md-6 col-lg-4 col-xl-3 mb-4">
            <h5 className=" fs-4 fw-bold text-uppercase " style={{color:"#96f598",fontFamily:"Savate"}}>Navigation</h5>
            <ul className="list-unstyled">
              <li><NavLink to="/" className="footer-link">Home</NavLink></li>
  <li><NavLink to="/about" className="footer-link">About</NavLink></li>
  <li><NavLink to="/blogs" className="footer-link">Blogs</NavLink></li>
  <li><NavLink to="/contact" className="footer-link">Contact</NavLink></li>
            </ul>
          </div>

          
          <div className=" col-md-6 col-lg-4 col-xl-3 mb-4">
            <h5 className=" fs-4 fw-bold text-uppercase " style={{color:"#96f598",fontFamily:"Savate"}}>Useful Links</h5>
            <ul className="list-unstyled text-center">
              <li><NavLink to = "/writeforus" className="footer-link">Write for Us</NavLink></li>
              <li className="footer-link">FAQs</li>
              <li className="footer-link">Privacy Policy</li>
              <li className="footer-link">Terms & Conditions</li>
            </ul>
          </div>

    
          <div className= "col-md-6 col-lg-4 col-xl-2 mb-4">
            <h5 className=" fs-4 fw-bold text-center text-uppercase " style={{color:"#96f598",fontFamily:"Savate"}}>Connect</h5>
            <p><i className="bi bi-envelope me-2"></i>  contact@arambam.com</p>
            <p><i className="bi bi-geo-alt me-2"></i> India</p>
            <div className="d-flex justify-content-center footer-icon justify-content-md-start">
              <i className="bi bi-facebook"></i>
             <i className="bi bi-twitter"></i>
             <i className="bi bi-instagram"></i>
              <i className="bi bi-youtube"></i>
            </div>
          </div>

        </div>

        <div className="text-center border-top pt-3 mt-3 small footer-bottom-text">
           &copy; Copyright 2025 Arambam. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
