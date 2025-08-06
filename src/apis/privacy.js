import { request } from './base'

const secondPrefix = 'privacy'

export const getAllList = async () => {
  return await request.getAllList(secondPrefix)
}
