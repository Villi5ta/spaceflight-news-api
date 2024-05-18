import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

const Article = () => {
  const router = useRouter();

  const [article, setArticle] = useState();

  const fetchArticle = async () => {
    const fetchedArticle = await axios.get(
      `https://api.spaceflightnewsapi.net/v4/articles/${router.query.id}`
    );
    setArticle(fetchedArticle.data);
    console.log(fetchedArticle.data);
  };

  useEffect(() => {
    router.query.id && fetchArticle();
  }, [router.query.id]); //NOT REALLY NECESSARY IN THIS CASE, NOT GETTING UNDEFINED WITHOUT IT

  return (
    <div>
      <Header />
      {article && (
        <div>
          <h2>{article.title}</h2>
          <img src={article.image_url}></img>
          <p>{article.summary}</p>
          <p>Source: {article.news_site}</p>
          <Link href={article.url}>Original article</Link>
        </div>
      )}
    </div>
  );
};

export default Article;
