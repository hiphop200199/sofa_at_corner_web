import { request } from './base'

const secondPrefix = 'delivery'

export const getAllList = async () => {
  return await request.getAllList(secondPrefix)
}
