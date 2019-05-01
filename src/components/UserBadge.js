import React from 'react';
import { firebase } from '../firebase';

const UserBadge = ({ user }) => (
  <div className="user-badge">
    <div className="user-badge__avatar">
      <img src={user.photoURL} alt="" title=""></img>
    </div>
    <div className="user-badge__detail">
      <h3>{user.displayName}</h3>
      <button onClick={() => firebase.auth().signOut()}>log out</button>
    </div>
  </div>
)

export default UserBadge;