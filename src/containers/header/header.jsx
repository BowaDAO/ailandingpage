import React from "react";
import "./header.css";
import { Form } from "react-router-dom";
import people from "../../assets/people.png";
import headerImage from "../../assets/headerImage.png";

export default function Header() {
  return (
    <div className="ai_header section_padding gradient_bg" id="home">
      <div className="ai_header-content">
        <h1 className="gradient_text">
          Let's build Something amazing with Bowa OpenAi
        </h1>

        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <Form className="ai_header-content-input">
          <input type="email" placeholder="your email address" />
          <button type="button">Get Started</button>
        </Form>

        <div className="ai_header-content-people">
          <img src={people} alt="people" className="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="ai_header-image">
        <img src={headerImage} alt="ai" className="headerimage" />
      </div>
    </div>
  );
}
