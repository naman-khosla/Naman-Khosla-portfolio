import React, { useState, useEffect } from "react";
import "./Portfolio_Section_2.css";

const RepoCard = ({ repo, languages }) => (
  <div className="repo-card">
    <div className="repo-card-content">
      <h2 className="repo-card-title">{repo.name}</h2>
      <p className="repo-card-description">{repo.description}</p>
      <p className="repo-languages">Languages: {languages}</p>
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

const Portfolio_Section_2 = () => {
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
        const repoData = await response.json();

        const repoPromises = repoData.map(async (repo) => {
          const langResponse = await fetch(repo.languages_url);
          const langData = await langResponse.json();
          repo.languages = Object.keys(langData).join(", ");
          return repo;
        });

        Promise.all(repoPromises).then((completeRepos) => {
          setRepos(completeRepos);
        });
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
          <RepoCard key={repo.id} repo={repo} languages={repo.languages} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio_Section_2;
