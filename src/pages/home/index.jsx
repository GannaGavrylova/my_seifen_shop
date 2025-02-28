import styles from "./styles.module.css";
import { useState } from "react";
import bannerImage from "../../assets/images/bannerImage.jpg";
import { Sozlogos } from "../../components/sozlogos";
import Carten from "../../components/carten";
import ThreeBackground from "../../components/treeBackground";
import Karusel from "../../components/karusel";
import Slider from "../../components/slider";
import SliderSwiper from "../../components/slideSwiper";
import HoverCarts from "../../components/hoverCarts";

function Home() {
  // const [isHovered, setIsHovered] = useState(false);
  return (
    <main className={styles.mainContainer}>
      <div className={styles.ocean}>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>

        <div className={styles.secondConteiner}>
          <ThreeBackground />
        </div>
        <div>
          <h1 style={{ color: "blue" }}>Unser Laden</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            voluptas eligendi quidem numquam nostrum modi officia quam corporis
            officiis itaque?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            placeat!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            neque rerum, facilis quo ipsam iure.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            perspiciatis voluptate doloremque quod saepe provident inventore
            temporibus tenetur aperiam iusto.
          </p>
        </div>
        {/* <Carten /> */}
        {/* <Karusel /> */}
        {/* <Slider /> */}
        <SliderSwiper />
        <HoverCarts />
        <div className={styles.bg}></div>
        <Sozlogos />
      </div>
    </main>
  );
}

export default Home;

{
  /* <button
          className={`${styles.button} ${isHovered ? styles.hovered : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <svg
            fill="none"
            viewBox="0 0 342 208"
            height="75"
            width="242"
            className={styles.splash}
          ></svg>
          <span className={styles.changState1}>
            {"JoinToday".split("").map((char, index) => (
              <span key={index} data-label={char} style={{ "--i": index + 1 }}>
                {char}
              </span>
            ))}
          </span>
        </button> */
}

{
  /* <banner>
          <img
            className={styles.imageBnner}
            style={{ width: "1280px", height: "720px" }}
            src={bannerImage}
            alt="Banner"
          />
        </banner> */
}
{
  /* <div className={styles.bg}>
          <button className={styles.button}>
            <svg
              fill="none"
              viewBox="0 0 342 208"
              height="208"
              width="342"
              className={styles.splash}
            ></svg>
            <span className={styles.changState1}>
              <span data-label="J" style={{ "--i": "1" }}>
                J
              </span>
              <span data-label="o" style={{ "--i": "2" }}>
                o
              </span>
              <span data-label="i" style={{ "--i": "3" }}>
                i
              </span>
              <span data-label="n" style={{ "--i": "4" }}>
                n
              </span>
              <span data-label="T" style={{ "--i": "5" }}>
                T
              </span>
              <span data-label="o" style={{ "--i": "6" }}>
                o
              </span>
              <span data-label="d" style={{ "--i": "7" }}>
                d
              </span>
              <span data-label="a" style={{ "--i": "8" }}>
                a
              </span>
              <span data-label="y" style={{ "--i": "9" }}>
                y
              </span>
            </span>
          </button>
        </div> */
}
