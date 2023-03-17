// import halfSVG from "../../Assets/Images/half.svg"
// import styles from "./styles.module.css"

import { useRef } from "react";
import { useSpring, animated } from 'react-spring';

// export const HalfRound = () => {
//   return (
//     <>
//     {/* <div className={styles.halfRound}/> */}
//     {/* <div className={styles.half_mock} /> */}
//     <svg className={styles.circle} width="244" height="488" viewBox="0 0 244 488" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M0 487C134.205 487 243 378.205 243 244C243 109.795 134.205 1 0 1" stroke="#E75626" stroke-width="0.5"/>
//     </svg>  
//     <span className={styles.point} />
//     <span className={styles.point} />
//     <span className={styles.point} />
//     </>
//   )

// }
// tsignore
export const HalfRound = () => {
  const pathRef = useRef<SVGPathElement>(null);
// @ts-ignore
  const { length } = pathRef.current?.getTotalLength() || { length: 0 };

  const animatedProps = useSpring({
    from: { strokeDasharray: "0 " + length },
    to: async (next: any) => {
      while (true) {
        await next({ strokeDasharray: length + " 0", config: { duration: 5000 } });
        await next({ strokeDasharray: "0 " + length, config: { duration: 0 } });
      }
    },
    reset: true,
  });

  return (
    <>
    <svg width="244" height="488" viewBox="0 0 244 488" fill="none" xmlns="http://www.w3.org/2000/svg">
      <animated.path
        ref={pathRef}
        d="M0 487C134.205 487 243 378.205 243 244C243 109.795 134.205 1 0 1"
        stroke="#E75626"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeDasharray={`0 ${length}`}
        style={animatedProps}
      />
    </svg>
    </>
  );
};
