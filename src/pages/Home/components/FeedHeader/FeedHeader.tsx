import styles from "../../../../shared/stylesheets/feed-headers.styles.module.scss";

type FeedHeaderProps = {
    feedName: string;
    isLoggedIn: boolean;
    handleFeedChange: (feedName: "global" | "feed") => void;
};

export default function FeedHeader(props: FeedHeaderProps) {
    return (
        <header className={styles.feed}>
            <p
                onClick={() => props.handleFeedChange("global")}
                className={
                    props.feedName === "global"
                        ? `${styles.active} ${styles.p}`
                        : `${styles.p}`
                }
            >
                Global Feed
            </p>
            {props.isLoggedIn && (
                <p
                    onClick={() => props.handleFeedChange("feed")}
                    className={
                        props.feedName === "feed"
                            ? `${styles.active} ${styles.p}`
                            : `${styles.p}`
                    }
                >
                    Your feed
                </p>
            )}
        </header>
    );
}
