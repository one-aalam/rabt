import React from 'react';
import useCollection from '../useCollection';
import Message from './Message';
import MessageWithAvatar from './MessageWithAvatar';

const MessageList = () => {

  const messages = useCollection(
    'channels/6AASkCYkRMeSepdVaPRM/messages',
    'createdAt'
  )

  return (
    <div className='App__section App__section--messages'>
        <ul className='message-list'>
            {
              messages.map((message, index) => {
                return index === 0 ?
                <MessageWithAvatar message={message}/> :
                <Message message={message}/>
              })
            }
          </ul>
      </div>
  )
}

export default MessageList;