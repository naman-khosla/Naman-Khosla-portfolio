import React, { useState, useEffect } from "react";

const Hobbies = () => {
  const [feed, setFeed] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstagramFeed = async () => {
      const INSTAGRAM_KEY = process.env.REACT_APP_INSTAGRAM_KEY; // Make sure this is set in your .env file
      const url = `https://graph.instagram.com/me/media?fields=id,media_url,timestamp,media_type,permalink,caption&access_token=${INSTAGRAM_KEY}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setFeed(data);
      } catch (error) {
        console.error("Error fetching Instagram feed:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramFeed();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading feed: {error}</p>;

  return (
    <div>
      <h1>Instagram Feed</h1>
      <div className="feed-container">
        {feed &&
          feed.data &&
          feed.data.map((item) => (
            <div key={item.id} className="feed-item">
              <img
                src={item.media_url}
                alt={item.caption}
                className="feed-image"
              />
              <p className="feed-caption">{item.caption}</p>
              <p className="feed-timestamp">
                {new Date(item.timestamp).toLocaleDateString()}
              </p>
              <a
                href={item.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="feed-permalink"
              >
                View on Instagram
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Hobbies;
