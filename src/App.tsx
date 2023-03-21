import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Main } from "./Pages/Main/Main";
import { Layout } from "./Layout/Layout";
import { store } from "./Store/store";
import { Provider } from "react-redux";
import { User } from "./Pages/User/User";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/user/:userData" element={<User />} />
        </Routes>
      </Layout>
    </Provider>
  );
}

export default App;
