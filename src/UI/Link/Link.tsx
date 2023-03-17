import styles from "./styles.module.css"

type LinkTypes = {
  to: string;
  placeholder: string
}

export const Link = ({to, placeholder}: LinkTypes) => {
  return (
    <a href={to} className={styles.link} >{placeholder}</a>
  )
}