import styles from "./styles.module.css";
import { useCallback } from "react";

export const ActionArea = () => {
  let pos = { x: 0, y: 0 };
  const planet = document.getElementById("planet");
  const mouseMoveHandler = useCallback(
    (e: any) => {
      const { clientX, clientY } = e;
      if (planet == null) {
        return;
      }

      pos = { x: clientX - 887, y: clientY - 480 };
      planet.style.transform = "translate(" + pos.x + "px, " + pos.y + "px)";
    },
    [planet]
  );
  const mouseLeaveHandler = useCallback(() => {
    if (planet == null) {
      return;
    }

    planet.style.transform = "translate(0)";
  }, [planet]);

  return (
    <>
      <div
        className={styles.action_area}
        onMouseMove={mouseMoveHandler}
        onMouseLeave={mouseLeaveHandler}
      />
      <div className={styles.container} />
      <div className={styles.wrapper} />
      <span className={styles.round} />
      <span className={styles.round} />
    </>
  );
};
