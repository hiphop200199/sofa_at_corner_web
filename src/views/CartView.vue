<script src="@/controllers/Cart.js"></script>

<template>
  <div class="container">
    <div class="cart-box">
      <div class="item" v-for="(item, index) in list" :key="index">
        <p>{{ item.name }}</p>
        <p>NT${{ item.price }}</p>
        <label for=""
          >數量：<input @change="editItem($event, item.id)" type="number" v-model="item.amount"
        /></label>
        <button class="remove" @click="removeItem(item.id)">❌</button>
      </div>
      <h1>總計：NT${{ total }}</h1>
      <label>收貨人名稱</label>
      <input type="text" v-model="form.r_name" placeholder="請輸入收貨人名稱" />
      <label>收貨人電話</label>
      <input type="text" v-model="form.r_tel" placeholder="請輸入收貨人電話" />
      <label>收貨人地址</label>
      <input type="text" v-model="form.r_address" placeholder="請輸入收貨人地址" />
      <span v-if="ifBlank" class="error">請輸入收貨人資訊</span>
      <button @click="checkout()">結帳</button>
    </div>
  </div>
</template>
