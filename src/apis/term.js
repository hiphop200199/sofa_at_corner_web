import { request } from './base'

const secondPrefix = 'term'

export const getNewest = async () => {
  return await request.getNewest(secondPrefix)
}
