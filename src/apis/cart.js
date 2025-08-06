import { request } from './base'

const secondPrefix = 'cart'

export const getList = async (params) => {
  return await request.getList(secondPrefix, params)
}

export const add = async (params) => {
  return await request.add(secondPrefix, params)
}

export const edit = async (params) => {
  return await request.edit(secondPrefix, params)
}

export const destroy = async (id) => {
  return await request.destroy(secondPrefix, id)
}

export const checkout = async (params) => {
  return await request.checkout(secondPrefix, params)
}
