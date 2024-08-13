import { useContext } from "react"
import { BudgetContext } from "../context/BudgetContext"


export const useBudget =() => {
  const context = useContext(BudgetContext)
  if (!context) {
    throw new Error('useBudget tiene que ser utilizado con un provider. En este caso, sería BudgetProvider en main.tsx que envuelva App')
  }
  return context
}
