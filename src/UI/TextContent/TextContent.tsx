import styles from "./styles.module.css";

// Type PropType = {
//   text: string;
// }

export const TextContent = () => (
  // At prod get textcontent as prop with PropType
  <div className={styles.textContent}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.
  </div>
);
