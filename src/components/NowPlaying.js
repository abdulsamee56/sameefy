import React from "react";
import "../styles/NowPlaying.css";

function NowPlaying() {
  return (
    <div className="nowPlaying">
      <h1 className="nowPlaying__title">Now Playing: HR Digitization & Automation Intern at Bosch</h1>
      <p className="nowPlaying__intro">
        As an HR Digitization & Automation Intern at Bosch, I focus on optimizing data processes and creating impactful tools for HR teams. My role blends technical expertise with problem-solving to drive efficiency and innovation.
      </p>
      <div className="nowPlaying__details">
        <ul>
          <li>
            <strong>ETL Optimization:</strong> Streamlined monthly ETL processes in KNIME, integrating disparate talent development datasets. This reduced data preparation time and enhanced the accuracy of analytics.
          </li>
          <li>
            <strong>Power BI Dashboards:</strong> Designed a regional internal transfer dashboard, enabling leadership to track division changes, promotions, and relocations efficiently.
          </li>
          <li>
            <strong>Automation with VBA:</strong> Automated trainee cost calculations in Excel VBA, reducing manual workload and improving budgeting accuracy.
          </li>
        </ul>
      </div>
      <p className="nowPlaying__closing">
        This role showcases my ability to merge technical skills with business needs, delivering tools and insights that make a tangible impact.
      </p>
    </div>
  );
}

export default NowPlaying;
