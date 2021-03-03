import {setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filters'
import moment from 'moment'

test('Should generate set start date action object', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('Should generate set end date action object', () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
})

test('Should generate set text filter with values', () => {
  const action = setTextFilter('bill')
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'bill'
  })
})

test('Should generate set text filter no values', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})

test('Should generate sort by amount action',() => {
  const action = sortByAmount()
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
})

test('Should generate sort by date action', () => {
  const action = sortByDate()
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  })
})