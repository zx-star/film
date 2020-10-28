<template>
  <div class="container">
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="0"
      infinite-scroll-immediate-check=false
      >
      <router-link 
        tag="li"
        v-for="data in $store.state.nowplayList" 
        :key="data.filmId"
        :to=" '/detail/' + data.filmId"
        >
        <div class="film-img">
          <img :src="data.poster" alt="">
        </div>
        <div class="film-content">
          <div><span class="film-title">{{data.name}}</span><span class="film-effect">{{data.item.name}}</span></div>
          <div><span>观众评分<span class="film-grade">{{data.grade}}</span></span></div>
          <div class="film-actor"><span>主演:{{data | actorfilter2}}</span></div>
          <div><span>{{data.nation}}&nbsp;|&nbsp;{{data.runtime}}分钟</span></div>
        </div>
          <div class="film-buy"  @click="handleTips()"> 
            购票
          </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import { MessageBox } from 'mint-ui';

Vue.filter("actorfilter2",function(data){
  var err = "暂无"
    if(data.actors == null){
      return err
    }
    var newlist = data.actors.map(item=>item.name)
    return newlist.join(' ')
})

export default {
  name:"Nowplaying",
  data() {
    return {
      datalist:[],
      loading:false,
    }
  },
  beforeMount () {
    this.$store.commit("detailBack","nowplaying");
    this.$store.commit("cityBack","/film/nowplaying");
  },
  mounted(){
    
        this.$store.dispatch("commingsoonListAction")  
        this.$store.dispatch("nowplayingListAction")
        
        console.log(this.$store.state.nowplayList.length)
    },
  methods: {
    handleTips(){
      MessageBox('温馨提示', '暂时禁止支付行为，请继续浏览电影详情！');
    },
     loadMore(){
       console.log("到底了")
       this.$store.dispatch("nowplayingListAction")
      //  console.log(this.$store.state.nowplayList.length)
      //  console.log(this.$store.state.nowplayList)
       if(this.$store.state.nowplayList.length == this.$store.state.nowplaiingtotal){
            // this.loading = true
       }

     }
}
}

</script>

<style lang="scss" scoped>
  ul{
        li{
            display: flex;
            padding: 1rem;
            overflow: hidden;
            max-height: 130px;
            background-color: white;
            border-bottom: 1px solid #f3f3f3;
            .film-img{
              flex: 0.6;
              max-width: 5.8rem;
              padding-right:0.8rem;
              img{
                // float: left;
                width: 100%;   
                       
              }
            }
            .film-content{
              flex: 2;
              span{
                font-size: 0.81rem;
                // color: #191a1b;
                font-weight: 300;
              }
              .film-title{
                  font-size: 1rem;
                  font-weight:500;
              }
              .film-effect{
                  display: inline-block;
                  vertical-align: middle;
                  font-size: 0.56rem;
                  color: white;
                  height: 0.87rem;
                  line-height: 0.87rem;
                  font-weight: 400;
                  background-color: #d2d6dc;
                  padding: 0 0.18rem;
                  margin: 0 0.3rem;
                  border-radius: 2px;
              }
              .film-grade{
                font-size: 0.92rem;
                color: #ffb232;
                font-weight: 800;
              }
            }
            .film-buy{
              // float: right;
              height: 1.5rem;
              line-height: 1.5rem;
              width: 3rem;
              font-size: 0.81rem;
              text-align: center;
              border: 1px solid #ff5f16;
              color: #ff5f16;
              border-radius: 0.2rem;
              flex: 0.5;
              max-width: 50px;
              align-self:center;
              cursor: pointer;
            }
        }
    }
    // .film-occupy{
    //   height: 3.75rem;
    //   background: #f4f4f4;
    // }
    .container{
      padding-bottom: 3.75rem;
      background-color: #f4f4f4;
    }
</style>
