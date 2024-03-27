import axios from 'axios'
import React, { useEffect, useState } from 'react'
function Register() {
  const [Data,setData]=useState([])
    useEffect(()=>{
        const fetchData=()=>{
            const url='http://20.244.56.144/test/auth'
            axios.post(url,user)
            .then(res=>localStorage.setItem( "token",res.data.access_token))
            .catch(err=>console.log(err))
            
        }
        fetchData()
        console.log()
    },[])
    const user={
      "companyName": "eshwar",
      "clientID": "3e71fad0-fce0-49ab-869d-1b1f08f86613",
      "clientSecret": "FEPBKWiPylPaiFcG",
      "ownerName": "shiva",
      "ownerEmail": "shivadharshan.s2021ecec@sece.ac.in",
      "rollNo": "21EC145"
    }
  return (
    <>
    
    </>
  )
}

export default Register
