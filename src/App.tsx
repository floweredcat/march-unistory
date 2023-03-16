import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Main } from './Pages/Main/Main';
import { Layout } from './Layout/Layout';
import { Mainnet, DAppProvider, Config, Goerli } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'

export const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
    [Goerli.chainId]: getDefaultProvider('goerli'),
  },
}

function App() {
  return (
    <Layout>
      <DAppProvider config={config}>
      <Routes>
        <Route index element={<Main />}></Route>
      </Routes>
      </DAppProvider>
    </Layout>
  );
}

export default App;
