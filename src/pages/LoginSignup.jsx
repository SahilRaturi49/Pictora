import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';

const LoginSignup = () => {

  const navigate = useNavigate();
  
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className='flex flex-col items-center justify-center bg-white px-4 py-8 w-[500px] rounded-lg shadow-lg'>
        <img src={logo} alt="Pictora" className='w-100 h-10 mb-10'/>
        <h1 className='text-3xl font-bold text-gray-800 mb-3'>Welcome to Pictora</h1>
        <p className='font-bold text-gray-800 mb-20'>Where Ideas Become Images.</p>
        <div className='flex gap-6 '>
            <button className='bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 w-30 flex items-center justify-center rounded-full text-lg font-semibold' onClick={()=> navigate('/login')}>Login</button>
            <button className='bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 w-30 flex items-center justify-center rounded-full text-lg font-semibold' onClick={()=> navigate('/signup')}>Sign Up</button>
        </div>
        </div>
    </div>
  )
}

export default LoginSignup