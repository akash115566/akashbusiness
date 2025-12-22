import React from "react";
import "../Style/form.css"

const FormPage = () => {
  return (
    <>
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
        C L I E N T &nbsp; I N F O R M A T I O N
      </div>

      <div className="form-grid">
        <div className="field">Founder Full Name</div><div className="line"></div>
        <div className="field">Company Name</div><div className="line"></div>
        <div className="field">GST No</div><div className="line"></div>
        <div className="field">Gender ( Male / Female )</div><div className="line"></div>
        <div className="field">CIN No</div><div className="line"></div>
        <div className="field">Address</div><div className="line"></div>
        <div className="field">City</div><div className="line"></div>
        <div className="field">Phone Number</div><div className="line"></div>
        <div className="field">Zip Code</div><div className="line"></div>
      </div>

      {/* ================= CONTACT INFORMATION ================= */}
      <div className="section-title">
        C O N T A C T &nbsp; I N F O R M A T I O N
      </div>

      <div className="form-grid">
        <div className="field">Authorised Representative Name</div><div className="line"></div>
        <div className="field">Phone (Work / Cell)</div><div className="line"></div>
        <div className="field">Owner Contact Name</div><div className="line"></div>
        <div className="field">Emergency Phone</div><div className="line"></div>
        <div className="field">Registered Address</div><div className="line"></div>
        <div className="field">Alternate Phone</div><div className="line"></div>
      </div>

      {/* ================= BUSINESS REGISTRATION ================= */}
      <div className="section-title">
        B U S I N E S S &nbsp; R E G I S T R A T I O N &nbsp; I N F O R M A T I O N
      </div>

      <div className="form-grid">
        <div className="field">Government Registrations ( Yes / No )</div><div className="line"></div>
        <div className="field">GST Number</div><div className="line"></div>
        <div className="field">PAN Number (Company / Owner)</div><div className="line"></div>
        <div className="field">CIN Number (Pvt. Ltd. / Ltd.)</div><div className="line"></div>
        <div className="field">MSME Registration No. (Optional)</div><div className="line"></div>
        <div className="field">IEC Code (If applicable)</div><div className="line"></div>
      </div>

      {/* ================= BUSINESS SEGMENT ================= */}
      <div className="section-title">
        B U S I N E S S &nbsp; S E G M E N T
      </div>

      <p className="segment-note">
        ( Please tick or write your segment )
      </p>

      <div className="segment-grid">
        <label>☐ FMCG</label>
        <label>☐ Ayurvedic</label>
        <label>☐ Grocery</label>
        <label>☐ Real Estate</label>
        <label>☐ Manufacturing</label>
        <label>☐ Other</label>
        <label>☐ Technology / IT</label>
        <label>☐ Pharma</label>
        <label>☐ Agriculture</label>
        <label>☐ Cosmetics</label>
      </div>

    </div>



    <section className="telecast-section">
      {/* Top Heading */}
      <h1 className="telecast-heading">T E L E C A S T D E T A I L S</h1>

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
        <p>Please read carefully and acknowledge:</p>
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
    <h2>C O N S E N T & S I G N A T U R E</h2>
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
    <p style={{ textAlign: 'center', marginTop: '20px' }}>
      <button 
        onClick={() => window.print()} 
        style={{ backgroundColor: '#fff', color: 'orange', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontWeight: 600 }}
      >
        Print / Download
      </button>
    </p>
  </div>
</section>

    </>
  );
};

export default FormPage;
