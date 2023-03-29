import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { Button } from "../../UI/Button/Button";

type PopupProps = {
  isPopupOpened: boolean;
  setIsPopupOpened: (val: boolean) => void;
};

export const Popup = ({ isPopupOpened, setIsPopupOpened }: PopupProps) => {
  if (!isPopupOpened || localStorage.address) {
    return null;
  }
  useEffect(() => {
    const close = (e: any) => {
      if (e.keyCode === 27) {
        setIsPopupOpened(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <div className={styles.popup_wrapper}>
      <div className={styles.popup}>
        <h3 className={styles.title}>METAMASK EXTENTION</h3>
        <div className={styles.text}>
          To work with our application, you have to install the{" "}
          <span>Metamask browser extension</span>
        </div>
        <Button
          type="button"
          label="Skip this step"
          onClick={() => setIsPopupOpened(false)}
        />
      </div>
    </div>
  );
};
