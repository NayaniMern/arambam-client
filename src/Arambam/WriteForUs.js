import React, { useEffect } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import Form from "./Form";

const WriteForUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
      <section>
        <div className="main-background">
          <div className="background-content">
            <div>
              <h1>Write For Us!</h1>
              <span>
                <NavLink
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/"
                >
                  Home
                </NavLink>
                / Write 4 Us
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-7">
            <div className="write-section p-4 rounded shadow bg-white">
              <h1
                className="text-center mb-4 fs-2 fw-bold text-uppercase"
                style={{ color: "#2E7D32", fontFamily: "Savate" }}
              >
                <i className="bi bi-pencil-square me-2"></i>
                Write for Us – Share Your Voice with <span>Arambam</span>
              </h1>
              <p className="fw-light text-center">
                Are you passionate about writing? Do you have a unique story,
                expert advice, or insightful opinion to share with the world?
                We’re excited to welcome guest contributors to join our blogging
                community!
              </p>

              <p>
                At <strong>Arambam</strong>, we strive to create valuable,
                engaging, and informative content that resonates with our
                readers. If you love writing about topics like travel, tech,
                food, lifestyle, wellness, science, or career, then you're in
                the right place!
              </p>

              <h3 className="section-title mt-4">What You Can Write About</h3>
              <ul className="topic-list list-unstyled">
                <li>
                  <i className="bi bi-geo-alt-fill text-success me-2"></i>
                  <strong>Travel</strong> – Destination guides, travel tips,
                  itineraries, budget travel hacks, solo travel stories.
                </li>
                <li>
                  <i className="bi bi-laptop-fill text-info me-2"></i>
                  <strong>Tech</strong> – Tutorials, reviews, trends, software
                  tools, app guides, coding tips.
                </li>
                <li>
                  <i className="bi bi-cup-straw text-danger me-2"></i>
                  <strong>Food</strong> – Recipes, cultural cuisines, restaurant
                  reviews, healthy eating.
                </li>
                <li>
                  <i className="bi bi-heart-pulse-fill text-primary me-2"></i>
                  <strong>Wellness</strong> – Mental health, fitness,
                  meditation, skincare, self-care routines.
                </li>
                <li>
                  <i className="bi bi-brush-fill text-warning me-2"></i>
                  <strong>Lifestyle</strong> – Productivity hacks, home decor,
                  fashion, sustainable living.
                </li>
                <li>
                  <i className="bi bi-bezier2 text-secondary me-2"></i>
                  <strong>Science</strong> – Fun science facts, discoveries,
                  research breakdowns.
                </li>
                <li>
                  <i className="bi bi-briefcase-fill text-dark me-2"></i>
                  <strong>Career</strong> – Job search strategies, resume tips,
                  freelancing, work-from-home tips.
                </li>
              </ul>

              <p className="mt-4">
                If your topic doesn’t fall under these categories but adds
                value, we’re still open to reviewing it!
              </p>
              <h3 className="section-title mt-4">
                <i className="bi bi-tools me-2 text-warning"></i> Submission
                Guidelines
              </h3>
              <ul className="guidelines-list list-unstyled">
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Articles must be at least 800 words long.
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Content should be original, not published elsewhere (including
                  your own blog).
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Use headings, subheadings, bullet points, and short paragraphs
                  for readability.
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Ensure proper grammar, spelling, and punctuation.
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Include a featured image or any relevant images (royalty-free
                  or your own).
                </li>
                <li>
                  <i className="bi bi-x-circle-fill text-danger me-2"></i> No
                  affiliate or promotional links allowed.
                </li>
                <li>
                  <i className="bi bi-x-circle-fill text-danger me-2"></i> No
                  AI-generated content – human-written only.
                </li>
              </ul>

              <h3 className="section-title mt-4">
                <i className="bi bi-lightbulb-fill me-2 text-info"></i> Tips to
                Get Featured
              </h3>
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-chevron-right text-secondary me-2"></i>
                  Start with a strong introduction that hooks the reader.
                </li>
                <li>
                  <i className="bi bi-chevron-right text-secondary me-2"></i>
                  Offer practical advice or real-life experiences.
                </li>
                <li>
                  <i className="bi bi-chevron-right text-secondary me-2"></i>
                  Use examples or statistics when possible.
                </li>
                <li>
                  <i className="bi bi-chevron-right text-secondary me-2"></i>
                  Add a clear conclusion or takeaway for readers.
                </li>
              </ul>
            </div>
          </div>

         
          <div className="col-lg-5">
            <div className="form-container p-4 shadow rounded bg-light h-100">
              <h2 
                className="text-center mb-4 mt-2 fs-2 fw-bold text-uppercase"
                style={{ color: "#2E7D67", fontFamily: "Savate" }}
              >
                <i className="bi bi-pencil-square me-2"></i> Write for Us</h2>
              <p className=" text-center mb-4">
                We welcome original, high-quality guest posts. Fill out the form
                below to submit your article!
              </p>

             <Form/>

              <p className="mt-4 text-center small text-muted">
                For questions, contact us at 
                <a href="contact@arambam.com">
                 contact@arambam.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WriteForUs;
