import React from 'react';
import useDoc from '../useDoc';

const ChannelHeader = ({ channelId }) => {
  const channel = useDoc(`/channels/${channelId}`);
  return (
    <h3 className='App__section App__section--header'>{channelId}{channel && channel.topic}</h3>
  );
}

export default ChannelHeader;