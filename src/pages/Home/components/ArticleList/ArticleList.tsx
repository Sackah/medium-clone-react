import { NavLink } from "react-router-dom";
import { Article } from "../../../../types/main.types";
import { formatDate } from "../../../../utils/formatDate";
import HeartIcon from "../../../../shared/components/icons/Heart";
import "./ArticleList.scss";
import "../../../../shared/stylesheets/taglist.styles.scss";

type ArticleListProps = {
  articles: Article[];
};

const ArticleList = ({ articles }: ArticleListProps) => {
  const favoriteArticle = (slug: string, favorited: boolean) => {};
  const pending = false;

  return (
    <section className="article-list">
      {articles.map((article) => (
        <article>
          <div className="article-meta">
            <span className="user-info">
              <div className="img">
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
              className={`likes ${article.favorited ? "active" : ""}`}
              onClick={() => favoriteArticle(article.slug, article.favorited)}
            >
              <HeartIcon />
              <p>{article.favoritesCount}</p>
            </button>
          </div>
          <NavLink to={`/article/${article.slug}`}>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <div className="tags">
              <p>Read more...</p>
              <ul className="taglist">
                {article.tagList.map((tag, index) => (
                  <li className="tagitem" key={index}>
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
