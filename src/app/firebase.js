import firebase from 'firebase/app';
import 'firebase/firestore';

export const firebaseApp =
  firebase.apps[0] ||
  firebase.initializeApp({
    apiKey: 'AIzaSyCMC7-E9Q0URuXFxUHx9_QxC58cUfQZSfo',
    authDomain: 'martech-point.firebaseapp.com',
    databaseURL: 'https://martech-point.firebaseio.com',
    projectId: 'martech-point',
    storageBucket: 'martech-point.appspot.com',
    messagingSenderId: '768184092949',
    appId: '1:768184092949:web:16795bd34434ea594a011c',
    measurementId: 'G-1QM8X3M8BB'
  });

export const firestore = firebaseApp.firestore();

export { firebase };
