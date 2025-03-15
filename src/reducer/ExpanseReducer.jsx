
export const reducer = (state, action) => {
    const {type, payload, initialIncome} = action
    
    switch (type) {
        case "SET_EXPANSE_DATA":
            return {...state, allExpanseData: payload}

        case "SET_SPENT_AMOUNT":
            let spentAmountData = payload.filter((spent) => spent.category === "EXPANSE")
            let spentAmount = payload.map((spent) => spent.category === "EXPANSE" ? +spent.expanseAmount : 0)
            let totalSpentAmount = spentAmount.reduce((acc, currAmout) => acc + currAmout, 0)           
            return {...state, spentAmount: totalSpentAmount, spentAmountData: spentAmountData}
            
        case "SET_INCOME_AMOUNT":
            let incomeAmountData = payload.filter((income) => income.category === "INCOME")
            let incomeAmount = payload.map((income) => income.category === "INCOME" ? +income.expanseAmount : 0)
            let totalIncomeAmount = incomeAmount.reduce((acc, currAmout) => acc + currAmout, initialIncome)           
            return {...state, incomeAmount: totalIncomeAmount, incomeAmountData: incomeAmountData}
            
        case "SET_AVAILABLE_AMOUNT":
            let availableSpentAmount = payload.map((spent) => spent.category === "EXPANSE" ? +spent.expanseAmount : 0)
            let availableTotalSpentAmount = availableSpentAmount.reduce((acc, currAmout) => acc + currAmout, 0)
            
            let availableIncomeAmount = payload.map((income) => income.category === "INCOME" ? +income.expanseAmount : 0)
            let availableTotalIncomeAmount = availableIncomeAmount.reduce((acc, currAmout) => acc + currAmout, initialIncome)           

            return {...state, availableAmount: availableTotalIncomeAmount - availableTotalSpentAmount }
                        
        default:
            return {...state}
    }
}
