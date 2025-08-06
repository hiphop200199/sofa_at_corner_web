import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useApi } from '@/apis'
import { useConstant } from '@/constants'

export const useReturnExchangeStore = defineStore('returnExchange', () => {
  const list = ref([])

  async function getAllList() {
    const response = await useApi.returnExchange.getAllList()
    if (response.code === useConstant.StatusCode.SUCCESS) {
      list.value = response.data
    }
  }

  return { list, getAllList }
})
