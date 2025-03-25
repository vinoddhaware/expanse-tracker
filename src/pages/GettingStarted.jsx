import React from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { NavLink } from 'react-router-dom';


const GettingStarted = () => {
  return (
    <div className='gap-4 flex flex-col justify-center items-center min-h-screen bg-gradient-to-br  text-black'>
        <div className='flex justify-center items-center px-14 sm:px-0'>
            <div>
                <h1 className='text-4xl'> Welcome to EXPENSEX. </h1>
            </div>
            <div className='text-6xl'>
                <NavLink to={'/expanse-tracker/login'}> <IoIosArrowDroprightCircle /> </NavLink>
            </div>
        </div>
        <p> The best way to track your expanses. </p>
      
    </div>
  )
}

export default GettingStarted
