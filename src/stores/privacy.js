import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useApi } from '@/apis'
import { useConstant } from '@/constants'

export const usePrivacyStore = defineStore('privacy', () => {
  const list = ref([])

  async function getAllList() {
    const response = await useApi.privacy.getAllList()
    if (response.code === useConstant.StatusCode.SUCCESS) {
      list.value = response.data
    }
  }

  return { list, getAllList }
})
