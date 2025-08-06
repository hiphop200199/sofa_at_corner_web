import { useConstant } from '@/constants'
import { computed, onMounted } from 'vue'
import { useReturnExchangeStore } from '@/stores/returnExchange'
import { useLoadingStore } from '@/stores/loading'

export default {
  setup() {
    const returnExchangeStore = useReturnExchangeStore()
    const loadingStore = useLoadingStore()
    const list = computed(() => returnExchangeStore.list)

    const getList = async () => {
      loadingStore.open()
      await returnExchangeStore.getAllList()
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
