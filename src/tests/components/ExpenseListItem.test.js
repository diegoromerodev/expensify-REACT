import React from 'react'
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses'
import ExpenseListItem from '../../components/ExpenseListItem'

test('Should render a single list item', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[2]} />)
  expect(wrapper).toMatchSnapshot()
})