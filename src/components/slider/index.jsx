import lavandel from "../../assets/images/lavandel.jpg";
import see from "../../assets/images/see.jpg";
import rose from "../../assets/images/rose.jpg";
import wolken from "../../assets/images/wolken.jpg";
import ukraine from "../../assets/images/ukraine.jpg";
import herz from "../../assets/images/herz.jpg";
import hruscha from "../../assets/images/hruscha.jpg";
import roseHerz from "../../assets/images/roseHerz.jpg";
import rosePink from "../../assets/images/rosePink.jpg";
import styles from "./styles.module.css";

const images = [
  lavandel,
  see,
  rose,
  wolken,
  ukraine,
  herz,
  hruscha,
  roseHerz,
  rosePink,
];
function Slider() {
  return (
    <div className={styles.slider}>
      <div className={styles.sliderTrack}>
        {images.concat(images).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={styles.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
