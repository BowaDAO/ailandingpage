import React from "react";
import "./blog.css";
import Article from "..//../components/articles/Article";
import { Blog01, Blog02, Blog03, Blog04, Blog05 } from "./importBlogImages";

export default function Blog() {
  return (
    <div className="ai_blog section_padding" id="blog">
      <div className="ai_blog-heading">
        <h1 className="gradient_text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>

      <div className="ai_blog-container">
        <div className="ai_blog-container-groupA">
          <Article
            imgUrl={Blog01}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>

        <div className="ai_blog-container-groupB">
          <Article
            imgUrl={Blog02}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={Blog03}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={Blog04}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={Blog05}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
}
