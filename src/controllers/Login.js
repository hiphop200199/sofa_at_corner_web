import { Form, Field, ErrorMessage } from 'vee-validate'
import router from '@/router'
import { reactive } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useLoadingStore } from '@/stores/loading'
import { useAlertLBStore } from '@/stores/alertLB'
import { useConstant } from '@/constants'

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
      account: '',
      password: '',
    })

    const register = (event) => {
      event.preventDefault()
      router.push({ path: '/register' })
    }

    const onSubmitForm = async () => {
      loadingStore.open()
      const response = await authStore.login(form)
      loadingStore.close()
      if (response.redirectToHome) {
        alertLBStore.open(response.message, useConstant.LBDirection.BACK, '')
      } else {
        console.log(response)
      }
    }

    return {
      register,
      onSubmitForm,
      form,
    }
  },
}
