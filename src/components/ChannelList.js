import React from 'react';
import useCollection from '../useCollection';

const ChannelList = () => {
  const channels = useCollection('channels');

  return (
    <ul className="channel-list">
    { channels.map( channel => <li key={channel.id}><a href={`/channel/${channel.id}`}># {channel.name}</a></li>)}
    </ul>
)}

export default ChannelList;