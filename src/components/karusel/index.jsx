import styles from "./styles.module.css";
import lavandel from "../../assets/images/lavandel.jpg";
import herz from "../../assets/images/herz.jpg";
import see from "../../assets/images/see.jpg";
import ukraine from "../../assets/images/ukraine.jpg";

function Karusel() {
  const images = [
    { src: lavandel, title: "Lavanda" },
    { src: herz, title: "Herz" },
    { src: see, title: "See" },
    { src: ukraine, title: "Ukraine" },
  ];
  return (
    // <div className={styles.container}>
    //   <div className={styles.card}>
    //     <h3 className={styles.title}>Lavanda</h3>
    //     <div className={styles.bar}>
    //       <div className={styles.emptybar}></div>
    //       <div className={styles.filledbar}></div>
    //     </div>
    //     <div className={styles.circle}>
    //       <svg version="1.1" xmlns={lavandel}>
    //         <circle className={styles.stroke} cx={60} cy={60} r="50" />
    //       </svg>
    //     </div>
    //   </div>

    //   <div className={styles.card}>
    //     <h3 className={styles.title}>Herz</h3>
    //     <div className={styles.bar}>
    //       <div className={styles.emptybar}></div>
    //       <div className={styles.filledbar}></div>
    //     </div>
    //     <div className={styles.circle}>
    //       <svg version="1.1" xmlns={herz}>
    //         <circle className={styles.stroke} cx={60} cy={60} r="50" />
    //       </svg>
    //     </div>
    //   </div>

    //   <div className={styles.card}>
    //     <h3 className={styles.title}>See</h3>
    //     <div className={styles.bar}>
    //       <div className={styles.emptybar}></div>
    //       <div className={styles.filledbar}></div>
    //     </div>
    //     <div className={styles.circle}>
    //       <svg version="1.1" xmlns={see}>
    //         <circle className={styles.stroke} cx={60} cy={60} r="50" />
    //       </svg>
    //     </div>
    //   </div>

    //   <div className={styles.card}>
    //     <h3 className={styles.title}>Ukraine</h3>
    //     <div className={styles.bar}>
    //       <div className={styles.emptybar}></div>
    //       <div className={styles.filledbar}></div>
    //     </div>
    //     <div className={styles.circle}>
    //       <svg version="1.1" xmlns={ukraine}>
    //         <circle className={styles.stroke} cx={60} cy={60} r="50" />
    //       </svg>
    //     </div>
    //   </div>
    // </div>

    <div className={styles.container}>
      {images.map((item, index) => (
        <div key={index} className={styles.card}>
          <h3 className={styles.title}>{item.title}</h3>
          <div className={styles.bar}>
            <div className={styles.emptybar}></div>
            <div className={styles.filledbar}></div>
          </div>
          {/* Вставляем изображение в карточку */}
          <div className={styles.imageContainer}>
            <img
              src={item.src}
              alt={item.title}
              className={styles.image}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Karusel;
