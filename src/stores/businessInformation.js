import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useApi } from '@/apis'
import { useConstant } from '@/constants'

export const useBusinessInformationStore = defineStore('businessInformation', () => {
  const info = ref({})

  async function getNewest() {
    const response = await useApi.businessInformation.getNewest()
    if (response.code === useConstant.StatusCode.SUCCESS) {
      info.value = response.data
    }
  }

  return { info, getNewest }
})
