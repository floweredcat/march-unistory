import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const Logo = () => (
  <Link to={"/march-unistory"} className={styles.logo}>
    Logo
  </Link>
);
