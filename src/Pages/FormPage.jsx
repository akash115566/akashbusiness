// import React, { useState } from "react";
// import emailjs from "emailjs-com";
// import "../Stylesss/form.css";

// const FormPage = () => {
//   const [formData, setFormData] = useState({
//     founderName: "",
//     companyName: "",
//     gstNumber: "",
//     gender: "",
//     cinNumber: "",
//     address: "",
//     city: "",
//     phoneNumber: "",
//     zipCode: "",
//     authorizedRepName: "",
//     workPhone: "",
//     ownerContactName: "",
//     emergencyPhone: "",
//     registeredAddress: "",
//     alternatePhone: "",
//     governmentRegistration: "",
//     panNumber: "",
//     msmeNumber: "",
//     iecCode: "",
//     businessSegment: "",
//     telecastSegment: "",
//     ownerName: "",
//     signature: "",
//     date: "",
//     place: "",
//     stamp: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//    emailjs.send(
//   "service_maz4pi8",
//   "template_b9fkq1l",
//   { ...formData, submittedTime: new Date().toLocaleString() },
//   "YjL4g3-7ju5SXm_Kv"
// )

//       .then(
//         (response) => {
//           alert("Email sent successfully ✅");
//           console.log("SUCCESS!", response.status, response.text);
//         },
//         (err) => {
//           alert("Email sending failed ❌");
//           console.error("FAILED...", err);
//         }
//       );
//   };

//   return (
//     <div className="form-page">
//       <div className="form-banner">
//         <div className="banner-left">
//           <img src="/lo1.jpeg" alt="Business Care Logo" />
//         </div>
//         <div className="banner-center">
//           <h1>BUSINESS CARE TV SHOW</h1>
//           <p>( उ भ र ता भा र त )</p>
//         </div>
//         <div className="banner-right">
//           <p>📞 8076151724</p>
//           <br />
//           <p>www.msmebusinesscare.com</p>
//           <br />
//           <p>www.businesscare.org.in</p>
//         </div>
//       </div>

//       <form onSubmit={handleSubmit}>
//         {/* ================= CLIENT INFORMATION ================= */}
//         <div className="section-title">C L I E N T &nbsp; I N F O R M A T I O N</div>
//         <div className="form-grid">
//           <div className="field">Founder Full Name</div>
//           <input
//             type="text"
//             name="founderName"
//             className="line"
//             value={formData.founderName}
//             onChange={handleChange}
//             required
//             style={{ borderBottom: "2px solid #111" }}
//           />
//           <div className="field">Company Name</div>
//           <input
//             type="text"
//             name="companyName"
//             className="line"
//             value={formData.companyName}
//             onChange={handleChange}
//             required
//             style={{ borderBottom: "2px solid #111" }}
//           />
//           <div className="field">GST No</div>
//           <input
//             type="text"
//             name="gstNumber"
//             className="line"
//             value={formData.gstNumber}
//             onChange={handleChange}
//             style={{ borderBottom: "2px solid #111" }}
//           />
//           <div className="field">Gender (Male / Female)</div>
//           <input
//             type="text"
//             name="gender"
//             className="line"
//             value={formData.gender}
//             onChange={handleChange}
//             style={{ borderBottom: "2px solid #111" }}
//           />
//           <div className="field">CIN No</div>
//           <input
//             type="text"
//             name="cinNumber"
//             className="line"
//             value={formData.cinNumber}
//             onChange={handleChange}
//             style={{ borderBottom: "2px solid #111" }}
//           />
//           <div className="field">Address</div>
//           <input
//             type="text"
//             name="address"
//             className="line"
//             value={formData.address}
//             onChange={handleChange}
//             style={{ borderBottom: "2px solid #111" }}
//           />
//           <div className="field">City</div>
//           <input
//             type="text"
//             name="city"
//             className="line"
//             value={formData.city}
//             onChange={handleChange}
//             style={{ borderBottom: "2px solid #111" }}
//           />
//           <div className="field">Phone Number</div>
//           <input
//             type="text"
//             name="phoneNumber"
//             className="line"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             style={{ borderBottom: "2px solid #111" }}
//           />
//           <div className="field">Zip Code</div>
//           <input
//             type="text"
//             name="zipCode"
//             className="line"
//             value={formData.zipCode}
//             onChange={handleChange}
//             style={{ borderBottom: "2px solid #111" }}
//           />
//         </div>

