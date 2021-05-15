import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router'
import { SignupContext } from '../context/SignupContext'

export const Signup = ({ isAuth }) => {
  const { successMessage, errors, handleSignup } = useContext(SignupContext)

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: null,
  })

  const handleChange = e => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    handleSignup(user)
  }

  if (isAuth) return <Redirect to='/profile' />

  return (
    <div className="container ">
      <h2>Signup</h2>
      <form className="col s12" onSubmit={e => handleSubmit(e)} >
        <div className="inputs">
          <div className="input-field col s6">
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={user.firstName}
              onChange={e => handleChange(e)}
            />
            <label htmlFor="firstName">Имя</label>
          </div>
          <div className="input-field col s6">
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={user.lastName}
              onChange={e => handleChange(e)}
            />
            <label htmlFor="lastName">Фамилия</label>
          </div>
          <div className="input-field col s6">
            <input
              id="email"
              name="email"
              type="text"
              value={user.email}

              onChange={e => handleChange(e)}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field col s6">
            <input
              id="password"
              name="password"
              value={user.password}
              type="password"
              onChange={e => handleChange(e)}
            />
            <label htmlFor="password">Пароль</label>
          </div>
          <div className="input-field col s12">
            <select defaultValue="" className="browser-default" name="role" onChange={e => handleChange(e)}>
              <option value="" disabled>Выберите роль</option>
              <option value="user">Пользователь</option>
              <option value="admin">Админ</option>
            </select>
          </div>
        </div>
        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
      </button>
        {errors.length > 0 ? <ul class="collection">
          {errors.map(error => <li class="collection-item" key={error.msg}>{error.msg}</li>)}
        </ul> : null}
        <p>{successMessage}</p>
      </form>
    </div>
  )
}