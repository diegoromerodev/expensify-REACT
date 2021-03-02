import { createStore, combineReducers } from 'redux'





// EXPENSES REDUCER



// FILTERS REDUCER

// SET_TEXT_FILTER



// GET VISIBLE EXPENSES



// STORE CREATION



store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
})

const rent = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000}))
const coffee = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000}))

// store.dispatch(removeExpense({id: coffee.expense.id}))

// store.dispatch(editExpense(rent.expense.id, { amount: 500 }))

// store.dispatch(setTextFilter('rent'))

store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(0))
// store.dispatch(setEndDate(999))
// store.dispatch(setTextFilter('coffee'))

const demoState = {
  expenses: [{
    id: 'dasdsdsddadsa',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
}

const user = {
  name: 'Jane',
  age: 24
}

console.log({
  ...user,
  location: 'Buenos Aires',
  age: 23
})