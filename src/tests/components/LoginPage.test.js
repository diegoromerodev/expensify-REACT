import React from 'react'
import {shallow} from 'enzyme'
import { LoginPage } from '../../components/LoginPage'

test('Should correctly render Login Page', () => {
  const wrapper = shallow(<LoginPage />)
  expect(wrapper).toMatchSnapshot()
})

test('Should call startLogout on button click', () => {
  const startLogin = jest.fn()
  const wrapper = shallow(<Header startLogin={startLogout} />)
  wrapper.find('button').simulate('click')
  expect(startLogin).toHaveBeenCalled()
})