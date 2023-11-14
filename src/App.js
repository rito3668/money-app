import { BrowserRouter ,Route,Switch,Redirect } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Navbar from "./components/Navbar";

function App() {
  const {authIsReady,user} = useAuthContext()
  return (
    <div className="App">
      {authIsReady&&(
        <BrowserRouter>
        <Navbar/>
          <Switch>
            <Route exact path='/' >
                {user && <Home/>}
                {!user && <Redirect to='/login' />}
            </Route>
            <Route path='/signup'>
              {!user && <Signup/>}
              {user && <Redirect to='/' />}
            </Route>
            <Route path='/login'>
              {!user && <Login/>}
              {user && <Redirect to='/' />}
            </Route>
          </Switch>
      </BrowserRouter>
      )}      


      
    </div>
  );
}

export default App;
