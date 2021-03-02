import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

const store = configureStore()


store.dispatch(addExpense({
  description: 'Water Bill',
  amount: 3500,
  createdAt: 2000
}))

store.dispatch(addExpense({
  description: 'Gas Bill',
  amount: 2800,
  createdAt: 1100
}))

store.dispatch(addExpense({
  description: 'Rent',
  amount: 100950,
  createdAt: 1323232
}))


const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

console.log(visibleExpenses)

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
