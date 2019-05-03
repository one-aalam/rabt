import React from 'react';
import { Router, Redirect } from '@reach/router';
import useAuth from './useAuth'
// import logo from './logo.svg';
import './App.css';

import Sidebar from './components/Sidebar';
import Channel from './components/Channel';
import Login from './components/Login';

function App() {
  const user = useAuth();

  return user ?   (
    <div className='App'>
      <Sidebar user={user}/>
      <Router className="App__router">
        <Channel path="channel/:channelId" user={user}/>
        <Redirect from="/" to="channel/general" />
      </Router>
    </div>
  ) : <Login/>;
}

export default App;
