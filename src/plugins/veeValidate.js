import { defineRule, configure } from 'vee-validate'
import { all } from '@vee-validate/rules'
import { setLocale, localize } from '@vee-validate/i18n'
//設定客製錯誤訊息
configure({
  generateMessage: localize('zh-TW', {
    messages: {
      required: '必填',
      email: 'email格式不符',
    },
  }),
})
//設定時區
setLocale('zh-TW')
//引用規則
Object.entries(all).forEach(([name, rule]) => {
  defineRule(name, rule)
})
