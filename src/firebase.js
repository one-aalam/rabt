import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBSnPjUrHhJwNWGEnsdhGefn6P4VszDehE",
  authDomain: "rabt-afba1.firebaseapp.com",
  databaseURL: "https://rabt-afba1.firebaseio.com",
  projectId: "rabt-afba1",
  storageBucket: "rabt-afba1.appspot.com",
  messagingSenderId: "602480368159"
};
firebase.initializeApp(config);

const db = firebase.firestore();

export { db, firebase }
