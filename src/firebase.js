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
  const isOfflineRTDB = {
    state: 'offline',
    lastChanged: firebase.database.ServerValue.TIMESTAMP
  }
  // online
  const isOnlineRTDB = {
    state: 'online',
    lastChanged: firebase.database.ServerValue.TIMESTAMP
  }

    // offline status
    const isOfflineFirestore = {
      state: 'offline',
      lastChanged: firebase.firestore.FieldValue.serverTimestamp()
    }
    // online
    const isOnlineFirestore = {
      state: 'online',
      lastChanged: firebase.firestore.FieldValue.serverTimestamp()
    }

  const rtdbRef = rtdb.ref(`status/${user.uid}`);
  const userDoc = db.doc(`users/${user.uid}`);

  rtdb.ref('.info/connected').on('value', async snapshot => {
    if (snapshot.value === false) {
      userDoc.update({ status: isOfflineFirestore })
      return;
    }

    await rtdbRef.onDisconnect().set(isOfflineRTDB);
    rtdbRef.set(isOnlineRTDB);
    userDoc.update({ status: isOnlineFirestore })
  })

}

export { db, firebase, rtdb }