//         {/* ================= CONTACT INFORMATION ================= */}
//         <div className="section-title">C O N T A C T &nbsp; I N F O R M A T I O N</div>
//         <div className="form-grid">
//           <div className="field">Authorised Representative Name</div>
//           <input
//             type="text"
//             name="authorizedRepName"
//             className="line"
//             value={formData.authorizedRepName}
//             onChange={handleChange}
//             required
//             style={{ borderBottom: "2px solid #111" }}
//           />
//           <div className="field">Phone (Work / Cell)</div>
//           <input
//             type="text"
//             name="workPhone"
//             className="line"
//             value={formData.workPhone}
//             onChange={handleChange}
//             required
//             style={{ borderBottom: "2px solid #111" }}
//           />
//           <div className="field">Owner Contact Name</div>
//           <input
//             type="text"
//             name="ownerContactName"
//             className="line"
//             value={formData.ownerContactName}
//             onChange={handleChange}
//             required
//             style={{ borderBottom: "2px solid #111" }}
//           />
//           <div className="field">Emergency Phone</div>
//           <input
//             type="text"
//             name="emergencyPhone"
//             className="line"
//             value={formData.emergencyPhone}
//             onChange={handleChange}
//             style={{ borderBottom: "2px solid #111" }}
//           />
//           <div className="field">Registered Address</div>
//           <input
//             type="text"
//             name="registeredAddress"
//             className="line"
//             value={formData.registeredAddress}
//             onChange={handleChange}
//             style={{ borderBottom: "2px solid #111" }}
//           />
//           <div className="field">Alternate Phone</div>
//           <input
//             type="text"
//             name="alternatePhone"
//             className="line"
//             value={formData.alternatePhone}
//             onChange={handleChange}
//             style={{ borderBottom: "2px solid #111" }}
//           />
//         </div>

//         {/* ================= BUSINESS REGISTRATION ================= */}
//         <div className="section-title">
//           B U S I N E S S &nbsp; R E G I S T R A T I O N &nbsp; I N F O R M A T I O N
//         </div>
//         <div className="form-grid">
//           <div className="field">Government Registrations (Yes / No)</div>
//           <input
//             type="text"
//             name="governmentRegistration"
//             className="line"
//             value={formData.governmentRegistration}
//             onChange={handleChange}
//             required
//             style={{ borderBottom: "2px solid #111" }}
//           />
//           <div className="field">GST Number</div>
//           <input
//             type="text"
//             name="gstNumber"
//             className="line"
//             value={formData.gstNumber}
//             onChange={handleChange}
//             required
//             style={{ borderBottom: "2px solid #111" }}
//           />
//           <div className="field">PAN Number (Company / Owner)</div>
//           <input
//             type="text"
//             name="panNumber"
//             className="line"
//             value={formData.panNumber}
//             onChange={handleChange}
//             required
//             style={{ borderBottom: "2px solid #111" }}
//           />
//           <div className="field">CIN Number (Pvt. Ltd. / Ltd.)</div>
//           <input
//             type="text"
//             name="cinNumber"
//             className="line"
//             value={formData.cinNumber}
//             onChange={handleChange}
//             style={{ borderBottom: "2px solid #111" }}
//           />
//           <div className="field">MSME Registration No. (Optional)</div>
//           <input
//             type="text"
//             name="msmeNumber"
//             className="line"
//             value={formData.msmeNumber}
//             onChange={handleChange}
//             style={{ borderBottom: "2px solid #111" }}
//           />
//           <div className="field">IEC Code (If applicable)</div>
//           <input
//             type="text"
//             name="iecCode"
//             className="line"
//             value={formData.iecCode}
//             onChange={handleChange}
//             style={{ borderBottom: "2px solid #111" }}
//           />
//         </div>


