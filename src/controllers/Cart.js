import { useConstant } from '@/constants'
import { computed, onMounted, reactive, ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useAuthStore } from '@/stores/auth'
import { useApi } from '@/apis'
import router from '@/router'
import { useLoadingStore } from '@/stores/loading'
import { useAlertLBStore } from '@/stores/alertLB'

export default {
  setup() {
    const cartStore = useCartStore()
    const authStore = useAuthStore()
    const loadingStore = useLoadingStore()
    const alertLBStore = useAlertLBStore()
    const total = ref(0)
    const ifBlank = ref(false)
    const form = reactive({
      member_id: authStore.userInfo.id,
      r_name: '',
      r_tel: '',
      r_address: '',
      detail: '',
      total_price: 0,
    })
    const list = computed(() => cartStore.list)

    const getList = async () => {
      const params = {
        member_id: authStore.userInfo.id,
      }
      loadingStore.open()
      await cartStore.getList(params)
      loadingStore.close()
      total.value = 0
      list.value.forEach((e) => {
        total.value += e.price * e.amount
      })
    }

    const editItem = async (event, id) => {
      const params = {
        id: id,
        amount: event.target.value,
      }
      loadingStore.open()
      const response = await useApi.cart.edit(params)
      loadingStore.close()
      if (response.code === useConstant.StatusCode.SUCCESS) {
        alertLBStore.open(response.message, useConstant.LBDirection.RELOAD)
      }
    }

    const removeItem = async (id) => {
      loadingStore.open()
      const response = await useApi.cart.destroy(id)
      loadingStore.close()
      if (response.code === useConstant.StatusCode.SUCCESS) {
        alertLBStore.open(response.message, useConstant.LBDirection.RELOAD)
      }
    }

    const checkout = async () => {
      if (!form.r_name || !form.r_tel || !form.r_address) {
        ifBlank.value = true
        return
      }
      ifBlank.value = false
      form.total_price = total.value
      const detailArray = []
      for (let i = 0; i < list.value.length; i++) {
        let detailItem = {}
        detailItem.id = list.value[i].product_id
        detailItem.name = list.value[i].name
        detailItem.price = list.value[i].price
        detailItem.amount = list.value[i].amount
        detailArray.push(detailItem)
      }
      form.detail = JSON.stringify(detailArray)
      loadingStore.open()
      const response = await useApi.cart.checkout(form)
      loadingStore.close()
      if (response.code === useConstant.StatusCode.SUCCESS) {
        alertLBStore.open(response.message, useConstant.LBDirection.BACK, '')
      } else {
        alertLBStore.open(response.message, useConstant.LBDirection.STAY)
      }
    }

    onMounted(async () => {
      await getList()
    })

    return {
      list,
      useConstant,
      editItem,
      removeItem,
      total,
      form,
      ifBlank,
      checkout,
    }
  },
}
