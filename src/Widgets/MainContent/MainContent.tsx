import { TextContent } from "../../UI/TextContent/TextContent";
import { Title } from "../../UI/Title/Title";
import styles from "./styles.module.css";

export const MainContent = () => (
  <div className={styles.wrapper}>
    <Title />
    <TextContent />
  </div>
);
