import axios from 'axios'

const BASE_PREFIX = '/api/web/'

const getList = async (secondPrefix, params) => {
  return (await axios.get(BASE_PREFIX + secondPrefix + '/get-list', { params: params })).data
    .response
}

const get = async (secondPrefix, id) => {
  return (await axios.get(BASE_PREFIX + secondPrefix + '/get/' + id)).data.response
}

const add = async (secondPrefix, params) => {
  return (await axios.postForm(BASE_PREFIX + secondPrefix + '/add', params)).data.response
}

const edit = async (secondPrefix, params) => {
  return (await axios.postForm(BASE_PREFIX + secondPrefix + '/edit', params)).data.response
}

const destroy = async (secondPrefix, id) => {
  return (await axios.delete(BASE_PREFIX + secondPrefix + '/' + id)).data.response
}

const login = async (params) => {
  return (await axios.post(BASE_PREFIX + 'login', params)).data.response
}

const register = async (params) => {
  return (await axios.post(BASE_PREFIX + 'register', params)).data.response
}

const checkLogin = async () => {
  return (await axios.post(BASE_PREFIX + 'check-login')).data.response
}

const logout = async () => {
  return (await axios.post(BASE_PREFIX + 'logout')).data.response
}

const getAllList = async (secondPrefix) => {
  return (await axios.get(BASE_PREFIX + secondPrefix + '/get-all-list')).data.response
}

const getNewest = async (secondPrefix) => {
  return (await axios.get(BASE_PREFIX + secondPrefix + '/get-newest')).data.response
}

const getNewestList = async (secondPrefix) => {
  return (await axios.get(BASE_PREFIX + secondPrefix + '/get-newest-list')).data.response
}

const checkout = async (secondPrefix, params) => {
  return (await axios.post(BASE_PREFIX + secondPrefix + '/checkout', params)).data.response
}

export const request = {
  getList,
  get,
  add,
  edit,
  destroy,
  login,
  register,
  checkLogin,
  logout,
  getAllList,
  getNewest,
  getNewestList,
  checkout,
}
