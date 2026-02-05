<template>
    <div class="space-size-analyze">
      <a-card title="图库标签词云">
        <v-chart :option="options" style="height: 320px; max-width: 100%;" :loading="loading" />
      </a-card>
    </div>
</template>

<script lang="ts" setup>
// 图表数据
import {computed, ref, watchEffect} from "vue";
import {
  getSpaceCategoryAnalyzeUsingPost,
  getSpaceSizeAnalyzeUsingPost,
  getSpaceTagAnalyzeUsingPost
} from "@/api/spaceAnalyzeController";
import {message} from "ant-design-vue";
import VChart from 'vue-echarts'
import 'echarts'
import 'echarts-wordcloud'


interface props {
  queryAll?: boolean,
  queryPublic?: boolean,
  spaceId?: number,
}

const props = withDefaults(defineProps<props>(), {
  queryAll: false,
  queryPublic: false,
  spaceId: undefined,
})
const dataList = ref<API.SpaceSizeAnalyzeResponse[]>([])
const loading = ref(true)

/**
 * 加载数据
 */
const fetchData = async () => {
  loading.value = true
  const res = await getSpaceSizeAnalyzeUsingPost({
    queryAll: props.queryAll,
    queryPublic: props.queryPublic,
    spaceId: props.spaceId,
  })
  if (res.data.code === 0) {
    dataList.value = res.data.data ?? []
  } else {
    message.error('获取数据失败，' + res.data.message)
  }
  loading.value = false
}



/**
 * 监听变量，改变时触发数据的重新加载
 */
watchEffect(() => {
  fetchData()
})

const options = computed(() => {
  const pieData = dataList.value.map((item) => ({
    name: item.sizeRange,
    value: item.count,
  }))

  return {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      top: 'bottom',
    },
    series: [
      {
        name: '图片大小',
        type: 'pie',
        radius: '50%',
        data: pieData,
      },
    ],
  }
})



</script>

<style scoped>

</style>
