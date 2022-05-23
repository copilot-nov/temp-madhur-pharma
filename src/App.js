import Routeing from './routeing'
import { Provider } from "react-redux";
import store from "./redux/store"

function App() {
  return (
    <Provider store={store}>
        <Routeing />
    </Provider>
  );
}

export default App;
