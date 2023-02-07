import { Dashboard } from '@mui/icons-material'
import React from 'react'
import Right from './Right'
import Sidebar from './Components/Sidebar'
import Left from './Left'

function Base(){
    return(
        <div className='fullScreen'>

       
        <div className='sideScreen'><Sidebar/></div>
        <div className='mainScreens'><Right/></div>
        </div>
    )
}
export default Base