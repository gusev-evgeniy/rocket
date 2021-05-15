import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { SignupProvider } from './context/SignupContext';
import { UserProvider } from './context/UserContext';

ReactDOM.render(
  <BrowserRouter>
    <SignupProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </SignupProvider>
  </BrowserRouter>,
  document.getElementById('root')
);


