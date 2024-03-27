import React, { useState } from 'react'

function Products() {
    const [Details,setDetails]=useState([])
    const [company,setcompany]=useState('')
    const [product,setproduct]=useState('')

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
            console.log(data);
            if(data?.message)
            {alert(data.message)}
            else{
                setDetails(data)
            }           

        }
        const handlesumbit=()=>{
            fetchData()
        }
  return (
    <>
    <div className='w-[100%]'>
        <div className='mx-auto gap-3 lg:flex-row flex flex-col justify-center w-[60%]  lg:w-[90%] mt-5 '>
        <input type='text' placeholder='enter the product' className='lg:m-4 lg:p-3 ' value={product}
        onChange={e=>setproduct(e.target.value)}></input>
        <input type='text' placeholder='enter the companyname' className='lg:m-4 lg:p-3' value={company}
        onChange={e=>setcompany(e.target.value)}></input>
        <button onClick={handlesumbit} className='mx-10 bg-black px-10'>search</button>
        <h1 className='text-center lg:text-4xl lg:mt-5 '>Products</h1> 
        </div>
        
        <h1></h1>
        <div className='mt-5 bg-slate-950 p-5 flex flex-col gap-10'>
            {Details?.map((res,id)=>{
                return(
                    <>
                    <div key={id} className='bg-white p-3 rounded-md w-[80%] mx-auto transition-all duration-200 hover:scale-95 hover:cursor-pointer' >
                        <h1 className='lg:text-2xl text-md text-black'>Productname: {res.productName}</h1>
                        <h1 className='text-green-500 text-md'>Price:${res.price}</h1>
                        <h1 className='text-black text-md'>Rating:{res.rating}</h1>
                        <h1 className='text-black text-md font-semibold'>Availability:{res.availability}</h1>
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
