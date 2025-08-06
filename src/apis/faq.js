import { request } from './base'

const secondPrefix = 'faq'

export const getAllList = async () => {
  return await request.getAllList(secondPrefix)
}
