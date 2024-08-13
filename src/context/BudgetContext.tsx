import { useReducer, createContext, Dispatch, ReactNode } from "react"
import { BudgetActions, budgetReducer, BudgetState, initialState } from "../reducers/budget-reducer"


type BudgetContextProps = {
    state: BudgetState
    dispatch: Dispatch<BudgetActions>
    totalExpenses: number
    totalDisponible: number
    
}

type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvider = ({children} : BudgetProviderProps ) => {

    const [ state, dispatch ] = useReducer( budgetReducer, initialState )

    const totalExpenses = state.expenses.reduce((total, expense) => expense.amount + total, 0)

    const totalDisponible = state.budget - totalExpenses

    return(
        <BudgetContext.Provider
        /* En value vamos colocando lo que voy a poder consumir en los componentes utilizando useContext  */
            value={{
                state,
                dispatch,
                totalExpenses,
                totalDisponible
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}