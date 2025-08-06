import { request } from './base'

const secondPrefix = 'return-exchange'

export const getAllList = async () => {
  return await request.getAllList(secondPrefix)
}
