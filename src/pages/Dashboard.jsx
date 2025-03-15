import React, { useState } from 'react'
import { GiPayMoney } from "react-icons/gi";
import { MdAccountBalanceWallet } from "react-icons/md";
import { PiUploadDuotone } from "react-icons/pi";
import { GiReceiveMoney } from "react-icons/gi";
import AddMoney from '../components/AddMoney';
import { useExpanse } from '../context/Expanse';
import AllTransactions from '../components/AllTransactions';

const Dashboard = () => {

    const {state, loginInf} = useExpanse()
    const {availableAmount, spentAmount, incomeAmount, allExpanseData} = state
    const [openAddMoney, setopenAddMoney] = useState(false)
    const [categoryData, setcategoryData] = useState('ALL')

    const filterData = allExpanseData.filter((currData) => categoryData === "ALL" || currData.category === categoryData)

    const categoryFilter = (e) =>{
        if(e.target !== e.currentTarget){
            setcategoryData(e.target.textContent.toUpperCase());
        }        
    }

  return (
    <div className='min-h-screen bg-black'>
        <div className='w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%]  mx-auto text-white flex flex-col gap-2 py-6'>
            <div className='flex justify-between items-center'>
            <span className='font-semibold'>Dashboard</span>
            <span className='font-semibold'> { loginInf.nikName } </span>
            </div>
            <div className='flex flex-col gap-4 bg-gradient-to-br from-red-800 to-black rounded-2xl p-6'>
                <div className='flex justify-between items-center'>
                    <div>
                        <span className='flex items-center gap-2'> <MdAccountBalanceWallet className='text-green-600 text-3xl' /> Available balance </span>
                        <span className='pl-10'> {availableAmount} </span>
                    </div>
                    <div>                        
                        <button onClick={()=>setopenAddMoney(true)} className='flex items-center gap-2 px-4 py-2 bg-green-900/90 cursor-pointer hover:bg-green-700 transition-all duration-500 active:scale-95'> <PiUploadDuotone /> Add </button>
                    </div>
                </div>
                <hr className='sm:hidden border border-white/20' />
                <div className='flex flex-col justify-start gap-4 items-start sm:flex sm:flex-row sm:justify-between sm:items-center sm:px-10 xl:px-20'>
                    <div className='flex justify-center items-center gap-4 py-4 px-8 sm:bg-red-800/10 rounded-md'>
                    <GiPayMoney className='text-2xl' />
                    <div className='flex flex-col justify-center sm:items-center'>
                        <span> Spent </span>
                        <span className='text-red-600'> {`-₹${spentAmount}`} </span>
                    </div>
                    </div>
                    <div className='flex justify-center items-center gap-4 py-4 px-8 sm:bg-red-800/10 rounded-md'>
                    <GiReceiveMoney className='text-2xl' />
                    <div className='flex flex-col justify-center sm:items-center'>
                        <span> Income </span>
                        <span className='text-green-600'> {`+₹${incomeAmount}`} </span>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] mx-auto text-white flex flex-col gap-4 py-6'>
            <div className='flex justify-between items-center'>
            <span className='font-semibold'>Recent transactions</span>
                <div onClick={categoryFilter} className='flex justify-center items-center gap-2 sm:gap-4'>
                    <button className={`${categoryData === "ALL" ? 'scale-90' : 'scale-100'} px-2 py-1 text-sm sm:text-base sm:px-4 sm:py-1 bg-blue-600 rounded-md hover:bg-blue-700  cursor-pointer transition-all duration-500 ease-in`}>All</button>
                    <button className={`${categoryData === "INCOME" ? 'scale-90' : 'scale-100'} px-2 py-1 text-sm sm:text-base sm:px-4 sm:py-1 bg-green-600 rounded-md hover:bg-green-700 cursor-pointer transition-all duration-500 ease-in `}>Income</button>
                    <button className={`${categoryData === "EXPANSE" ? 'scale-90' : 'scale-100'} px-2 py-1 text-sm sm:text-base sm:px-4 sm:py-1 bg-red-600 rounded-md hover:bg-red-700 cursor-pointer transition-all duration-500 ease-in`}>Expanse</button>
                </div>

            </div>
            {
               filterData?.map((currData, index) => <AllTransactions key={index} currData = {currData} />)
            }
        </div>
      
      <AddMoney openAddMoney = {openAddMoney} setopenAddMoney = {setopenAddMoney} />
    </div>
  )
}

export default Dashboard
