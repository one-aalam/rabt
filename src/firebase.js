import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBBh17imCof5BrNuVBXAoNegJksaZgecoQ",
    authDomain: "chat-some.firebaseapp.com",
    databaseURL: "https://chat-some.firebaseio.com",
    projectId: "chat-some",
    storageBucket: "chat-some.appspot.com",
    messagingSenderId: "477458730110"
};
firebase.initializeApp(config);

const db = firebase.firestore();

export { db, firebase }
