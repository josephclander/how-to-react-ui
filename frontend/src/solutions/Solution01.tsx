import { useState } from "react";
import styles from "./Solution01.module.css";

const Solution01 = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleMinus = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className={styles.container}>
      <p className={styles.counter}>{count}</p>
      <div className={styles.buttons__container}>
        <button className={styles.button} onClick={handleAdd}>
          +
        </button>
        <button className={styles.button} onClick={handleMinus}>
          -
        </button>
      </div>
    </div>
  );
};

export default Solution01;
