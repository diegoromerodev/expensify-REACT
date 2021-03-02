import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('Should setup remove expense action object', () => {
  const action = removeExpense({ id:'123abc'})
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('Should setup edit expense action', () => {
  const action = editExpense(123, {note: 'New note', amount: 2000})
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 123,
    updates: {
      note: 'New note',
      amount: 2000
    }
  })
})

test('Should setup add expense action with values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 20035,
    createdAt: 122334455677,
    note: "This was last month's rent"
  }
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('Should setup add expense action with default values', () => {
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  })
})