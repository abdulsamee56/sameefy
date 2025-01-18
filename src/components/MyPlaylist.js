import React from "react";
import "../styles/MyPlaylist.css";

function MyPlaylist() {
  const projects = [
    {
      title: "CodeDrafts",
      description:
        "A dynamic web application built with Django to explore and manage diverse programming projects, with features like a CV generator and macro tracker.",
      image: "https://via.placeholder.com/300x200?text=CodeDrafts", // Placeholder
      github: "https://github.com/your-github-link-for-codedrafts",
    },
    {
      title: "BirdNest IQ",
      description:
        "A mobile app for bird species identification, built with Flutter, Django, and Firebase as part of my Wayne State capstone project.",
      image: "https://via.placeholder.com/300x200?text=BirdNest+IQ", // Placeholder
      github: "https://github.com/your-github-link-for-birdnestiq",
    },
    {
      title: "Detroit Lions Predictive Model",
      description:
        "A predictive model analyzing 5-yard goal line rush success rates, built in R with a Shiny web interface. (GitHub not available due to data security).",
      image: "https://via.placeholder.com/300x200?text=Detroit+Lions+Model", // Placeholder
      github: null, // No link available
    },
  ];

  return (
    <div className="myPlaylist">
      <h1 className="myPlaylist__title">My Playlist</h1>
      <div className="myPlaylist__grid">
        {projects.map((project, index) => (
          <div className="projectCard" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="projectCard__image"
            />
            <h2 className="projectCard__title">{project.title}</h2>
            <p className="projectCard__description">{project.description}</p>
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="projectCard__button"
              >
                View on GitHub
              </a>
            ) : (
              <p className="projectCard__noLink">
                GitHub link unavailable for this project.
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyPlaylist;
