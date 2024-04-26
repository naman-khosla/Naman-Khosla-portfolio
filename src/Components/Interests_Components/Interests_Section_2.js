import React, { useState, useEffect } from "react";
import "./Interests_Section_2.css"; // Make sure your CSS is properly linked
import { Link } from "react-router-dom";
import { GrInstagram } from "react-icons/gr";

const Interests_Section_2 = () => {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstagramFeed = async () => {
      const INSTAGRAM_KEY = process.env.REACT_APP_INSTAGRAM_KEY;
      const url = `https://graph.instagram.com/me/media?fields=id,username,media_type,media_url,caption,permalink&access_token=${INSTAGRAM_KEY}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const imagePosts = data.data.filter(
          (item) =>
            item.media_type === "IMAGE" || item.media_type === "CAROUSEL_ALBUM"
        );
        setFeed(imagePosts);
      } catch (error) {
        console.error("Error fetching Instagram feed:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramFeed();
  }, []);

  if (loading) return <p className="loading_text">Loading...</p>;
  if (error) return <p>Error loading feed: {error}</p>;

  return (
    <div className="interest_section_shell">
      <h1>Instagram Feed</h1>
      <div className="feed-container">
        {feed.map((item) => (
          <div key={item.id} className="feed-item">
            <div className="header_box">
              <img src="/images/Assets/ig_profile.png" className="icon" />
              <p className="username">{item.username}</p>
            </div>
            <img
              src={item.media_url}
              alt={item.caption}
              className="feed-image"
            />
            <div className="feed-text-content">
              <p className="feed-caption">{item.caption}</p>
              <Link to={item.permalink} className="link">
                <img
                  src="./images/Assets/insta_icon.svg"
                  className="click_here"
                  alt="link to instagram"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interests_Section_2;
