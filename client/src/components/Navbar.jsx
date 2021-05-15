import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export const Navbar = () => {

  const { isAuth, handleLogout } = useContext(UserContext)

  return (
    <nav >
      <div className="nav-wrapper">
        <div className='container'>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {isAuth
              ? <li><span className="btn" color="inherit" onClick={handleLogout}>Выйти</span></li>
              : <>
                <li><Link to="/signup">Зарегистрироваться</Link></li>
                <li><Link to="/login">Войти</Link></li>
              </>}
          </ul>
        </div>
      </div>
    </nav>
  )
}
