import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router'
import { UserContext } from '../context/UserContext'

export const Login = () => {
  const { isAuth, error, handleLogin } = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  if (isAuth) return <Redirect to='/profile' />

  const handleSubmit = async (e) => {
    e.preventDefault()
    await handleLogin(email, password)
  }

  return (
    <div className="container ">
      <h2>Auth</h2>
      <form className="col s12" onSubmit={e => handleSubmit(e)}>
        <div className="inputs">
          <div className="input-field col s6">
            <input
              id="email"
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <span className="helper-text" data-error="Неверный email" data-success="Корректный email" />
          </div>
          <div className="input-field col s6">
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <label htmlFor="password">Пароль</label>
            <span className="helper-text" data-error="Неверный Пароль" data-success="Корректный Пароль" />
          </div>
        </div>
        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
      </button>
      </form>
      <p>{error}</p>
    </div>
  )
}
