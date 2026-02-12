import React from "react";
import "../Style/legal.css";

const Legal = () => {
  return (
    <div className="legal-container">

      <h1 className="legal-main-heading">
        BUSINESS CARE TV SHOW ASSOCIATES LEGAL TERMS
      </h1>

      <p className="legal-intro">
      This communication outlines the mandatory legal and trademark guidelines applicable to all business associates, vendors, and partners associated with the Business Care TV Show.
      </p>

      {/* Section */}
      <Section title="Legal Ownership & Trademark Protection">
        <p style={{color:"#111"}}>
          Business Care TV Show is a copyrighted and trademark-registered brand
          and concept, legally owned by Pooja Movie Creations under applicable
          Trademark and Copyright Laws.
        </p>
        <p>
        All intellectual property, including but not limited to the show name,
         concept, format, logo, branding assets, creatives, scripts, and promotional
          materials, is the exclusive property of Business Care TV Show.
        </p>
        <p>
          No associate is permitted to copy, modify, recreate, edit, or replicate 
          any part of the brand or concept without prior written approval from the 
          Business Care legal team.
        </p>
      </Section>

      <Section title="Brand Usage Guidelines">
        <ul>
          <li>The Business Care TV Show name and logo may be used only for authorized sales and promotions and strictly as per the approved brand guidelines.</li>
          <li>Any misuse, alteration, or unauthorized representation of the logo, show name, or branding materials is strictly prohibited.</li>
          <li>Associates must not issue self-created pamphlets, letterheads, creatives, proposals, or commitments unless the same are approved in writing by the Business Care legal team.</li>
        </ul>
      </Section>

      <Section title="Sales, Communication & Commitments">
        <ul>
          <li>All official client communications must include the Business Care team in CC.</li>
          <li>Associates are not authorized to make false, misleading, or exaggerated claims regarding telecast, reach, guarantees, business outcomes, or channel commitments.</li>
          <li>Any deal sold beyond the approved pricing or scope shall be treated as the associate’s personal commitment, and Business Care shall not be responsible for such commitments.</li>
          <li>Business Care reserves the right to verify, approve, hold, or cancel any deal that does not comply with legal, sales, or brand policies.</li>
        </ul>
      </Section>

      <Section title="Compliance & Consequences">
        <ul>
          <li>Any violation of trademark rights, false representation, unauthorized commitment, or misuse of brand identity may result in:</li>
          <li>Immediate termination of association</li>
          <li>Legal action under applicable trademark and intellectual property laws

Blacklisting from future collaborations</li>
<li>All business associates are expected to strictly comply with the above guidelines to maintain the integrity, legality, and credibility of the Business Care TV Show and its broadcasting partners.   </li>
        </ul>
      </Section>

      <Section title="Payment Terms">
        <ul>
          <li>Business Care TV Show shall be responsible only for payments received directly in the official bank account of its parent company, Pooja Movie Creations.</li>
          <li>Any payment collected, promised, or claimed outside the official account of Pooja Movie Creations shall be solely the responsibility of the respective associate or third party.</li>
          <li>Business Care TV Show shall not be liable or responsible for any claims, disputes, or losses arising from payments not credited to the official parent company account.</li>
          <li>Associates are strictly prohibited from representing that payments made to personal, third-party, or unauthorized accounts are valid or approved.</li>
        </ul>
      </Section>

      <Section title="Non-Refundable Clause">
        <ul>
          <li>All payments received in the official account of Pooja Movie Creations shall be non-refundable once the shoot is completed, irrespective of telecast status, client dissatisfaction, or change of decision.</li>
          <li>No refund shall be applicable in cases of associate misconduct, client withdrawal, non-cooperation, or document-related delays after the shoot.</li>
          <li>Costs incurred towards production, branding, studio setup, technical crew, and telecast processing are non-recoverable.</li>
        </ul>
      </Section>

      <Section title="Fraud, Misrepresentation & Liability Disclaimer">
        <p style={{color:'#111'}}>
          In the event of any fraud, false claim, misrepresentation, or unauthorized commitment made by any associate or third party, Business Care TV Show shall not be responsible unless the corresponding payment has been received directly in the official account of Pooja Movie Creations.
        </p>
        <p>
          Any party making claims without valid payment proof credited to the parent company account shall have no claim, charge, or legal standing against Business Care TV Show.
        </p>
        <p>The associate involved in such acts shall bear full personal and legal liability.</p>
      </Section>

      <Section title="Termination & Cancellation of Association">
        <ul>
          <li>Business Care TV Show reserves the absolute right to terminate or cancel the business tie-up with any associate with immediate effect and without prior notice in case of:</li>
          <li>Fraud, misrepresentation, or false commitments</li>
          <li>Trademark or brand misuse</li>
          <li>Collection or diversion of payments to unauthorized accounts</li>
          <li>Violation of legal, payment, or brand guidelines</li>
          <li>Damage to the reputation or credibility of the show or channel</li>
          <li>Upon termination, the associate shall immediately cease using the Business Care TV Show name, logo, branding materials, or any association in any form</li>
          <li>Termination shall not affect the legal rights of Business Care TV Show to initiate civil or criminal action if applicable</li>
        </ul>
      </Section>

      <Section title="Final Authority & Responsibility">
        <p style={{color:"#111"}}>
         Business Care TV Show shall be responsible only and exclusively for commitments, services, and transactions formally approved and paid for through the official account of Pooja Movie Creations.
        </p>
        <p>Any verbal, written, or implied commitment made outside the approved framework shall be null and void.</p>
        <p>All business associates are required to strictly comply with the above terms to maintain legal compliance, brand integrity, and transparency.</p>

      </Section>

      <Section title="Documents Required For Official Associates">
        <ul>
          <li>Aadhar Card</li>
          <li>Pan Card</li>
          <li>Office Address</li>
          <li>Electricity Bill / Postpaid Connection Bill</li>
          <li>Rent Agreement</li>
          <li>Recent Photo</li>
          <li>Mobile Number</li>
          <li>Alternate Mobile Number</li>
          <li>Any one Member in house Mobile number</li>
        </ul>
      </Section>

      <div className="legal-footer">
        <p><strong>Business Care Team</strong></p>
        <p>Legal & Brand Management Team</p>
      </div>

    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="legal-section">
    <h2>{title}</h2>
    {children}
  </div>
);

export default Legal;
