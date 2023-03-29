import { useState } from "react";
import { ActionArea } from "../../Components/ActionArea/ActionArea";
import { HalfRound } from "../../Components/HalfRound/HalfRound";
import { Planet } from "../../Components/Planet/Planet";
import { Stats } from "../../Components/Stats/Stats";
import { Popup } from "../../Features/Popup/Popup";
import { Registration } from "../../Features/Registration/Registration";
import { MainContent } from "../../Widgets/MainContent/MainContent";
import styles from "./styles.module.css";

export const Main = () => {
  const [isPopupOpened, setIsPopupOpened] = useState(true);
  return (
    <>
      <section className={styles.section}>
        <Popup
          isPopupOpened={isPopupOpened}
          setIsPopupOpened={setIsPopupOpened}
        />
        <ActionArea />
        <MainContent />
        <Planet />
        <HalfRound />
        <Stats />
      </section>
      <Registration />
    </>
  );
};
