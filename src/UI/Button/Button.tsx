import styles from "./styles.module.css";

type PropTypes = {
  onClick: (e: any) => void;
  label: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export const Button = ({
  type = "button",
  onClick,
  label,
  disabled,
}: PropTypes) => (
  <button
    type={type}
    onClick={onClick}
    className={styles.button}
    disabled={disabled}
  >
    {label}
  </button>
);
