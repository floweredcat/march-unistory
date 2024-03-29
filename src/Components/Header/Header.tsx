import { DisplayConnectWallet } from "../../Features/DispayConnectWallet/DisplayConnectWallet";
import { Logo } from "../../UI/Logo/Logo";
import styles from "./styles.module.css";

export const Header = () => (
  <header className={styles.header}>
    <Logo />
    <DisplayConnectWallet />
  </header>
);
