import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addstudent = (props) => {
    var[input,setinput]=useState(props.data)
    console.log(props.data)
        
    const inputHandler = (e)=>{
        const{name,value}=e.target
        setinput({...input,[name]:value})
    }
    const readvalues = ()=>{
        console.log("clicked")
        if(props.method==="post"){
        axios.post("http://localhost:3000/students",input)
        .then(response=>{
            alert("successfully added")
        })
        .catch(error=>console.log(error))
    }
    else if(props.method ==="put"){
        axios.put("http://localhost:3000/students/"+input.id,input)
        .then(response=>{
            alert("success")
            window.location.reload(false)
        })
        .catch(err=>console.log(err))
    }
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
