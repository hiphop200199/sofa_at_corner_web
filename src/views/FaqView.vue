<script src="@/controllers/Faq.js"></script>
<template>
  <div class="container">
    <div class="article-box">
      <h1>常見問題</h1>
      <div v-for="(item, index) in list" :key="index">
        <details>
          <summary>{{ item.question }}</summary>
          {{ item.answer }}
        </details>
      </div>
    </div>
  </div>
</template>
