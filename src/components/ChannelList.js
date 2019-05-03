import React from 'react';
import { Link } from '@reach/router';
import useCollection from '../useCollection';

const ChannelList = () => {
  const channels = useCollection('channels');

  return (
    <ul className="channel-list">
    { channels.map( channel => <li key={channel.id}><Link to={`/channel/${channel.id}`}># {channel.id}</Link></li>)}
    </ul>
)}

export default ChannelList;