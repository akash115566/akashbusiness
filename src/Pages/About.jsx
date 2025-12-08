import React from "react";
import { Link } from "react-router-dom";
import "../Style/about.css";
import { FaPlay } from "react-icons/fa";


import { FaHandshake, FaLightbulb,FaCalculator, FaChartLine, FaMoneyCheckAlt } from "react-icons/fa";






const About = () => {

  const steps = [
    {
      icon: <FaHandshake />,
      title: "Developing Financing Options",
      desc: "Tailored financial strategies that align with your business goals.",
    },
    {
      icon: <FaLightbulb />,
      title: "Improving Business Planning",
      desc: "We refine your business plans to ensure clarity and long-term success.",
    },
    {
      icon: <FaChartLine />,
      title: "Financial Modeling and Analytics",
      desc: "Accurate models and insights to make data-driven decisions.",
    },
    {
      icon: <FaMoneyCheckAlt />,
      title: "Delivering Financing Solutions",
      desc: "Connecting you with the right investors and growth opportunities.",
    },
  ];





  const stats = [
  { number: '100+', label: 'Live Personal Meetings', percent: 80 },
  { number: '300+', label: 'Online per day consultation', percent: 90 },
  { number: '250+', label: 'Video Calls Consultancy', percent: 75 },
];

  const timeline = [
    { year: "2016", location: "We Available in Noida" },
    { year: "", location: "We Available in Delhi" },
    { year: "2018", location: "We Available in Gurgaon" },
    { year: "", location: "We Available in Gujrat" },
    { year: "2019", location: "We Available in Mumbai" },
  ];


  const logos = [
  { icon: <FaChartLine size={50} color="#111" />, text: "Developing Financing Options" },
  { icon: <FaLightbulb size={50} color="#111" />, text: "Improving Your Business Planning" },
  { icon: <FaCalculator size={50} color="#111" />, text: "Financial Modeling and Analytics" },
  { icon: <FaHandshake size={50} color="#111" />, text: "Delivering Financing Solutions" },
];
  return (
    <>
      {/* 🔹 Fixed Background Section */}
      <section className="fixed-bg-section3">
        <div className="overlay3">
          <div className="text-content3">
            <h2>बिज़नेस की एक्सक्लूसिव स्ट्रैटेजी</h2>
            <h3>
              सिर्फ <span>BusinessCare</span> पर
            </h3>
            <p>
              आधुनिक मार्केटिंग के नए दौर में, हम आपके ब्रांड को सही दिशा, सही ऑडियंस और
              स्मार्ट ग्रोथ स्ट्रैटेजी के साथ आगे बढ़ाते हैं।
            </p>
          <Link to="/Contact"> <button className="cta-btn">Get Started</button></Link>
          </div>
        </div>
      </section>

      {/* 🔹 About Sections */}
     
        {/* 🟧 Section 1=============css-310=============== */}
        <section className="about-section" >
          <h2 className="section-heading">ABOUT US</h2>
          <div className="about-content">
            {/* <div className="about-image">
              <img
                src="./mt1.webp"
                alt="About BusinessCare"
              />
            </div> */}
            <div className="about-text">
              <p>
               Business Care was started by great minds in the media industry who have benefited thousands of
business owners with their knowledge and wisdom. Business Care is such a wonderful research and initiative of these two scholars who have made their career in the media, appearing on many big TV channels.Founders of Business Care Miss Pooja Sharma is a media industry professional and television celebrity.become entrepreneurs, and Mr. Ankur Bansal, who are very young in age. In 12 years, the company hasregistered the title to open 14 companies. But their personality and knowledge make them adifferent person in the country.At a young age, they have become a well-known name of the country today.These two young minds have advanced knowledge of establishing a product in the market. The
The vast knowledge of these two is so great that by establishing many companies, they have broughtthem to a point.
              </p>
            
            </div>
          </div>
        </section>


          <section className="enhance-timeline-section">
      <div className="container">
    
        <div className="left-side">
          <h2>ENHANCE YOUR POWERS</h2>
          <h3>Choose Correct Platform</h3>
          <p>
            Business is <b>New or Old</b> — We believe according to the need of the product we
            design marketing strategy for business owners. Through <strong>Business Care</strong>,
            we redefine the definition of business marketing. Now a business owner will not be confused
            in marketing business plans. Our expert team provides top services including yearly strategy
            with low investment.
          </p>
          <ul className="services-list">
            <li>💼 Valuation Services</li>
            <li>📊 Development of Financial Models</li>
            <li>🏦 Corporate Financial Advisory</li>
            <li>🤝 Deal Structuring</li>
            <li>📋 Feasibility Studies & Business Plans</li>
          </ul>

        <div className="stats">
  {stats.map((stat, idx) => (
    <div key={idx} className="stat-item">
      <div className="stat-circle">
        <svg className="progress-circle" viewBox="0 0 36 36">
          <path
            className="circle-bg"
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle"
            strokeDasharray={`${stat.percent}, 100`}
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35" className="circle-text">{stat.number}</text>
        </svg>
      </div>
      <p>{stat.label}</p>
    </div>
  ))}
</div>

        </div>

      <div className="right-side">
  <div className="timeline-container">
  {timeline.map((item, idx) => (
    <div key={idx} className="timeline-item">
      <div className="timeline-text">{item.location}</div>
      <div className="timeline-dot-container">
        <div className="timeline-line"></div>
        <div className="timeline-dot">{item.year}</div>
      </div>
    </div>
  ))}
</div>

</div>

      </div>
    </section>

       <section className="future-section">
      <div className="container">
        {/* Left Side */}
        <div className="left">
          <h2>Future is brighter when you’re more prepared</h2>
          <p>We help you weather today's uncertainty through our best team needs.</p>
          <button className="border-btn">Our Process</button>
        </div>

        {/* Right Side */}
        <div className="right">
          <div className="logo-grid">
            {logos.map((item, index) => (
              <div className="logo-item" key={index}>
                {item.icon}
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

         <div className="info-section">
      
      <div className="info-box">
        <h2>01</h2>
        <h3>We are able to give truly independent advice</h3>
        <p>Capitalize on low hanging fruit to identify a ballpark value added.</p>
        <span className="tag">CELEBRITY COACHES</span>
      </div>

      <div className="info-box">
        <h2>02</h2>
        <h3>Financial advice based on your goals</h3>
        <p>Override the digital divide with additional clickthroughs from DevOps.</p>
      </div>

      <div className="info-box">
        <h2>03</h2>
        <h3>We’re here to help during market volatility</h3>
        <p>Nanotechnology immersion along the information highway will close loop.</p>
      </div>

    </div>

      
    </section>

    <section className="sales-section">
      <div className="sales-left">
        <img src="./mt1.webp" alt="Business" />
      </div>

      <div className="sales-right">
        <h2>Create more Sales and grow your business</h2>
        <p>
          We can help you with picking out the Best strategy for your company and its work.
        </p>
        <a href="#" className="view-more">View More →</a>
      </div>
    </section>

      <section className="operation-section">
      {/* LEFT CONTENT */}
      <div className="operation-left">
        <h2>
          The operational processes of a business are what drives the business
          itself
        </h2>

        <p>
          We're here to inform which tactics need funding and which are drains
          on resources.
        </p>

        {/* PROGRESS ITEMS */}
        <div className="progress-item">
          <span>Live Personal Meetings with Celebrity Coaches</span>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "90%" }}></div>
          </div>
          <b>90%</b>
        </div>

        <div className="progress-item">
          <span>Online per day consultation</span>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "85%" }}></div>
          </div>
          <b>85%</b>
        </div>

        <div className="progress-item">
          <span>Video Calls Consultancy Meetings</span>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "80%" }}></div>
          </div>
          <b>80%</b>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="operation-right">
        <img src="./mt1.webp" alt="Business" />
      </div>
    </section>


       <section className="case-section">
      <div className="case-header">
        <h2>Case Studies</h2>
        <p>We explore some of the latest trends and strategies</p>
      </div>

      <div className="case-grid">
        <div className="case-item">
          <img src="./mt1.webp" alt="Case Study 1" />
        </div>

        <div className="case-item">
          <img src="./mt1.webp" alt="Case Study 2" />
        </div>

        <div className="case-item">
          <img src="./mt1.webp" alt="Case Study 3" />
        </div>
        
      </div>
       {/* BUTTON */}
      <div className="case-btn-wrapper">
        <a href="#" className="case-btn">View More</a>
      </div>
    </section>

       <section className="innovation-section">
      {/* LEFT IMAGE */}
      <div className="innovation-left">
        <img src="./mt1.webp" alt="Innovation" />
      </div>

      {/* RIGHT CONTENT */}
      <div className="innovation-right">
        <h2>Be at the forefront of the innovation</h2>
        <p>
          Your goals are individual. We believe business advice should be too, 
          so we help your business thrive in this work environment.
        </p>

        <a href="#" className="watch-btn">
          <FaPlay className="play-icon" /> Watch Story
        </a>
      </div>
    </section>
{/*       
        <section className="about-section" >
          <h2 className="section-heading">ENHANCE YOUR POWERS</h2>
          <div className="about-content reverse">
            <div className="about-image">
              <img
                src="./mt1.webp"
                alt="Enhance Business"
              />
            </div>
            <div className="about-text">
              <p>
                Whether your business is <b>new or established</b>, we design customized marketing
                strategies tailored to your product’s needs.
              </p>
              <ul>
                <li>Valuation & Financial Advisory</li>
                <li>Development of Financial Models</li>
                <li>Deal Structuring & Feasibility Studies</li>
                <li>Corporate Strategy & Planning</li>
              </ul>
            </div>
          </div>
        </section>







        <section className="process-section" >
          <h2 className="process-heading">OUR PROCESS</h2>
          <p className="process-subtitle">
            We help you weather today’s uncertainty with our best-in-class financial strategies.
          </p>

          <div className="process-container">
            {steps.map((step, index) => (
              <div className="process-card" key={index}>
                <div className="process-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

 */}



