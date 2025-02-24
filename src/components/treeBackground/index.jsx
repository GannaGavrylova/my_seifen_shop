import styles from "./styles.module.css";
import { useRef, useEffect } from "react";

import Spheres2Background from "threejs-components/build/backgrounds/spheres2.cdn.min.js";

function ThreeBackground() {
  const canvasRef = useRef(null);

  let bg = null;

  useEffect(() => {
    if (canvasRef.current) {
      bg = Spheres2Background(canvasRef.current, {
        count: 100,
        colors: [0xff0000, 0x00ff00, 0x0000ff],
        minSize: 0.5,
        maxSize: 1,
      });
    }

    const toggleAnimation = (event) => {
      if (bg && event.target.id !== "colors-btn") {
        bg.togglePause();
      }
    };
    document.body.addEventListener("click", toggleAnimation);
    return () => {
      document.body.removeEventListener("click", toggleAnimation);
    };
  }, []);

  const changeColors = () => {
    if (bg && bg.spheres) {
      bg.spheres.setColors([
        0xffffff * Math.random(),
        0xffffff * Math.random(),
        0xffffff * Math.random(),
      ]);
      if (bg.spheres.light1) {
        bg.spheres.light1.color.set(0xffffff * Math.random());
      } else {
        console.warn("bg.spheres.light1 не найден!");
      }
    } else {
      console.warn("bg.spheres.light1 не инициализирован!");
    }
  };

  return (
    <div className={styles.app}>
      <div className={styles.hero}>
        <h1>Seifenkugeln</h1>
        <h2>Interactive Background</h2>
      </div>
      <div className={styles.buttons}>
        <button id="colors-btn" onClick={() => changeColors()}>
          Random colors
        </button>
      </div>
      <canvas ref={canvasRef} className={styles.canvas}>
        {" "}
      </canvas>
      ;
    </div>
  );
}

export default ThreeBackground;
