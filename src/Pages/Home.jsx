import React,{ useRef, useEffect ,useState}  from 'react';
import Slider from "react-slick";
   import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa"; // react-icons का इस्तेमाल
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Testimonials from './Testimonials';
import Purpose from './Purpose';
import { FaRocket, FaChartLine, FaUsers, FaShoppingCart, FaBullhorn, FaLayerGroup,} from "react-icons/fa";
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


  const videos = [
  "https://www.youtube.com/embed/9Hqvk_Cz9bY",
  "https://www.youtube.com/embed/m8Pil2KpN-o",
  "https://www.youtube.com/embed/Tmf0O1G3MKA",
  "https://www.youtube.com/embed/ZB6Nzw9WP7k",
  "https://www.youtube.com/embed/Xg0cenE-PW8",
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
 

<Helmet>
  <title>
    Business Care TV Show | India’s #1 MSME Growth & Business Strategy Platform
  </title>

  <meta
    name="description"
    content="India's First B2B MSME Growth & Business Owners Growth TV Show Platform. Business Care is featured on top national channels like Aaj Tak, Zee News, CNBC Prime, Times Now & more."
  />

  <meta
    name="keywords"
    content="Business Care TV show, MSME growth platform India, business marketing strategy, TV advertising India, startup growth, business coaching India"
  />

  <meta name="author" content="Business Care" />

  <meta name="robots" content="index, follow" />

  {/* ✅ CANONICAL */}
  <link rel="canonical" href="https://businesscare.org.in/" />

  {/* ✅ OPEN GRAPH (SOCIAL SHARE) */}
  <meta property="og:title" content="Business Care TV Show | MSME Growth Platform India" />
  <meta
    property="og:description"
    content="Grow your business with India's leading TV show Business Care. Featured on top TV channels & global platforms."
  />
  <meta property="og:url" content="https://businesscare.org.in/" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://businesscare.org.in/og-image.jpg" />

  {/* ✅ TWITTER */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Business Care TV Show | MSME Growth Platform India" />
  <meta
    name="twitter:description"
    content="India's #1 business growth TV show helping MSMEs & startups scale fast."
  />
  <meta name="twitter:image" content="https://businesscare.org.in/og-image.jpg" />

  {/* ✅ ORGANIZATION SCHEMA */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Business Care",
      "url": "https://businesscare.org.in",
      "logo": "https://businesscare.org.in/logo.png",
      "sameAs": [
        "https://www.youtube.com/",
        "https://www.facebook.com/",
        "https://www.instagram.com/"
      ]
    }
    `}
  </script>

  {/* ✅ TV SHOW SCHEMA */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "TVSeries",
      "name": "Business Care TV Show",
      "description": "India's First B2B MSME Growth & Business Owners Growth TV Show Platform.",
      "url": "https://businesscare.org.in",
      "inLanguage": "en",
      "publisher": {
        "@type": "Organization",
        "name": "Business Care"
      }
    }
    `}
  </script>
</Helmet>
 
 <section className="hero-section">

      <div className="hero-inner">

        {/* LEFT IMAGE */}
        <div className="hero-left">
          <img
            src="./mt1.webp"
             alt="Business Care Professional Corporate Services"
  title="Business Care"
  className="hero-image"
  loading="eager"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="hero-right">
       {/* <Link to="/pooja-sharma-business-care">  <h2 className="hero-title" style={{fontWeight:"500"}}>MEET LIVE WITH INDIA'S CELEBRITY BUSINESS COACHES</h2></Link>  */}
       <Link to="/pooja-sharma-business-care">  <h2 className="hero-title" style={{fontWeight:"500"}}>Business Care Founder</h2></Link> 

          <h3 className="coach-names">Ms. Pooja Sharma – Founder of Business Care TV Show <br/><span style={{color:"#340303"}}>&</span><br />Co-Founder Mr. Ankur Bansal</h3>

          <p className="coach-subtitle">CELEBRITY COACHES</p>

          <p className="hero-text1">
            अब बदलेगा इंडिया का बिज़नेस, आ गया है Business Care,<br />
            पुरानी पद्धति छोड़ो नयी रणनीति अपनाओ
          </p>

          <p className="hero-text">
            Are you a Business Owner Trying to Increase Sales?
            We are Here to Plan your Marketing Strategy
          </p>

          <Link to="/contact" className="btn-primary">For Appointment</Link>
        </div>
      </div>




       <section className="telecasting">
      <div className="container">

        <h2 className="telecasting-heading">
          Business Care – Now Telecasting Across India & 
          Launching Soon in USA, UAE & Oman
        </h2>

       
        <p className="telecasting-subtext">
          The Iconic Business Television Show “Business Care” is proudly 
          telecasting on India’s leading national channels including 
          Aaj Tak, CNBC Prime, Times Now, News18, Zee News, Zee TV, 
          &TV, Anmol TV and streaming worldwide on ZEE5.
        </p>

       
        <div className="channel-logos1">
          <img src="/c31.jfif" alt="Aaj Tak"  loading="lazy"/>
          <img src="/c32.jfif" alt="CNBC Prime" loading="lazy"/>
          <img src="/c1.webp" alt="Times Now" loading="lazy"/>
          <img src="/c40.jfif" alt="News18" loading="lazy"/>
          <img src="/c5.jfif" alt="Zee News" loading="lazy"/>
          <img src="/c7.png" alt="ZEE5" loading="lazy"/>
           <img src="/c41.jfif" alt="News18" loading="lazy"/>
             <img src="/c42.jfif" alt="News18" loading="lazy"/>
          <img src="/c9.png" alt="Zee News" loading="lazy"/>
          <img src="/c10.jfif" alt="ZEE5" loading="lazy"/>
          <img src="/c37.jfif" alt="CNBC Prime" loading="lazy"/>
          <img src="/c38.jfif" alt="Times Now" loading="lazy"/>
          <img src="/c13.png" alt="News18" loading="lazy"/>
          <img src="/c35.jfif" alt="Zee News" loading="lazy"/>
          <img src="/c15.jfif" alt="ZEE5" loading="lazy"/>
           <img src="/c36.jfif" alt="News18" loading="lazy"/>
          <img src="/c17.png" alt="Zee News" loading="lazy"/>
          <img src="/c18.jfif" alt="ZEE5" loading="lazy"/>
          
        </div>



          {/* <h2 className="telecasting-heading2" >
         Coming soon 
        </h2>
      

      
        <p className="telecasting-subtext2">
         Times Now / Zee Business/ ET Now / TV Today / Colors / Zee5  and many more platform
 Business Care Program Launching soon in USA and Middle East on 
Zee TV
        </p>

      
        <div className="channel-logos2"  >
          <img src="/c21.png" alt="Aaj Tak" loading="lazy"/>
          <img src="/c22.jfif" alt="CNBC Prime" loading="lazy"/>
          <img src="/c23.png" alt="Times Now" loading="lazy"/>
          <img src="/c24.png" alt="News18" loading="lazy"/>
          <img src="/c25.jfif" alt="Zee News" loading="lazy"/>
          <img src="/c26.png" alt="ZEE5" loading="lazy"/>
        </div>
 <p className="telecasting-subtext timing-section">
  <strong>Channel – Zee TV USA</strong><br />
  <span>08:30 AM ET (Sat or Sun)</span><br />
  <span>10:30 AM ET (Sat)</span><br /><br />

  <strong>Channel – Zee TV MENA (UAE, Saudi, Oman, Bahrain, Qatar, Kuwait)</strong><br />
  <span>07:30 AM UAE Time</span><br />
  <span>08:00 AM UAE Time</span>
</p>

    
        
        <p className="telecasting-footer">
          Expanding its global footprint, Business Care is all set to 
          launch soon in the United States, United Arab Emirates, and Oman, 
          taking India’s No.1 Business TV Show to an international audience 
          and strengthening its global business presence.
        </p> */}

      </div>
    </section>

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

 <Testimonials />
 {/* <section className="success-section">

 

<h1 className="success-main-heading">
  <Link to="/businesscare-successstory-testimonials" className="heading-link">
    <span className="black-text">Top Successful</span>{" "}
    <span className="orange-text">Story</span>
  </Link>
</h1>

  <div className="success-container">

  
    <div className="success-text">
      <h2>
        90% <span>Successful Ratio</span>
      </h2>

     
      <p className="testimonial">
        I am extremely grateful and truly happy to be a part of Business Care. My experience with the Business Care TV Show has been incredibly beneficial, not just for me personally but also for my brand. Through their platform, I have been able to connect with reliable and well-established dealers and distributors, which has significantly contributed to my business growth.

What impressed me the most is the consistent support and responsiveness of their team. Whenever I needed assistance or guidance, they were always available and proactive in helping me move forward.

For the first time, Business Care has given me a platform where I can present my ideas, share my journey, and showcase my brand in front of a nationwide audience. This opportunity is truly invaluable, and I am excited about the new possibilities it brings.

I sincerely thank the entire Business Care team for their dedication and support. I highly recommend their platform to anyone looking to grow their business and expand their reach.
      </p>

      <h3>Mr. Sanjeev Kumar Gupta</h3>
      <p className="designation">Owner – Summercool</p>

     
      <p className="signature">Sanjeev Kumar Gupta</p>
    </div>

    <div className="success-image">
      <img src="/h3.jfif" alt="Sanjeev Kumar Gupta" />
    </div>

  </div>
</section> */}

       


<section className="international-section">
  {/* Heading with border */}
  <div className="heading-box">
  <Link to="/business-care/international-operations-trade" style={{ textDecoration: "none", color: "#d1b123" }}>
    <h2>International Operations And Trade</h2>
  </Link>
  </div>

  {/* Videos */}
  <div className="videos-column">
    <div className="video-wrapper">
      <iframe
        src="https://www.youtube.com/embed/Xg0cenE-PW8"
        title="Video 1"
        frameBorder="0"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    <div className="video-wrapper">
      <iframe
        src="https://www.youtube.com/embed/nmGjvNz2Tgw"
        title="Video 2"
        frameBorder="0"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    <div className="video-wrapper">
      <iframe
        src="https://www.youtube.com/embed/KUAk1jqn6yw"
        title="Video 3"
        frameBorder="0"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>


     <div className="video-wrapper">
      <iframe
        src="https://www.youtube.com/embed/qFwWAnjr7tQ"
        title="Video 3"
        frameBorder="0"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>


     <div className="video-wrapper">
      <iframe
        src="https://www.youtube.com/embed/ImOiZUELJc0"
        title="Video 3"
        frameBorder="0"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    <div className="video-wrapper">
      <iframe
        src= "https://www.youtube.com/embed/VCjA0d9OcG4"
        title="Video 3"
        loading="lazy"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>



    <div className="video-wrapper">
      <iframe
        src= "https://www.youtube.com/embed/mmpu2_6cXmo"
        title="Video 3"
        frameBorder="0"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>


     <div className="video-wrapper">
      <iframe
        src= "https://www.youtube.com/embed/yzfJ5HyicpY"
        title="Video 3"
        frameBorder="0"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

     <div className="video-wrapper">
      <iframe
        src= "https://www.youtube.com/embed/xZnS9AtGi8k"
        title="Video 3"
        frameBorder="0"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>


     <div className="video-wrapper">
      <iframe
        src= "https://www.youtube.com/embed/qFwWAnjr7tQ"
        title="Video 3"
        frameBorder="0"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>




      <div className="video-wrapper">
      <iframe
        src= "https://www.youtube.com/embed/7bEXxaRY1mI"
        title="Video 3"
        frameBorder="0"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>



     <div className="video-wrapper">
      <iframe
        src= "https://www.youtube.com/embed/nmGjvNz2Tgw"
        title="Video 3"
        frameBorder="0"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

     <div className="video-wrapper">
      <iframe
        src= "https://www.youtube.com/embed/bJ2S3FR40WQ"
        title="Video 3"
        frameBorder="0"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>


    <div className="video-wrapper">
      <iframe
        src= "https://www.youtube.com/embed/oDPARWKhGLo"
        title="Video 3"
        frameBorder="0"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>



      <div className="video-wrapper">
      <iframe
        src= "https://www.youtube.com/embed/Fr4muE-65S4?start=2"
        title="Video 3"
        frameBorder="0"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

     <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/qFwWAnjr7tQ"

            title="Video 3"
            frameBorder="0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>



        
<div className="video-wrapper">
  <iframe
src="https://www.youtube.com/embed/G8ai54ObAaU"
    title="Video 3"
    frameBorder="0"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>




<div className="video-wrapper">
  <iframe
src="https://www.youtube.com/embed/pRixU0hN2Dg"
    title="Video 3"
    frameBorder="0"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>



<div className="video-wrapper">
  <iframe
src="https://www.youtube.com/embed/J5PwSYZnRr4"
    title="Video 3"
    frameBorder="0"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>




<div className="video-wrapper">
  <iframe
src="https://www.youtube.com/embed/vlb1fcsW7oY"
    title="Video 3"
    frameBorder="0"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>


<div className="video-wrapper">
  <iframe
src="https://www.youtube.com/embed/cczqrx-KufI"
    title="Video 3"
    frameBorder="0"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>



<div className="video-wrapper">
  <iframe
src="https://www.youtube.com/embed/ydHR_VXoXkI"
    title="Video 3"
    frameBorder="0"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>


<div className="video-wrapper">
  <iframe
src="https://www.youtube.com/embed/U4kJTXQbBwQ"
    title="Video 3"
    frameBorder="0"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

  

   <div className="video-wrapper">
  <iframe
    src="https://www.youtube.com/embed/bPz6amQzdqE"
    title="Video 3"
    frameBorder="0"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>


  </div>
</section>






         <section className="bcw-section">
     <Link to="/video"> <h2 className="bcw-heading">Business Care Winners</h2></Link>

      <div className="bcw-video-container">
        <iframe
          src="https://www.youtube.com/embed/w5YY9qyhlw4"
          title="Business Winner 1"
          frameBorder="0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          src="https://www.youtube.com/embed/Xv1Pw7zMiEM"
          title="Business Winner 2"
          frameBorder="0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>


  
  <iframe
src="https://www.youtube.com/embed/ydHR_VXoXkI"
    title="Video 3"
    frameBorder="0"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>




  <iframe
src="https://www.youtube.com/embed/U4kJTXQbBwQ"
    title="Video 3"
    frameBorder="0"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>


    
      <iframe
src="https://www.youtube.com/embed/qk7v7xYwNCg"
    title="Video 3"
    frameBorder="0"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>


    <iframe
src="https://www.youtube.com/embed/owWD6ONLnCg"
    title="Video 3"
    frameBorder="0"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>




      </div>
    </section>

      

      
   <section className="video-section4" 
 
>
  <div className="video-container4" 
   
  >

    {/* TOP HEADING */}
    <Link to="/service" style={{ textDecoration:"none",}}>  
    <h2 
      className="video-heading4" 
      style={{ 
        textAlign: "center", 
        marginBottom: "20px",
        fontWeight: "700",
        padding:"10px",
        border:"2px solid #fff",
      
  
      }}
    >
  Happy Clients video <span>testimonials</span>
    </h2></Link>

    {/* VIDEO GRID */}
    <div className="video-grid4">
      {videos.map((src, i) => (
        <div key={i} className="video-item4">

          {/* Check YouTube / MP4 */}
          {src.includes("youtube.com") || src.includes("youtu.be") ? (
            <iframe
              className="video-player4"
              src={src}
              title={`YouTube Video ${i + 1}`}
              frameBorder="0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <video
              className="video-player4"
              controls
              playsInline
              preload="metadata"
              src={src}
            >
              Your browser does not support the video tag.
            </video>
          )}

        </div>
      ))}
    </div>
    
  </div>
</section>

<section className="services-section3">
 <Link to="/service"> <h2 className="services-heading3">Our Services</h2></Link>

  <ul className="services-list3">
    <li>Product Teleshopping Making</li>
    <li>TV Commercials Advts Making</li>
    <li>Interview in Business Care Tv Show</li>
    <li>Dealership & Distributorship Making Plan</li>
  </ul>
</section>
 <section className="business-care-section">
  <div className="business-care-container">

    <h2 className="business-care-heading">
      Why <span>Business Care?</span>
    </h2>

    <p className="business-care-text">
     Because today businesses don’t just need promotion—they need the right direction,
      visibility, and growth strategy. Business Care brings all of this on one powerful platform, 
      combining media, branding, and business expansion.
    </p>

    <p className="business-care-text">
   It helps brands gain national and global visibility, connect with investors, 
   dealers, and partners, and build a strong market presence through TV and
    strategic planning.
    </p>

    <p className="business-care-text">
      In simple words, Business Care is not just a service—it’s a complete growth ecosystem for MSMEs, startups, and business owners.
    </p>

    <div className="business-care-quote">
      “If you want to grow faster, reach wider, and build a powerful brand—Business Care is the platform.”
    </div>

  </div>
</section>


<Purpose />








    <section  className="logos-wrapper1">
  <div className="logos-section1">
    {logosData.map((item, index) => {
      const Icon = item.icon;

      return (
        <div className="logo-card1" key={index}>
          <Icon size={70} color="#EBB02D" />
          <h3>{item.text}</h3>
          <button>{item.button}</button>
        </div>
      );
    })}
  </div>
</section>


        <div className="why-fail-section">
      <div className="section-image">
        <img src="/slide/p1.webp" alt="Entrepreneurship" loading="lazy"/>
      </div>
      <div className="section-content">
       <Link to="/why-us"> <h2>Why Entrepreneurship Fail?</h2></Link>
        <p>
        Insufficient marketing, wrong platforms, a lacklustre business plan or even wrong legal structure can prevent your business from thriving. The reasons why many entrepreneurs fail early are endless, some being unique tothe business owner. So, don’t waste time meet us we will design a complete strategy to make you king in yourindustry, to grow your business sales, enhance your distribution network.
        </p>
        <Link to="/service" className='button1' style={{textAlign:'center'}}>Get Appointment</Link>
      </div>
    </div>
  

       <section className="business-section">
      <div className="business-container">

        {/* LEFT CONTENT */}
        <div className="business-left">
          <h2 className="top-heading">
            BUSINESS CARE MAKING IMPOSSIBLE POSSIBLE
          </h2>

          <h3 className="bold-heading">
            Let's Change The Strategy. By India’s Most Recent Business Coaches & Business Strategy Media Experts SINCE 18 YEARS
          </h3>

          {/* <p className="small-text">
            Business Advisor Counsellor & Consultant.<br />
            Pan India More Than Thousand Business Owners Taking His Advises For Business Enhancement
          </p> */}

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

          <Link to="/contact" className="business-btn"> LET'S WORK TOGETHER</Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="business-right">
          <img src="/slide/p2.webp" alt="Business Strategy" loading="lazy"/>
        </div>

      </div>
    </section>


    
       <section className="brand-section">
      <div className="brand-container">

        {/* LEFT IMAGE */}
        <div className="brand-left">
          <img src="/slide/p3.webp" alt="Business Strategy" loading="lazy"/>
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

          <Link to="/contact" className="brand-btn">Get Appointment</Link>
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
          <Link to="/contact" style={{textAlign:"center"}} className="media-btn">Get Appointment</Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="media-right">
          <img src="slide/p4.webp" alt="Media Strategy" className="media-image" loading="lazy"/>
        </div>

      </div>
    </section>
     <section className="gallery-section1">
     <Link to="/gallery"> <h2 className="gallery-heading1">Gallery</h2></Link>
      <div className="gallery-container1">
        {images.map((img, index) => (
          <div key={index} className="gallery-item1">
            <img src={img} alt={`Gallery ${index + 1}`} loading="lazy"/>
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
         <a href="tel:+918076151724">
  <button className="media-platform-btn" >CALL NOW</button>
</a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="media-platform-right">
          <img src="/slide/p9.webp" alt="Media Platforms" className="media-platform-image" loading="lazy"/>
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
            <a href="tel:+918076151724">
  <button className="media-platform-btn" style={{backgroundColor:"#51073B",color:"#fff"}}>CALL NOW</button>
</a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="low-investment-right1">
          <img src="/slide/p10.webp" alt="Low Investment Strategy" className="low-investment-image1" loading="lazy"/>
        </div>

      </div>
    </section>

       <section className="goals-section">
      <div className="goals-container">

        <h2 className="goals-heading">
          YOUR GOALS ARE INDIVIDUAL. WE BELIEVE BUSINESS ADVICE SHOULD BE TOO.
        </h2>

        <Link to="/contact" className="goals-btn">
          TAKE THE NEXT STEP <FaArrowRight className="btn-icon" />
        </Link>

      </div>
    </section>
    </>
  );
};

export default Home;
