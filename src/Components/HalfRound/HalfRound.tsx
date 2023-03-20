// import halfSVG from "../../Assets/Images/half.svg"
import styles from "./styles.module.css"

export const HalfRound = () => {
  return (
    <>
      <svg 
      className={styles.circle} 
      width="244" 
      height="488" 
      viewBox="0 0 244 488" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      >
        <path 
        d="M0 487C134.205 487 243 378.205 243 244C243 109.795 134.205 1 0 1"
        stroke="#E75626"
        >
        </path>
      </svg>
      <span className={styles.point} />
      <span className={styles.point} />
      <span className={styles.point} />
    </>
  );
}