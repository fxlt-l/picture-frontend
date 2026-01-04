<template>
  <div id="globalHeader">
    <a-row :wrap="false">
      <a-col flex="200px">
        <router-link to="/">
          <div class="title-bar">
            <img src="../assets/logo.png" alt="logo" class="logo"/>
            <div class="title">智能云图库</div>
          </div>
        </router-link>
      </a-col>
      <a-col flex="auto">
        <a-menu
          v-model:selectedKeys="current"
          mode="horizontal"
          :items="items"
          @click="doMenuClick"
        />
      </a-col>
      <a-col flex="100px">
        <div class="user-status">
          <div v-if="loginUserStore.loginUser.id">
            <a-dropdown>
              <ASpace>
                <a-avatar :src="loginUserStore.loginUser.userAvatar" />
                {{ loginUserStore.loginUser.userName ?? '无名' }}
              </ASpace>
              <template #overlay>
                <a-menu>
                  <a-menu-item @click="doLogout">
                    <LogoutOutlined />
                    退出登录
                  </a-menu-item>
                  <a-menu-item>
                    <router-link to="/my_space">
                      <UserOutlined />
                      我的空间
                    </router-link>
                  </a-menu-item>

                </a-menu>
              </template>
            </a-dropdown>
          </div>
          <div v-else>
            <a-button class="login-status" @click="goToLogin" type="primary">登录</a-button>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script setup>
import {computed, h, ref} from 'vue'
import {HomeOutlined} from '@ant-design/icons-vue'
import {useRouter} from 'vue-router'
import {useLoginUserStore} from '../stores/useLoginUserStore.js'
import {userLogoutUsingPost} from "@/api/userController.js";
import {message} from "ant-design-vue";

const loginUserStore = useLoginUserStore();
//高亮绑定
const current = ref([])
const beforeItems = ref([
  {
    key: '/',
    icon: () => h(HomeOutlined),
    label: '主页',
    title: '主页',
  },
  {
    key: '/admin/userManage',
    label: '用户管理',
    title: '用户管理',
  },
  {
    key: '/add_picture',
    label: '创建图片',
    title: '创建图片',
  },
  {
    key: '/admin/pictureManage',
    label: '图片管理',
    title: '图片管理',
  },
  {
    key: '/admin/spaceManage',
    label: '空间管理',
    title: '空间管理',
  },

])

// 过滤菜单项
const filterMenus = (menus) => {
  return menus?.filter((menu) => {
    if (menu.key.startsWith('/admin')) {
      const loginUser = loginUserStore.loginUser
      if (!loginUser || loginUser.userRole !== "admin") {
        return false
      }
    }
    return true
  })
}

// 展示在菜单的路由数组
const items = computed(() => {
  return filterMenus(beforeItems.value)
})

const router = useRouter()
// 用户注销
const doLogout = async () => {
  const res = await userLogoutUsingPost()
  console.log(res)
  if (res.data.code === 0) {
    loginUserStore.setLoginUser({
      userName: '未登录',
    })
    message.success('退出登录成功')
    await router.push('/user/login')
  } else {
    message.error('退出登录失败，' + res.data.message)
  }
}

const goToLogin = () => {
  router.push('/user/login')
}
//菜单路由跳转
const doMenuClick = ({key}) => {
  router.push({
    path: key,
  })
}
//路由跳转后高亮
router.afterEach((to) => {
  current.value = [to.path]
})
</script>

<style scoped>
#globalHeader .title-bar {
  display: flex;
  align-items: center;
}

.logo {
  height: 48px;
}

.title {
  font-size: 18px;
  color: black;
  margin-left: 6px;
}
</style>
