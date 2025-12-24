/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
const count = ref(0)           // 自动推断 Ref<number>
const user = ref<User>()       // 复杂类型需声明
const input = ref<HTMLInputElement>()  // DOM元素
