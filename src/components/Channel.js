import React from 'react';
import ChannelHeader from './ChannelHeader';
import MessageList from './MessageList';
import MessageInputBox from './MessageInputBox';

const Channel = () => {
  return (
    <>
      <ChannelHeader />
      <MessageList />
      <MessageInputBox />
    </>
  )
}

export default Channel;