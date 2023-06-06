import React from "react";
import "./footer.css";
import footerLogo from "../../assets/footerLogo.svg";

export default function Footer() {
  return (
    <div className="ai_footer section_padding">
      <div className="ai_footer-heading">
        <h1 className="gradient_text">
          Do you want to step in to the future before others
        </h1>
      </div>

      <div className="ai_footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="ai_footer-links">
        <div className="ai_footer-links-logo">
          <img src={footerLogo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className="ai_footer-links-div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counter</p>
          <p>Contact</p>
        </div>

        <div className="ai_footer-links-div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className="ai_footer-links-div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className="ai_footer-copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
}
