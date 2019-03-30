import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBSvW6Af-MTynpecXWGTwI0S6CcmlIc2Sk',
  authDomain: 'owl-workout.firebaseapp.com',
  databaseURL: 'https://owl-workout.firebaseio.com',
  projectId: 'owl-workout',
  storageBucket: 'owl-workout.appspot.com',
  messagingSenderId: '774576066182'
}
const firebaseApp = firebase.initializeApp(config)
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firestore database
export default firebaseApp.firestore()
