import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import {Route, Router, Switch , Routes} from 'react-router-dom';
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
     
  <Routes>
     <Route path = "/Animations" element={ <Animations/>}>
          
        </Route>
        
        <Route path = "/" element={ <Dashboard/>}>
           
        </Route>
           
        <Route path = "/BlankPage" element={<BlankPage/>}>
              
           </Route>

           <Route path = "/Borders" element={<Borders/>}>
              
           </Route>

           <Route path = "/Buttons" element={ <Buttons/>}>
             
            </Route>

           <Route path = "/cards" element={ <Cards/>}>
            
           </Route>

           <Route path="/Charts" element={<Charts/>}>
        
           </Route>

           <Route path="/Colors" element={ <Colors/>}>
             
           </Route>

           <Route path="/ForgotPassword" element={  <ForgotPassword/>}>
            
           </Route>

           <Route path="/ErrorPage" element={  <ErrorPage/>}>
            
           </Route>

           <Route path="/Login" element={  <Login/>}>
            
           </Route>

           <Route path="/Others" element={ <Others/>}>
             
           </Route>

           <Route path="/Register" element={     <Register/>}>
           
           </Route>

           <Route path="/Tables" element={ <Tables/>}>
                
           </Route>

        <Route path="*"  element={<InvalidUrl/>}>
             
        </Route>

        </Routes>

    </div>
  );
}

export default App;
