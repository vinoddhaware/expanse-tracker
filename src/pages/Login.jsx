import React, { useState } from 'react'
import { useExpanse } from '../context/Expanse'
import { useNavigate } from 'react-router-dom'

const Login = () => {

   const {setLoginInf}  = useExpanse()
   const navigate = useNavigate()

  const [loginData, setLoginData] = useState({
    nikName:'',
    totalBal:'',
    incomePerMonth:''
  })

  const handleInputChange = (e) =>{
    const {name, value} = e.target
    setLoginData((prev)=>({...prev, [name]:value}))
  }

  const handleFormSubmit = (e) =>{
    e.preventDefault()
    if(!loginData.nikName) return alert("enter nik name")
    if(!loginData.totalBal) return alert("enter total balance")
    if(!loginData.incomePerMonth) return alert("enter monthly income")
    setLoginInf(loginData)
    navigate('/dashboard')    
  }

  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-black to-gray-900 via-red-900 text-white'>
      <form onSubmit={handleFormSubmit} className='flex flex-col justify-center items-start gap-3'>
        <p> You are just one step away! </p>
        <div className='flex flex-col justify-center items-center bg-white/10 p-10 rounded-3xl gap-8'>
          <div className='relative'>
            <input autoComplete='off' onChange={handleInputChange} value={loginData.nikName} type="text" id='nikName' name='nikName' placeholder='Nik Name' className='border-b p-1 font-semibold text-sm outline-none focus-within:border-b-blue-600 peer placeholder-transparent transition-all duration-300 ease-linear' />
            <label htmlFor="nikName" className='absolute -top-3.5 left-1 text-sm font-semibold peer-placeholder-shown:text-gray-300/60 peer-placeholder-shown:top-1 peer-focus:-top-3.5 peer-focus:text-white transition-all duration-300 ease-linear'> Nik Name </label>
          </div>
          
          <div className='relative'>
            <input autoComplete='off' onChange={handleInputChange} value={loginData.totalBal} type="text" id='totalBal' name='totalBal' placeholder='Total Balance' className='border-b p-1 font-semibold text-sm outline-none focus-within:border-b-blue-600 peer placeholder-transparent transition-all duration-300 ease-linear' />
            <label htmlFor="totalBal" className='text-sm absolute -top-3.5 left-1 peer-placeholder-shown:text-gray-300/60 peer-placeholder-shown:top-1 font-semibold peer-focus:-top-3.5 peer-focus:text-white transition-all duration-300 ease-linear'> Total Balance </label>
          </div>

          <div className='relative'>
            <input autoComplete='off' onChange={handleInputChange} value={loginData.incomePerMonth} type="text" id='incomePerMonth' name='incomePerMonth' placeholder='Income per month' className='border-b p-1 font-semibold text-sm outline-none focus-within:border-b-blue-600 peer placeholder-transparent transition-all duration-300 ease-linear' />
            <label htmlFor="incomePerMonth" className='text-sm absolute -top-3.5 left-1 peer-placeholder-shown:text-gray-300/60 peer-placeholder-shown:top-1 font-semibold peer-focus:-top-3.5 peer-focus:text-white transition-all duration-300 ease-linear'> Income per month </label>
          </div>
        
        </div>
        <button type='submit' className='cursor-pointer text-2xl bg-white/90 text-red-950/80 px-4 py-2 rounded-full mt-4 place-self-end'> Let's go </button>
      </form>
      
    </div>
  )
}

export default Login
