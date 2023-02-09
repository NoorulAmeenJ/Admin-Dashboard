import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import { Route, Switch } from 'react-router-dom';
import InvalidUrl from './Components/InvalidUrl';
import Dashboard from './Components/Dashboard';
import Base from './Base';
import Buttons from './Components/Buttons';

function App() {
  return (
    <div className="App">
     
     <Switch>
        <Route exact path="/dashboard">
            <Dashboard/>
        </Route>

        <Route path="/buttons">
           <Buttons/>
        </Route>
        <Route path="**">
             <InvalidUrl/>
        </Route>
     </Switch>

    </div>
  );
}

export default App;
