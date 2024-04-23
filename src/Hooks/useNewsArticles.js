import { useState, useEffect } from "react";

// use environmental variables
const API_KEY = "31a2c95e56a94e3aa4dbd4659d677c34";

async function getHeadlines() {
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`;
  const result = await fetch(url);
  const data = await result.json();

  return data.articles.map((x) => ({
    title: x.title,
    url: x.url,
  }));
}
export function useNewsArticles() {
  const [loading, setLoading] = useState(true);
  const [headlines, setHeadlines] = useState([]);
  const [error, setErrors] = useState(null);

  useEffect(() => {
    (async () => {
      setHeadlines(await getHeadlines());
      setLoading(false);
    })();
  }, []);
  return { loading, headlines, error };
}
