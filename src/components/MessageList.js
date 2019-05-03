import React from 'react';
import useCollection from '../useCollection';
import Message from './Message';
import MessageWithAvatar from './MessageWithAvatar';

const MessageList = ({ channelId }) => {

  const messages = useCollection(
    `channels/${channelId}/messages`,
    'createdAt'
  )

  return (
    <div className='App__section App__section--messages'>
        <ul className='message-list'>
            {
              messages.map((message, index) => {
                const previous = messages[index -1];
                const showAvatar = !previous || message.user.id !== previous.user.id;
                const showDay = false;
                return showAvatar ?
                <MessageWithAvatar message={message} showDay={showDay} key={message.id}/> :
                <Message message={message} key={message.id}/>
              })
            }
          </ul>
      </div>
  )
}

export default MessageList;