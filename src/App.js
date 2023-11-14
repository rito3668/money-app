import { BrowserRouter ,Route,Switch} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Navbar from "./components/Navbar";

function App() {
  const {authIsReady} = useAuthContext()
  return (
    <div className="App">
      {authIsReady&&(
        <BrowserRouter>
        <Navbar/>
          <Switch>
            <Route exact path='/' >
                <Home/>
            </Route>
            <Route path='/signup'>
              <Signup/>
            </Route>
            <Route path='/login'>
              <Login/>
            </Route>
          </Switch>
      </BrowserRouter>
      )}      


      
    </div>
  );
}

export default App;
