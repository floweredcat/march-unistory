// import halfSVG from "../../Assets/Images/half.svg"
import styles from "./styles.module.css"

export const HalfRound = () => {
  return (
    <><svg className={styles.circle} width="244" height="488" viewBox="0 0 244 488" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 487C134.205 487 243 378.205 243 244C243 109.795 134.205 1 0 1" stroke="#E75626" stroke-width="1" stroke-dasharray="0" stroke-dashoffset="0">
        <animate attributeName="stroke-dashoffset" from="622" to="0" dur="2s" fill="freeze" begin="0s" />
      </path>
    </svg><span className={styles.point} /><span className={styles.point} /><span className={styles.point} /></>
  );
}