import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addstudent = () => {
    var[input,setinput]=useState({
        name:'',
        grade:''
    })
    const inputHandler = (e)=>{
        const{name,value}=e.target
        setinput({...input,[name]:value})
    }
    const readvalues = ()=>{
        console.log("clicked")
        axios.post("http://localhost:3000/students",input)
        .then(response=>{
            alert("successfully added")
        })
        .catch(error=>console.log(error))
    }
  return (
    <div>
    <TextField id="outlined-basic" label="NAME" variant="outlined" name='name' value={input.name}
    onChange={inputHandler} />
    <Typography>{input.name}</Typography>
    <br/>
    <br/>

<TextField id="filled-basic" label="GRADE" variant="filled" name='grade' value={input.grade}
onChange={inputHandler}/>
<Typography>{input.grade}</Typography>
<br/>
<br/>
<Button variant="contained"onClick={readvalues}>ADD STUDENT</Button>
    </div>
  )
}

export default Addstudent
