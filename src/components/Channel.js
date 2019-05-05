import React from 'react';
import ChannelHeader from './ChannelHeader';
import ChannelInfo from './ChannelInfo';
import MessageList from './MessageList';
import MessageInputBox from './MessageInputBox';

const Channel = ({ user, channelId }) => {
  return (
    <>
      <ChannelHeader user={user} channelId={channelId}/>
      <MessageList user={user} channelId={channelId}/>
      <MessageInputBox user={user} channelId={channelId}/>
      <ChannelInfo user={user} channelId={channelId}/>
    </>
  )
}

export default Channel;