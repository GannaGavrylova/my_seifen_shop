import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import bannerImage from "../../assets/images/bannerImage.jpg";
import icon from "../../assets/icon.svg";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer} style={{ display: "flex" }}>
        <NavLink to="/">
          <h3>SeifenKugeln</h3>
          <img
            src={bannerImage}
            alt="Logo"
            className={styles.logo}
            style={{ width: "300px", height: "200px", borderRadius: "50%" }}
          />
        </NavLink>
      </div>

      <nav className={styles.navbar}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Mein Page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              About
            </NavLink>
          </li>
          <li className={styles.card}>
            <NavLink to="/card">
              <img src={icon} alt="card" className={styles.icon} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
