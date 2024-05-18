import styles from "./ArticleCard.module.css";
import Link from "next/link";

const ArticleCard = ({ id, title, image_url, summary, setArticles }) => {
  const removeArticle = () => {
    console.log(id);
    setArticles((prevState) =>
      prevState.filter((article) => article.id !== id)
    );
  };

  return (
    <div className={styles.container}>
      <Link href={`/article/${id}`}>
        <h3>{title}</h3>

        {image_url ? (
          <img src={image_url} />
        ) : (
          <div className={styles.noImage}>No image</div>
        )}

        <h4>{summary ? <>{summary}</> : <>-</>}</h4>
      </Link>
      <button className={styles.removeArticleBtn} onClick={removeArticle}>
        Remove article
      </button>
    </div>
  );
};

export default ArticleCard;
