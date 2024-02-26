import { NavLink } from "react-router-dom";
import { Article } from "../../../../types/main.types";
import { formatDate } from "../../../../utils/formatDate";
import HeartIcon from "../../../../shared/components/icons/Heart";
import styles from "./ArticleList.module.scss";
import tagStyles from "../../../../shared/stylesheets/taglist.styles.module.scss";

type ArticleListProps = {
  articles: Article[];
};

const ArticleList = ({ articles }: ArticleListProps) => {
  const favoriteArticle = (slug: string, favorited: boolean) => {};
  const pending = false;

  return (
    <section className={styles["article-list"]}>
      {articles.map((article) => (
        <article>
          <div className={styles["article-meta"]}>
            <span className={styles["user-info"]}>
              <div className={styles.img}>
                <img src={article.author.image} alt="profile" />
              </div>
              <div>
                <NavLink to={`/profile/${article.author.username}`}>
                  {article.author.username}
                </NavLink>
                <p>{formatDate(article.createdAt)}</p>
              </div>
            </span>
            <button
              type="button"
              disabled={pending}
              className={`${styles.likes} ${
                article.favorited ? `${styles.active}` : ""
              }`}
              onClick={() => favoriteArticle(article.slug, article.favorited)}
            >
              <HeartIcon />
              <p>{article.favoritesCount}</p>
            </button>
          </div>
          <NavLink to={`/article/${article.slug}`}>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <div className={styles.tags}>
              <p>Read more...</p>
              <ul className={tagStyles.taglist}>
                {article.tagList.map((tag, index) => (
                  <li className={tagStyles.tagitem} key={index}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </NavLink>
        </article>
      ))}
      {articles.length < 1 && <h1>No articles are here... yet.</h1>}
    </section>
  );
};

export default ArticleList;
