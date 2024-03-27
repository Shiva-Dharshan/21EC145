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
      "clientID": "74aafa2f-0a71-432f-9f1f-864a148d4c4c",
      "clientSecret": "HsyzSHPiWqhUGuaP",
      "ownerName": "shesha",
      "ownerEmail": "sheshadri.n2021ecec@sece.ac.in",
      "rollNo": "21ec152"
  }
  return (
    <>
    
    </>
  )
}

export default Register
