import React,{ useRef, useEffect ,useState}  from 'react';
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa"; // react-icons का इस्तेमाल
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../Style/index.css"



const Count = ({ end, duration = 1500, label }) => {
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
  { img: "/assets/logo1.png", text: "NEW STARTUPS MARKETING STRATEGY", button: "Learn More" },
  { img: "/assets/logo2.png", text: "OLD BUSINESS GROWTH PROGRAME STRATEGY", button: "Learn More" },
  { img: "/assets/logo3.png", text: "HOW TO FIND YOUR TARGET AUDIENCE", button: "Learn More" },
  { img: "/assets/logo4.png", text: "HOW TO GROW YOUR SALES", button: "Learn More" },
  { img: "/assets/logo5.png", text: "LOW INVESTMENT BIG BUZZ", button: "Learn More" },
  { img: "/assets/logo6.png", text: "HOW TO CHOOSE RIGHT MEDIA PLATFORMS", button: "Learn More" },
];


  const images = [
    "/mt1.webp",
    "/mt1.webp",
    "/mt1.webp",
    "/mt1.webp",
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


       <section className="expansion-section">

      {/* TOP TEXT */}
      <div className="expansion-top-text">
        ज्यादातर बिजनेसमैन बिजनेस एक्सपेंशन के लिए पुरानी तकनीकों का इस्तेमाल करते हैं। जिसके चलते बिजनेस लॉस में चले जाते हैं, व्यापार की एक छोटी सी रणनीति की गलतियाँ आपको घाटे में ला सकती है।
      </div>

      {/* BOTTOM LEFT-RIGHT */}
      <div className="expansion-bottom">

        {/* LEFT CONTENT */}
        <div className="expansion-left">
          <h3>Come To Us And We Will Show You How To Take Your Company To New Heights</h3>
          <ul>
            <li>Media placements strategy</li>
            <li>Television media promotion & advertising</li>
            <li>TV commercial placements on national tv channels as per the product</li>
            <li>TV ad films development as per the product</li>
            <li>Concrete innovative ideas for tv commercial ads</li>
            <li>Radio ads planning & placements</li>
            <li>IPL specials promotions for exclusive products</li>
            <li>OTT platforms promotions</li>
            <li>Airports promotions pan india</li>
            <li>Metro promotions pan india</li>
            <li>PVR cinemas pan india</li>
            <li>In films tv serials promotions & integrations</li>
          </ul>
          <button className="btn-primary">Let's Work Together</button>
        </div>

        {/* RIGHT SLIDER */}
        <div className="expansion-right">
          <Slider {...sliderSettings}>
            {sliderImages.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`Slide ${index + 1}`} className="slider-img"/>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
    <section>
          <div className="logos-section">
      {logosData.map((logo, index) => (
        <div key={index} className="logo-card">
          <img src={logo.img} alt={logo.text} className="logo-image" />
          <p className="logo-text">{logo.text}</p>
          <button className="logo-button">{logo.button}</button>
        </div>
      ))}
    </div>
    </section>
    <section>
        <div className="why-fail-section">
      <div className="section-image">
        <img src="/mt1.webp" alt="Entrepreneurship" />
      </div>
      <div className="section-content">
        <h2>Why Entrepreneurship Fail?</h2>
        <p>
        Insufficient marketing, wrong platforms, a lacklustre business plan or even wrong legal structure can prevent your business from thriving. The reasons why many entrepreneurs fail early are endless, some being unique tothe business owner. So, don’t waste time meet us we will design a complete strategy to make you king in yourindustry, to grow your business sales, enhance your distribution network.
        </p>
        <button>Get Appointment</button>
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
              <li>Business Growth Planning</li>
              <li>Marketing & Media Strategy</li>
            </ul>
            <ul>
              <li>Brand Building Techniques</li>
              <li>Customer Reach Expansion</li>
            </ul>
          </div>

          <button className="business-btn">Book Consultation</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="business-right">
          <img src="/mt1.webp" alt="Business Strategy" />
        </div>

      </div>
    </section>
       <section className="brand-section">
      <div className="brand-container">

        {/* LEFT IMAGE */}
        <div className="brand-left">
          <img src="/mt1.webp" alt="Business Strategy" />
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

          <button className="brand-btn">Link</button>
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
          <button className="media-btn">Learn More</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="media-right">
          <img src="/mt1.webp" alt="Media Strategy" className="media-image" />
        </div>

      </div>
    </section>
     <section className="gallery-section">
      <h2 className="gallery-heading">Gallery</h2>
      <div className="gallery-container">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
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
          <button className="media-platform-btn">Call Now</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="media-platform-right">
          <img src="/mt1.webp" alt="Media Platforms" className="media-platform-image" />
        </div>

      </div>
    </section>

      <section className="low-investment-section">
      <div className="low-investment-container">

        {/* LEFT CONTENT */}
        <div className="low-investment-left">
          <h2 className="low-investment-heading">Low Investment, Big Buzz</h2>
          <p className="low-investment-text">
            Can your business flourish without spending a lot of money? What is the best way by which money will be spent less, and your name will be covered in the top 10.
          </p>
          <button className="low-investment-btn">Call Now</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="low-investment-right">
          <img src="/mt1.webp" alt="Low Investment Strategy" className="low-investment-image" />
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
