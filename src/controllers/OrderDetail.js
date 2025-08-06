import { useConstant } from '@/constants'
import { computed, onMounted, ref } from 'vue'
import { useLoadingStore } from '@/stores/loading'
import { useOrderDetailStore } from '@/stores/orderDetail'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const orderDetailStore = useOrderDetailStore()
    const loadingStore = useLoadingStore()
    const route = useRoute()
    const list = computed(() => orderDetailStore.list)
    const orderId = ref('')
    const getOrderId = () => {
      orderId.value = route.params.id ? route.params.id : 0
    }
    const getList = async () => {
      const params = {
        order_id: orderId.value,
      }
      loadingStore.open()
      await orderDetailStore.getList(params)
      loadingStore.close()
    }

    onMounted(async () => {
      getOrderId()
      await getList()
    })

    return {
      list,
      useConstant,
    }
  },
}
