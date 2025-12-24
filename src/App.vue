<template>
  <div id="app">
    <BasicLayout/>
  </div>
</template>

<script setup>
import BasicLayout from "@/Layout/BasicLayout.vue";
import { useLoginUserStore } from './stores/useLoginUserStore.js'
const loginUserStore = useLoginUserStore();
loginUserStore.fetchLoginUser();

</script>

<style scoped>

</style>
