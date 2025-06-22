import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Anusha P.",
    quote:
      "Journey Vibes gave me the perfect itinerary for Kerala. The blog posts are informative and so inspiring!",
    location: "Hyderabad",
    image:
      "https://t3.ftcdn.net/jpg/10/33/94/60/240_F_1033946097_XzIDjv2IDpsW3NZ8EZ11N7xt2tFX2Hkg.jpg",
  },
  {
    name: "Rahul V.",
    quote:
      "As a tech enthusiast, I love Ravi Teja’s blogs. Clean writing and great coding insights!",
    location: "Bengaluru",
    image:
      "https://t3.ftcdn.net/jpg/01/37/31/78/240_F_137317875_rjjiZvlRx0UK60nSvaHMqJtAlMu5zuKh.jpg",
  },
  {
    name: "Kavya Sharma",
    quote:
      "This site blends travel, wellness, and tech in one beautiful package. Totally recommend it.",
    location: "Delhi",
    image:
      "https://t4.ftcdn.net/jpg/12/29/68/83/240_F_1229688350_IH8t3dfStTvaowM7FMHwsWy7Rm5yP3yg.jpg",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="container py-5 overflow-hidden">
      <h2 className="text-center mb-4 text-uppercase fw-bold" style={{ color: "#2E7D32", fontFamily: "Savate" }}>
        What Our Readers Say
      </h2>
      <Slider {...settings}>
        {testimonials.map((t, i) => {
            return(
          <div key={i} className="px-3">
            <div className="card p-4 shadow border my-2 text-center h-100">
              <img
                src={t.image}
                alt="error"
                className="rounded-circle mx-auto mb-3"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <div className="blockquote">
                <p className="mb-3 fst-italic">{t.quote}</p>
              </div>
              <div >
               -- {t.name} from {t.location}
              </div>
            </div>
          </div>
        )})}
      </Slider>
    </section>
  );
};

export default Testimonials;
