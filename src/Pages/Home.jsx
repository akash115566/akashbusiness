import React,{ useRef, useEffect ,useState}  from 'react';
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa"; // react-icons का इस्तेमाल
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {
  FaRocket,
  FaChartLine,
  FaUsers,
  FaShoppingCart,
  FaBullhorn,
  FaLayerGroup,
} from "react-icons/fa";

import "../Style/index.css"



const Count = ({ end, duration = 7500, label }) => {
  const ref = useRef(null);

  useEffect(() => {
    let start = 0;
    const target = Number(end);
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(ease * target);

      if (ref.current) ref.current.textContent = current.toLocaleString() + "+";

      if (progress < 1) requestAnimationFrame(step);
      else ref.current.textContent = target.toLocaleString() + "+";
    };

    requestAnimationFrame(step);
  }, [end, duration]);



  


  return (
    <div className="value-card">
      <div className="value-number" ref={ref}>0+</div>
      <div className="value-label">{label}</div>
    </div>
  );
};




  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const sliderImages = [
    // "https://via.placeholder.com/500x300?text=Slide+1",
    // "https://via.placeholder.com/500x300?text=Slide+2",
    // "https://via.placeholder.com/500x300?text=Slide+3"
  ];


  //====================//
const logosData = [
  { icon: FaRocket, text: "NEW STARTUPS MARKETING STRATEGY", button: "SEE MORE" },
  { icon: FaChartLine, text: "OLD BUSINESS GROWTH PROGRAM STRATEGY", button: "SEE MORE" },
  { icon: FaUsers, text: "HOW TO FIND YOUR TARGET AUDIENCE", button: "SEE MORE" },
  { icon: FaShoppingCart, text: "HOW TO GROW YOUR SALES", button: "SEE MORE" },
  { icon: FaBullhorn, text: "LOW INVESTMENT BIG BUZZ", button: "SEE MORE" },
  { icon: FaLayerGroup, text: "HOW TO CHOOSE RIGHT MEDIA PLATFORMS", button: "SEE MORE" },
];



  const images = [
    "/slide/p5.webp",
     "/slide/p6.webp",
   "/slide/p7.webp",
    "/slide/p8.webp",
  ];


