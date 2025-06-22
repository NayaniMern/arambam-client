import axios from "axios";
import React, { useState } from "react";

const Form = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [articleTitle, setArticleTitle] = useState("");
  const [category, setCategory] = useState("");
  const [article, setArticle] = useState("");
  const [authorBio, setAuthorBio] = useState("");
  const [agree, setAgree] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

 
    const fullnameError = document.getElementById("fullnameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const titleError = document.getElementById("titleError");
    const categoryError = document.getElementById("categoryError");
    const articleError = document.getElementById("articleError");
    const bioError = document.getElementById("bioError");
    const agreeError = document.getElementById("agreeError");

    const alphaExp = /^[a-zA-Z ]+$/;
    const mailExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const numExp = /^[0-9]{10}$/;

    let isValid = true;

    // Fullname validation
    if (fullname === "") {
      fullnameError.textContent = "*Full Name is required";
      isValid = false;
    } else if (!fullname.match(alphaExp)) {
      fullnameError.textContent = "*Only letters and spaces allowed";
      isValid = false;
    } else {
      fullnameError.textContent = "";
    }

    // Email validation
    if (email === "") {
      emailError.textContent = "*Email is required";
      isValid = false;
    } else if (!email.match(mailExp)) {
      emailError.textContent = "*Enter a valid email";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    // Phone validation
    if (phonenumber === "") {
      phoneError.textContent = "*Phone number is required";
      isValid = false;
    } else if (!phonenumber.match(numExp)) {
      phoneError.textContent = "*Enter a valid 10-digit phone number";
      isValid = false;
    } else {
      phoneError.textContent = "";
    }

    // Article Title validation
    if (articleTitle === "") {
      titleError.textContent = "*Article Title is required";
      isValid = false;
    } else {
      titleError.textContent = "";
    }

    // Category validation
    if (category === "") {
      categoryError.textContent = "*Category is required";
      isValid = false;
    } else {
      categoryError.textContent = "";
    }

    // Article content validation
    if (article === "") {
      articleError.textContent = "*Article content is required";
      isValid = false;
    } else {
      articleError.textContent = "";
    }

    // Author bio validation
    if (authorBio === "") {
      bioError.textContent = "*Author bio is required";
      isValid = false;
    } else {
      bioError.textContent = "";
    }

    // Agreement checkbox
    if (!agree) {
      agreeError.textContent = "*You must agree to the submission guidelines";
      isValid = false;
    } else {
      agreeError.textContent = "";
    }

    if (isValid) {
      const formData = {
        fullname,
        email,
        phonenumber,
        articleTitle,
        category,
        article,
        authorBio,
      };

      axios
        .post("https://arambam-server.onrender.com/articles", formData)
        .then(() => {
          alert(" Article submitted successfully!");
          setFullname("");
          setEmail("");
          setPhonenumber("");
          setArticleTitle("");
          setCategory("");
          setArticle("");
          setAuthorBio("");
          setAgree(false);
        })
        .catch((err) => {
          console.error(err);
          alert(" Submission failed.");
        });
    }
  };

  return (
    <div className="container p-3">
      <form onSubmit={submitHandler}>
        <div className="row">
          <div className="col-6 form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            <label>Full Name</label>
            <span id="fullnameError" style={{ color: "red" }}></span>
          </div>

          <div className="col-6 form-floating mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email Address</label>
            <span id="emailError" style={{ color: "red" }}></span>
          </div>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
          />
          <label>Phone Number</label>
          <span id="phoneError" style={{ color: "red" }}></span>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Article Title"
            value={articleTitle}
            onChange={(e) => setArticleTitle(e.target.value)}
          />
          <label>Article Title</label>
          <span id="titleError" style={{ color: "red" }}></span>
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option hidden value="">Choose one...</option>
            <option value="Travel">Travel</option>
            <option value="Tech">Tech</option>
            <option value="Food">Food</option>
            <option value="Wellness">Wellness</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Science">Science</option>
            <option value="Career">Career</option>
          </select>
          <span id="categoryError" style={{ color: "red" }}></span>
        </div>

        <div className="mb-3">
          <label className="form-label">Article Content</label>
          <textarea
            className="form-control"
            rows={5}
            placeholder="Paste article content here..."
            value={article}
            onChange={(e) => setArticle(e.target.value)}
          ></textarea>
          <span id="articleError" style={{ color: "red" }}></span>
        </div>

        <div className="mb-3">
          <label className="form-label">Author Bio</label>
          <textarea
            className="form-control"
            rows={3}
            placeholder="Short author bio..."
            value={authorBio}
            onChange={(e) => setAuthorBio(e.target.value)}
          ></textarea>
          <span id="bioError" style={{ color: "red" }}></span>
        </div>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            id="agreeCheck"
          />
          <label className="form-check-label">
            I confirm this is original content and agree to the submission guidelines
          </label>
        
          <span id="agreeError" style={{ color: "red" }}></span>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-success w-100">
            Submit Article
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
