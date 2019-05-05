import { useState, useEffect } from 'react';
import { db, firebase, setupPresence } from './firebase';

function useAuth() {
  const [ user, setUser ] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged(fbUser => {
      if(fbUser) {
        const { displayName, photoURL, uid } = fbUser;
        const user = { displayName, photoURL, uid }
        setUser(user)
        db
          .collection('users')
          .doc(user.uid)
          .set(user, { merge: true })
        setupPresence(user);
      } else {
        setUser(null);
      }
    })
  }, [])

  return user;
}

export default useAuth;