import React from "react";
import "../styles/DiscoverMore.css";

function DiscoverMore() {
  return (
    <div className="discoverMore">
      <h1 className="discoverMore__title">Discover More</h1>
      <p className="discoverMore__intro">
        Thank you for exploring SameeFy! I’d love to connect and collaborate on exciting projects. Feel free to reach out to me through the links below.
      </p>

      <div className="discoverMore__links">
        <button
          className="discoverMore__button"
          onClick={() => window.open("https://github.com/abdulsamee56", "_blank")}
        >
          GitHub
        </button>
        <button
          className="discoverMore__button"
          onClick={() => window.open("https://www.linkedin.com/in/abdul-samee/", "_blank")}
        >
          LinkedIn
        </button>
        <button
          className="discoverMore__button"
          onClick={() => window.location = "mailto:abdulsamee@example.com"}
        >
          Email Me
        </button>
        <button
          className="discoverMore__button"
          onClick={() => window.open("path/to/resume.pdf", "_blank")}
        >
          Download Resume
        </button>
      </div>

      <p className="discoverMore__closing">
        Let’s create something amazing together!
      </p>
    </div>
  );
}

export default DiscoverMore;
