import React from 'react'
import { MdOutlineKeyboardDoubleArrowUp, MdKeyboardDoubleArrowDown  } from "react-icons/md";
import { FaCircleDot } from "react-icons/fa6";


const AllTransactions = ({currData}) => {
    const {category, expanseAmount, expanseName} = currData
    
  return (
    <div className={`flex flex-col gap-4 rounded-2xl py-2 px-4 ${category === "EXPANSE" ? "bg-black/20" : "bg-black/50"}`}>
        <div className='flex justify-between items-center font-mono'>
            <div className='flex items-center gap-4'>
                <FaCircleDot className='text-xl' />
                <div>
                    <span className='flex items-center gap-1'> {expanseName} {category === "EXPANSE" ? <MdKeyboardDoubleArrowDown className='text-black' /> : <MdOutlineKeyboardDoubleArrowUp className='text-black' />} </span>
                    <span className='text-[12px]'> Dream it, do it </span>
                </div> 
            </div>
            <span className={`${category === "EXPANSE" ? 'text-gray-900' : 'text-black'}`}> { category === "EXPANSE" ? ` -₹${expanseAmount}`:` +₹${expanseAmount}`} </span>
        </div>
    </div>
  )
}

export default AllTransactions
