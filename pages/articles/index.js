import React from "react";
import Header from "../../components/Header/Header";
import ArticleWrapper from "../../components/ArticleWrapper/ArticleWrapper";
import { useState, useEffect } from "react";
import axios from "axios";

const Articles = () => {
  const [articles, setArticles] = useState(null);

  const fetchArticles = async () => {
    const response = await axios.get(
      "https://api.spaceflightnewsapi.net/v4/articles/"
    );
    setArticles(response.data.results);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div>
      <Header />

      <h2>All space news from the web</h2>

      <ArticleWrapper articles={articles} setArticles={setArticles} />
    </div>
  );
};

export default Articles;