const Home = () => {

   const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let start = 0;
    const end = 100;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 20);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.ceil(start));
    }, 20);

    return () => clearInterval(counter);
  }, []);


  const mediaPoints = [
    "Prime time TV channel placements",
    "Targeted digital & social media ads",
    "Strategic news & business media coverage",
    "Brand visibility across multi-platforms",
    "ROI-focused media planning",
  ];

  const duplicatedImages = [
    "./slide/pur1.webp",
      "./slide/pur2.webp",
    "./slide/pur3.webp",
      "./slide/pur4.webp",
        "/slide/pur4.webp",
  ];

    const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide every 2 seconds
   useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % images.length;
      setActiveIndex(nextIndex);
      if (carouselRef.current) {
        carouselRef.current.scrollTo({
          left: nextIndex * carouselRef.current.offsetWidth,
          behavior: "smooth",
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  // Manual button click
  const handleClick = (index) => {
    setActiveIndex(index);
    carouselRef.current.scrollTo({
      left: index * carouselRef.current.offsetWidth,
      behavior: "smooth",
    });
  };


  return (
    <>
 
 <section className="hero-section">

      <div className="hero-inner">

        {/* LEFT IMAGE */}
        <div className="hero-left">
          <img
            src="./mt1.webp"
            alt="Business Care"
            className="hero-image"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="hero-right">
          <h2 className="hero-title">MEET LIVE WITH INDIA'S CELEBRITY BUSINESS COACHES</h2>

          <h3 className="coach-names">Mr. Ankur Bansal<br />&<br />Ms. Pooja Sharma</h3>

          <p className="coach-subtitle">CELEBRITY COACHES</p>

          <p className="hero-text1">
            अब बदलेगा इंडिया का बिज़नेस, आ गया है Business Care,<br />
            पुरानी पद्धति छोड़ो नयी रणनीति अपनाओ
          </p>

          <p className="hero-text">
            Are you a Business Owner Trying to Increase Sales?
            We are Here to Plan your Marketing Strategy
          </p>

          <button className="btn-primary">For Appointment</button>
        </div>
      </div>

      {/* ⭐ COUNTERS CENTER BOTTOM ⭐ */}
      <div className="achievement-wrapper">
        <h3 className="ach-title">OUR ACHIEVEMENTS</h3>

        <div className="values-row">
          <Count end={150} label="Real Estate Project Done" />
          <Count end={1500} label="FMCG Startup Project Done" />
          <Count end={2500} label="Pan India Clients" />
        </div>
      </div>

    </section>

<section
  className="purpose-section"
 
>
  <div className="purpose-container">
    <div className="purpose-content">
      <h1>
        ज्यादातर बिजनेसमैन बिजनेस एक्सपेंशन के लिए{" "}
        <span>पुरानी तकनीकों</span> का इस्तेमाल करते हैं
      </h1>

      <p>
        जिसके चलते बिजनेस <strong>लॉस</strong> में चले जाते हैं।
        व्यापार की छोटी सी रणनीति की गलतियाँ आपको <strong>घाटे</strong> में ला सकती हैं।
      </p>

      <p className="english-text">
        Most business owners use outdated methods for business expansion, which can lead to losses.
        Even small strategy mistakes can put your business in a loss.
      </p>

      <div className="media-container">
        {/* Left Content */}
        <div className="media-left">
          <h2>Media Placement Strategy</h2>
          <ul>
            {mediaPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Right Slider */}
      <div className="media-right">
  <div className="carousel" ref={carouselRef}>
    {images.map((img, i) => (
      <div className="carousel-card" key={i}>
        <img src={img} alt={`slide ${i}`} />
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  </div>
</section>








    <section  className="logos-wrapper">
  <div className="logos-section">
    {logosData.map((item, index) => {
      const Icon = item.icon;

      return (
        <div className="logo-card" key={index}>
          <Icon size={50} color="#EBB02D" />
          <h3>{item.text}</h3>
          <button>{item.button}</button>
        </div>
      );
    })}
  </div>
</section>

    <section>
        <div className="why-fail-section">
      <div className="section-image">
        <img src="/slide/p1.webp" alt="Entrepreneurship" />
      </div>
      <div className="section-content">
        <h2>Why Entrepreneurship Fail?</h2>
        <p>
        Insufficient marketing, wrong platforms, a lacklustre business plan or even wrong legal structure can prevent your business from thriving. The reasons why many entrepreneurs fail early are endless, some being unique tothe business owner. So, don’t waste time meet us we will design a complete strategy to make you king in yourindustry, to grow your business sales, enhance your distribution network.
        </p>
        <button className='button1'>Get Appointment</button>
      </div>
    </div>
    </section>

       <section className="business-section">
      <div className="business-container">

        {/* LEFT CONTENT */}
        <div className="business-left">
          <h2 className="top-heading">
            BUSINESS CARE MAKING IMPOSSIBLE POSSIBLE
          </h2>

          <h3 className="bold-heading">
            Let's Change The Strategy. By India’s Most Recent Business Coaches & Business Strategy Media Experts SINCE 14 YEARS
          </h3>

          <p className="small-text">
            Business Advisor Counsellor & Consultant.<br />
            Pan India More Than Thousand Business Owners Taking His Advises For Business Enhancement
          </p>

          <div className="bullet-box">
            <ul>
              <li>Business Advisor Counsellor & Consultant.</li>
              <li>Pan India More Than Thousand Business Owners  Taking His Advises For Business Enhacement</li>
            </ul>
            <ul>
              <li>Business Owners Rely On Ankur Bansal ‘s Strategies.</li>
              <li>More Than Thousands of Busines Owners and team Implememting What Ankur ‘s Bansal Taught them.</li>
            </ul>
          </div>

          <button className="business-btn"> LET'S WORK TOGETHER</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="business-right">
          <img src="/slide/p2.webp" alt="Business Strategy" />
        </div>

      </div>
    </section>
       <section className="brand-section">
      <div className="brand-container">

        {/* LEFT IMAGE */}
        <div className="brand-left">
          <img src="/slide/p3.webp" alt="Business Strategy" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="brand-right">

          <h2 className="brand-main-heading">
            अब कम खर्चा मुनाफा ज्यादा,
            <br /> कम समय में बनाएं अपने ब्रांड को नंबर 1 ब्रांड
          </h2>

          <p className="brand-text">
            Are you a business owner trying to increase sales,  
            <br /> we are here to plan your marketing strategy:
          </p>

          <ul className="brand-bullets">
            <li>Product analysis</li>
            <li>Product research</li>
            <li>Product target audience strategy</li>
            <li>Product market strategy</li>
            <li>Product distribution</li>
            <li>Product dealer network management strategy</li>
            <li>Product sales growth strategy</li>
          </ul>

          <button className="brand-btn">Get Appointment</button>
        </div>

      </div>
    </section>

      <section className="auto-section">
      <div className="auto-container">
        <h1 className="auto-count">{count}+AWARDS</h1>
        <h2 className="auto-name"></h2>
        <p className="auto-text">
        WE ARE AVAILABLE IN DELHI, GURGAON, NOIDA, MUMBAI, GUJARAT & PONDICHERRY
        </p>
      </div>
    </section>
      <section className="media-section">
      <div className="media-container">

        {/* LEFT CONTENT */}
        <div className="media-left">
          <h2 className="media-heading">BIGGEST MEDIA STRATEGY CONSULTANTS</h2>
          <p className="media-text">
            By understanding the business and understanding the customer of the business, we
            prepare the business strategy. If your business is just crawling for many years, then we
            will help you to make your business a big brand of the country by our unique techniques
            and ideas.
          </p>
          <button className="media-btn">Get Appointment</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="media-right">
          <img src="slide/p4.webp" alt="Media Strategy" className="media-image" />
        </div>

      </div>
    </section>
     <section className="gallery-section1">
      <h2 className="gallery-heading1">Gallery</h2>
      <div className="gallery-container1">
        {images.map((img, index) => (
          <div key={index} className="gallery-item1">
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>


    <section className="media-platform-section">
      <div className="media-platform-container">

        {/* LEFT CONTENT */}
        <div className="media-platform-left">
          <h2 className="media-platform-heading">
            How to Choose the Right Media Platforms
          </h2>
          <p className="media-platform-text">
            If you do not do branding in business, how will you make a big brand?  
            Will you tell them to be bigger just by seeing the competitors,  
            or by doing what’s right marketing planning, you will make your brand bigger than them.
          </p>
          <button className="media-platform-btn">CALL NOW</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="media-platform-right">
          <img src="/slide/p9.webp" alt="Media Platforms" className="media-platform-image" />
        </div>

      </div>
    </section>

      <section className="low-investment-section1">
      <div className="low-investment-container1">

        {/* LEFT CONTENT */}
        <div className="low-investment-left1">
          <h2 className="low-investment-heading1">Low Investment, Big Buzz</h2>
          <p className="low-investment-text1">
            Can your business flourish without spending a lot of money? What is the best way by which money will be spent less, and your name will be covered in the top 10.
          </p>
          <button className="low-investment-btn1">CALL NOW</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="low-investment-right1">
          <img src="/slide/p10.webp" alt="Low Investment Strategy" className="low-investment-image1" />
        </div>

      </div>
    </section>

       <section className="goals-section">
      <div className="goals-container">

        <h2 className="goals-heading">
          YOUR GOALS ARE INDIVIDUAL. WE BELIEVE BUSINESS ADVICE SHOULD BE TOO.
        </h2>

        <button className="goals-btn">
          TAKE THE NEXT STEP <FaArrowRight className="btn-icon" />
        </button>

      </div>
    </section>
    </>
  );
};

export default Home;
