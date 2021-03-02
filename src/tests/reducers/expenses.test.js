import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('Should set default state', () => {
  const state = expensesReducer(undefined, {
    type: '@@INIT'
  })
  expect(state).toEqual([])
})

test('Should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('Should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-22'
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('Should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '20',
      description: 'laptop',
      note: ''
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, action.expense])
})

test('Should edit a valid expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      createdAt: 10
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state[1].createdAt).toBe(action.updates.createdAt)
})

test('Should not edit a valid expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: 282829,
    updates: {
      createdAt: 10
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})