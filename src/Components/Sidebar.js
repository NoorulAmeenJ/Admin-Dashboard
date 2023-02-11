import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BuildIcon from '@mui/icons-material/Build';
import AdjustIcon from '@mui/icons-material/Adjust';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import { Navigate, useNavigate} from 'react-router-dom';

import App from '../App';
// import

const Sidebar = () => {
  // const history = useHistory();
 const  navigate = useNavigate()
  var charts = () => {
    // history.push("/Charts")
    navigate('/Charts')
  }

  return (
            <div className='sidebar'>
            <div>
            <div className='sbadmin'>😀  SB Admin</div>
          <hr></hr>
            <span> <DashboardIcon className='iconsOut'/></span><span className='dashboard' onClick={()=>navigate("/")}> Dashboard</span>
          <hr></hr>
          <div className='sidegrey' >Interface</div>
        
      <Accordion className='sideElement'>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <AdjustIcon className='icons'/>   <Typography className='sideElement fiveElement'>Component</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className='sidegrey AccordionWhite dummy'>Custom Components</div>
          <Typography className='AccordionWhite' onClick={()=>navigate("/cards")}>Cards</Typography>
          <Typography className='AccordionWhite' onClick={()=>   navigate('/Buttons')}>Buttons</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='sideElement'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
       <BuildIcon className='icons'/>   <Typography className='sideElement fiveElement'>  Utilities</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className='sidegrey AccordionWhite dummy' >Custom Utilities</div>
          <Typography className='AccordionWhite' onClick={()=>navigate("/Colors")}>Colors</Typography>
          <Typography className='AccordionWhite' onClick={()=>navigate("/Borders")}>Borders</Typography>
          <Typography className='AccordionWhite' onClick={()=>navigate("/Animations")}>Animations</Typography>
          <Typography className='AccordionWhite' onClick={()=>navigate("/Others")}>Others</Typography>
        </AccordionDetails>
      </Accordion>
     <hr></hr>
     <div className='sidegrey'>Addons</div>
     <Accordion className='sideElement'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <LayersIcon className='icons'/><Typography className='sideElement fiveElement'>  Pages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className='sidegrey AccordionWhite dummy' >LOGIN SCREENS</div>
          <Typography className='AccordionWhite' onClick={()=>navigate("/Login")}>Login</Typography>
          <Typography className='AccordionWhite' onClick={()=>navigate("/Register")}>Register</Typography>
          <Typography className='AccordionWhite' onClick={()=>navigate("/ForgotPassword")}>Forgot Password</Typography>
          <div className='sidegrey AccordionWhite dummy' >OTHER PAGE</div>
          <Typography className='AccordionWhite' onClick={()=>navigate("/ErrorPage")}>404 Pages</Typography>
          <Typography className='AccordionWhite' onClick={()=>navigate("/BlankPage")}>Blank Page</Typography>
        </AccordionDetails>
      </Accordion>
      <br></br>
      <BarChartIcon className='iconsOut' /> <span className='sideElement fiveElement' onClick={charts}>Charts</span><br></br>
      <BackupTableIcon className='iconsOut'/> <span className='sideElement fiveElement' onClick={()=>navigate("/Tables")}>Tables</span>
      <hr></hr>
    </div>
            </div>
           
           
  

  )
}

export default Sidebar