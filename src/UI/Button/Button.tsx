
import styles from './styles.module.css'

type PropTypes = {
  onClick: () => void,
  label: string,
  type?: "button" | "submit" | "reset",
}

export const Button = ({type='button', onClick, label}: PropTypes) => {
  return <button type={type} onClick={onClick} className={styles.button}>{label}</button>
}