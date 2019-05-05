import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
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
const rtdb = firebase.database();

export const setupPresence = (user) => {
  // offline status
  const isOffline = {
    state: 'offline',
    lastChanged: firebase.database.ServerValue.TIMESTAMP
  }
  // online
  const isOnline = {
    state: 'online',
    lastChanged: firebase.database.ServerValue.TIMESTAMP
  }

  const rtdbRef = rtdb.ref(`status/${user.uid}`);

  rtdb.ref('.info/connected').on('value', async snapshot => {
    if (snapshot.value === false) {
      return;
    }

    await rtdbRef.onDisconnect().set(isOffline);
    rtdbRef.set(isOnline);
  })

}

export { db, firebase, rtdb }
