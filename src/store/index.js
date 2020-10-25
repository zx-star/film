import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     isTabberShow:true,
     detailBack:"nowplaying"
  },
  mutations: {
    MaizuoTabber(state,data){
      //控制组件是否显示
      state.isTabberShow = data;
    },
    detailBack(state,data){
      //控制详情页面中后退按钮，退到什么页面
      state.detailBack = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
