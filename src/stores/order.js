import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useApi } from '@/apis'
import { useConstant } from '@/constants'

export const useOrderStore = defineStore('order', () => {
  const list = ref([])

  async function getList(params) {
    const response = await useApi.order.getList(params)
    if (response.code === useConstant.StatusCode.SUCCESS) {
      list.value = response.data
    }
  }

  return { list, getList }
})
