import styles from "./styles.module.css";

type TableProps = {
  children: React.ReactNode;
};

export const Table = ({ children }: TableProps) => (
  <table className={styles.table}>{children}</table>
);
