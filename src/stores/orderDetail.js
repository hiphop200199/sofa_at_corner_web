import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useApi } from '@/apis'
import { useConstant } from '@/constants'

export const useOrderDetailStore = defineStore('orderDetail', () => {
  const list = ref([])

  async function getList(params) {
    const response = await useApi.orderDetail.getList(params)
    if (response.code === useConstant.StatusCode.SUCCESS) {
      list.value = response.data
    }
  }

  return { list, getList }
})
