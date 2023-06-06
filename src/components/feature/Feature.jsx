import React from "react";
import "./feature.css";

export default function Feature({ title, text }) {
  return (
    <div className="ai_features-container-feature">
      <div className="ai_features-container-feature-title">
        <div />
        <h1>{title}</h1>
      </div>

      <div className="ai_features-container-feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
}
