import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Main } from './Pages/Main/Main';
import { Layout } from './Layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Main />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;