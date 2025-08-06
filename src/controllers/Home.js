import { useProductStore } from '@/stores/product'
import { computed, onMounted } from 'vue'
import { useLoadingStore } from '@/stores/loading'

export default {
  setup() {
    const productStore = useProductStore()
    const loadingStore = useLoadingStore()
    const newestList = computed(() => productStore.list)

    const getList = async function () {
      loadingStore.open()
      await productStore.getNewestList()
      loadingStore.close()
    }

    onMounted(async () => {
      await getList()
    })

    return {
      newestList,
    }
  },
}
