import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import { Route, Switch } from 'react-router-dom';
import InvalidUrl from './Components/InvalidUrl';
import Dashboard from './Components/Dashboard';
import Base from './Base';
import Buttons from './Components/Buttons';
import Animations from './Components/Animations';
import BlankPage from './Components/BlankPage';
import Borders from './Components/Borders';
import Cards from './Components/Cards';
import Charts from './Components/Charts';
import Colors from './Components/Colors';
import ForgotPassword from './Components/ForgotPassword';
import Login from './Components/Login';
import Others from './Components/Others';
import Register from './Components/Register';
import Tables from './Components/Tables';
import ErrorPage from './Components/ErrorPage';

function App() {
  return (
    <div className="App">
     
     <Switch>
        <Route exact path = "/">
            <Dashboard/>
        </Route>

        <Route path = "/Animations">
           <Animations/>
        </Route>

        <Route path = "/BlankPage">
              <BlankPage/>
           </Route>

           <Route path = "/Borders">
              <Borders/>
           </Route>

           <Route path = "/buttons">
              <Buttons/>
            </Route>

           <Route path = "/cards">
             <Cards/>
           </Route>

           <Route path="/Charts">
              <Charts/>
           </Route>

           <Route path="/Colors">
              <Colors/>
           </Route>

           <Route path="/ForgotPassword">
              <ForgotPassword/>
           </Route>

           <Route path="/ErrorPage">
              <ErrorPage/>
           </Route>

           <Route path="/Login">
              <Login/>
           </Route>

           <Route path="/Others">
              <Others/>
           </Route>

           <Route path="/Register">
                <Register/>
           </Route>

           <Route path="/Tables">
                <Tables/>
           </Route>

        <Route path="**">
             <InvalidUrl/>
        </Route>

     </Switch>

    </div>
  );
}

export default App;
