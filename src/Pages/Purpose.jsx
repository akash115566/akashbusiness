import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../Style/purpose.css";

const Purpose = () => {

  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = 0;

    const slide = setInterval(() => {
      if (carousel) {
        scrollAmount += 300;

        if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
          scrollAmount = 0;
        }

        carousel.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 2000);

    return () => clearInterval(slide);
  }, []);

  const mediaPoints = [
    "Media Placement Strategy",
    "Television media promotion & advertising",
    "TV commercial placements on national tv channels as per the product",
    "TV ad films development as per the product",
    "Concrete innovative ideas for tv commercial ads",
    "Radio ads planning & placements",
    "IPL specials promotions for exclusive products",
    "OTT platforms promotions",
    "Airports promotions pan india",
    "Metro promotions pan india",
    "PVR cinemas pan india",
    "In films tv serials promotions & integrations",
  ];

  const images = [
    "/slide/p5.webp",
    "/slide/p6.webp",
    "/slide/p7.webp",
    "/slide/p8.webp",
  ];

  return (
    <section className="purpose-section">
      <div className="purpose-container">
        <div className="purpose-content">

          <Link to="/pooja-sharma-business-care">
            <h1>
              ज्यादातर बिजनेसमैन बिजनेस एक्सपेंशन के लिए{" "}
              <span>पुरानी तकनीकों</span> का इस्तेमाल करते हैं
              जिसके चलते बिजनेस <strong style={{ color: "orange" }}>लॉस</strong> में चले जाते हैं।
              व्यापार की छोटी सी रणनीति की गलतियाँ आपको <strong style={{ color: "orange" }}>घाटे</strong> में ला सकती हैं।
            </h1>
          </Link>

          <div className="media-container">

            {/* Left */}
            <div className="media-left">
              <h2>Come To Us And We Will Show You How To Take Your Company To New Heights</h2>
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
                    <img src={img} alt={`slide ${i}`} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Purpose;