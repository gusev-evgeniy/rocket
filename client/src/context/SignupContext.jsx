import React, { useState } from 'react'
import { signupRequests } from '../api'

const SignupContext = React.createContext()

const SignupProvider = ({ children }) => {
  const [successMessage, setSuccessMessage] = useState('')
  const [errors, setErrors] = useState([])

  const handleSignup = async (user) => {
    try {
      const response = await signupRequests(user)
      setSuccessMessage(response.data.message)
      setErrors([])
    } catch (error) {
      setErrors(error.response.data.errors)
    }
  }

  return (
    <SignupContext.Provider value={{ successMessage, errors, handleSignup }}>
      {children}
    </SignupContext.Provider>
  )
}

export { SignupContext, SignupProvider }