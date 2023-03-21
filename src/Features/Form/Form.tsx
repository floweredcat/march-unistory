import styles from "./styles.module.css";

type FormProps = {
  onSubmit: (e: React.FormEvent) => void;
  children: React.ReactNode;
};

export const Form = ({ onSubmit, children }: FormProps) => (
  <form onSubmit={onSubmit} className={styles.form}>
    {children}
  </form>
);
