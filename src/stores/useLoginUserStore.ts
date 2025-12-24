import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import {getLoginUserUsingGet} from "@/api/userController";

export const useLoginUserStore = defineStore('loginUser', () => {
  const loginUser = ref<API.LoginUserVO>({
    userName: '未登录',
  })

  //设置登录用户
  function setLoginUser(newLoginUser: any) {
    loginUser.value = newLoginUser;
  }
  //获取登录用户信息
  async function fetchLoginUser() {
    const res = await getLoginUserUsingGet();
    if(res.data.code === 0 && res.data.data) {
      setLoginUser(res.data.data)
    }
  }

  return {loginUser, setLoginUser, fetchLoginUser}
})
