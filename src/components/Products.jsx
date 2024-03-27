import React, { useEffect, useState } from 'react'

function Products() {
    const [Details,setDetails]=useState([])
    const [company,setcompany]=useState('')
    const [product,setproduct]=useState('')
    useEffect(()=>{
        const fetchData=async ()=>{
            const url=`http://20.244.56.144/test/companies/${company}/categories/${product}/products?top=10&minPrice=1&maxPrice=10000`
            const requestOptions = {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            }
            const response=await fetch(url,requestOptions)
            const data=await response.json()
            setDetails(data)
            console.log(data)
        }

        fetchData()
    },[])
  return (
    <>
    <div className='w-[100%]'>
        <div className='flex justify-center'>
        <input type='text' placeholder='enter the product' className='m-4 p-3' value={product}
        onClick={e=>setproduct(e.target.value)}></input>
        <input type='text' placeholder='enter the companyname' className='m-4 p-3' value={company}
        onClick={e=>setcompany(e.target.value)}></input>
        <h1 className='text-center text-4xl mt-5'>Products</h1> 
        </div>
        
        <h1></h1>
        <div className='mt-5 bg-slate-950 p-5 flex flex-col gap-10'>
            {Details.map((res)=>{
                return(
                    <>
                    <div className='bg-white p-3 rounded-md w-[80%] mx-auto transition-all duration-200 hover:scale-95 hover:cursor-pointer' >
                        <h1 className='text-2xl text-black'>{res.productName}</h1>
                        <h1 className='text-green-500'>${res.price}</h1>
                    </div>
                    </>
                )
            })}
        </div>
    </div>
    </>
  )
}

export default Products
