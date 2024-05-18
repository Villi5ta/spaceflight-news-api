import React from "react";
import ArticleWrapper from "../ArticleWrapper/ArticleWrapper";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./LandingPage.module.css";
import Image from "next/image";
import landingImage from "../../assets/landingFoto.jpeg";
import Link from "next/link";

const LandingPage = () => {
  const [articles, setArticles] = useState(null);

  const fetchArticles = async () => {
    const response = await axios.get(
      "https://api.spaceflightnewsapi.net/v4/articles/",
      {
        params: {
          limit: 4,
        },
      }
    );
    setArticles(response.data.results);
  };

  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <div>
      <div className={styles.landingPageWrapper}>
        <div className={styles.landingText}>
          <h1 className={styles.landingHeadline}>
            A space news site worthy of the new Space Age
          </h1>
          <p className={styles.landingParagraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum numquam
            doloribus, vitae voluptatem perferendis sint voluptatibus cumque
            asperiores aliquid vel aliquam suscipit error officiis ea
            necessitatibus explicabo, eligendi facilis iste.
          </p>
        </div>
        <Image className={styles.landingImage} src={landingImage}></Image>
        <Link className={styles.moreNewsLnk} href="/articles">
          More news here!
        </Link>
      </div>

      <ArticleWrapper articles={articles} setArticles={setArticles} />
    </div>
  );
};

export default LandingPage;
