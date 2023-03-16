import { useEthers } from "@usedapp/core/dist/esm/src/hooks"
import { Button } from "../../UI/Button/Button"
import { config } from "../../App";

export const DisplayConnectWallet = () => {
  const { account, chainId, activateBrowserWallet } = useEthers()
  if (chainId && !config?.readOnlyUrls?.[chainId]) {
    return <p>Please use either Mainnet or Goerli testnet.</p>
  }
  return <Button label={account ? account : "Connect metamask"} onClick={() => activateBrowserWallet()} />
}