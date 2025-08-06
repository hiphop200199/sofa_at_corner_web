import { request } from './base'

const secondPrefix = 'member'

export const get = async (id) => {
  return await request.get(secondPrefix, id)
}
