import { useConstant } from '@/constants'
import { computed, onMounted, ref } from 'vue'
import { useProductStore } from '@/stores/product'
import { useApi } from '@/apis'
import router from '@/router'
import { useAuthStore } from '@/stores/auth'
import { useRoute } from 'vue-router'
import { useLoadingStore } from '@/stores/loading'
import { useAlertLBStore } from '@/stores/alertLB'

export default {
  setup() {
    const productStore = useProductStore()
    const authStore = useAuthStore()
    const loadingStore = useLoadingStore()
    const alertLBStore = useAlertLBStore()
    const route = useRoute()
    const id = ref('')
    const info = computed(() => productStore.info)
    const getId = async () => {
      id.value = route.params.id ? route.params.id : 0
    }
    const getInfo = async (id) => {
      loadingStore.open()
      await productStore.get(id)
      loadingStore.close()
    }

    const addItem = async (id) => {
      if (!authStore.userInfo) {
        router.push('/login')
      }
      const params = {
        member_id: authStore.userInfo.id,
        product_id: id,
        amount: 1,
      }
      loadingStore.open()
      const response = await useApi.cart.add(params)
      loadingStore.close()
      if (response.code === useConstant.StatusCode.SUCCESS) {
        alertLBStore.open(response.message, useConstant.LBDirection.STAY)
      }
    }

    onMounted(async () => {
      await getId()
      await getInfo(id.value)
    })

    return {
      info,
      useConstant,
      addItem,
    }
  },
}
