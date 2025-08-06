<script src="@/controllers/Member.js"></script>

<template>
  <div class="container">
    <div class="login-box">
      <h1>會員資料</h1>
      <div class="form">
        <label>名稱</label>
        <div>
          <input type="text" name="name" v-model="info.name" disabled />
        </div>
        <label>帳號</label>
        <div>
          <input type="text" name="account" v-model="info.account" disabled />
        </div>

        <div class="buttons">
          <button @click="checkOrder()">查看訂單</button>
        </div>
      </div>
      <h4 class="copyright">Copyright © SofaAtCorner 2025 | All Rights Reserved.</h4>
    </div>
  </div>
</template>
