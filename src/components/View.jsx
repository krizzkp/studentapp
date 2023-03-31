import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
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
.CATCH(error=>console.log(error))
    }
  return (
   <TableContainer>
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
                    <TableCell><button>UPDATE</button></TableCell>
                </TableRow>
            })}
        </TableBody>
    </Table>
   </TableContainer>
  )
}

export default View
