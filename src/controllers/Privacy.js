import { useConstant } from '@/constants'
import { computed, onMounted } from 'vue'
import { useLoadingStore } from '@/stores/loading'
import { usePrivacyStore } from '@/stores/privacy'

export default {
  setup() {
    const privacyStore = usePrivacyStore()
    const loadingStore = useLoadingStore()
    const list = computed(() => privacyStore.list)

    const getList = async () => {
      loadingStore.open()
      await privacyStore.getAllList()
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
