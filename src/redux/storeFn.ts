import { AppDispatch, RootState } from "./store"
import { addTransaction } from "./priceSlice"

export const addTransactionToRedux = (transaction: any) => {
  return (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    const exists = state.price.transactions.some((tx) => tx.id === transaction.id)

    if (!exists) {
      dispatch(addTransaction(transaction))
    }
  }
}
