import { nanoid } from "@reduxjs/toolkit";
import styles from "./styles.module.css";

export const Stats = () => {
  const mockData = [
    { title: "12345", text: "Lorem ipsum dolor" },
    { title: "12345", text: "Lorem ipsum dolor" },
    { title: "12345", text: "Lorem ipsum dolor" },
  ];
  return (
    <div className={styles.stats}>
      <h3 className={styles.title}>Roadmap stats</h3>
      {mockData.map((el) => {
        const { title, text } = el;
        const formattedTitle = title.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return (
          <div className={styles.stats_elem} key={nanoid()}>
            <span className={styles.stats_ind}>{formattedTitle}</span>
            <div className={styles.stats_content}>{text}</div>
          </div>
        );
      })}
    </div>
  );
};
