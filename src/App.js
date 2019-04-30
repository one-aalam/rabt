import React from 'react';
// import logo from './logo.svg';
import './App.css';

import ChannelList from './components/ChannelList';
import Channel from './components/Channel';
import UserBadge from './components/UserBadge';



function App() {
  return (
    <div className='App'>
      <div className='App__section App__section--teams '>Teams</div>
      <div className='App__section App__section--channels'>
        <UserBadge/>
        <ChannelList/>
      </div>
      <Channel />
    </div>
  );
}

export default App;
