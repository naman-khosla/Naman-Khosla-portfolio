import React, { useState, useEffect } from "react";

const RepoCard = ({ repo }) => {
  const [languages, setLanguages] = useState("");

  useEffect(() => {
    const fetchLanguages = async () => {
      const url = repo.languages_url; // URL to fetch languages
      try {
        const response = await fetch(url);
        const data = await response.json();
        setLanguages(Object.keys(data).join(", ")); // Converts language object keys to a string
      } catch (error) {
        console.error("Fetching languages error: ", error);
      }
    };

    fetchLanguages();
  }, [repo.languages_url]);

  return (
    <div className="repo-card">
      <div className="repo-card-content">
        <h2 className="repo-card-title">{repo.name}</h2>
        <p className="repo-card-description">{repo.description}</p>
        {languages && <p className="repo-languages">Languages: {languages}</p>}
      </div>
      <div className="repo-card-actions">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Go to GitHub
        </a>
      </div>
    </div>
  );
};

export default RepoCard;
