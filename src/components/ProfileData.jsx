import React from 'react'

function ProfileData({user}) {
  return (
    <div>
      <h1>User Profile</h1>
      <img src={user.avatarImg} />
      <p>email: {user.email}</p>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Password: {user.password}</p>
    </div>
  )
}

export default ProfileData