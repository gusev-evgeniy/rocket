import { useState } from 'react';
import { Route } from 'react-router';
import './App.css';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { Profile } from './components/Profile';
import { Signup } from './components/Signup';

function App() {

  return (
    <>
      <Navbar />
      <Route path='/profile'>
        <Profile />
      </Route>
      <Route exact path='/login'>
        <Login />
      </Route>
      <Route exact path='/signup'>
        <Signup />
      </Route>
    </>
  );
}

export default App;
