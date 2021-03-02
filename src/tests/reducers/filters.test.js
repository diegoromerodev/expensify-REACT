import moment from 'moment'
import filters from '../../reducers/filters'
import filtersReducer from '../../reducers/filters'

test('Should setup default filter value', () => {
  const state = filtersReducer(undefined, {type: '@@INIT'})
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('Should set sort by to amount', () => {
  const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
  expect(state.sortBy).toBe('amount')
})

test('Should set sort by to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  }
  const action = {type: 'SORT_BY_DATE'}
  const state = filtersReducer(currentState, action)
  expect(state.sortBy).toBe('date')
})

test('Should set text filter', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_TEXT_FILTER',
    text: 'Diego'
  })
  expect(state.text).toBe('Diego')
})

test('Should set start date', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_START_DATE',
    startDate: 10
  })
  expect(state.startDate).toBe(10)
})

test('Should set end date', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_END_DATE',
    endDate: 10
  })
  expect(state.endDate).toBe(10)
})