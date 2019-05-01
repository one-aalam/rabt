import React, { useState, useEffect } from 'react';
import { db, firebase } from './firebase';
// import logo from './logo.svg';
import './App.css';

import ChannelList from './components/ChannelList';
import Channel from './components/Channel';
import UserBadge from './components/UserBadge';

function App() {
  const user = useAuth();

  return user ?   (
    <div className='App'>
      <div className='App__section App__section--teams '>Teams</div>
      <div className='App__section App__section--channels'>
        <UserBadge user={user}/>
        <ChannelList/>
      </div>
      <Channel user={user}/>
    </div>
  ) : <Login/>;
}

export default App;

function Login() {
  const [ authError, setAuthError ] = useState(null);
  const handleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch(error) {
      setAuthError(error);
    }
  }

  return (
    <div className='App'>
      <h1>Chat</h1>
      <button onClick={handleSignIn}>Sign in with Google</button>
      {
        authError && (
          <div>
            <p>Sorry, there was a problem</p>
            <p>
              <i>{authError.message}</i>
            </p>
            <p>Please try again</p>
          </div>
        )
      }
    </div>
  );
}


function useAuth() {
  const [ user, setUser ] = useState(null);

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
      } else {
        setUser(null);
      }
    })
  }, [ user ])

  return user;
}
