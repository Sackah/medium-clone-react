import "../../../../shared/stylesheets/feed-headers.styles.scss";

type FeedHeaderProps = {
  feedName: string;
  isLoggedIn: boolean;
  handleFeedChange: (feedName: string) => void;
};

const FeedHeader = (props: FeedHeaderProps) => {
  return (
    <header className="feed">
      <p
        onClick={() => props.handleFeedChange("global")}
        className={props.feedName === "global" ? "active" : ""}
      >
        Global Feed
      </p>
      {props.isLoggedIn && (
        <p
          onClick={() => props.handleFeedChange("feed")}
          className={props.feedName === "feed" ? "active" : ""}
        >
          Your feed
        </p>
      )}
    </header>
  );
};

export default FeedHeader;
