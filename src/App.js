import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import SinglePage from "./pages/singlePage/SinglePage";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context);

  return (
    <div className="App">
      <Router>
      <Topbar/>
      <Switch>

        <Route exact path="/">
            <Home/>
        </Route>

        <Route exact path="/register">
            {user 
            ?<Home/> 
            :<Register/>}
        </Route>

        <Route exact path="/login">
            {user 
            ?<Home/> 
            :<Login/>}
        </Route>

        <Route exact path="/write">
            {user 
            ?<Write/> 
            :<Register/>}
        </Route>

        <Route exact path="/settings">
             {user 
             ?<Settings/> 
             :<Register/>}
        </Route>

        <Route exact path="/post/:postId">
            <SinglePage/>
        </Route>

      </Switch>
      
      
      </Router>
    </div>
  );
}

export default App;
