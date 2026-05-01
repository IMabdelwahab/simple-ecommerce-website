import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


function NavBar(props) {

  return (
    <nav className='flex justify-between p-5 shadow-xs'>
        <div className='my-auto' >
            <Link to="/home" className='text-2xl font-bold text-amber-900'>EStore</Link>
        </div>
        <div className='flex space-x-5 my-auto text-amber-900'>
            <Link to="/home"     className='hover:underline font-medium hover:font-bold'>Home</Link>
            <Link to="/checkout" className='hover:underline font-medium hover:font-bold'>Cart</Link>
        </div>
        <div className='flex space-x-2'>
            <Link to="/auth" className='bg-amber-50 py-2 px-5 rounded-xl border-1 border-amber-600 text-amber-900 hover:font-medium'>
            Sign Up</Link>
            <Link to="/auth" className='bg-amber-50 py-2 px-5 rounded-xl border-1 border-amber-600 text-amber-900 hover:font-medium'>
            Log In</Link>
        </div>
    </nav>
  )
}

export default NavBar