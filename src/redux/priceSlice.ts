import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Employee {
  id: string
  firstName: string
  lastName: string
  extras: number
}

interface Transaction {
  id: string
  amount: number
  employee: Employee
  merchant: string
  date: string
  approved: boolean
}

interface PriceState {
  transactions: Transaction[]
  nextPage: number | null
}

const initialState: PriceState = {
  transactions: [],
  nextPage: null,
}

const priceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    setTransactions(state, action: PayloadAction<{ nextPage: number; data: Transaction[] }>) {
      state.transactions = action.payload.data
      state.nextPage = action.payload.nextPage
    },
    addTransaction(state, action: PayloadAction<Transaction>) {
      state.transactions.push(action.payload)
    },
    updateTransaction(
      state,
      action: PayloadAction<{ id: string; updatedTransaction: Partial<Transaction> }>
    ) {
      const index = state.transactions.findIndex((tx) => tx.id === action.payload.id)
      if (index !== -1) {
        state.transactions[index] = {
          ...state.transactions[index],
          ...action.payload.updatedTransaction,
        }
      }
    },
  },
})

export const { setTransactions, addTransaction, updateTransaction } = priceSlice.actions

export default priceSlice.reducer
