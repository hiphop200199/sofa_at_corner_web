<script src="@/controllers/ReturnExchange.js"></script>
<template>
  <div class="container">
    <div class="article-box">
      <h1>退換貨服務</h1>
      <div v-for="(item, index) in list" :key="index">
        <details>
          <summary>{{ item.name }}</summary>
          {{ item.content }}
        </details>
      </div>
    </div>
  </div>
</template>
