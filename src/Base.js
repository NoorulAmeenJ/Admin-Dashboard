// import { Dashboard } from '@mui/icons-material'
import React from 'react'
import Sidebar from './Components/Sidebar'

function Base({children}){
    return(
        <div className='fullScreen'>
          <div className='sideScreen'><Sidebar/></div>
          <div className='mainScreens'>{children}</div>
        </div>
    )
}
export default Base