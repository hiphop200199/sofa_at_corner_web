import { useConstant } from '@/constants'
import { useProductStore } from '@/stores/product'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Pagination from '@/components/Pagination.vue'
import { useLoadingStore } from '@/stores/loading'

export default {
  components: {
    Pagination,
  },
  setup() {
    const productStore = useProductStore()
    const route = useRoute()
    const router = useRouter()
    const loadingStore = useLoadingStore()
    const theme = ref('')
    const list = computed(() => productStore.list)
    const pagination = computed(() => productStore.pagination)

    const defaultSearchQuery = {
      page: '1',
      perpage: '10',
      theme: '',
    }

    const searchQuery = JSON.parse(JSON.stringify(defaultSearchQuery))

    const getQuery = async () => {
      searchQuery.page = route.query.page ? route.query.page : defaultSearchQuery.page
      searchQuery.theme = route.params.theme ? route.params.theme : defaultSearchQuery.theme
      router.push({ query: searchQuery })
    }
    const setPage = async (page) => {
      searchQuery.page = page
      router.push({ query: searchQuery })
    }
    const getList = async () => {
      loadingStore.open()
      await productStore.getList(searchQuery)
      loadingStore.close()
    }

    watch(
      () => route,
      async (val) => {
        if (val !== undefined) {
          await getQuery()
          await getList(searchQuery)
          theme.value = route.params.theme
        }
      },
      { deep: true, immediate: true },
    )

    return {
      list,
      pagination,
      setPage,
      theme,
      useConstant,
    }
  },
}
