import React from 'react';
import { useState } from 'react';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleLogin = () => {
        if(!email || !password){
            alert("All fields are required")
            return;
        }

        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        const user = existingUsers.find(
            (user) => user.email === email && user.password === password
        );

        if(user){
            alert("Login successfully!")
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            navigate('/dashboard')
        }else{
            alert("Invalid email or password")
        }
    }
    


  return (
    <div className='flex flex-col mx-auto mt-[200px] w-[600px] bg-white pb-7 rounded-lg shadow-lg'>
        <div className='flex flex-col items-center gap-[9px] w-full mt-7'>
            <div className='text-[#3c009d] text-[48px] font-bold'>Login</div>
            <div className='w-[61px] h-[6px] bg-[#3c009d] rounded-[9px]'></div>
        </div>
    
        <div className='mt-[55px] flex flex-col gap-10'>
            <div className='flex items-center mx-auto w-[480px] h-[80px] bg-[#eaeaea] rounded-md'>
                <img src={email_icon} alt="" className='mx-[30px]'/>
                <input 
                type="email" 
                placeholder='Email' 
                className='h-[50px] w-[400px] bg-transparent border-none outline-none text-[#797979] text-[19px]'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='flex items-center mx-auto w-[480px] h-[80px] bg-[#eaeaea] rounded-md'>
                <img src={password_icon} alt="" className='mx-[30px]'/>
                <input 
                type="password" 
                placeholder='Password'  
                className="h-[50px] w-[400px] bg-transparent border-none outline-none text-[#797979] text-[19px]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
        </div>

        <div className='flex gap-[30px] mx-auto mt-[60px]'>
            <button 
            className='flex justify-center items-center w-[220px] h-[59px] text-white bg-[#4c00b4] rounded-[50px] text-[19px] font-semibold cursor-pointer mb-7'
            onClick={handleLogin}
            >Login</button>
        </div>
        
    </div>
  )
}

export default Login