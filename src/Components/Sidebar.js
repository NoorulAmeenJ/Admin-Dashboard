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
// import {BuildIcon ,AdjustIcon,LayersIcon,BarChartIcon,BackupTableIcon}  from '@mui/icons-material';

const Sidebar = () => {
  return (
    <div className='fullScreen'>
            <div className='sidebar'>
            <div>
            <div className='sbadmin'>😀  SB Admin</div>
          <hr></hr>
            <span> <DashboardIcon className='iconsOut'/></span><span> Dashboard</span>
          <hr></hr>
          <div className='sidegrey' >Interface</div>
        
      <Accordion className='sideElement'>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography className='sideElement'> <AdjustIcon className='icons'/> Components</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className='sidegrey AccordionWhite dummy'>Custom Components</div>
          <Typography className='AccordionWhite'>Cards</Typography>
          <Typography className='AccordionWhite'>Buttons</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className='sideElement'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='sideElement'> <BuildIcon className='icons'/> Utilities</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className='sidegrey AccordionWhite dummy' >Custom Utilities</div>
          <Typography className='AccordionWhite'>Colors</Typography>
          <Typography className='AccordionWhite'>Borders</Typography>
          <Typography className='AccordionWhite'>Animations</Typography>
          <Typography className='AccordionWhite'>Others</Typography>
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
          <Typography className='sideElement'> <LayersIcon className='icons'/> Pages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className='sidegrey AccordionWhite dummy' >LOGIN SCREENS</div>
          <Typography className='AccordionWhite'>Login</Typography>
          <Typography className='AccordionWhite'>Register</Typography>
          <Typography className='AccordionWhite'>Forgot Password</Typography>
          <div className='sidegrey AccordionWhite dummy' >OTHER PAGE</div>
          <Typography className='AccordionWhite'>404 Pages</Typography>
          <Typography className='AccordionWhite'>Blank Page</Typography>
        </AccordionDetails>
      </Accordion>
      <br></br>
      <Typography className='sideElement'><BarChartIcon className='iconsOut' />Charts</Typography><br></br>
      <Typography className='sideElement'><BackupTableIcon className='iconsOut'/>Tables</Typography>
      <hr></hr>
    </div>
            </div>
            <div className='fullbar'>fullbar</div>
           
    </div>

  )
}

export default Sidebar