import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import LoginSignup from './pages/LoginSignup'
import Login from './pages/Login';
import SignUp from './pages/SignUp';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginSignup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </div>
  )
}

export default App
