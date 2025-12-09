import React from "react";

import { Link } from "react-router-dom";
import "../Style/Founder.css";

const Founder = () => {

    return (
        <>
            <section className="founder-section" >
                {/* Background overlay */}
                <div className="founder-bg-overlay">
                     <h2 style={{fontSize:"3rem",textAlign:"center", marginTop:"50px"}}>Our Founder</h2>
                    <div className="founder-container">


                        {/* Founder Info */}
                        <div className="founder-text">
                           
                            <h3>Ms. Pooja Sharma</h3>
                            <p>
                                BUSINESS CARE FOUNDER | SENIOR MEDIA TV ANCHOR | CELEBRITY BUSINESS COACH | YOUNGEST ENTREPRENEUR |
                            </p>
                            <p>Young Entrepreneur, Senior Media person, and Business Trainer Pooja sharma</p>
                            <p>
                                Pooja Sharma is a well-known name in the country and has made a name for
                                herself with her diverse talents. If we talk about media on television or
                                acting on the small screen, she has ruled everyone’s hearts with her
                                different style at a young age. Not only this, along with being a
                                successful industrialist, she is also doing special work in social
                                upliftment in the country for the growth of the nation.At a young age,
                                she has registered the title of opening 14 companies in 12 years.
                            </p>



                            <Link to="/Contact"> <button className="founder-btn">Learn More</button></Link>
                        </div>



                        {/* Founder Image */}
                        <div className="founder-image">
                            <img src="/about/s1.webp" alt="Founder" />
                        </div>
                    </div>




                </div>
            </section>







            <section className="founder-section" style={{ background: "#430648ff" }} >
                {/* Background overlay */}
                <div className="founder-bg-overlay">
                    <div className="founder-container">
                        {/* Founder Image */}
                        <div className="founder-image">
                            <img src="/about/s4.webp" alt="Founder" />
                        </div>

                        {/* Founder Info */}
                        <div className="founder-text">
                            <h3>Mr. ANKUR BANSAL</h3>

                            <h3>

                                BUSINESS CARE FOUNDER | SENIOR MEDIA TV ANCHOR | CELEBRITY BUSINESS COACH | YOUNGEST ENTREPRENEUR |
                            </h3>
                            <h3>Co-founder, Entrepreneur, Business Coach, and Business Strategy Planner. Ankur Bansal</h3>
                            <p>
                                Ankur Bansal, who has been doing business since the age of 12, has given a new definition to media strategy by
                                offering his services in the TV media world. He is also a successful industrialist,
                                full of multitalented personality, and from time to time he executes new schemes. He is adept at understanding the
                                problems of businessmen and giving accurate solutions to them. He has given a new
                                path to many big businesses in India with his discretion. He has been awarded many
                                national and foreign awards, and he believes that India’s business can become
                                better only when new techniques are used in it. Ankur not only understands the
                                business but also has the ability to deal with the problems arising in it from
                                the root. Having 20 years of experience in TV media, today Ankur is a successful
                                businessman and is helping thousands of businessmen with increasing losses in
                                their businesses.
                            </p>


                            <Link to="/Contact"> <button className="founder-btn">Learn More</button></Link>
                        </div>
                    </div>

                </div>
            </section>






        </>
    );
};

export default Founder;
