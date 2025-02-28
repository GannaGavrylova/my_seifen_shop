import styles from "./styles.module.css";
import lavandel from "../../assets/images/lavandel.jpg";
import see from "../../assets/images/see.jpg";

function HoverCarts() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cols}>
        <div className={styles.card}>
          <div
            className={styles.front}
            style={{ backgroundImage: `url(${lavandel})` }}
          >
            <div className={styles.inner}>
              <p>Lavandel</p>
              <span>Красивый лавандовый пейзаж</span>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div
            className={styles.front}
            style={{ backgroundImage: `url(${see})` }}
          >
            <div className={styles.inner}>
              <p>See</p>
              <span>Живописное озеро</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HoverCarts;
