import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import LoginNavComponent from "../../shared/components/LoginNav/LoginNav";
import HomeNavComponent from "../../shared/components/HomeNav/HomeNavComponent";
import FeedHeader from "./components/FeedHeader/FeedHeader";
import { useState } from "react";
import "./HomePage.scss";
import Footer from "../../shared/components/Footer/Footer";
import Spinner from "../../shared/components/loaders/spinner/Spinner";
import Pagination from "../../shared/components/Pagination/Pagination";

const HomePageComponent = () => {
  const user = useSelector((state: RootState) => state.user);
  const [feedState, setFeedState] = useState("global");
  const [currentPage, setCurrentPage] = useState(1);
  const articleLimit = 10;
  const loading = true;
  const error = false;
  const data = [1, 2];

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
      <section className="home page">
        {user.isLoggedIn ? <HomeNavComponent /> : <LoginNavComponent />}
        <section className="hero">
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
            <div className="content">
              {loading ? (
                <span>
                  <Spinner />
                </span>
              ) : error ? (
                <div className="error"></div>
              ) : (
                <div className="data"></div>
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
          <section className="tags"></section>
        </main>
        <button onClick={handleLogout}>Logout</button>
      </section>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};

export default HomePageComponent;
