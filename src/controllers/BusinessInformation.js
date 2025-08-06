import { useConstant } from '@/constants'
import { computed, onMounted } from 'vue'
import { useBusinessInformationStore } from '@/stores/businessInformation'
import { useLoadingStore } from '@/stores/loading'

export default {
  setup() {
    const businessInformationStore = useBusinessInformationStore()
    const loadingStore = useLoadingStore()
    const info = computed(() => businessInformationStore.info)

    const getInfo = async () => {
      loadingStore.open()
      await businessInformationStore.getNewest()
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
