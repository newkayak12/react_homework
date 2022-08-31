import {BrowserRouter, Router} from "react-router-dom";
import {RouterComponent} from "./router/RouterComponent";
import  './assets/css/reset.css'
import  './assets/css/headerCss.css'
import './assets/css/body.css'
import './pages/07tictactoe/tictactoeCss.css'
const App = () => {
  return (
      <BrowserRouter>
            <RouterComponent/>
      </BrowserRouter>
  );
}

export default App;
