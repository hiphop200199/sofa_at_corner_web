<script src="@/controllers/Home.js"></script>

<template>
  <div class="container">
    <div class="video-box">
      <video src="/bookstore.mp4" loop muted autoplay></video>
      <div class="border-box">
        <p>熱門書籍歡迎光臨休南洞書店</p>
        <router-link :to="'/info/' + '1'">探索更多</router-link>
      </div>
    </div>
    <h1>全新上市</h1>
    <div class="new-list-block">
      <router-link
        :to="'/info/' + item.id"
        class="card"
        v-for="(item, index) in newestList"
        :key="index"
      >
        <img :src="item.image_url" alt="" />
        <p>{{ item.name }}</p>
      </router-link>
    </div>

    <!--swiper-->
    <div class="category-grid">
      <div class="box">
        <img src="/nature.jpg" alt="" />
        <router-link :to="'/list/' + '自然生物'">自然生物</router-link>
      </div>
      <div class="box">
        <img src="/novel.jpg" alt="" />
        <router-link :to="'/list/' + '文學小說'">文學小說</router-link>
      </div>
      <div class="box">
        <img src="/magazine.jpg" alt="" />
        <router-link :to="'/list/' + '各類雜誌'">各類雜誌</router-link>
      </div>
      <div class="box">
        <img src="/design.jpg" alt="" />
        <router-link :to="'/list/' + '設計相關'">設計相關</router-link>
      </div>
    </div>
  </div>
</template>
