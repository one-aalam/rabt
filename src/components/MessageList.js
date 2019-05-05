import React, { useEffect, useRef } from 'react';
import isSameDay from 'date-fns/is_same_day';
import useCollection from '../useCollection';
import Message from './Message';
import MessageWithAvatar from './MessageWithAvatar';


const MessageList = ({ channelId }) => {

  const messages = useCollection(
    `channels/${channelId}/messages`,
    'createdAt'
  )

  return (
    <ChatScroller className='App__section App__section--messages'>
        <ul className='message-list'>
            {
              messages.map((message, index) => {
                const previous = messages[index -1];
                const showAvatar = shouldShowAvatar(previous, message);
                const showDay = shouldShowDay(previous, message);
                return showAvatar ?
                <MessageWithAvatar message={message} showDay={showDay} key={message.id}/> :
                <Message message={message} key={message.id}/>
              })
            }
          </ul>
      </ChatScroller>
  )
}

export default MessageList;

const ChatScroller = (props) => {
  const ref = useRef();
  const shouldScrollRef = useRef(true);

  useEffect(() => {
    if (shouldScrollRef.current) {
      const node = ref.current;
      node.scrollTop = node.scrollHeight;
    }
  })

  const handleScroll = () => {
    const node = ref.current;
    const { scrollTop, scrollHeight, clientHeight } = node;
    const atBottom = scrollHeight === clientHeight + scrollTop;
    shouldScrollRef.current = atBottom;
  }

  return <div {...props} ref={ref} onScroll={handleScroll}/>;
}

function shouldShowAvatar(previous, message) {
  if(!previous) return true; // is first message
  if(message.user.id !== previous.user.id) return true; // is by different user
  if(message.createdAt.seconds - previous.createdAt.seconds > 120) return true
  return false;
}

function shouldShowDay(previous, message) {
  if(!previous) return true; // is first message
  if(!isSameDay(previous.createdAt.seconds * 1000, message.createdAt.seconds * 1000)) return true;
  return false;
}