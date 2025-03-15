import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "../reducer/ExpanseReducer";

const ExpContext = createContext()

export const ExpProvider = ({children}) =>{
    const key = 'expanseKey'

    const [expanseData, setExpanseData] = useState(() => {
        const obj = JSON.parse(localStorage.getItem(key))
        if(!obj) return []
        return obj
    })
    
    localStorage.setItem(key, JSON.stringify(expanseData))
    
    const initialState = {
        allExpanseData: [],
        spentAmountData: [],
        incomeAmountData: [],
        availableAmount: 0,
        spentAmount: 0,
        incomeAmount: 0,
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    const [loginInf, setLoginInf] = useState(()=>{
        const obj = JSON.parse(localStorage.getItem("loginInfo"))
        if(!obj) return []
        return obj
    })

    localStorage.setItem("loginInfo", JSON.stringify(loginInf))    
    
    const getExpanseData = () =>{
        dispatch({type:"SET_EXPANSE_DATA", payload:expanseData})
        dispatch({type:"SET_AVAILABLE_AMOUNT", payload:expanseData, initialIncome: +loginInf.totalBal ?? 0})
        dispatch({type:"SET_SPENT_AMOUNT", payload:expanseData})
        dispatch({type:"SET_INCOME_AMOUNT", payload:expanseData, initialIncome: +loginInf.totalBal ?? 0})
    }

    useEffect(() => getExpanseData(), [expanseData, loginInf])

    return <ExpContext.Provider value={{expanseData, setExpanseData, state, setLoginInf, loginInf}} > {children} </ExpContext.Provider>
}

export const useExpanse = () => useContext(ExpContext)