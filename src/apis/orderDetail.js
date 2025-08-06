import { request } from './base'

const secondPrefix = 'order-detail'

export const getList = async (params) => {
  return await request.getList(secondPrefix, params)
}
