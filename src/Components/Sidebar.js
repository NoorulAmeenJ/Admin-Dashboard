import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Sidebar = () => {
  return (
    <div className='practise'>
            <div className='sidebar'>Sidebar
            <div>
            <div>
            SB Admin
          </div>
          <hr></hr>
            <div>
           Dashboard
          </div>
          <hr></hr>
          <div>
       Interface
          </div>
        
      <Accordion class Name='try'>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Components</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>Custom Components</div>
          <Typography>Cards</Typography>
          <Typography>Buttons</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion class Name='try'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Utilities</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>Custom Utilities</div>
          <Typography>Colors</Typography>
          <Typography>Borders</Typography>
          <Typography>Animations</Typography>
          <Typography>Others</Typography>
        </AccordionDetails>
      </Accordion>
     <hr></hr>
     <div>
       Interface
          </div>
     <Accordion class Name='try'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Pages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>LOGIN SCREENS</div>
          <Typography>Login</Typography>
          <Typography>Register</Typography>
          <Typography>Forgot Password</Typography>
          <div>OTHER PAGE</div>
          <Typography>404 Pages</Typography>
          <Typography>Blank Page</Typography>
        </AccordionDetails>
      </Accordion>
      <Typography>Charts</Typography>
      <Typography>Tables</Typography>
      <hr></hr>
    </div>
            </div>
            <div className='fullbar'>fullbar</div>
           
    </div>

  )
}

export default Sidebar