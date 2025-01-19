import React from "react";
import "../styles/NowPlaying.css";

function NowPlaying() {
  const highlights = [
    {
      icon: "⚙️",
      title: "ETL Optimization",
      description:
        "Streamlined monthly ETL processes in KNIME, integrating disparate talent development datasets. This reduced data preparation time and enhanced the accuracy of analytics.",
    },
    {
      icon: "📊",
      title: "Power BI Dashboards",
      description:
        "Designed a regional internal transfer dashboard, enabling leadership to track division changes, promotions, and relocations efficiently.",
    },
    {
      icon: "🤖",
      title: "Automation with VBA",
      description:
        "Automated trainee cost calculations in Excel VBA, reducing manual workload and improving budgeting accuracy.",
    },
  ];

  return (
    <div className="nowPlaying">
      <h1 className="nowPlaying__title">Now Playing: HR Digitization & Automation Intern at Bosch</h1>
      <p className="nowPlaying__intro">
        As an HR Digitization & Automation Intern at Bosch, I focus on optimizing data processes and creating impactful tools for HR teams. My role blends technical expertise with problem-solving to drive efficiency and innovation.
      </p>
      <div className="nowPlaying__cards">
        {highlights.map((highlight, index) => (
          <div key={index} className="nowPlaying__card">
            <div className="nowPlaying__icon">{highlight.icon}</div>
            <h2 className="nowPlaying__header">{highlight.title}</h2>
            <p className="nowPlaying__description">{highlight.description}</p>
          </div>
        ))}
      </div>
      <p className="nowPlaying__footer">
        This role showcases my ability to merge technical skills with business needs, delivering tools and insights that make a tangible impact.
      </p>
    </div>
  );
}

export default NowPlaying;
