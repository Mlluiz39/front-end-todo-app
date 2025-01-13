import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3333'
})

api.interceptors.request.use(async config => {
  const user = localStorage.getItem('user')
  const token = user && JSON.parse(user).token
  config.headers.Authorization = `Bearer ${token}`

  return config
})

export { api }
