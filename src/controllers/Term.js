import { useConstant } from '@/constants'
import { computed, onMounted } from 'vue'
import { useTermStore } from '@/stores/term'
import { useLoadingStore } from '@/stores/loading'

export default {
  setup() {
    const loadingStore = useLoadingStore()
    const termStore = useTermStore()

    const info = computed(() => termStore.info)

    const getInfo = async () => {
      loadingStore.open()
      await termStore.getNewest()
      loadingStore.close()
    }

    onMounted(async () => {
      await getInfo()
    })

    return {
      info,
      useConstant,
    }
  },
}
