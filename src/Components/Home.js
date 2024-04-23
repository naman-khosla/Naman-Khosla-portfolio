import React from "react";

const Home = () => {
  return (
    <div className="home">
      <header className="hero-section">
        <h1>Welcome to Digital Creator's Showcase Hub</h1>
        <p>
          Explore the creative works of developers, photographers, musicians,
          and writers.
        </p>
      </header>
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Dynamic content loading from various APIs</li>
          <li>Personalized experience with environment-based customization</li>
          <li>Interactive and user-friendly interface</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
