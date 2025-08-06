import { request } from './base'

const secondPrefix = 'product'

export const getList = async (params) => {
  return await request.getList(secondPrefix, params)
}

export const get = async (id) => {
  return await request.get(secondPrefix, id)
}

export const getNewestList = async () => {
  return await request.getNewestList(secondPrefix)
}
