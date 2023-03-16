import styles from "./styles.module.css"
import { useEffect, useCallback, useState } from 'react'

export const ActionArea = () => {
  const [pos, setPos] = useState({x: 0, y: 0})
  const mouseMoveHandler = useCallback((e: any) => {
    let planet = document.getElementById('planet')
    const {clientX, clientY, target} = e;
    if (!planet) {
      return 
    }
    if (target.id === "move-area"){
    setPos({x: clientX - 887, y: clientY - 480})
    planet.style.transform = "translate(" + pos.x + "px, " + pos.y + "px)"
  }
    else {
      planet.style.transform = "translate(0)"
    }
  }, [pos])
  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler)
    return () => window.removeEventListener('mousemove', mouseMoveHandler)
  }, [mouseMoveHandler])  

  return (
    <>
      <div className={styles.action_area} id={"move-area"}/>
      <div className={styles.container}/>
      <div className={styles.wrapper} />
      <span className={styles.round} />
      <span className={styles.round} />
    </>
  )
}