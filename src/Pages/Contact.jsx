import React from 'react'
import axios from "axios"
import "../Style/contact.css";
import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';



// const cards = [
// { id: 1, title: "Card One", content: "This is the content of card one." },
// { id: 2, title: "Card Two", content: "This is the content of card two." },
// { id: 3, title: "Card Three", content: "This is the content of card three." },
// { id: 4, title: "Card Four", content: "This is the content of card four." },
// { id: 5, title: "Card Five", content: "This is the content of card five." },
// ];

const Contact = () => {
//   const { themeColor, gradient } = useContext(ThemeContext);
  // const [jokes, setjokes] = useState([])
  // useEffect(() => {
  //   axios.get('/api/jokes')
  //     .then((response) => {
  //       setjokes(response.data)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // })




   const [formData, setFormData] = useState({
    companyName: "",
    ownerName: "",
    mobile: "",
    website: "",
    email: "",
    businessType: "",
    product: "",
    budget: "",
    location: "",
    meetingType: "On Call",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };





    const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "919927239876"; // 👈 apna WhatsApp number (91 ke sath)

    const message = `
📌 *New Business Enquiry*

🏢 Company: ${formData.companyName}
👤 Owner: ${formData.ownerName}
📞 Mobile: ${formData.mobile}
🌐 Website: ${formData.website}
📧 Email: ${formData.email}
💼 Business Type: ${formData.businessType}
📦 Product: ${formData.product}
💰 Monthly Budget: ${formData.budget}
📍 Location: ${formData.location}
📅 Meeting Type: ${formData.meetingType}
    `;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  useEffect(() => {
  setFormData((prev) => ({
    ...prev,
    website: "https://example.com"  // Default value
  }));
}, [])

const message = `
Company: ${formData.companyName}
Website: ${formData.website || "Not Provided"}
`;




  return (
    <>
      {/* 🔹 Stylish Static Banner */}
    <section className="banner-section11">
                <div className="banner-content11">
                    <h1>Contact </h1>
                    <p>Together we can create something all inspirational you need to build.</p>
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




    <section className="appointment-section">
      <div className="appointment-container">

        {/* Heading */}
        <h2 className="appointment-title">FOR APPOINTMENT</h2>

        <div className="appointment-grid">
          {/* Left Image */}
          <div className="appointment-image">
            <img src="/con1.webp" alt="Appointment" />
          </div>

          {/* Right Form */}
        <form className="appointment-form" onSubmit={handleSubmit}>

      <div className="form-group">
        <label>Company Name</label>
        <input type="text" name="companyName" onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Owner Name</label>
        <input type="text" name="ownerName" onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Mobile No.</label>
        <input type="tel" name="mobile" onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Website</label>
      <input
  type="url"
  name="website"
  value={formData.website}
  onChange={handleChange}
  placeholder="https://www.yourwebsite.com (Optional)"
/>

      </div>

      <div className="form-group">
        <label>Your Email</label>
        <input type="email" name="email" onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Type of Business</label>
        <input type="text" name="businessType" onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Product</label>
        <input type="text" name="product" onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Monthly Budget</label>
        <input type="text" name="budget" onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Business Location</label>
        <input type="text" name="location" onChange={handleChange} />
      </div>

      <div className="form-group full">
        <label>Select Meeting Type</label>
        <select name="meetingType" onChange={handleChange}>
          <option>On Call</option>
          <option>Video Call</option>
          <option>Office Meeting</option>
        </select>
      </div>

      <button type="submit" className="submit-btn">
        Submit on WhatsApp
      </button>

    </form>

        </div>

      </div>
    </section>






    </>
  )
}

export default Contact