//         <section style={{marginTop:"30px"}}>  {/* Declaration & Compliance */}
//       <div className="declaration-section">
//         <h2>Declaration & Compliance</h2>
//         <p>Please read carefully and acknowledge:</p>
//         <ul>
//           <li>All information provided by me and my company is true, correct, and legally compliant.</li>
//           <li>Business Care is only a media platform and does not promote, sell, or endorse any product or service on behalf of my business.</li>
//           <li>If any information submitted by me is found false, misleading, or legally non-compliant, Business Care has the right to: Hold or cancel the telecast, Edit or remove misleading content, Deny participation.</li>
//           <li>
//             I authorize Business Care to telecast, publish, and distribute my interview/content on:
//             <div className="platforms-left">
//               <div className="platform-item">
//                 <span>Aaj Tak HD</span> <input type="checkbox" />
//               </div>
//               <div className="platform-item">
//                 <span>CNBC Prime</span> <input type="checkbox" />
//               </div>
//               <div className="platform-item">
//                 <span>ABP News</span> <input type="checkbox" />
//               </div>
//               <div className="platform-item">
//                 <span>YouTube, Social Media, Partner Platforms</span> <input type="checkbox" />
//               </div>
//             </div>
//           </li>
//           <li>I consent to Business Care using my interview clips, photos, and brand content for editorial, promotional, and marketing purposes.</li>
//           <li>I agree that Business Care / Pooja Movie Creations / TV channel is not responsible for any legal, financial, or business-related consequences arising from my company’s claims or activities.</li>
//         </ul>
//       </div>
//     </section>



// <section className="legal-section">
//   {/* Legal Disclaimer Text */}
//   <div className="disclaimer-text">
//     <h2>Legal Disclaimer</h2>
//     <p>
//       Pooja Movie Creations and Business Care TV Show have no involvement, responsibility, or association with any legal activity, past fraud, criminal case, or police matter related to any businessman, businesswoman, brand, or company participating in the show.
//     </p>
//     <p>
//       All participants are solely responsible for the authenticity, legality, and truthfulness of the information they provide. Business Care TV Show strictly follows media and advertising standards and does not promote or support any false, misleading, or fraudulent information.
//     </p>
//     <p>
//       If any complaint, dispute, or legal issue arises, or if any misleading content is detected: Business Care reserves full rights to immediately stop, remove, or cancel the telecast without any liability. This platform is exclusively for advertising, branding, and promotional purposes, and all legal responsibilities lie with the business owner or company providing the information.
//     </p>
//     <p>
//       Business Care and Pooja Movie Creations are strictly media and advertising platforms. We do not take any responsibility for: any fraud, misrepresentation, cheating, or 420 activities done by any business owner or participant; any false or misleading claims made by the business owner during interviews or promotional content; any disputes, financial dealings, or transactions between the business owner and the public. All content aired or published by Business Care TV Show is purely for advertising and promotional purposes only. The accuracy, legality, and authenticity of all information shared by the business owner remains solely their own responsibility. If any misconduct or false information is detected, Business Care reserves the right to withhold, edit, or cancel the telecast without liability.
//     </p>
//   </div>
// </section>

//         {/* ================= CONSENT & SUBMIT ================= */}
//         <div className="consent-box">
//           <h2>C O N S E N T & S I G N A T U R E</h2>
//           <input
//             type="text"
//             name="ownerName"
//             placeholder="Owner/Authorized Signatory Name"
//             value={formData.ownerName}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="signature"
//             placeholder="Signature"
//             value={formData.signature}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="place"
//             placeholder="Place"
//             value={formData.place}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="stamp"
//             placeholder="Company Stamp"
//             value={formData.stamp}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit" style={{ marginTop: "15px" }}>
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default FormPage;




