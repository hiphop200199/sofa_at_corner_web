import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useApi } from '@/apis'
import { useConstant } from '@/constants'

export const useAuthStore = defineStore('auth', () => {
  const userInfo = ref(
    sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : '',
  )
  async function login(params) {
    const response = await useApi.auth.login(params)
    let redirectToHome = false
    let message = response.message
    if (response.code === useConstant.StatusCode.SUCCESS) {
      userInfo.value = response.data
      sessionStorage.setItem('userInfo', JSON.stringify(response.data))
      redirectToHome = true
    }
    return { redirectToHome, message }
  }
  async function register(params) {
    const response = await useApi.auth.register(params)
    let redirectToHome = false
    let message = response.message
    if (response.code === useConstant.StatusCode.SUCCESS) {
      userInfo.value = response.data
      sessionStorage.setItem('userInfo', JSON.stringify(response.data))
      redirectToHome = true
    }
    return { redirectToHome, message }
  }
  async function checkLogin() {
    const response = await useApi.auth.checkLogin()
    let redirectToLogin = false
    if (response.code === useConstant.StatusCode.AUTH_ERROR) {
      userInfo.value = ''
      sessionStorage.removeItem('userInfo')
      redirectToLogin = true
    } else if (response.code === useConstant.StatusCode.SUCCESS) {
      userInfo.value = response.data
      sessionStorage.setItem('userInfo', JSON.stringify(response.data))
    }

    return redirectToLogin
  }
  async function logout() {
    const response = await useApi.auth.logout()
    let redirectToLogin = false
    if (response.code === useConstant.StatusCode.SUCCESS) {
      userInfo.value = ''
      sessionStorage.removeItem('userInfo')
      redirectToLogin = true
    }
    return redirectToLogin
  }

  return { userInfo, login, register, checkLogin, logout }
})
