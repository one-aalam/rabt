import React, {useEffect} from 'react';
import { db } from '../firebase';
import Members from './Members';

const ChannelInfo = ({ user, channelId }) => {
  useEffect(() => {
    db.doc(`users/${user.uid}`).update({
      [`channels.${channelId}`] : true
    })
  }, [ user.uid, channelId ])

  return (
    <div>
        <Members channelId={channelId} />
    </div>
  )
}

export default ChannelInfo;