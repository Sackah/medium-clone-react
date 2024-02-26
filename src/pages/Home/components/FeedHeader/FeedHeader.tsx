import styles from "../../../../shared/stylesheets/feed-headers.styles.module.scss";

type FeedHeaderProps = {
  feedName: string;
  isLoggedIn: boolean;
  handleFeedChange: (feedName: string) => void;
};

const FeedHeader = (props: FeedHeaderProps) => {
  return (
    <header className={styles.feed}>
      <p
        onClick={() => props.handleFeedChange("global")}
        className={props.feedName === "global" ? `${styles.active}` : ""}
      >
        Global Feed
      </p>
      {props.isLoggedIn && (
        <p
          onClick={() => props.handleFeedChange("feed")}
          className={props.feedName === "feed" ? `${styles.active}` : ""}
        >
          Your feed
        </p>
      )}
    </header>
  );
};

export default FeedHeader;