{/* 
        <section className="enhance-section" >
          <div className="enhance-overlay">
            <div className="enhance-container">
       
              <div className="enhance-image">
                <img
                  src="./mt1.webp"
                  alt="Enhance Your Powers"
                />
              </div>

              <div className="enhance-text">
                <h2>ENHANCE YOUR POWERS</h2>
                <h3>Choose Correct Platform</h3>
                <p>
                  Business is <b>New or Old</b> — we believe every product needs a
                  customized marketing plan. At <strong>Business Care</strong>, we
                  design strategies tailored to your needs. Through Business Care,
                  we redefine marketing so that no business owner remains confused
                  about where to start.
                </p>
                <p>
                  Our expert team provides yearly marketing strategies with{" "}
                  <strong>low investment</strong> and high impact.
                </p>

                <ul className="enhance-list">
                  <li>💼 Valuation Services</li>
                  <li>📊 Development of Financial Models</li>
                  <li>🏦 Corporate Financial Advisory</li>
                  <li>🤝 Deal Structuring</li>
                  <li>📋 Feasibility Studies & Business Plans</li>
                </ul>

                <div className="stats">
                  <div className="stat">
                    <h3>100+</h3>
                    <p>Live Meetings with Celebrity Coaches</p>
                  </div>
                  <div className="stat">
                    <h3>300+</h3>
                    <p>Online Consultations per day</p>
                  </div>
                  <div className="stat">
                    <h3>250+</h3>
                    <p>Video Call Meetings</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section> */}






        {/* 🟧 Section 3 */}
        {/* <section className="about-section" >
          <h2 className="section-heading">OUR JOURNEY</h2>
          <div className="about-content">
            <div className="about-image">
              <img
                src="./mt1.webp"
                alt="Our Journey"
              />
            </div>
            <div className="about-text">
              <p>
                Our journey started in <strong>2016</strong> from Noida and expanded to Delhi,
                Gurgaon, Gujarat, and Mumbai. With 100+ live personal meetings, 300+ daily online
                consultations, and 250+ video call sessions — we’ve built a strong network of
                business mentors and celebrity coaches.
              </p>
              <p>
                <strong>Future is brighter</strong> when you're more prepared — and that’s what we
                help you achieve through advanced planning and powerful business strategies.
              </p>
            </div>
          </div>
        </section> */}

        {/* 🟧 Section 4 */}
        {/* <section className="about-section" >
          <h2 className="section-heading">OUR PROCESS</h2>
          <div className="about-content reverse">
            <div className="about-image">
              <img
                src="./mt1.webp"
                alt="Process"
              />
            </div>
            <div className="about-text">
              <p>
                We help you weather uncertainty through our expert team’s strategic guidance:
              </p>
              <ul>
                <li>Developing Financing Options</li>
                <li>Improving Business Planning</li>
                <li>Financial Modeling and Analytics</li>
                <li>Delivering Financing Solutions</li>
              </ul>
              <p>
                We provide independent, expert advice that adds measurable value to your business.
              </p>
            </div>
          </div>
        </section> */}

        {/* 🟧 CTA */}
        {/* <section className="cta-section" >
          <div className="cta-overlay">
            <h2>Be at the forefront of Innovation</h2>
            <p>
              Your goals are unique — and so is our strategy. Let’s take your business to the next
              level together.
            </p>
           <Link to="/Contact"> <button className="cta-btn">Contact Us</button></Link>
          </div>
        </section> */}
   
    </>
  );
};

export default About;
