import React from 'react';
import UserBadge from './UserBadge';
import ChannelList from './ChannelList';

const Sidebar = ({ user }) => (
  <>
  <div className='App__section App__section--teams '>Teams</div>
  <div className='App__section App__section--channels'>
    <UserBadge user={user}/>
    <ChannelList/>
  </div>
  </>
)

export default Sidebar;