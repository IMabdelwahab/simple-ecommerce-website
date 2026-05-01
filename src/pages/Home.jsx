import { useState, useEffect } from 'react'
import { Route, Routes, BrowserRouter,Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'


function Home() {
    const [products , setProduct] = useState([])
    // // the fetch method : 
    // useEffect(()=>{
    //     fetch("https://fakestoreapi.com/products")
    //     .then((res) => res.json())
    //     .then((data) => {
    //     // console.log(data);
    //     setProduct(data)
    // })
    // })
    // the axios method : 
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((resp) => {
            setProduct(resp.data)
        }).catch(err => console.log(err))
    })

  return (
    <div className=''>
        <div className="flex justify-center pt-10 bg-amber-50 min-h-120">
            <div className='my-auto px-2 text-amber-950'>
                <div className="flex justify-center text-7xl font-bold mb-10">Welcome to EStore</div>
                <div className="flex justify-center mb-10">discover all our Products at the best prices</div>
            </div>
        </div> 
        <div className='px-2 mt-5'>
            <h1 className='text-3xl text-amber-950 font-bold'>Our products :</h1>
            <div className='mt-5 mx-10 grid grid-cols-5 gap-10 p-5'>
                { products.map((p)=>{
                    return (
                    <div className='bg-white w-70 rounded-3xl border-amber-600 border-1 overflow-auto shadow-xl'>
                        <div className='flex'>
                            <img className="h-70 w-fit m-auto p-4 hover:p-1" src={p.image} alt={"zen"} />
                        </div>
                        <div className='p-3 bg-gray-100'>
                            <div className=''>
                                <div className='mb-3 truncate'>{p.title}</div>
                                <div>{p.price} $</div>
                            </div>
                            <div>
                                <div className='mt-2 truncate'>{p.description}</div>
                                <Link to="/" className='text-blue-300 hover:underline'>read more</Link>
                            </div>
                            <div className='mt-2'c>{p.rating.rate} stars</div>
                        </div>
                    </div>) 
                })}
            </div>
        </div>
        
    </div>
  )
}

export default Home