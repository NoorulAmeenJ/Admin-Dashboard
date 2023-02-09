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
     <div className='dbheadingandtaxbox'>
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
        <div class="skill">50%</div>
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
            <div className='dbsubContainer'>
            <div className='dbprojectsbox'>
               <div className='dbtitle'>Project</div>
               <hr></hr>
               <div className='dbheadingandpercent'>
               <div className='dbheading'>Server Migration</div>
               <div className='dbpercent'>20%</div>
               </div>
               <div className='dbprogressbarwhole'>
                  <div className='dbprogressbar1'>1</div>
               </div>
               
               <div className='dbheadingandpercent'>
               <div className='dbheading'>Sales Tracking</div>
               <div className='dbpercent'>40%</div>
               </div>
               <div className='dbprogressbarwhole'>
                  <div className='dbprogressbar2'>2</div>
               </div>

               <div className='dbheadingandpercent'>
               <div className='dbheading'>Customer Database</div>
               <div className='dbpercent'>60%</div>
               </div>
               <div className='dbprogressbarwhole'>
                  <div className='dbprogressbar3'>3</div>
               </div>

               <div className='dbheadingandpercent'>
               <div className='dbheading'>Payout Details</div>
               <div className='dbpercent'>80%</div>
               </div>
               <div className='dbprogressbarwhole'>
                  <div className='dbprogressbar4'>4</div>
               </div>

               <div className='dbheadingandpercent'>
               <div className='dbheading'>Account Setup</div>
               <div className='dbpercent'>100%</div>
               </div>
               <div className='dbprogressbarwhole'>
                  <div className='dbprogressbar5'>5</div>
               </div>
        
            </div>
            <div className='dbillustrationsbox'>
                  <div className='dbtitle'>Illustrations</div>
                  <div className='dbimage'>
                    <center> <img  className='dpimageimg' src='https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg' alt="Illustartion's Image"/></center>
                  </div>
                  <p className='dbilluspara'>Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
                  <a className='dbilluslink' href='https://undraw.co/'>Browse Illustrations on unDraw →</a>
            </div>
            <div className='dbcolorcolorbox'>
               <div className='dbcolorbox dbcolorbox1'>Primary</div>
               <div className='dbcolorbox dbcolorbox2'>Success</div>
               <div className='dbcolorbox dbcolorbox3'>Info</div>
               <div className='dbcolorbox dbcolorbox4'>Warning</div>
               <div className='dbcolorbox dbcolorbox5'>Danger</div>
               <div className='dbcolorbox dbcolorbox6'>Secondary</div>
               <div className='dbcolorbox dbcolorbox7'>Light</div>
               <div className='dbcolorbox dbcolorbox8'>Dark</div>
            </div>
            <div className='dbdevelopmentbox'>
               <div className='dbtitle'>Development Approach</div>
               <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.</p>
               <p>Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>
               
            </div>

  </div> 
  </div>  
   </Base>
   
  )
}

export default Dashboard