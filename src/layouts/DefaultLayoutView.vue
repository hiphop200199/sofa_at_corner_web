<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { RouterView } from 'vue-router'
import AlertLB from '@/components/AlertLB.vue'
import Loading from '@/components/Loading.vue'
</script>
<template>
  <Header></Header>
  <RouterView />
  <Footer></Footer>
  <AlertLB />
  <Loading />
</template>
