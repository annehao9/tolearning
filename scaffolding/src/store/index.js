import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:0,//默认未登录
    user:null//保存当前用户对象
  },
  mutations: {
    // 当前方法将会在调用$store.commit('updateLoginState')
    // 自动执行，是vuex来实现的，且vuex在调用该方法会自动注入state对象方便我们访问state中的数据
    updateLoginState(state,user) {
      state.isLogin=1;
      state.user=user;
    },
  },
  actions: {
  },
  modules: {
  }
})
