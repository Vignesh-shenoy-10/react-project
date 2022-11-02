import { Provider } from "react-redux";
import "./App.css";
import Postform from "./components/Postform";
import Posts from "./components/Posts";
import store from "./store";
import { Toolbar, AppBar, Typography, Button } from "@mui/material";


function App() {
  

  return (
    <Provider store={store}>
      <div className="App">
      <AppBar position="static">
          <Toolbar>
           <Typography variant='h6' component='div'>
              myPosts
            </Typography>
            </Toolbar>
        </AppBar>
      

        <Postform />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
