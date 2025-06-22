import React from "react";

import useCallApi from "./CallApi";
import CountUp from "react-countup";

const Welcome = () => {
  
  const Blogs = useCallApi(`https://arambam-server.onrender.com/blogs`);
  const Enquiries = useCallApi(`https://arambam-server.onrender.com/enquiries`);
    const Articles = useCallApi(`https://arambam-server.onrender.com/articles`);
  return (
    <div className="container p-5 welcome">
      <div className="row justify-content-center ">
        <div >
          <h2>Where Every Thought Begins</h2>
          <h1>Welcome to Arambam</h1>
          <p>A space for stories, ideas, knowledge, and opinions — curated by passionate authors.</p>
        </div>
        
      </div>
      <div className='row api mt-4 justify-content-center  '>
         
          <div className='col-md-6 col-lg-4'>
            <div className='card mb-3 bg-light'>
              <div className='card-body text-center fw-bold' style={{ background: "#FFEDFA"}}>
                <h5 className='card-title fs-4 fw-bold' style={{color:"#204e35"}}>
                <CountUp start={0} end={Blogs.length} duration={10} delay={0}/>
                  +
                </h5>
                <h5 className='card-title fs-5 fw-bold' style={{color:"#000"}}>
                  Blogs
                </h5>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='card mb-3 bg-light'>
              <div className='card-body text-center fw-bold' style={{ background: "#FFEDFA"}}>
                <h5 className='card-title fs-4 fw-bold' style={{color:"#204e35"}}>
                <CountUp start={0} end={Articles.length} duration={10} delay={0}/>
                  +
                </h5>
                <h5 className='card-title fs-5 fw-bold' style={{color:"#000"}}>
                  Public Articles
                </h5>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='card mb-3 bg-light'>
              <div className='card-body text-center fw-bold' style={{ background: "#FFEDFA"}}>
                <h5 className='card-title fs-4 fw-bold' style={{color:"#204e35"}}>
                <CountUp start={0} end={Enquiries.length} duration={10} delay={0}/>
                  +
                </h5>
                <h5 className='card-title fs-5 fw-bold' style={{color:"#000"}}>
                  Enquiries
                </h5>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Welcome;
