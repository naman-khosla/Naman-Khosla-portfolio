import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import RepoCard from "./Portfolio.js"; // Assuming RepoCard is a separate component file

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
