import axios from 'axios';

const instance = axios.create({ baseURL: 'http://localhost:5000/', })

export const signupRequests = async (user) => {
  return await instance.post('/signup', { ...user })
}

export const loginRequests = async (email, password) => {
  return await instance.post('/login', { email, password })
}