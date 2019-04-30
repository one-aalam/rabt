import React from 'react';

const UserBadge = () => (
  <div className="user-badge">
    <div className="user-badge__avatar">
      <img src="https://robohash.org/Y1D.png?set=set1" alt="" title=""></img>
    </div>
    <div className="user-badge__detail">
      <h3>User name</h3>
      <button>log out</button>
    </div>
  </div>
)

export default UserBadge;