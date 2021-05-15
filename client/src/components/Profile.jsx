import React, { useContext } from 'react'
import { Redirect } from 'react-router'
import { UserContext } from '../context/UserContext'

export const Profile = () => {

  const { isAuth, user } = useContext(UserContext)

  if (!isAuth) return <Redirect to='/login' />

  return (
    <div >
      <h2>profile</h2>
      <div className="profile">
        {user.role === 'admin' && <img src="https://image.shutterstock.com/image-vector/admin-stamp-watermark-scratched-style-260nw-1138728377.jpg" alt="admin" />}
        {user.role === 'user' && <img src="https://ps.w.org/wp-user-avatar/assets/icon-256x256.png?rev=1755722" alt="admin" />}
        <div>
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
          <p>{user.email}</p>
          <p>{user.role}</p>
        </div>
      </div >
    </div>
  )
}
