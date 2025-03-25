import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { useExpanse } from '../context/Expanse';


const AddMoney = ({openAddMoney, setopenAddMoney}) => {
    if(!openAddMoney) return null

    const {setExpanseData} = useExpanse()

    const handleClose = (e) =>  e.target === e.currentTarget ? setopenAddMoney(false) : null

    const [expData, setExpData] = useState({
        category:'EXPANSE',
        expanseName:'',
        expanseAmount:''
    })

    const handleInputChange = (e) =>{
        const {name, value} = e.target
        setExpData((prev)=> ({...prev, [name]:value}))
    }

    const handleFormSubmit = (e) =>{
        e.preventDefault()

        if(!expData.expanseName) return alert('enter name')
        if(!expData.expanseAmount) return alert('enter amount')        
        setExpanseData((prev) => [...prev, expData])
        setopenAddMoney(false)
    }

  return (
    <div className='text-black fixed inset-0 py-10 flex flex-row-reverse gap-2 justify-center backdrop-blur-sm z-50'> 
        <RxCross2 onClick={handleClose} className='text-right text-xl cursor-pointer rotate-45 hover:rotate-0 hover:scale-150 active:scale-90 transition-all duration-500 ease-in-out' />
        <form onSubmit={handleFormSubmit} className='h-[300px] w-[300px] sm:h-80 sm:w-[400px] bg-black/20 rounded-2xl p-10 flex flex-col gap-6'>
            <select onChange={handleInputChange} name='category' value={expData.category} className='border border-black/40 w-full p-1 rounded-md focus-within:border-blue-600 outline-none text-sm cursor-pointer transition-all duration-300 ease-linear'>
                <option value="EXPANSE" defaultValue={"EXPANSE"} className='bg-red-600' > Expanse </option>
                <option value="INCOME" className='bg-red-600' > Income </option>
            </select>

            <div className='relative mt-4'> 
                <input onChange={handleInputChange} id='expanseName' name='expanseName' value={expData.expanseName} type="text" className='outline-none focus-within:border-b-blue-600 border-b w-full p-1 text-sm transition-all duration-300 ease-linear peer placeholder-transparent' placeholder='Enter EXPANSE' autoComplete='off' />
                <label htmlFor="expanseName" className='absolute left-1 -top-3.5 text-black/60 text-[12px]  peer-placeholder-shown:top-2 transition-all duration-500 peer-focus:-top-3.5 peer-focus:text-black' > Enter Expanse </label>
            </div>

            <div className='relative mt-2'>
                <input onChange={handleInputChange} name='expanseAmount' value={expData.expanseAmount} type="text" className='outline-none focus-within:border-b-blue-600 border-b w-full p-1 text-sm transition-all duration-300 ease-linear peer placeholder-transparent ' placeholder='Enter Amount' autoComplete='off' />
                <label htmlFor="expanseAmount" className='absolute left-1 -top-3.5 text-[12px] text-black/60 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-black  transition-all duration-500' > Enter Amount </label>
            </div>
            <button type='submit' className='text-sm px-4 py-2 bg-red-600/25 hover:bg-red-600/90 hover:border-b-2 hover:border-b-blue-600 my-6 cursor-pointer active:scale-95 transition-all duration-300 ease-linear'> Add to pocket </button>
        </form>      
    </div>
  )
}

export default AddMoney
