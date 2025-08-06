<script src="@/controllers/Privacy.js"></script>
<template>
  <div class="container">
    <div class="article-box">
      <h1>角落沙發股份有限公司 消費者隱私政策</h1>
      <div v-for="(item, index) in list" :key="index">
        <details>
          <summary>{{ item.name }}</summary>
          {{ item.content }}
        </details>
      </div>
    </div>
  </div>
</template>
