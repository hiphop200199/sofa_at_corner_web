<script src="@/controllers/Order.js"></script>

<template>
  <div class="container">
    <div class="list-box" v-for="(item, index) in list" :key="index">
      <router-link :to="'/order-detail/' + item.id" class="card">
        <p>訂單編號：{{ item.id }}</p>
        <p>收件人名稱：{{ item.r_name }}</p>
        <p>收件人電話：{{ item.r_tel }}</p>
        <p>收件人地址：{{ item.r_address }}</p>
        <p>總金額：{{ item.total_price }}</p>
        <p>訂單建立時間：{{ item.create_time }}</p>
      </router-link>
    </div>
  </div>
</template>
