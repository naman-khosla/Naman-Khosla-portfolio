import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Components/Navbar.css";

const ProjectDetail = () => {
  const { projectName } = useParams(); // This retrieves the projectName from the URL
  const [project, setProject] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/repos/yourUsername/${projectName}`)
      .then((response) => response.json())
      .then((data) => setProject(data))
      .catch((error) =>
        console.error("Error fetching project details:", error)
      );
  }, [projectName]);

  return (
    <div>
      <h1>Project: {project.name}</h1>
      <p>Details about project {project.name}...</p>
      {project.imageUrl && (
        <img src={project.imageUrl} alt={`Cover of ${project.name}`} />
      )}
      <p>{project.description}</p>
      <h3>Technologies Used:</h3>
      <ul>
        {project.technologies &&
          project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
      </ul>
      {/* Here you can add more details about the project, fetched based on projectName, etc. */}
    </div>
  );
};

export default ProjectDetail;
