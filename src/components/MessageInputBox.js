import React from 'react';
import { db } from '../firebase';

const MessageInputBox = ({ user }) => (
  <form onSubmit={ evt => {
    evt.preventDefault();
    const elm = evt.target.elements[0];
    db.collection('channels')
      .doc('6AASkCYkRMeSepdVaPRM')
      .collection('messages')
      .add({
        user: db.collection('users').doc(user.id),
        text: elm.value,
        createdAt: new Date()
      });
    evt.target.reset();
  }} className='App__section App__section--input'>
  <input className="MessageInput" type='text' placeholder='Message #general'/>
  </form>
)

export default MessageInputBox;