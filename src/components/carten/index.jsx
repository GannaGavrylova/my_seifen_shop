// import styles from "./styles.module.css";
// import { useState } from "react";
// import lavandel from "../../assets/images/lavandel.jpg";
// import see from "../../assets/images/see.jpg";
// import rose from "../../assets/images/rose.jpg";
// import wolken from "../../assets/images/wolken.jpg";
// import ukraine from "../../assets/images/ukraine.jpg";
// import herz from "../../assets/images/herz.jpg";
// const images = [
//   {
//     src: lavandel,
//     title: "Lavandel",
//     text: "It's like regular catch, but it's on ice so it's cooler literally",
//   },
//   { src: rose, title: "Rose", text: "Mud isn't going to touch itself" },
//   { src: wolken, title: "Wolken", text: "Some text about BMX Football..." },
//   { src: see, title: "See", text: "Lorem hjds fjdk" },
//   { src: ukraine, title: "Ukraine", text: "Lorem rekjk daslkdl" },
//   { src: herz, title: "Herz", text: "Lorem kl; dsd;" },
// ];
// function Carten() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);

//   const nextSlide = () => {
//     if (animating) return;
//     setAnimating(true);
//     setTimeout(() => {
//       setActiveIndex((prev) => (prev + 1) % images.length);
//       setAnimating(false);
//     }, 660);
//   };

//   const prevSlide = () => {
//     if (animating) return;
//     setAnimating(true);
//     setTimeout(() => {
//       setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
//     }, 660);
//   };
//   return (
//     <div
//       className={`${styles.activitiesWidget} ${
//         animating ? styles.childrenAnimating : ""
//       }`}
//     >
//       <div className={`${styles.activity} ${styles.active}`}>
//         <div className={styles.img}>
//           <img src={images[activeIndex].src} alt={images[activeIndex].title} />
//         </div>
//         <div className={styles.text}>
//           <h3>{images[activeIndex].title}</h3>
//           <p>{images[activeIndex].text} </p>
//         </div>
//       </div>
//       <div className={styles.activitiesNavigation}>
//         <button onClick={prevSlide}> prev </button>
//         <button onClick={nextSlide}>next</button>
//       </div>
//       <div className={styles.activitiesCount}>
//         {activeIndex + 1} / {images.length}
//       </div>
//     </div>
//   );
// }

// export default Carten;

import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import lavandel from "../../assets/images/lavandel.jpg";
import see from "../../assets/images/see.jpg";
import rose from "../../assets/images/rose.jpg";
import wolken from "../../assets/images/wolken.jpg";
import ukraine from "../../assets/images/ukraine.jpg";
import herz from "../../assets/images/herz.jpg";

const images = [lavandel, rose, wolken, see, ukraine, herz];
const titles = ["Lavandel", "Rose", "Wolken", "See", "Ukraine", "Herz"];
const descriptions = [
  "Ice Catch - It's like regular catch, but it's on ice so it's cooler literally.",
  "Mud Touching - Mud isn't going to touch itself.",
  "BMX Football - Extreme football with bikes!",
  "See - Beautiful landscape view.",
  "Ukraine - A place with rich history and culture.",
  "Herz - A symbol of love and passion.",
];

function Carten() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const rotateAngles = [4, 2, 3, 7, 5, 1]; // Разные углы поворота для карточек

  const moveNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 900); // Время анимации
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const movePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 700);
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.activitiesWidget}>
        {images.map((img, index) => (
          <div
            key={index}
            className={`${styles.activity} ${
              index === activeIndex ? styles.active : ""
            }`}
            style={{
              //   transform: `rotate(${rotateAngles[index]}deg)`,
              //   opacity: index === activeIndex ? 1 : 0,
              zIndex: index === activeIndex ? 2 : 1,
            }}
          >
            <div
              className={styles.img}
              style={{ transform: `rotate(${rotateAngles[index]}deg)` }}
            >
              <img src={img} alt={titles[index]} />
            </div>
            <div className={styles.text}>
              <h3>{titles[index]}</h3>
              <p>{descriptions[index]}</p>
            </div>
          </div>
        ))}
        <button className={styles.prevButton} onClick={movePrev}>
          ◀
        </button>
        <button className={styles.nextButton} onClick={moveNext}>
          ▶
        </button>
      </div>
    </div>
  );
}

export default Carten;

{
  /* <div className={styles.widget}>
{images.map((image, index) => (
  <div
    key={index}
    className={`${styles.activity} ${index === currentIndex ? styles.active : ""} ${animating ? styles.animating : ""}`}
  >
    <div className={styles.img}>
      <img src={image.src} alt={image.alt} />
    </div>
    <div className={styles.text}>
      <h3>{image.title}</h3>
      <p>{image.desc}</p>
    </div>
  </div>
))}
<button className={styles.nextButton} onClick={nextCard}>Next</button>
</div>
);
} */
}

// первичный вариант кода
{
  /* <div className={styles.activity}>
        <div className={styles.img}>
          <img src={rose} alt="Rose" />
        </div>
        <div className={styles.text}>
          <h3>Mud Touching</h3>
          <p>Mud isn't going to tiuch itself</p>
        </div>
      </div>

      <div className={styles.activity}>
        <div className={styles.img}>
          <img src={wolken} alt="Wolken" />
        </div>
        <div className={styles.text}>
          <h3>BMX Football</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            rerum omnis, eius ipsum esse placeat deserunt ab aliquid amet
            consequatur labore ut, tempora expedita tenetur sunt quasi fugit
            ullam excepturi.
          </p>
        </div>
      </div>
      <div className={styles.activity}>
        <div className={styles.img}>
          <img src={see} alt="See" />
        </div>
        <div className={styles.text}>
          <h3>See</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className={styles.activity}>
        <div className={styles.img}>
          <img src={ukraine} alt="Ukraine" />
        </div>
        <div className={styles.text}>
          <h3>Ukraine</h3>
          <p>Lorem ipsum dolor sit.</p>
        </div>
      </div>

      <div className={styles.activity}>
        <div className={styles.img}>
          <img src={herz} alt="Herz" />
        </div>
        <div className={styles.text}>
          <h3>Herz</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div> */
}
