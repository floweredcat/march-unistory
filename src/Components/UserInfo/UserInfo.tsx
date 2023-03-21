import styles from "./styles.module.css";

type UserInfoProps = {
  username: string;
  email: string;
  address?: string;
};

export const UserInfo = (props: UserInfoProps) => {
  const { username, email, address } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.text}>{username}</div>
        <span className={styles.label}>NAME</span>
      </div>
      <div className={styles.container}>
        <div className={styles.text}>{email}</div>
        <span className={styles.label}>EMAIL</span>
      </div>
      {address && (
        <div className={styles.container}>
          <div className={styles.text}>{address}</div>
          <span className={styles.label}>WALLET</span>
        </div>
      )}
    </div>
  );
};
