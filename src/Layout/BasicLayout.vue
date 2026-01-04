<template>
  <div id="basicLayout">
    <a-layout>
      <a-layout-header class="header"><GlobalHeader/></a-layout-header>
      <a-layout>
        <GlobalSider class="sider" />
        <a-layout-content class="content">
          <router-view />
        </a-layout-content>
      </a-layout>
      <a-layout-footer class="footer">智能云图库</a-layout-footer>
    </a-layout>

  </div>
</template>

<script setup>

import GlobalHeader from "@/components/GlobalHeader.vue";
import GlobalSider from "@/components/GlobalSider.vue";
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
  padding-bottom: 60px;
}

#basicLayout .sider {
  background: #fff;
  padding-top: 20px;
  border-right: 0.5px solid #eee;
}

#basicLayout :deep(.ant-menu-root) {
  border-bottom: none !important;
  border-inline-end: none !important;
}

</style>
