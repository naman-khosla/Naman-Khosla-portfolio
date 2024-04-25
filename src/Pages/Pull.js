import React, { useState, useEffect } from "react";
import "./Portfolio.css";

const RepoCard = ({ repo }) => {
  return (
    <div className="repo-card">
      <img
        src="path-to-your-placeholder-image.jpg"
        alt={`${repo.name} logo`}
        className="repo-logo"
      />
      <div className="repo-card-content">
        <h2 className="repo-card-title">{repo.name}</h2>
        <p className="repo-card-description">{repo.description}</p>
      </div>
      <div className="repo-card-actions">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          GitHub
        </a>
        <a href={`/${repo.name}`} className="btn btn-outline">
          View Project
        </a>
      </div>
    </div>
  );
};

const PortfolioPage = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/naman-khosla/repos"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Fetching error: ", error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="portfolio-container">
      <h1>My GitHub Repositories</h1>
      <div className="repo-container">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
