import React from 'react';
import useCollection from '../useCollection'

const Members = ({ channelId }) => {
  const members = useCollection(
    'users',
    'displayName',
    [`channels.${channelId}`, '==', true]
  )

  return (
    <div className="members">
      {
        members.map(member => (
          <div className="member" key={member.uid}>
            {member.displayName}
          </div>
        ))
      }
    </div>
  )
}

export default Members;