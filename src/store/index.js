import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     isTabberShow:true,
     detailBack:"nowplaying",
     cityBack:"/film",
     cityId:'110100',
     cityName:'北京',
     nowplayList:[],
     comingList:[],
     cinemaList:[],
     cityList:[],
     nowplaiingPage:1,
     nowplaiingtotal:0,
     commingsoonPage:1,
     commingsoontotal:0,

  },
  mutations: {
    MaizuoTabber(state,data){
      //控制组件是否显示
      state.isTabberShow = data;
    },
    detailBack(state,data){
      //控制详情页面中后退按钮，退到什么页面
      state.detailBack = data;
    },
    cityBack(state,data){
      //控制详情页面中后退按钮，退到什么页面
      state.cityBack = data;
    },
    getCinemaListMutations(state,data){
      state.cinemaList = data;
    },
    nowplayingListMutions(state,data){
      state.nowplayList = [...state.nowplayList,...data[0]];
      console.log(data[0])
      console.log(state.nowplayList)
      state.nowplaiingtotal = data[1]
      state.nowplaiingPage++;
      console.log("INDEX"+this.state.nowplayList.length)
    },
    commingsoonListMutions(state,data){
      // console.log("1234563")
      // console.log(state.comingList)
      state.comingList = [...state.comingList,...data[0]];
      state.commingsoonPage = data[1]
      state.commingsoontotal++;
      // console.log(state.comingList)
    },
    changecityid(state,data) {
      if(state.cityId != data[0]){
        state.nowplayList =  [];
        state.cinemaList = [];
        state.nowplaiingPage = 1;
      }
      state.cityId = data[0];
      state.cityName = data[1];
      console.log(state.cityName)
    },
    keepcity(state,data) {
      state.cityList = data;
    }
    
  },
  actions: {
    getCinemaListAction(store){
      axios({
        url:`https://m.maizuo.com/gateway?cityId=${this.state.cityId}&ticketFlag=1&k=7050966`,
        headers:{
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16017302651565962255990785"}',
            'X-Host': 'mall.film-ticket.cinema.list'
        }
    }).then(res=>{
        // console.log(res.data)
        store.commit("getCinemaListMutations",res.data.data.cinemas)

    })
    },
    nowplayingListAction(store) {
      axios({
        url:`https://m.maizuo.com/gateway?cityId=${this.state.cityId}&pageNum=${this.state.nowplaiingPage}&pageSize=10&type=1&k=1820379`,
        headers:{
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16017302651565962255990785"}',
            'X-Host': 'mall.film-ticket.film.list'
        }
    }).then(res=>{
        store.commit("nowplayingListMutions",[res.data.data.films,res.data.data.total])
    })
    },
    commingsoonListAction(store){
      axios({
        url:`https://m.maizuo.com/gateway?cityId=${this.state.cityId}&pageNum=${this.state.nowplaiingPage}&pageSize=10&type=2&k=7898608`,
        headers:{
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16017302651565962255990785"}',
            'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res=>{
        // console.log(res.data)
        // this.datalist=res.data.data.films
        store.commit("commingsoonListMutions",[res.data.data.films,res.data.data.total])
        // console.log(this.datalist)
        // this.datalist=[...this.datalist,...res.data.data.films];
        // this.total = res. data.data.total
    })
    }

  },
  modules: {
  }
})
