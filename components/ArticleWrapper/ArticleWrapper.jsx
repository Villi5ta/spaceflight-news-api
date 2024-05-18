import ArticleCard from "../ArticleCard/ArticleCard";
import styles from "./ArticleWrapper.module.css";
import Spinner from "../Spinner/Spinner";

const ArticleWrapper = ({ articles, setArticles }) => {
  return (
    <div className={styles.wrapper}>
      {articles ? (
        articles.map((article) => (
          <ArticleCard
            key={article.id}
            id={article.id}
            title={article.title}
            image_url={article.image_url}
            summary={article.summary}
            setArticles={setArticles}
          />
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default ArticleWrapper;
