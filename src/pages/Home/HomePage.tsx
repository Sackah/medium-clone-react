import * as imports from "./imports.module";
import { type RootState } from "../../store/store";
import { type AllArticles } from "../../types/article.types";
import styles from "./HomePage.module.scss";

const HomePageComponent = () => {
  const user = imports.useSelector((state: RootState) => state.user);
  const [feedState, setFeedState] = imports.useState("global");
  const [currentPage, setCurrentPage] = imports.useState(1);
  const articleLimit = 10;
  const { data, isPending, error, refetch } = imports.useFetch<AllArticles>(
    `/articles?limit=${articleLimit}&offset=${currentPage * 10 - 10}`,
  );

  const dispatch = imports.useDispatch();
  const navigate = imports.useNavigate();

  const handleLogout = () => {
    dispatch(imports.clearUser());
    navigate("/login");
  };

  const handleFeedChange = (feed: "global" | "feed") => {
    setFeedState(feed);
    switch (feed) {
      case "global":
        refetch(
          `/articles?limit=${articleLimit}&offset=${currentPage * 10 - 10}`,
        );
        break;
      case "feed":
        refetch(
          `/articles/feed?limit=${articleLimit}&offset=${
            currentPage * 10 - 10
          }`,
        );
        break;
      default:
        break;
    }
  };

  const changePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    refetch(`/articles?limit=${articleLimit}&offset=${pageNumber * 10 - 10}`);
  };

  return (
    <>
      <section className={`${styles.home} ${styles.page}`}>
        {user.isLoggedIn ? (
          <imports.HomeNavComponent />
        ) : (
          <imports.LoginNavComponent />
        )}
        <section className={styles.hero}>
          <h1>conduit</h1>
          <p>A place to share your knowledge.</p>
        </section>
        <main>
          <section>
            <imports.FeedHeader
              handleFeedChange={handleFeedChange}
              feedName={feedState}
              isLoggedIn={user.isLoggedIn}
            />
            <div className={styles.content}>
              {isPending ? (
                <span>
                  <imports.Spinner />
                </span>
              ) : error ? (
                <imports.ErrorPage errors={error} refetch={refetch} />
              ) : (
                <imports.ArticleList articles={data!.articles} />
              )}
            </div>
            {data && data.articles.length > 0 && (
              <imports.Pagination
                total={500}
                currentPage={currentPage}
                limit={articleLimit}
                changePage={changePage}
              />
            )}
          </section>
          <section className={styles.tags}></section>
        </main>
        <button onClick={handleLogout}>Logout</button>
      </section>
      <footer className={styles.footer}>
        <imports.Footer />
      </footer>
    </>
  );
};

export default HomePageComponent;
