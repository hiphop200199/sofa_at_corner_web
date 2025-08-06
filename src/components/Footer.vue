<script setup></script>
<template>
  <div class="footer">
    <div class="main-part">
      <div class="column">
        <p>服務相關</p>
        <router-link to="/faq">常見問題</router-link>
        <router-link to="/delivery">運送服務</router-link>
        <router-link to="/return-exchange">退換貨服務</router-link>
      </div>
      <div class="column">
        <p>關於我們</p>
        <router-link to="/business-information">企業資訊</router-link>
      </div>
      <div class="column">
        <p>了解我們</p>
        <a href="https://www.instagram.com/" target="_blank">Instagram</a>
        <a href="https://www.facebook.com/?locale=zh_TW" target="_blank">Facebook</a>
        <a href="https://www.line.me/tw/" target="_blank">LINE</a>
      </div>
    </div>
    <div class="bottom-part">
      <div>
        <p>© Sofa At Corner Taiwan 2025</p>
      </div>
      <div>
        <router-link to="/term">條款細則</router-link>
        <router-link to="/privacy">隱私權政策</router-link>
      </div>
    </div>
    <a href="#" id="top"><img src="/top.png" alt="" /></a>
  </div>
</template>
