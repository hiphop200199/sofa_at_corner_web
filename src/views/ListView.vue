<script src="@/controllers/List.js"></script>

<template>
  <div class="container">
    <h1>{{ theme }}</h1>
    <div class="list-box">
      <router-link :to="'/info/' + item.id" class="card" v-for="(item, index) in list" :key="index">
        <img :src="item.image_url" alt="" />
        <span>{{ item.name }}</span>
      </router-link>
    </div>
    <Pagination @set-page="setPage" :pagination="pagination" />
  </div>
</template>
