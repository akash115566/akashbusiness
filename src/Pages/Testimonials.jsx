import React from 'react'
import { Link } from 'react-router-dom'
import "../Style/testimoals.css"
import InternationalTrade from './InternationalTrade'

const Testimonials = () => {
  return (
   <>


      <section className="success-section">

 

<h1 className="success-main-heading">
  <Link to="/businesscare-successstory-testimonials" className="heading-link">
    <span className="black-text">Top Successful</span>{" "}
    <span className="orange-text">Story</span>
  </Link>
</h1>

  <div className="success-container">

    {/* Left Content */}
    <div className="success-text" >
      <h2 style={{fontSize:"1.8rem"}}>
       *Message from BBL Madhukar <br/> for <span>Business Care</span>*
      </h2>

      {/* 🔥 Testimonial */}
      <p className="testimonial">
      As the Director General of BRICS and Former Chairman of MMTC, I am pleased to see Business Care strengthening startups across the country. With its unique approach, it is also creating valuable global opportunities for exporters from India.

Both the founders of Business Care are extremely energetic and truly wonder minds. They deserve encouragement and strong support in their vision to empower businesses at scale.

Business Care is a golden opportunity for the SME world, enabling growth and accelerating global trade. We extend our heartfelt wishes and blessings for its continued success and impact.
      </p>

      <h3>Former Chairman MMTC Govt of India</h3>
      <p className="designation">Director General Brics </p>

      {/* ✍️ Digital Signature */}
      <p className="signature">Dr. B.L Madhukar </p>
    </div>

    {/* Right Image */}
    <div className="success-image">
      <img src="/h5.jfif" alt="Sanjeev Kumar Gupta" />
    </div>

  </div>
</section>

      <section className="success-section">

 

<h1 className="success-main-heading">
  {/* <Link to="/businesscare-successstory-testimonials" className="heading-link">
    <span className="black-text">Top Successful</span>{" "}
    <span className="orange-text">Story</span>
  </Link> */}
</h1>

  <div className="success-container">

    {/* Left Content */}
    <div className="success-text">
      <h2 style={{fontSize:"1.8rem"}}>
       Message from Mr. Ravi Sinha, <br/><span> Director – MSME Forum</span>
      </h2>

      {/* 🔥 Testimonial */}
      <p className="testimonial">
I am truly happy to see young entrepreneurs from small towns stepping forward to enhance the SME world. The founders of Business Care are sharp-minded, highly talented, and full of vision.

In today’s time, there is a strong need for top SME consultants who have the capability to transform and elevate the MSME sector. Business Care is moving in the right direction, playing a crucial role in reshaping the future of SMEs.
      </p>

      <h3>Message from Mr. Ravi Sinha</h3>
      <p className="designation">Director – MSME Forum </p>

      {/* ✍️ Digital Signature */}
      <p className="signature">Mr. Ravi Sinha</p>
    </div>

    {/* Right Image */}
    <div className="success-image">
      <img src="/h6.jfif" alt="Sanjeev Kumar Gupta" />
    </div>

  </div>
</section>



     <section className="success-section">

 

<h1 className="success-main-heading">
  {/* <Link to="/businesscare-successstory-testimonials" className="heading-link">
    <span className="black-text">Top Successful</span>{" "}
    <span className="orange-text">Story</span>
  </Link> */}
</h1>

  <div className="success-container">

    {/* Left Content */}
    <div className="success-text">
      <h2>
        90% <span>Successful Ratio</span>
      </h2>

      {/* 🔥 Testimonial */}
      <p className="testimonial">
        I am extremely grateful and truly happy to be a part of Business Care. My experience with the Business Care TV Show has been incredibly beneficial, not just for me personally but also for my brand. Through their platform, I have been able to connect with reliable and well-established dealers and distributors, which has significantly contributed to my business growth.

What impressed me the most is the consistent support and responsiveness of their team. Whenever I needed assistance or guidance, they were always available and proactive in helping me move forward.

For the first time, Business Care has given me a platform where I can present my ideas, share my journey, and showcase my brand in front of a nationwide audience. This opportunity is truly invaluable, and I am excited about the new possibilities it brings.

I sincerely thank the entire Business Care team for their dedication and support. I highly recommend their platform to anyone looking to grow their business and expand their reach.
      </p>

      <h3>Mr. Sanjeev Kumar Gupta</h3>
      <p className="designation">Owner – Summercool</p>

      {/* ✍️ Digital Signature */}
      <p className="signature">Sanjeev Kumar Gupta</p>
    </div>

    {/* Right Image */}
    {/* <div className="success-image">
      <img src="/h3.jfif" alt="Sanjeev Kumar Gupta" />
    </div> */}

  </div>
</section>
{/* <InternationalTrade /> */}
   
   </>
  )
}

export default Testimonials
