import React, { useState } from "react";
import ProjectCard from "./Projectcard";
import "./ProjectList.css";

const ProjectList = () => {
  const [projects] = useState([
    { title: "Sci-Fi Thriller", description: "A space adventure", genre: "Sci-Fi", budget: 50000 },
    { title: "Romantic Drama", description: "A love story", genre: "Romance", budget: 20000 },
    { title: "Action Packed", description: "High-stakes chase", genre: "Action", budget: 75000 },
  ]);

  return (
    <div className="project-list">
      <h1>Available Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
