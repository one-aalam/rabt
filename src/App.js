import React, { useState, useEffect } from 'react';
import { firebase } from './firebase';
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
  const handleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
  }

  return (
    <div className='App'>
      <h1>Chat</h1>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </div>
  );
}


function useAuth() {
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        const { displayName, photoURL, uid } = user;
        setUser({
          displayName,
          photoURL,
          uid
        })
      } else {
        setUser(null);
      }
    })
  }, [])

  return user;
}
