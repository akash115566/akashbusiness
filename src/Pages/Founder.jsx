import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "../Style/Founder.css";

const Founder = () => {

    return (
        <>
       


<Helmet>
  {/* ✅ BASIC SEO */}
  <title>Founder of Business Care | Pooja Sharma & Ankur Bansal</title>

  <meta
    name="description"
    content="Meet Pooja Sharma and Ankur Bansal, founders of Business Care TV Show. Discover their journey, achievements, and impact on MSME and business growth in India."
  />

  <meta name="robots" content="index, follow" />
  <meta name="author" content="Business Care TV Show" />

  {/* ✅ CANONICAL */}
  <link rel="canonical" href="https://businesscare.org.in/founder" />

  {/* ✅ OPEN GRAPH */}
  <meta property="og:title" content="Founder of Business Care TV Show" />
  <meta
    property="og:description"
    content="Learn about Pooja Sharma and Ankur Bansal – visionary leaders behind Business Care TV Show."
  />
  <meta property="og:url" content="https://businesscare.org.in/founder" />
  <meta property="og:type" content="profile" />
  <meta property="og:image" content="https://businesscare.org.in/founder.jpg" />

  {/* ✅ TWITTER */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Business Care Founders" />
  <meta
    name="twitter:description"
    content="Meet the founders of Business Care TV Show."
  />
  <meta name="twitter:image" content="https://businesscare.org.in/founder.jpg" />

  {/* ✅ COMBINED PERSON SCHEMA (BEST PRACTICE 🔥) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          name: "Pooja Sharma",
          jobTitle: "Founder, Business Care TV Show",
          url: "https://businesscare.org.in/founder",
          worksFor: {
            "@type": "Organization",
            name: "Business Care",
            url: "https://businesscare.org.in",
          },
          image: "https://businesscare.org.in/f2.webp",
        },
        {
          "@type": "Person",
          name: "Ankur Bansal",
          jobTitle: "Co-Founder, Business Care TV Show",
          url: "https://businesscare.org.in/founder",
          worksFor: {
            "@type": "Organization",
            name: "Business Care",
            url: "https://businesscare.org.in",
          },
          image: "https://businesscare.org.in/f3.webp",
        }
      ]
    })}
  </script>
</Helmet>

         <section className="mission-section11" >
        <div className="overlay11">
          <div className="mission-text11">
            {/* <h2>Empowering Your <br/> Brand</h2>
            <p>
              At <strong>BusinessCare TV Show</strong>, we create marketing solutions that
              connect your brand with your audience effectively. Let’s transform ideas into results.
            </p> */}
            {/* <button className="cta-btn">Learn More</button> */}
          </div>
        </div>
      </section>

            <section className="founder-section" >
                {/* Background overlay */}
                <div className="founder-bg-overlay">
                     <h2 style={{fontSize:"3rem",textAlign:"center", marginTop:"10px",color:"#111"}}>OUR VIBRANT FOUNDER</h2>
                    <div className="founder-container">


                        {/* Founder Info */}
                        <div className="founder-text">
                           
                            <h3 style={{fontSize:"2rem"}}>Ms. Pooja Sharma – Founder of Business Care TV Show</h3>
                            <h3 style={{fontSize:"1rem"}}>
                              BUSINESS CARE FOUNDER | SENIOR MEDIA TV ANCHOR | CELEBRITY BUSINESS COACH | YOUNGEST ENTREPRENEUR | LAWYER,BRICS MEMBER |
                           , AND BUSINESS TRAINER.</h3>
                          
                            <p >
                              Pooja Sharma is a well-known personality in India, celebrated for her versatility, leadership, and exceptional achievements across media, business, and social welfare. She began her journey at a young age, winning hearts on television as a news anchor, and later gaining recognition as an actress in TV serials and short films. In 2016, with a bold vision, she founded her own Production Company Pooja Movie Creations, marking the beginning of her inspiring entrepreneurial journey. Along with her corporate accomplishments, Pooja Sharma has made significant contributions to society. She has served as the Chairperson of the Social Justice Board, and later founded and chaired the Commission for National Justice & Women Safety, playing a pivotal role in social welfare and women empowerment. Her influence extends globally as well—she is associated with BRICS, actively promoting international trade expansion and global business collaborations. A law graduate and an experienced business legal advisor, she combines knowledge with leadership, making her contributions diverse and impactful. Not only is she a successful industrialist, but she is also deeply committed to social upliftment, dedicated to empowering communities and contributing to national progress. At a young age, she achieved a rare milestone—establishing 14 companies in just 14 years, making her one of the most dynamic businesswomen in the country.
                            </p>



                            <Link to="/Contact"> <button className="founder-btn">Learn More</button></Link>
                        </div>



                        {/* Founder Image */}
                        <div className="founder-image" >
                            <img src="/f2.webp"   alt="Company Founder and Business Leader"
  title="Founder"
  loading="eager" />
                        </div>
                    </div>




                </div>
            </section>







            <section className="founder-section" style={{ background: "#51073B" }} >
                {/* Background overlay */}
                <div className="founder-bg-overlay">
                    <div className="founder-container">
                      

                        {/* Founder Info */}
                        <div className="founder-text">
                            <h3 style={{fontSize:"2rem",marginTop:"50px"}}> Ankur Bansal</h3>
                 
                            <h3 style={{fontSize:"2rem"}}>Co-founder, Entrepreneur, Business Coach, and Business Strategy Planner.</h3>
                            <p style={{wordSpacing:"0.1px",letterSpacing:"0.1px"}}>
                               Mr. Ankur Bansal is a visionary entrepreneur whose journey began at the young age of 12. Over the years, he has transformed himself into one of India’s most influential business strategists with unmatched expertise in media, market planning, and global trade. He started his professional journey as a TV anchor, and through continuous learning and innovation, he soon evolved into a market researcher and market planner. His unique ideas and impactful guidance helped launch and promote numerous astrologers, spiritual gurus, and public personalities across the television industry. With a bold vision and strong entrepreneurial mindset, he co-founded Pooja Movie Creations along with Ms. Pooja Sharma. At a very young age, he took the courageous step of leaving his media job and entering into business without capital, driven purely by dedication, creativity, and hard work. Over time, his strategic abilities made him a trusted media planner for many renowned companies. Under his guidance, countless businessmen have revived and expanded their businesses. His deep understanding of business challenges, combined with practical solutions, has empowered entrepreneurs across India. His remarkable career took a new leap in 2013 when he created and launched the benchmark real-estate show "Property 4 You" on Delhi AajTak. The show quickly became the No. 1 program on AajTak in its category, earning massive popularity and establishing his name as a powerful content and media strategist. As years passed, he diversified into multiple ventures and today plays a major role in BRICS for global trade collaborations, supporting international business expansion and global partnerships. Now, Mr. Ankur Bansal is coming up with his exclusive TV show designed especially for MSMEs, startups, and business owners. This unique show will discuss:
                            </p>


                            {/* <Link to="/Contact"> <button className="founder-btn">Learn More</button></Link> */}
                        </div>

                          {/* Founder Image */}
                     <div className="founder-image" >
  <img src="/f3.webp"   alt="Company Founder and Business Leader"
  title="Founder"
  loading="eager" />
</div>

                    </div>

                </div>
            </section>






        </>
    );
};

export default Founder;
