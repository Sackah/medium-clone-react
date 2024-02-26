import { BackendErrors } from "../../types/auth.types";
import BackendErrorComponent from "../components/BackendErrors/BackendErrorComponent";
import RetryIcon from "../components/icons/Retry";
import styles from "./ErrorPage.module.scss";

type ErrorPageProps = {
  errors: BackendErrors;
  refetch: () => void;
};

const ErrorPage = ({ errors, refetch }: ErrorPageProps) => {
  return (
    <section className={styles["error-page"]}>
      <BackendErrorComponent errors={errors} />
      <span onClick={() => refetch()}>
        <p>Click here to retry</p>
        <RetryIcon />
      </span>
    </section>
  );
};

export default ErrorPage;
