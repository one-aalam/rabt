import React from 'react';
import ChannelHeader from './ChannelHeader';
import MessageList from './MessageList';
import MessageInputBox from './MessageInputBox';

const Channel = ({ user, channelId }) => {
  return (
    <>
      <ChannelHeader user={user}/>
      <MessageList user={user} channelId={channelId}/>
      <MessageInputBox user={user} channelId={channelId}/>
    </>
  )
}

export default Channel;