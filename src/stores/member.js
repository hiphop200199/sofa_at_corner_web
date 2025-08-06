import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useApi } from '@/apis'
import { useConstant } from '@/constants'

export const useMemberStore = defineStore('member', () => {
  const info = ref({})

  async function get(id) {
    const response = await useApi.member.get(id)
    if (response.code === useConstant.StatusCode.SUCCESS) {
      info.value = response.data
    }
  }

  return { info, get }
})
