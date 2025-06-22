import React, { useState, useEffect } from "react";

const BlogCategoryCount = () => {
  const [travelCount, setTravelCount] = useState(0);
  const [techCount, setTechCount] = useState(0);
  const [foodCount, setFoodCount] = useState(0);
  const [wellnessCount, setWellnessCount] = useState(0);
  const [lifestyleCount, setLifestyleCount] = useState(0);
  const [scienceCount, setScienceCount] = useState(0);
  const [careerCount, setCareerCount] = useState(0);

  useEffect(() => {
    fetch("https://arambam-server.onrender.com/blogs?category=Travel")
      .then((res) => res.json())
      .then((data) => setTravelCount(data.length))
      .catch((err) => console.error(err));

    fetch("https://arambam-server.onrender.com/blogs?category=Tech")
      .then((res) => res.json())
      .then((data) => setTechCount(data.length))
      .catch((err) => console.error(err));
    fetch("https://arambam-server.onrender.com/blogs?category=Food")
      .then((res) => res.json())
      .then((data) => setFoodCount(data.length))
      .catch((err) => console.error(err));
    fetch("https://arambam-server.onrender.com/blogs?category=Wellness")
      .then((res) => res.json())
      .then((data) => setWellnessCount(data.length))
      .catch((err) => console.error(err));
    fetch("https://arambam-server.onrender.com/blogs?category=Lifestyle")
      .then((res) => res.json())
      .then((data) => setLifestyleCount(data.length))
      .catch((err) => console.error(err));
    fetch("https://arambam-server.onrender.com/blogs?category=Science")
      .then((res) => res.json())
      .then((data) => setScienceCount(data.length))
      .catch((err) => console.error(err));
    fetch("https://arambam-server.onrender.com/blogs?category=Career")
      .then((res) => res.json())
      .then((data) => setCareerCount(data.length))
      .catch((err) => console.error(err));
  });

  return (
    <div className="container mt-4 mb-3">
      <h4 className="text-center mb-2 fs-4 fw-bold text-uppercase " style={{color:"#2E7D32"}}>Categories</h4>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Travel
          <span className="badge bg-success rounded-pill">{travelCount}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Tech
          <span className="badge bg-success rounded-pill">{techCount}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
         Food
          <span className="badge bg-success rounded-pill">{foodCount}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Wellness
          <span className="badge bg-success rounded-pill">{wellnessCount}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Lifestyle
          <span className="badge bg-success rounded-pill">{lifestyleCount}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Science
          <span className="badge bg-success rounded-pill">{scienceCount}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Career
          <span className="badge bg-success rounded-pill">{careerCount}</span>
        </li>
      </ul>
    </div>
  );
};

export default BlogCategoryCount;
