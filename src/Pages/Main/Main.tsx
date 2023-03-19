import { ActionArea } from "../../Components/ActionArea/ActionArea"
import { HalfRound } from "../../Components/HalfRound/HalfRound"
import { Planet } from "../../Components/Planet/Planet"
import { Stats } from "../../Components/Stats/Stats"
import { Registration } from "../../Features/Registration/Registration"
import { MainContent } from "../../Widgets/MainContent/MainContent"
import styles from "./styles.module.css"

export const Main = () => {
  
  return (
  <>
    <section className={styles.section}>
      <ActionArea />
      <MainContent />
      <Planet />
      <HalfRound />
      <Stats />
    </section>
    <Registration />
  </>
  )
}