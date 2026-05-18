

import React, { useState } from "react";
import "../Style/investorregistration.css";

const InvestorRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    designation: "",
    mobile: "",
    email: "",
    website: "",
    city: "",
    address: "",
    sector: [],
    budget: "",
    investmentType: [],
    purpose: "",
    experience: "",
    branding: "",
    date: "",
  });

  // Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Checkbox Change
  const handleCheckbox = (e, field) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        [field]: [...formData[field], value],
      });
    } else {
      setFormData({
        ...formData,
        [field]: formData[field].filter((item) => item !== value),
      });
    }
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
*BUSINESS CARE – INVESTOR REGISTRATION*

👤 Full Name: ${formData.fullName}

🏢 Company / Firm:
${formData.company}

💼 Designation:
${formData.designation}

📱 Mobile:
${formData.mobile}

📧 Email:
${formData.email}

🌐 Website:
${formData.website}

📍 City / State:
${formData.city}

🏠 Address:
${formData.address}

📌 Interested Sector:
${formData.sector.join(", ")}

💰 Investment Budget:
${formData.budget}

🤝 Investment Type:
${formData.investmentType.join(", ")}

🎯 Investment Purpose:
${formData.purpose}

📈 Previous Experience:
${formData.experience}

📺 Branding Interest:
${formData.branding}

📅 Date:
${formData.date}
`;

    const whatsappURL = `https://wa.me/919927239876?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="investor-container">
      <form className="investor-form" onSubmit={handleSubmit}>
       <div className="form-header">
  <img src="./lo1.jpeg" alt="Business Care Logo" className="form-logo" />

  <h1>BUSINESS CARE – INVESTOR REGISTRATION FORM</h1>
</div>

        {/* Investor Details */}
        <div className="form-section">
          <h2>Investor Details</h2>

          <div className="input-grid">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              onChange={handleChange}
            />

            <input
              type="text"
              name="company"
              placeholder="Company / Firm Name"
              onChange={handleChange}
            />

            <input
              type="text"
              name="designation"
              placeholder="Designation"
              onChange={handleChange}
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              required
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email ID"
              required
              onChange={handleChange}
            />

            <input
              type="text"
              name="website"
              placeholder="Website (If Any)"
              onChange={handleChange}
            />

            <input
              type="text"
              name="city"
              placeholder="City / State"
              onChange={handleChange}
            />
          </div>

          <textarea
            name="address"
            placeholder="Permanent Address"
            rows="4"
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Investment Details */}
        <div className="form-section">
          <h2>Investment Details</h2>

          {/* Sector */}
          <div className="checkbox-section">
            <h3>Interested Industry / Sector</h3>

            <div className="checkbox-grid">
              {[
                "Startups",
                "Healthcare",
                "Education",
                "Manufacturing",
                "Real Estate",
                "Media & Entertainment",
                "Technology / IT",
                "Franchise Business",
              ].map((item, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    value={item}
                    onChange={(e) => handleCheckbox(e, "sector")}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Budget */}
          <div className="checkbox-section">
            <h3>Investment Budget Range</h3>

            <div className="radio-grid">
              {[
                "₹5 Lacs – ₹25 Lacs",
                "₹25 Lacs – ₹50 Lacs",
                "₹50 Lacs – ₹1 Crore",
                "₹1 Crore – ₹5 Crore",
                "₹5 Crore+",
              ].map((item, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="budget"
                    value={item}
                    onChange={handleChange}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Investment Type */}
          <div className="checkbox-section">
            <h3>Preferred Investment Type</h3>

            <div className="checkbox-grid">
              {[
                "Equity Investment",
                "Partnership",
                "Franchise Investment",
                "Joint Venture",
                "Funding for Startup",
              ].map((item, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    value={item}
                    onChange={(e) =>
                      handleCheckbox(e, "investmentType")
                    }
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          <textarea
            name="purpose"
            placeholder="Investment Purpose / Expectations"
            rows="4"
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Additional Information */}
        <div className="form-section">
          <h2>Additional Information</h2>

          <textarea
            name="experience"
            placeholder="Previous Investment Experience"
            rows="4"
            onChange={handleChange}
          ></textarea>

          <div className="checkbox-section">
            <h3>
              Interested in Featured Branding on Business Care TV Show?
            </h3>

            <div className="radio-grid">
              <label>
                <input
                  type="radio"
                  name="branding"
                  value="Yes"
                  onChange={handleChange}
                />
                Yes
              </label>

              <label>
                <input
                  type="radio"
                  name="branding"
                  value="No"
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>
        </div>

        {/* Declaration */}
        <div className="form-section">
          <h2>Declaration</h2>

          <p className="declaration-text">
            I hereby confirm that the above information provided by me
            is true and correct to the best of my knowledge.
          </p>

          <div className="input-grid">
            <input
              type="text"
              placeholder="Investor Signature"
            />

            <input
              type="date"
              name="date"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Submit */}
        <button type="submit" className="submit-btn">
          Submit Registration
        </button>

        <div className="footer-text">
          <p>📞 Team Business Care</p>
          <p>MSME Business Care Official Website</p>
        </div>
      </form>
    </div>
  );
};

export default InvestorRegistration;
