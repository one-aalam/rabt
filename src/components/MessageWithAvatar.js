import React from 'react';
import formatDate from 'date-fns/format';
import useDocWithCache from '../useDocWithCache';


const Message = ({ message, showDay }) => {
  const author = useDocWithCache(message.user.path);
  return (
  <li className="message message--with-avatar" key={message.id}>
    {showDay && (
      <div className="date-sep">12/02/2019</div>
    )}
    <div className="message__avatar" style={{
      backgroundImage: author
        ? `url("${author.photoURL}")`
        : ''
    }}>
    </div>
    <div className="message__meta">
      <div className="message__author">
        <span className="message__author-name">{author && author.displayName}</span>&nbsp;
        <span className="message__created">{
          formatDate(message.createdAt.seconds * 1000, 'h:mm A')
        }</span>
      </div>
      <div className="message__content">{message.text}</div>
    </div>
  </li>
)}

export default Message;