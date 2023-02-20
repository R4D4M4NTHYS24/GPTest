import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { LayoutContainer } from "./styled-components";
import store from "./redux/store";
import { Provider, useDispatch } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <LayoutContainer>
        <Home />
      </LayoutContainer>
    </Provider>
  );
}

export default App;
