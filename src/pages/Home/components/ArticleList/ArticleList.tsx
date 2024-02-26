import * as imports from "./imports.module";
import styles from "./ArticleList.module.scss";
import tagStyles from "../../../../shared/stylesheets/taglist.styles.module.scss";

type ArticleListProps = {
  articles: imports.Article[];
};

const ArticleList = ({ articles }: ArticleListProps) => {
  const favoriteArticle = (slug: string, favorited: boolean) => {};
  const pending = false;

  return (
    <section className={styles["article-list"]}>
      {articles.map((article, i) => (
        <article className={styles.article} key={i}>
          <div className={styles["article-meta"]}>
            <span className={styles["user-info"]}>
              <div className={styles.img}>
                <img src={article.author.image} alt="profile" />
              </div>
              <div>
                <imports.NavLink to={`/profile/${article.author.username}`}>
                  {article.author.username}
                </imports.NavLink>
                <p>{imports.formatDate(article.createdAt)}</p>
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
              <imports.HeartIcon />
              <p>{article.favoritesCount}</p>
            </button>
          </div>
          <imports.NavLink to={`/article/${article.slug}`}>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <div className={styles.tags}>
              <p>Read more...</p>
              <ul className={tagStyles.taglist}>
                {article.tagList.map((tag, index) => (
                  <li className={tagStyles["tag-item"]} key={index}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </imports.NavLink>
        </article>
      ))}
      {articles.length < 1 && <h1>No articles are here... yet.</h1>}
    </section>
  );
};

export default ArticleList;
