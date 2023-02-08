import { FilledInput, FormControl, InputLabel } from '@mui/material'
import React from 'react'
import Base from '../Base'
import Sidebar from './Sidebar'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SchoolIcon from '@mui/icons-material/School';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import PendingActionsIcon from '@mui/icons-material/PendingActions';

const Dashboard = () => {
  return (
    
  <Base>
  <div className='dashBoardContainer'>
     <div className='dbWhiteBox'>
      
      <div className='dbsearchBox'> <input type="text" placeholder='Search for..' className='dbinputBox'/><button className='dbbuttonbox'><ManageSearchIcon/></button></div>
    
      <div className='dbnotificatonBox'>
         <AccountCircleIcon className='dbicons'/>
         <MessageIcon className='dbicons'/>
         <NotificationsActiveIcon className='dbicons'/>
         </div>
     </div>
     <div className='dbsubContainer'>
            <div className='dbheadingbox'>
                   <div className='db1stheading'>DashBoard</div>
                   <div className='db2rdbutton'><button className="dbgeneratebutton">Generate Report</button></div>
            </div>
           <div className='dbincomeTaxbox'>
              <div className='dbincomeTaxbox1'>
                <div className='dbincometxbox80'>
                 <div className='dbearningM'>EARNINGS (MONTHLY)</div>
                 <div className='dbrupees'>$40,000</div>
                </div>
                <div className='dbincometxbox20'>
                 <div className='dbtaxboxicon'><SchoolIcon/></div>
                 </div>
               </div>

               <div className='dbincomeTaxbox2'>
               <div className='dbincometxbox80'>
                  <div className='dbearningA'>EARNINGS (ANNUAL)</div>
                  <div className='dbrupees'>$215,000</div>
                </div>
                <div className='dbincometxbox20'>
                  <div className='dbtaxboxicon'><CurrencyRupeeIcon/></div>
               </div>
               </div>

               <div className='dbincomeTaxbox3'>
               <div className='dbincometxbox80'>
                  <div className='dbtasks'>TASKS</div>
                 <div className='dbpercentage dbrupees'>
                 <div class="container">
        <div class="skill html">50%</div>
    </div>
                 </div>
                 </div>
                <div className='dbincometxbox20'>
                 <div className='dbtaxboxicon'><TaskAltIcon/></div>
               </div>
               </div>

               <div className='dbincomeTaxbox4'>
               <div className='dbincometxbox80'>
                <div className='dbpendingreq'>PENDING REQUESTS</div>
                <div className='dbrupees'>18</div>
                </div>
                <div className='dbincometxbox20'>
                <div className='dbtaxboxicon'><PendingActionsIcon/></div>
               </div>
            </div> 
     </div>
  </div> 
  </div>  
   </Base>
   
  )
}

export default Dashboard