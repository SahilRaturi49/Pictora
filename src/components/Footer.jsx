import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';



const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white px-6 py-10 mt-10'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8'>
            <div>
                <img src={logo} alt="Pictora logo" className='h-10 mb-4' />
                <p className='text-sm'>Pictora - Your AI-powered creative companion for generating stunning visuals instantly.</p>
            </div>

            <div>
                <h4 className='font-semibold mb-3'>Quick Links</h4>
                <ul className='space-y-2 text-sm'>
                    <li><Link to='/' className='hover:underline decoration-purple-700 underline-offset-4'>Home</Link></li>
                    <li><Link to='/' className='hover:underline decoration-purple-700 underline-offset-4'>Community</Link></li>
                    <li><Link to='/' className='hover:underline decoration-purple-700 underline-offset-4'>History</Link></li>
                </ul>
            </div>


            <div>
                <h4 className='font-semibold mb-3'>Follow Us</h4>
                <div className='flex space-x-4 text-xl'>
                    <a href="https://github.com/SahilRaturi49" target='_blank' rel='noopener noreferrer'><FaGithub /></a>
                    <a href="https://github.com/SahilRaturi49" target='_blank' rel='noopener noreferrer'><FaTwitter /></a>
                    <a href="https://github.com/SahilRaturi49" target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
                </div>
            </div>
        </div>
        <hr className='my-6 border-gray-700'/>
        <div className='text-center text-sm text-gray-400'>
            © 2025 Pictora. All rights reserved.
        </div>
    </footer>
  )
}

export default Footer