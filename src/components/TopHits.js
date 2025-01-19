import React from "react";
import "../styles/TopHits.css";

function TopHits() {
  const skills = [
    { rank: 1, skill: "Python", description: "Highly proficient in Python for backend development, data analysis, and machine learning." },
    { rank: 2, skill: "Full-Stack Development", description: "Experienced in building end-to-end web applications using Django, React, and Firebase." },
    { rank: 3, skill: "Data Engineering", description: "Skilled in ETL pipelines, data warehousing, and handling big data using tools like SQL and Apache Spark." },
    { rank: 4, skill: "Data Analytics", description: "Strong ability to analyze and visualize data to extract actionable insights using tools like Power BI and Tableau." },
    { rank: 5, skill: "Machine Learning", description: "Proficient in developing predictive models, especially using TensorFlow, scikit-learn, and R." },
    { rank: 6, skill: "API Development", description: "Expertise in building scalable REST APIs using Django REST Framework and Flask." },
    { rank: 7, skill: "Problem Solving", description: "Strong problem-solving skills demonstrated through real-world projects and competitive programming." },
    { rank: 8, skill: "Collaboration & Leadership", description: "Effective team player with experience leading projects and collaborating with cross-functional teams." },
  ];

  return (
    <div className="topHits">
      <h1 className="topHits__title">Top Hits</h1>
      <p className="topHits__intro">
        These are my key skills, ranked based on expertise and impact. Explore my unique blend of software engineering, data analytics, and development skills that make me a versatile professional.
      </p>
      <div className="topHits__list">
        {skills.map((skill) => (
          <div key={skill.rank} className="topHits__item">
            <div className="topHits__rank">{`#${skill.rank}`}</div>
            <div className="topHits__content">
              <h2 className="topHits__skill">{skill.skill}</h2>
              <p className="topHits__description">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopHits;
