import * as firebase from 'firebase'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config)

const database = firebase.database()

export { firebase, database as default }


// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
//   })

//   database.ref('expenses').on('value', (snapshot) => {
//   const expenses = []
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses)
// })

// setTimeout(() => {
//   database.ref('expenses').push({
//     description: 'Coffee',
//     note: 'Moccha',
//     amount: 2500,
//     createdAt: 192920192
//   })
// }, 10000)
// database.ref('expenses').push({
//   description: 'Food',
//   note: 'Burgers and beer',
//   amount: 5000,
//   createdAt: 7990099
// })
// database.ref('expenses').push({
//   description: 'Disco',
//   note: 'Dancing night',
//   amount: 100000,
//   createdAt: 9191029333
// })

// database.ref('notes/-MUyoD-YMHjv9KRtXChy').set(null)

// database.ref('notes').push({
//   title: 'Course Toptics',
//   body: 'React native angular or python'
// })

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val()
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })

// setTimeout(() => {
//   database.ref().update({
//     name: "Jose",
//     "job/title": "Architect",
//     "job/company": "Tron"
//   })
// }, 3000)

// setTimeout(() => {
//   database.ref().update({
//     name: "Diego",
//     "job/title": "Designer",
//     "job/company": "Redbubble"
//   })
// }, 3000)

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
//   })
//   .catch((e) => {
//     console.log('Error found', e)
//   })


// database.ref().set({
//   name: 'Diego Romero',
//   age: '23',
//   stressLevel: 6,
//   job: {
//     title: 'Designer',
//     company: 'Redbubble'
//   },
//   isSingle: true,
//   location: {
//     city: 'Buenos Aires',
//     country: 'Argentina'
//   }
// }).then(() => {
//   console.log('Got the data')
// }).catch((e) => {
//   console.log(e)
// })

// database.ref('isSingle').remove()
//   .then(() => {
//     console.log('Wiped data')
//   })
//   .catch((e) => {
//     console.log("Couldn't wipe :(")
//   })

  // database.ref().update({
  //   stressLevel: 9,
  //   "job/company": "Amazon",
  //   "location/city": "Seattle",
  //   "location/country": "United States"
  // })