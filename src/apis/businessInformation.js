import { request } from './base'

const secondPrefix = 'business-information'

export const getNewest = async () => {
  return await request.getNewest(secondPrefix)
}
