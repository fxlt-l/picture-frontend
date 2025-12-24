<template>
  <div id="basicLayout">
    <a-layout>
      <a-layout-header class="header"><GlobalHeader/></a-layout-header>
      <a-layout-content class="content">
        <RouterView/>
      </a-layout-content>
      <a-layout-footer class="footer">智能云图库</a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup>

import GlobalHeader from "@/components/GlobalHeader.vue";
</script>

<style scoped>
#basicLayout .header {
  background: azure;
  margin-bottom: 20px;
}
#basicLayout .footer {
  background: beige;
  padding: 16px;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  text-align: center;
}
.content{
  background: white;
}
</style>
