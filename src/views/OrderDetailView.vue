<script src="@/controllers/OrderDetail.js"></script>

<template>
  <div class="container">
    <div class="list-box">
      <div class="card" v-for="(item, index) in list" :key="index">
        <p>商品名稱：{{ item.name }}</p>
        <p>商品數量：{{ item.amount }}</p>
        <p>商品單價：{{ item.price }}</p>
        <p>總價：{{ item.final_price }}</p>
      </div>
    </div>
  </div>
</template>
