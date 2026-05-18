
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "../Style/associate.css";

const AssociateForm = () => {
  const [formData, setFormData] = useState({
    applicantName: "",
    associateName: "",
    dob: "",
    address: "",
    adhaar: "",
    pan: "",
    mobile: "",
    state: "",
    city: "",
    companyName: "",
    gstNo: "",
  });

  const [files, setFiles] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
*New Associate Registration*

Applicant Name: ${formData.applicantName}
Associate Name: ${formData.associateName}
DOB: ${formData.dob}
Address: ${formData.address}
Adhaar No: ${formData.adhaar}
PAN No: ${formData.pan}
Mobile: ${formData.mobile}
State: ${formData.state}
City: ${formData.city}
Company Name: ${formData.companyName}
GST No: ${formData.gstNo}

Uploaded Files:
Photo: ${files.photo?.name || "Not Uploaded"}
Adhaar: ${files.adhaarFile?.name || "Not Uploaded"}
PAN: ${files.panFile?.name || "Not Uploaded"}
Passport: ${files.passport?.name || "Not Uploaded"}
GST Certificate: ${files.gstFile?.name || "Not Uploaded"}
Electricity Bill: ${files.electricity?.name || "Not Uploaded"}
Rent Agreement: ${files.rent?.name || "Not Uploaded"}
Bank Passbook: ${files.bank?.name || "Not Uploaded"}
    `;

    const phoneNumber = "918076151724"; // apna WhatsApp number daalo
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <>
     <Helmet>
  <title>Associate Registration | Business Care India</title>

  <meta 
    name="description" 
    content="Register as an associate partner with Business Care. Submit your details and documents to grow your business with expert guidance." 
  />

  <link 
    rel="canonical" 
    href="https://businesscare.org.in/associate-registration" 
  />

  {/* ✅ SCHEMA MARKUP */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Associate Registration Service",
      "provider": {
        "@type": "Organization",
        "name": "Business Care",
        "url": "https://businesscare.org.in"
      },
      "areaServed": "India",
      "description": "Register as an associate partner with Business Care to grow your business with expert consulting and marketing strategies."
    }
    `}
  </script>
</Helmet>
  <div className="form-container">
  
  <h2>Associate Registration Form</h2>

  <form onSubmit={handleSubmit} className="form-grid">

    <input type="text" name="applicantName" placeholder="Applicant Name" onChange={handleChange} required />
    <input type="text" name="associateName" placeholder="Associate Name" onChange={handleChange} required />
    <input type="date" name="dob" onChange={handleChange} required />
    <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
    <input type="text" name="adhaar" placeholder="Adhaar Card No" onChange={handleChange} required />
    <input type="text" name="pan" placeholder="PAN Card No" onChange={handleChange} required />
    <input type="tel" name="mobile" placeholder="Mobile No" onChange={handleChange} required />
    <input type="text" name="state" placeholder="State" onChange={handleChange} required />
    <input type="text" name="city" placeholder="City" onChange={handleChange} required />
    <input type="text" name="companyName" placeholder="Associate Company Name" onChange={handleChange} />
    <input type="text" name="gstNo" placeholder="Associate GST No" onChange={handleChange} />

    <div className="file-group full-width">
      <label>Photo</label>
      <input  type="file"
    name="photo"
    accept="image/*"
    // capture="environment"
    onChange={handleFileChange}
    required />
    </div>

    <div className="file-group full-width">
      <label>Adhaar Card</label>
      <input   type="file"
    name="adhaarFile"
    accept="image/*"
    // capture="environment"
    onChange={handleFileChange}
    required />
    </div>

    <div className="file-group full-width">
      <label>PAN Card</label>
      <input  type="file"
    name="panFile"
    accept="image/*"
    // capture="environment"
    onChange={handleFileChange}
    required />
    </div>

    <div className="file-group full-width">
      <label>Passport</label>
      <input  type="file"
    name="passport"
    accept="image/*"
    // capture="environment"
    onChange={handleFileChange}
    required />
    </div>

    <div className="file-group full-width">
      <label>GST Certificate</label>
      <input   type="file" 
    name="gstFile" 
    accept="image/*"
    // capture="environment"
    onChange={handleFileChange} 
    required />
    </div>

    <div className="file-group full-width">
      <label>Electricity Bill</label>
      <input type="file" 
    name="electricity" 
    accept="image/*"
    // capture="environment"
    onChange={handleFileChange} 
    required/>
    </div>

    <div className="file-group full-width">
      <label>Rent Agreement</label>
      <input  type="file" 
    name="rent" 
    accept="image/*"
    // capture="environment"
    onChange={handleFileChange} 
    required />
    </div>

    <div className="file-group full-width">
      <label>Bank Passbook Copy</label>
      <input  type="file" 
    name="bank" 
    accept="image/*"
    // capture="environment"
    onChange={handleFileChange} 
    required />
    </div>

    <button type="submit" className="submit-btn">
      Submit
    </button>

  </form>
</div>
</>

  );
};

export default AssociateForm;
