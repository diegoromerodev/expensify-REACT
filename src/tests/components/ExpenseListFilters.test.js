import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseListFilters} from '../../components/ExpenseListFilters'
import {filters, altFilters} from '../fixtures/filters'
import moment from 'moment'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
  setTextFilter = jest.fn()
  sortByDate = jest.fn()
  sortByAmount = jest.fn()
  setStartDate = jest.fn()
  setEndDate = jest.fn()
  wrapper = shallow(
    <ExpenseListFilters 
    filters={filters}
    sortByDate={sortByDate}
    sortByAmount={sortByAmount}
    setTextFilter={setTextFilter}
    setStartDate={setStartDate}
    setEndDate={setEndDate}
    />
  )
})

test('Should render expense list filters', () => {
  expect(wrapper).toMatchSnapshot()
})

test('Should render expense list filters with alt data', () => {
  wrapper.setProps({
    filters: altFilters
  })
  expect(wrapper).toMatchSnapshot()
})

test('Should handle text change', () => {
  const value = 'test'
  wrapper.find('input').at(0).simulate("change", {target: {value}})
  expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('Should sort by date', () => {
  const value = 'date'
  wrapper.find('select').simulate("change", {
    target: {value}
  })
  expect(sortByDate).toHaveBeenCalled()
})

test('Should sort by amount', () => {
  const value = 'amount'
  wrapper.find('select').simulate("change", {
    target: {value}
  })
  expect(sortByAmount).toHaveBeenCalled()
})

test('Should handle date changes', () => {
  const dateFilters = {
    startDate: moment(0),
    endDate: moment(0).add(2, "days")
  }
  wrapper.find('DateRangePicker').prop('onDatesChange')(dateFilters)
  expect(setStartDate).toHaveBeenLastCalledWith(dateFilters.startDate)
  expect(setEndDate).toHaveBeenLastCalledWith(dateFilters.endDate)

})

test('Should handle date focus changes', () => {
  const calendarFocused = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})