import { Link } from "react-router-dom"
import styles from './styles.module.css'

export const Logo = () => {
  return <Link to={'/'} className={styles.logo}>Logo</Link>
}