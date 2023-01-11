import axios from 'axios'
import React, { useEffect, useState } from 'react'

const User = () => {
    const [users,setUsers]=useState()

    const getUser=async()=>{
        const {data}=await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(data)
        setUsers(data)
    }

    useEffect(()=>{
        getUser()
    },[])
  return (
    <>
    <div style={{border:'1px solid black'}}>
        {  users &&
            users.map((user)=>(
                <div style={{border:'1px solid green'}} key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                </div>
            ))
        }
    </div>
    </>
  )
}

export default User