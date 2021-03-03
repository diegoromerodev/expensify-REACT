import moment from 'moment'

export default [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 195,
  createdAt: 0
}, {
  id: '12',
  description: 'Rent',
  note: '',
  amount: 19500,
  createdAt: moment(0).subtract(5, 'days').valueOf()
}, {
  id: '123',
  description: 'Credit Card',
  note: '',
  amount: 1256,
  createdAt: moment(0).add(10, 'days').valueOf()
}];

