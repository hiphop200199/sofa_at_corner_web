import { Form, Field, ErrorMessage } from 'vee-validate'
import router from '@/router'
import { useApi } from '@/apis'
import { useConstant } from '@/constants'
import { onMounted, reactive } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useLoadingStore } from '@/stores/loading'
import { useAlertLBStore } from '@/stores/alertLB'

export default {
  components: {
    VForm: Form,
    VField: Field,
    ErrorMessage: ErrorMessage,
  },
  setup() {
    const authStore = useAuthStore()
    const loadingStore = useLoadingStore()
    const alertLBStore = useAlertLBStore()
    const form = reactive({
      name: '',
      account: '',
      password: '',
    })

    const onSubmitForm = async () => {
      loadingStore.open()
      const response = await authStore.register(form)
      loadingStore.close()
      if (response.redirectToHome) {
        alertLBStore.open(response.message, useConstant.LBDirection.BACK, '')
      } else {
        console.log(response)
      }
    }

    return {
      onSubmitForm,
      form,
    }
  },
}
