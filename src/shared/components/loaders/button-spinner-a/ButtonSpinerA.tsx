import styles from "./ButtonSpinnerA.module.scss";

const ButtonSpinerA = () => {
  return (
    <div className={styles["lds-ring"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ButtonSpinerA;
