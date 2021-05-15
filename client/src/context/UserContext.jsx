import React, { useState } from 'react'
import { loginRequests } from '../api'

const UserContext = React.createContext()

const UserProvider = ({ children }) => {

  const [user, setUser] = useState({})
  const [isAuth, setIsAuth] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (email, password) => {
    try {
      const response = await loginRequests(email, password)
      setUser(response.data)
      setIsAuth(true)
    } catch (error) {
      setError(error.response.data.msg)
    }
  }

  const handleLogout = () => {
    setUser({})
    setIsAuth(false)
  }

  return (
    <UserContext.Provider value={{ user, isAuth, error, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }