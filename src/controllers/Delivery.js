import { useConstant } from '@/constants'
import { computed, onMounted } from 'vue'
import { useDeliveryStore } from '@/stores/delivery'
import { useLoadingStore } from '@/stores/loading'

export default {
  setup() {
    const deliveryStore = useDeliveryStore()
    const loadingStore = useLoadingStore()
    const list = computed(() => deliveryStore.list)

    const getList = async () => {
      loadingStore.open()
      await deliveryStore.getAllList()
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
