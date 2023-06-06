import React from "react";
import "./article.css";

export default function Article({ imgUrl, date, title }) {
  return (
    <div className="ai_blog-container-article">
      <div className="ai_blog-container-image">
        <img src={imgUrl} alt={title} />
      </div>

      <div className="ai_blog-container-article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
}
