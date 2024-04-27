import React, { useState, useEffect } from "react";
import "./Portfolio_Section_2.css";

// RepoCard component to display individual repositories
const RepoCard = ({ repo }) => (
  <div className="repo-card">
    <div className="repo-card-content">
      <h2 className="repo-card-title">{repo.name}</h2>
      <p className="repo-card-description">{repo.description}</p>
      <p className="repo-languages">Languages: {repo.languages}</p>
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

// Portfolio_Section_2 component that fetches repositories and includes a search feature
const Portfolio_Section_2 = () => {
  const [repos, setRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

        Promise.all(repoPromises)
          .then((completeRepos) => {
            console.log(completeRepos);
            setRepos(completeRepos);
          })
          .catch((error) => {
            console.error("Error with Promise.all: ", error);
          });
      } catch (error) {
        console.error("Fetching error: ", error);
      }
    };

    fetchRepos();
  }, []);

  // Function to handle the search filter
  const filteredRepos = searchTerm
    ? repos.filter((repo) =>
        repo.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : repos;

  return (
    <div className="portfolio-container">
      <h1>My GitHub Repositories</h1>
      <h2>More projects coming soon...</h2>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search repositories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="repo-container">
        {filteredRepos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio_Section_2;
