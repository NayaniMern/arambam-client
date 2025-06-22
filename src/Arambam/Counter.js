import React from 'react'
import CountUp from "react-countup";

const Counter = () => {
  return (
   <section className="bg-light">
  <div className="container px-5 py-4 text-center">
    <h2 className="text-center mb-4 fs-2 fw-bold text-uppercase " style={{color:"#2E7D32",fontFamily:"Savate"}}>Our Journey in Numbers</h2>
    <div className="row">
      <div className="col-md-3">
        <h3 className="fw-bold text-dark">
            <CountUp start={0} end={200} duration={10} delay={0}/>
                  +
        </h3>
        <p className='fw-bold' style={{color:"olive"}}>Total Blogs</p>
      </div>
      <div className="col-md-3">
        <h3 className="fw-bold text-dark"><CountUp start={0} end={120} duration={10} delay={0}/>
                  +
        </h3>
        <p className='fw-bold' style={{color:"olive"}}>Active Authors</p>
      </div>
      <div className="col-md-3">
        <h3><CountUp start={0} end={25} duration={10} delay={0}/>
                  k+
        </h3>
        <p className='fw-bold' style={{color:"olive"}}>Monthly Readers</p>
      </div>
      <div className="col-md-3">
        <h3> <CountUp start={0} end={4.8} duration={10} delay={0}/>
                 <i className="bi bi-star-fill fs-6"></i>
        </h3>
        <p className='fw-bold' style={{color:"olive"}}>Average Rating</p>
      </div>
    </div>
  </div>
</section>
  )
}

export default Counter