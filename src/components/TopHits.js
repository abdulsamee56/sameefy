import React from "react";
import "../styles/TopHits.css";
import { FaPython, FaCode, FaDatabase, FaChartLine, FaRobot, FaLink, FaPuzzlePiece, FaUsers } from "react-icons/fa";

function TopHits() {
  const skills = [
    { rank: 1, skill: "Python", description: "Highly proficient in Python for backend development, data analysis, and machine learning.", icon: <FaPython /> },
    { rank: 2, skill: "Full-Stack Development", description: "Experienced in building end-to-end web applications using Django, React, and Firebase.", icon: <FaCode /> },
    { rank: 3, skill: "Data Engineering", description: "Skilled in ETL pipelines, data warehousing, and handling big data using tools like SQL and Apache Spark.", icon: <FaDatabase /> },
    { rank: 4, skill: "Data Analytics", description: "Strong ability to analyze and visualize data to extract actionable insights using tools like Power BI and Tableau.", icon: <FaChartLine /> },
    { rank: 5, skill: "Machine Learning", description: "Proficient in developing predictive models, especially using TensorFlow, scikit-learn, and R.", icon: <FaRobot /> },
    { rank: 6, skill: "API Development", description: "Expertise in building scalable REST APIs using Django REST Framework and Flask.", icon: <FaLink /> },
    { rank: 7, skill: "Problem Solving", description: "Strong problem-solving skills demonstrated through real-world projects and competitive programming.", icon: <FaPuzzlePiece /> },
    { rank: 8, skill: "Collaboration & Leadership", description: "Effective team player with experience leading projects and collaborating with cross-functional teams.", icon: <FaUsers /> },
  ];

  return (
    <div className="topHits">
      <h1 className="topHits__title">Top Hits</h1>
      <p className="topHits__intro">
        These are my key skills, ranked based on expertise and impact. Explore my unique blend of software engineering, data analytics, and development skills that make me a versatile professional.
      </p>
      <div className="topHits__list">
        {skills.map((skill, index) => (
          <div key={skill.rank} className={`topHits__item ${index % 2 === 0 ? "darkCard" : "lightCard"}`}>
            <div className="topHits__icon">{skill.icon}</div>
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
