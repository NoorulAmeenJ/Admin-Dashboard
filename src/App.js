import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import { Route, Switch } from 'react-router-dom';
import InvalidUrl from './Components/InvalidUrl';


function App() {
  return (
    <div className="App">
     
     <Switch>
        <Route exact path="/">
              <Sidebar/>    
        </Route>

        <Route path="/hello">
             <h1>url</h1> 
        </Route>
        <Route path="**">
             <InvalidUrl/>
        </Route>
     </Switch>






    
    </div>
  );
}

export default App;
