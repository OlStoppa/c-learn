import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyC8EJ30cYrxE36uDc3bgXL3h-8mRJVk3Ao",
    authDomain: "c-learn-30411.firebaseapp.com",
    databaseURL: "https://c-learn-30411.firebaseio.com",
    projectId: "c-learn-30411",
    storageBucket: "c-learn-30411.appspot.com",
    messagingSenderId: "692975776619"
  };
  firebase.initializeApp(config);

 export const database = firebase.database();