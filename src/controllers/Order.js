import { useConstant } from '@/constants'
import { computed, onMounted } from 'vue'
import { useFaqStore } from '@/stores/faq'
import { useLoadingStore } from '@/stores/loading'
import { useOrderStore } from '@/stores/order'
import { useAuthStore } from '@/stores/auth'

export default {
  setup() {
    const orderStore = useOrderStore()
    const loadingStore = useLoadingStore()
    const authStore = useAuthStore()
    const list = computed(() => orderStore.list)

    const getList = async () => {
      const params = {
        member_id: authStore.userInfo.id,
      }
      loadingStore.open()
      await orderStore.getList(params)
      loadingStore.close()
    }

    onMounted(async () => {
      await getList()
    })

    return {
      list,
      useConstant,
    }
  },
}
