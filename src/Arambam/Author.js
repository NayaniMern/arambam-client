import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const authorsData = [
  {
    name: "Sravani Reddy",
    role: "Travel & Culture",
    desc: "Explores Telugu heritage and curates inspiring travel blogs across India.",
    image: "https://t3.ftcdn.net/jpg/09/08/47/40/240_F_908474055_bI8CeAsRElFYs0K13UUA41X0EI3Iff8S.jpg",
  },
  {
    name: "Ravi Teja",
    role: "Tech & Coding",
    desc: "Full-stack dev sharing insights on JavaScript, React, and AI trends.",
    image: "https://t4.ftcdn.net/jpg/04/22/82/39/240_F_422823992_ZtyrE96o6wGTJcyZolZ6pLRUGHBRCH9c.jpg",
  },
  {
    name: "Harika Yadav",
    role: "Wellness & Lifestyle",
    desc: "Passionate about mindfulness, self-care routines, and mental wellness.",
    image: "https://t4.ftcdn.net/jpg/04/80/05/77/240_F_480057743_J7wTBWRW3vABPnqEv2IwSVVXjj50xevN.jpg",
  },
  {
    name: "Karthik A.",
    role: "Science & Curiosity",
    desc: "Writes simple explanations for complex scientific and space topics.",
    image: "https://t4.ftcdn.net/jpg/13/00/33/59/240_F_1300335945_LbeB4stuUIp5pEM8lXJSoafLSmbLcpo5.jpg",
  },
  {
    name: "Meghana B.",
    role: "Food & Recipes",
    desc: "Combines traditional Telugu flavours with modern cooking in her articles.",
    image: "https://t4.ftcdn.net/jpg/06/58/55/39/240_F_658553987_IL97dohcx8hUZcgRzOxiKrXnShzDo1nT.jpg",
  },
];

const Author = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="container py-5 overflow-hidden">
      <h2 className="text-center mb-4 fs-2 fw-bold text-uppercase " style={{color:"#2E7D32",fontFamily:"Savate"}}>
        Top Blog Authors
      </h2>
      <Slider {...settings}>
        {authorsData.map((author, index) => {
          return(
          <div key={index} className="px-3">
            <div className="card text-center  shadow h-100">
              <img
                src={author.image}
                className="card-img-top rounded-circle mx-auto mt-4"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
                alt="error"
              />
              <div className="card-body">
                <h5 className="card-title">{author.name}</h5>
                <p style={{color:"olive"}}>{author.role}</p>
                <p className="card-text">{author.desc}</p>
              </div>
            </div>
          </div>
        )})}
      </Slider>
    </section>
  );
};

export default Author;
