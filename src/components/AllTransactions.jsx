import React from 'react'
import { MdOutlineKeyboardDoubleArrowUp, MdKeyboardDoubleArrowDown  } from "react-icons/md";
import { FaCircleDot } from "react-icons/fa6";


const AllTransactions = ({currData}) => {
    const {category, expanseAmount, expanseName} = currData
    
  return (
    <div className={`flex flex-col gap-4 rounded-2xl py-2 px-4 ${category === "EXPANSE" ? "bg-gradient-to-r from-red-800 to-black" : "bg-gradient-to-l from-green-800 to-black"}`}>
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-4'>
                <FaCircleDot className='text-xl' />
                <div>
                    <span className='flex items-center gap-1'> {expanseName} {category === "EXPANSE" ? <MdKeyboardDoubleArrowDown className='text-red-400/90' /> : <MdOutlineKeyboardDoubleArrowUp className='text-green-400/90' />} </span>
                    <span className='text-[12px]'> indigo ticket </span>
                </div> 
            </div>
            <span className={`${category === "EXPANSE" ? 'text-red-300' : 'text-green-300'}`}> { category === "EXPANSE" ? ` -₹${expanseAmount}`:` +₹${expanseAmount}`} </span>
        </div>
    </div>
  )
}

export default AllTransactions
