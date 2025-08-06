import { useConstant } from '@/constants'
import { computed, onMounted } from 'vue'
import { useFaqStore } from '@/stores/faq'
import { useLoadingStore } from '@/stores/loading'

export default {
  setup() {
    const faqStore = useFaqStore()
    const loadingStore = useLoadingStore()
    const list = computed(() => faqStore.list)

    const getList = async () => {
      loadingStore.open()
      await faqStore.getAllList()
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
