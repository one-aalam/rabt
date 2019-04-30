import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

const ChannelList = () => {
  const [ channels, setChannels ] = useState([])

  useEffect(() => {
    return db.collection('channels').onSnapshot(snapshot => {
      const docs = [];
      snapshot.forEach(doc => {
        docs.push({ ...doc.data(), id: doc.id });
      })
      setChannels(docs);
    });
  }, [])

  return (
    <ul className="channel-list">
    {
      channels.map( channel => <li key={channel.id}><a href={`/channel/${channel.id}`}># {channel.name}</a></li>)
    }
    </ul>
)}

export default ChannelList;