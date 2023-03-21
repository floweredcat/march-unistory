import { useParams } from "react-router-dom";
import { ActionArea } from "../../Components/ActionArea/ActionArea";
import { Planet } from "../../Components/Planet/Planet";
import { UserInfo } from "../../Components/UserInfo/UserInfo";
import styles from "./styles.module.css";

export const User = () => {
  const { userData } = useParams();
  // @ts-expect-error
  const { username, email, address } = JSON.parse(userData);
  return (
    <>
      <h2 className={styles.title}>PErsonal data</h2>

      <UserInfo username={username} email={email} address={address} />
      <div className={styles.planet_wrapper}>
        <ActionArea />
        <Planet />
      </div>
    </>
  );
};
