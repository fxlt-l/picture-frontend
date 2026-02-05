<template>
  <div>
    <h3>测试图表</h3>
    <v-chart :option="testOptions" style="height: 300px; width: 100%;" autoresize />
  </div>
</template>

<script lang="ts" setup>
import VChart from 'vue-echarts';

const testOptions = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
};
</script>

<style scoped>

</style>
