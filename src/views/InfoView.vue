<script src="@/controllers/Info.js"></script>

<template>
  <div class="container">
    <div class="info-box">
      <div class="img-box">
        <img :src="info.image_url" alt="" />
      </div>
      <div class="text-box">
        <h1>書名：{{ info.name }}</h1>
        <p>主題：{{ info.theme }}</p>
        <p>語言：{{ info.language }}</p>
        <p>作者：{{ info.author }}</p>
        <p>出版社：{{ info.publisher }}</p>
        <p>出版日期：{{ info.publish_date }}</p>
        <p>價格： NT${{ info.price }}</p>
        <p>庫存：{{ info.stock == 0 ? '尚無庫存' : info.stock }}</p>
        <p>簡介：{{ info.introduction }}</p>
        <div class="buttons">
          <button @click="addItem(info.id)" :disabled="info.stock == 0">加入購物車</button>
        </div>
      </div>
    </div>
  </div>
</template>
