import React from "react";
import "../Style/Terms.css";

const Terms = () => {
    return (
        <>
            <section className="banner-section11">
                <div className="banner-content11">
                    <h1>TERMS & CONDITIONS <br/>BUSINESS CARE</h1>
                </div>

                {/* Wave Shape Divider */}
                <div className="banner-wave11">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path
                            d="M0,0 
           C150,100 350,0 600,40 
           C850,80 1050,120 1200,60 
           L1200,120 
           L0,120 Z"
                        />
                    </svg>
                </div>
            </section>

            {/* Content Section */}
            <section className="privacy-section11">
                <div className="privacy-container11">

                    {/* Top Heading */}
                    <h2 className="privacy-title11">TERMS & CONDITIONS</h2>

                    {/* Content Grid */}
                    <div className="privacy-grid11">

                        {/* Left Side */}
                        <div className="privacy-left11">
                            <p>
                                <strong>Business Care</strong> is just a medium to motivate and inspire business owners to go ahead with their new ideas.
                                Business Care works for the better future of all its clients, but this is only possible when the business owner follows the steps suggested by Business Care.
                            </p>

                            <p>


                                Business Care accepts no responsibility for any such loss or damage.
                                Business Care helps its clients like a consultant. From any kind of loss or any kind of obstacle, business care has concern.
                            </p>

                            <p>
                                Business Care only serves its clients with its suggestions and its experience.
                                would not be responsible for any disputes or losses in the business of the business owners that are related to the client.
                                Business Care is a consulting firm for business owners. It never forces any client to follow any idea.
                            </p>

                            <p>
                                All the disputes related matters should be seen in Noida court.
                                Business care is a platform where anyone can take consultancy.
                                Business care never suggests any wrong idea that will harm anyone.
                                If you come to Business Care and take your consultation, follow all the conditions suggested Business Care.
                            </p>
                        </div>

                        {/* Right Side */}
                        <div className="privacy-right11">
                            <p>
                                Business owners get consulting services by paying only consulting fees.
                                If owners follow all of them, then they definitely get profit.
                                Business Care is only playing the role of a consultant. If your business is going into losses due to
                                For some reason, business care has no concern.
                            </p>

                            <p>
                                Whatever consulting will be available, it will be available after receiving the consultancy fee, if
                                If you want to take consultancy based on your desire, then you can contact.
                                Once payment is received, it will not be refunded.
                            </p>

                            <p>
                                Clients couldn’t claim on Business Care for any type of loss.
                                All the details of the business owner will be fully secure and will not be shared with
                                Another person excluded team.
                            </p>

                            <p>
                                All the disputes would be seen in the courts in Noida and Delhi.
                                A business owner will not guarantee any business; they are only consultants.
                                The term “secrecy” used by the company never misused any data of the client or any
                                other .
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Terms;
