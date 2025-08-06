import { request } from './base'

export const login = async (params) => {
  return await request.login(params)
}

export const register = async (params) => {
  return await request.register(params)
}

export const checkLogin = async () => {
  return await request.checkLogin()
}

export const logout = async () => {
  return await request.logout()
}
