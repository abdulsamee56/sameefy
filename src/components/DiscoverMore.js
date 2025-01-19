import React from "react";
import "../styles/DiscoverMore.css";

function DiscoverMore() {
  return (
    <div className="discoverMore">
      <h1 className="discoverMore__title">Discover More</h1>
      <p className="discoverMore__intro">
        Thank you for exploring SameeFy! I’d love to connect and collaborate on exciting projects. Feel free to reach out to me through the links below.
      </p>
      <div className="discoverMore__buttons">
        <a
          href="https://github.com/abdulsamee56"
          target="_blank"
          rel="noopener noreferrer"
          className="discoverMore__button"
        >
          <span>💻</span> GitHub
        </a>
        <a
          href="https://linkedin.com/in/abdulsamee"
          target="_blank"
          rel="noopener noreferrer"
          className="discoverMore__button"
        >
          <span>🔗</span> LinkedIn
        </a>
        <a href="mailto:abdulsamee@example.com" className="discoverMore__button">
          <span>📧</span> Email Me
        </a>
        <a
          href="path/to/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="discoverMore__button"
        >
          <span>📄</span> Download Resume
        </a>
      </div>
      <p className="discoverMore__footer">
        Let’s create something amazing together!
      </p>
    </div>
  );
}

export default DiscoverMore;
