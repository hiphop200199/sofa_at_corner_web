import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useApi } from '@/apis'
import { useConstant } from '@/constants'

export const useCartStore = defineStore('cart', () => {
  const list = ref([])

  async function getList(params) {
    const response = await useApi.cart.getList(params)
    if (response.code === useConstant.StatusCode.SUCCESS) {
      list.value = response.data
    }
  }

  return { list, getList }
})
