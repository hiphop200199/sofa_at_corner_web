<script src="@/controllers/Login.js"></script>

<template>
  <div class="container">
    <div class="login-box">
      <h1>角落沙發</h1>
      <VForm class="form" @submit="onSubmitForm()" v-slot="{ isSubmitting }">
        <div>
          <VField
            type="text"
            name="account"
            v-model="form.account"
            rules="required"
            placeholder="請輸入帳號"
          />
        </div>
        <ErrorMessage class="error" name="account"></ErrorMessage>
        <div>
          <VField
            type="password"
            name="password"
            v-model="form.password"
            rules="required"
            placeholder="請輸入密碼"
          />
        </div>
        <ErrorMessage class="error" name="password"></ErrorMessage>

        <div class="buttons">
          <button :disabled="isSubmitting">登入</button>
          <button @click="register($event)">註冊</button>
        </div>
      </VForm>
      <h4 class="copyright">Copyright © SofaAtCorner 2025 | All Rights Reserved.</h4>
    </div>
  </div>
</template>
