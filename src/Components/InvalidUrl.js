import { Button } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom'

const InvalidUrl = () => {
    const home = () => {
        history.push("/")
    }
    const history= useHistory()
    return (
   
    <div className="invalid">
    <h1>Lost Your Way</h1>
    <h3>Please click home to see Noorul's Admin UI</h3>
    <Button id="invalid-home" onClick={home}>Home</Button>

    </div>
  )
}

export default InvalidUrl