import { Button } from "../../UI/Button/Button"
import {useEffect, useState} from 'react'
import { Link } from "../../UI/Link/Link";
import styles from "./styles.module.css"


export const DisplayConnectWallet = () => {
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState<boolean>(false);
 const [account, setAccount] = useState<string | null>(null);

 useEffect(() => {
  if((window as any).ethereum){
    //check if Metamask wallet is installed
    setIsMetamaskInstalled(true);
  }
  
},[]);
async function connectWallet(): Promise<void> {
  (window as any).ethereum
    .request({
        method: "eth_requestAccounts",
    })
    .then((accounts : string[]) => {
        setAccount(accounts[0]);
    })
    .catch((error: any) => {
        console.log(`Something went wrong: ${error}`);
    });
}

  return account ?
     <p className={styles.account}>{account}</p> : 
     <Button 
      label={"connect metamask"} 
      onClick={isMetamaskInstalled ?
      connectWallet :
      () => {}} 
      />
}