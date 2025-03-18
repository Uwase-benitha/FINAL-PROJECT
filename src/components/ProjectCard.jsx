import React from "react";
import "./ProjectList.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p><strong>Genre:</strong> {project.genre}</p>
      <p><strong>Budget:</strong> RWF {project.budget}</p>
      <button>View Details</button>
    </div>
  );
};

export default ProjectCard;