import React from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import "../Style/form.css"

const FormPage = () => {


  const downloadPDF = () => {
    const element = document.getElementById("form-content"); // wrap your form in a div with this id

    html2canvas(element, { scale: 2, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft > 0) {
        position -= pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save("Business-Care-Form.pdf");
    });
  };
  return (
    <>
     <div id="form-content">
     
    <div className="form-page">

      {/* ================= BANNER ================= */}
      <div className="form-banner">
        <div className="banner-left">
          <img src="/lo1.jpeg" alt="Business Care Logo" />
        </div>

        <div className="banner-center">
          <h1>BUSINESS CARE TV SHOW</h1>
          <p>( उ भ र ता भा र त )</p>
        </div>

        <div className="banner-right">
          <p>📞 8076151724</p>
          <p>www.msmebusinesscare.com</p>
          <p>www.businesscare.org.in</p>
        </div>
      </div>

      {/* ================= CLIENT INFORMATION ================= */}
      <div className="section-title">
        CLIENT &nbsp; INFORMATION
      </div>

     <div className="form-grid">
  <div className="field">Founder Full Name</div>
  <input type="text" name="founderName" placeholder="Enter Founder Full Name" className="line" />

  <div className="field">Company Name</div>
  <input type="text" name="companyName" placeholder="Enter Company Name" className="line" />

  <div className="field">GST No</div>
  <input type="text" name="gstNumber" placeholder="Enter GST Number" className="line" />

  <div className="field">Gender (Male / Female)</div>
  <input type="text" name="gender" placeholder="Enter Gender" className="line" />

  <div className="field">CIN No</div>
  <input type="text" name="cinNumber" placeholder="Enter CIN Number" className="line" />

  <div className="field">Address</div>
  <input type="text" name="address" placeholder="Enter Address" className="line" />

  <div className="field">City</div>
  <input type="text" name="city" placeholder="Enter City" className="line" />

  <div className="field">Phone Number</div>
  <input type="text" name="phoneNumber" placeholder="Enter Phone Number" className="line" />

  <div className="field">Zip Code</div>
  <input type="text" name="zipCode" placeholder="Enter Zip Code" className="line" />
</div>


      {/* ================= CONTACT INFORMATION ================= */}
      <div className="section-title">
        CONTACT &nbsp;INFORMATION
      </div>

     <div className="form-grid">
  <div className="field">Authorised Representative Name</div>
  <input type="text" name="authorizedRepName" placeholder="Enter Name" className="line" />

  <div className="field">Phone (Work / Cell)</div>
  <input type="text" name="workPhone" placeholder="Enter Phone Number" className="line" />

  <div className="field">Owner Contact Name</div>
  <input type="text" name="ownerContactName" placeholder="Enter Name" className="line" />

  <div className="field">Emergency Phone</div>
  <input type="text" name="emergencyPhone" placeholder="Enter Emergency Phone" className="line" />

  <div className="field">Registered Address</div>
  <input type="text" name="registeredAddress" placeholder="Enter Address" className="line" />

  <div className="field">Alternate Phone</div>
  <input type="text" name="alternatePhone" placeholder="Enter Phone Number" className="line" />
</div>


      {/* ================= BUSINESS REGISTRATION ================= */}
      <div className="section-title">
        BUSINESS &nbsp; REGISTRATION &nbsp; INFORMATION
      </div>

     <div className="form-grid">
  <div className="field">Government Registrations (Yes / No)</div>
  <input type="text" name="governmentRegistration" placeholder="Yes / No" className="line" />

  <div className="field">GST Number</div>
  <input type="text" name="gstNumber" placeholder="Enter GST Number" className="line" />

  <div className="field">PAN Number (Company / Owner)</div>
  <input type="text" name="panNumber" placeholder="Enter PAN Number" className="line" />

  <div className="field">CIN Number (Pvt. Ltd. / Ltd.)</div>
  <input type="text" name="cinNumber" placeholder="Enter CIN Number" className="line" />

  <div className="field">MSME Registration No. (Optional)</div>
  <input type="text" name="msmeNumber" placeholder="Enter MSME Number" className="line" />

  <div className="field">IEC Code (If applicable)</div>
  <input type="text" name="iecCode" placeholder="Enter IEC Code" className="line" />
</div>

      {/* ================= BUSINESS SEGMENT ================= */}
      <div className="section-title">
        BUSINESS &nbsp; SEGMENT
      </div>

      <p className="segment-note">
        ( Please tick or write your segment )
      </p>

     <div className="segment-grid">
  <label>
    <input type="checkbox" name="businessSegment" value="FMCG" /> FMCG
  </label>
  <label>
    <input type="checkbox" name="businessSegment" value="Ayurvedic" /> Ayurvedic
  </label>
  <label>
    <input type="checkbox" name="businessSegment" value="Grocery" /> Grocery
  </label>
  <label>
    <input type="checkbox" name="businessSegment" value="Real Estate" /> Real Estate
  </label>
  <label>
    <input type="checkbox" name="businessSegment" value="Manufacturing" /> Manufacturing
  </label>
  <label>
    <input type="checkbox" name="businessSegment" value="Other" /> Other
  </label>
  <label>
    <input type="checkbox" name="businessSegment" value="Technology / IT" /> Technology / IT
  </label>
  <label>
    <input type="checkbox" name="businessSegment" value="Pharma" /> Pharma
  </label>
  <label>
    <input type="checkbox" name="businessSegment" value="Agriculture" /> Agriculture
  </label>
  <label>
    <input type="checkbox" name="businessSegment" value="Cosmetics" /> Cosmetics
  </label>
</div>




    <section className="telecast-section">
      {/* Top Heading */}
      <h1 className="telecast-heading">TELECASTDETAILS</h1>

      {/* Segment Selected */}
      <div className="segment-section">
        <h2>Segment Selected:</h2>
        <div className="checkbox-group">
          <label><input type="checkbox" /> Founder Story</label>
          <label><input type="checkbox" /> Startup Feature</label>
          <label><input type="checkbox" /> Global Business Leaders</label>
          <label><input type="checkbox" /> MSME Feature</label>
          <label><input type="checkbox" /> Product Showcase</label>
          <label><input type="checkbox" /> Franchise & Dealer Network Feature</label>
          <label><input type="checkbox" /> Other:</label>
        </div>
      </div>

      {/* Declaration & Compliance */}
      <div className="declaration-section">
        <h2>Declaration & Compliance</h2>
        <p style={{color:"#111"}}>Please read carefully and acknowledge:</p>
        <ul>
          <li>All information provided by me and my company is true, correct, and legally compliant.</li>
          <li>Business Care is only a media platform and does not promote, sell, or endorse any product or service on behalf of my business.</li>
          <li>If any information submitted by me is found false, misleading, or legally non-compliant, Business Care has the right to: Hold or cancel the telecast, Edit or remove misleading content, Deny participation.</li>
          <li>
            I authorize Business Care to telecast, publish, and distribute my interview/content on:
            <div className="platforms-left">
              <div className="platform-item">
                <span>Aaj Tak HD</span> <input type="checkbox" />
              </div>
              <div className="platform-item">
                <span>CNBC Prime</span> <input type="checkbox" />
              </div>
              <div className="platform-item">
                <span>ABP News</span> <input type="checkbox" />
              </div>
              <div className="platform-item">
                <span>YouTube, Social Media, Partner Platforms</span> <input type="checkbox" />
              </div>
            </div>
          </li>
          <li>I consent to Business Care using my interview clips, photos, and brand content for editorial, promotional, and marketing purposes.</li>
          <li>I agree that Business Care / Pooja Movie Creations / TV channel is not responsible for any legal, financial, or business-related consequences arising from my company’s claims or activities.</li>
        </ul>
      </div>
    </section>



<section className="legal-section">
  {/* Legal Disclaimer Text */}
  <div className="disclaimer-text">
    <h2>Legal Disclaimer</h2>
    <p>
      Pooja Movie Creations and Business Care TV Show have no involvement, responsibility, or association with any legal activity, past fraud, criminal case, or police matter related to any businessman, businesswoman, brand, or company participating in the show.
    </p>
    <p>
      All participants are solely responsible for the authenticity, legality, and truthfulness of the information they provide. Business Care TV Show strictly follows media and advertising standards and does not promote or support any false, misleading, or fraudulent information.
    </p>
    <p>
      If any complaint, dispute, or legal issue arises, or if any misleading content is detected: Business Care reserves full rights to immediately stop, remove, or cancel the telecast without any liability. This platform is exclusively for advertising, branding, and promotional purposes, and all legal responsibilities lie with the business owner or company providing the information.
    </p>
    <p>
      Business Care and Pooja Movie Creations are strictly media and advertising platforms. We do not take any responsibility for: any fraud, misrepresentation, cheating, or 420 activities done by any business owner or participant; any false or misleading claims made by the business owner during interviews or promotional content; any disputes, financial dealings, or transactions between the business owner and the public. All content aired or published by Business Care TV Show is purely for advertising and promotional purposes only. The accuracy, legality, and authenticity of all information shared by the business owner remains solely their own responsibility. If any misconduct or false information is detected, Business Care reserves the right to withhold, edit, or cancel the telecast without liability.
    </p>
  </div>

  {/* Consent & Signature Form */}
  <div className="consent-box">
    <h2>CONSENT & SIGNATURE</h2>
    <form id="consentForm">
      <p>
        <label htmlFor="ownerName">Owner/Authorized Signatory Name:</label><br />
        <input type="text" id="ownerName" name="ownerName" required style={{ width: '100%', padding: '8px', borderRadius: '4px', border: 'none', marginBottom: '10px' }} />
      </p>
      <p>
        <label htmlFor="signature">Signature:</label><br />
        <input type="text" id="signature" name="signature" required style={{ width: '100%', padding: '8px', borderRadius: '4px', border: 'none', marginBottom: '10px' }} />
      </p>
      <p>
        <label htmlFor="date">Date:</label><br />
        <input type="date" id="date" name="date" required style={{ width: '100%', padding: '8px', borderRadius: '4px', border: 'none', marginBottom: '10px' }} />
      </p>
      <p>
        <label htmlFor="place">Place:</label><br />
        <input type="text" id="place" name="place" required style={{ width: '100%', padding: '8px', borderRadius: '4px', border: 'none', marginBottom: '10px' }} />
      </p>
      <p>
        <label htmlFor="stamp">Company Stamp:</label><br />
        <input type="text" id="stamp" name="stamp" required style={{ width: '100%', padding: '8px', borderRadius: '4px', border: 'none', marginBottom: '10px' }} />
      </p>
      <p style={{ textAlign: 'center' }}>
        {/* <button type="submit" style={{ backgroundColor: '#fff', color: 'orange', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 600 }}>Submit</button> */}
      </p>
    </form>

    {/* Download / Print Button */}
    {/* <p style={{ textAlign: 'center', marginTop: '20px' }}>
      <button 
        onClick={() => window.print()} 
        style={{ backgroundColor: '#fff', color: 'orange', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontWeight: 600 }}
      >
        Print / Download
      </button>
    </p> */}
  </div>
</section>
 



      {/* Buttons */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={() => window.print()}
          style={{
            backgroundColor: "orange",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            fontWeight: 600,
            marginRight: "10px",
          }}
        >
          🖨 Print
        </button>

        <button
          onClick={downloadPDF}
          style={{
            backgroundColor: "orange",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          ⬇ Download PDF
        </button>
      </div>

    </div>
    
    
    </div>

    



    </>
  );
};

export default FormPage;

