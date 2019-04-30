import React from 'react';

const Message = ({ message }) => (
  <li className="message message--with-avatar">
    <div className="message__avatar">
      <img src="https://robohash.org/qrrqr.png?set=set1" alt=""/>
    </div>
    <div className="message__meta">
      <div className="message__author">
        <span className="message__author-name">Ryan Florence</span>&nbsp;
        <span className="message__created">3:37 PM</span>
      </div>
      <div className="message__content">{message.text}</div>
    </div>
  </li>
)

export default Message;