import React from 'react'
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-6 py-4 bg-white shadow-md'>
        <div className='flex items-center'>
            <img src={logo} alt="" className='h-10 w-auto'/>
        </div>
        <div className='flex items-center space-x-6'>
            <Link to='/community' className='text-gray-700 hover:text-purple-700 font-medium'>
                Community
            </Link>
            <Link to='/history' className='text-gray-700 hover:text-purple-700 font-medium'>
                History
            </Link>
        </div>
    </nav>
  )
}

export default Navbar