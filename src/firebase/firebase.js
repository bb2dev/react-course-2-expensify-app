import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBCaQZ1udNaNI56BV9be8xY19nkTGXjRLI",
  authDomain: "expensify-4a37b.firebaseapp.com",
  databaseURL: "https://expensify-4a37b.firebaseio.com",
  projectId: "expensify-4a37b",
  storageBucket: "expensify-4a37b.appspot.com",
  messagingSenderId: "712665473234"
};
firebase.initializeApp(config);

firebase.database().ref().set({
  name: 'bb dev'
});
