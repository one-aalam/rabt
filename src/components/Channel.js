import React from 'react';
import ChannelHeader from './ChannelHeader';
import MessageList from './MessageList';
import MessageInputBox from './MessageInputBox';

const Channel = ({ user }) => {
  return (
    <>
      <ChannelHeader />
      <MessageList />
      <MessageInputBox user={user}/>
    </>
  )
}

export default Channel;