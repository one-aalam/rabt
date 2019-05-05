import React from 'react';

const Message = ({ message }) => (
  <li className="message" key={message.id}>
    <div className="message__avatar--fuax">
    </div>
    <div className="message__meta">
      <div className="message__content">{message.text}</div>
    </div>
  </li>
)

export default Message;