import { Provider } from "react-redux";
import "./App.css";
import Postform from "./components/Postform";
import Posts from "./components/Posts";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>JSON Placeholder API</h1>
        <Postform />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
