import React from 'react';

const MessageInputBox = () => (
  <form onSubmit={ evt => {
    evt.preventDefault();
    const elm = evt.target.elements[0];
    console.log(elm.value);
    return false;
  }} className='App__section App__section--input'>
  <input className="MessageInput" type='text' placeholder='Message #general'/>
  </form>
)

export default MessageInputBox;