import { ActionArea } from "../../Components/ActionArea/ActionArea"
import { Planet } from "../../Components/Planet/Planet"
import { MainContent } from "../../Widgets/MainContent/MainContent"
import styles from "./styles.module.css"

export const Main = () => {
  
  return (
  <section className={styles.section}>
    <ActionArea  />
    <MainContent />
    <Planet />
  </section>
  )
}