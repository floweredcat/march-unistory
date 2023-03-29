import { Button } from "../../UI/Button/Button";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export const DisplayConnectWallet = () => {
  const [isMetamaskInstalled, setIsMetamaskInstalled] =
    useState<boolean>(false);
  const [account, setAccount] = useState<string | undefined>();

  useEffect(() => {
    if ((window as any).ethereum) {
      // Check if Metamask wallet is installed
      setIsMetamaskInstalled(true);
    }
  }, []);
  async function connectWallet(): Promise<void> {
    (window as any).ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts: string[]) => {
        setAccount(accounts[0]);
        localStorage.setItem("address", accounts[0]);
      })
      .catch((error: any) => {
        console.log(`Something went wrong: ${error}`);
      });
  }

  return localStorage.address ? (
    <p className={styles.account}>{localStorage.address}</p>
  ) : (
    <Button
      label={"connect metamask"}
      onClick={isMetamaskInstalled ? connectWallet : () => {}}
    />
  );
};
