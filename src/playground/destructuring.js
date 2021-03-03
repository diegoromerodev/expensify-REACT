// OBJ DESTRUCTURING

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const {name: publisherName = 'Self-Published'} = book.publisher

console.log(publisherName)

// ARRAY DESTRUCTURING

const address = ['Ecuador 1263', 'CABA', 'Buenos Aires', '21222']

const [street, city = 'Cagua', state, zipCode] = address

console.log(street)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [productName, , mediumPrice] = item

console.log(`A medium ${productName} costs ${mediumPrice}`)