import React from 'react';
import { db } from '../firebase';

const MessageInputBox = ({ user, channelId }) => (
  <form onSubmit={ evt => {
    evt.preventDefault();
    const elm = evt.target.elements[0];
    db.collection('channels')
      .doc(channelId)
      .collection('messages')
      .add({
        user: db.collection('users').doc(user.uid),
        text: elm.value,
        createdAt: new Date()
      });
    evt.target.reset();
  }} className='App__section App__section--input'>
  <input className="MessageInput" type='text' placeholder={`Message #${channelId}`}/>
  </form>
)

export default MessageInputBox;