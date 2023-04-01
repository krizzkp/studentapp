import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Addstudent from './Addstudent'

const ViewStudents = () => {
    var[update,setupdate]=useState(false)
    var[selected,setselected]=useState([])
    var[students,setstudents]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/students")
        .then(response=>{
            setstudents(students=response.data)
        console.log(students)        
    })
        .catch(error=>console.log(error))
    },[])


const DeleteValue=(id)=>{
console.log(id)
axios.delete("http://localhost:3000/students/"+id)
.then(response=>{
    alert("DELETED")
    window.location.reload(false)
})
.catch(error=>console.log(error))
    }

const updateValue=(value)=>{
    console.log("update")
        setselected(value)
        setupdate(true)
    }
    var finaljsx = <TableContainer>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>NAME</TableCell>
                <TableCell>GRADE</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {students.map((values,index)=>{
                return <TableRow>
                    <TableCell>{values.id}</TableCell>
                    <TableCell>{values.name}</TableCell>
                    <TableCell>{values.grade}</TableCell>
                    <TableCell><button onClick={()=>DeleteValue(values.id)}>DELETE</button></TableCell>
                    <TableCell>
                        <button onClick={()=>updateValue(values)}>UPDATE</button>
                    </TableCell>
                </TableRow>
            })}
        </TableBody>
    </Table>
   </TableContainer>

   if(update)

   finaljsx=<Addstudent data={selected} method="put"/>
  return (

  
  finaljsx

  )
}

export default ViewStudents
