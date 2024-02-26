import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { useState } from "react";
import { Article } from "../../types/main.types";
import LoginNavComponent from "../../shared/components/LoginNav/LoginNav";
import HomeNavComponent from "../../shared/components/HomeNav/HomeNavComponent";
import FeedHeader from "./components/FeedHeader/FeedHeader";
import Footer from "../../shared/components/Footer/Footer";
import Spinner from "../../shared/components/loaders/spinner/Spinner";
import Pagination from "../../shared/components/Pagination/Pagination";
import ErrorPage from "../../shared/pages/ErrorPage";
import ArticleList from "./components/ArticleList/ArticleList";
import styles from "./HomePage.module.scss";

const HomePageComponent = () => {
  const user = useSelector((state: RootState) => state.user);
  const [feedState, setFeedState] = useState("global");
  const [currentPage, setCurrentPage] = useState(1);
  const articleLimit = 10;
  const loading = true;
  const error = false;
  const data: Article[] = [];

  const errorMessages = {
    Network: ["Error. Check connectivity and try again"],
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearUser());
    navigate("/login");
  };

  const handleFeedChange = (feed: string) => {
    setFeedState(feed);
  };

  const changePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <section className={`${styles.home} ${styles.page}`}>
        {user.isLoggedIn ? <HomeNavComponent /> : <LoginNavComponent />}
        <section className={styles.hero}>
          <h1>conduit</h1>
          <p>A place to share your knowledge.</p>
        </section>
        <main>
          <section>
            <FeedHeader
              handleFeedChange={handleFeedChange}
              feedName={feedState}
              isLoggedIn={user.isLoggedIn}
            />
            <div className={styles.content}>
              {loading ? (
                <span>
                  <Spinner />
                </span>
              ) : error ? (
                <ErrorPage errors={errorMessages} refetch={() => {}} />
              ) : (
                <ArticleList articles={data} />
              )}
            </div>
            {data.length > 0 && (
              <Pagination
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
        <Footer />
      </footer>
    </>
  );
};

export default HomePageComponent;
