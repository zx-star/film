<template>
  <div class="detail-container">
      <div class="detail-img">
        <router-link tag="div" class="back-icon" :to="backaddressnew">
          <span class="iconfont">&#xe749;</span>
        </router-link>
          <img :src="contentlist.poster" alt="">
        </div>
        <div class="detail-content">
          <div><span class="detail-name">{{this.contentlist.name}}</span>
                <span class="detail-effect">{{this.effectname}}</span>
                <span class="detail-grade">{{contentlist.grade}}</span>
          </div>
          <div><span>{{this.contentlist.category}}</span></div>
          <div><span>{{contentlist.nation}}&nbsp;|&nbsp;{{contentlist.runtime}}分钟</span></div>
          <div><span>{{this.contentlist.synopsis}}</span></div>
        </div>
  </div>
</template>

<script>
export default {
  name:"Detailcontent",
  props: {
      contentlist: Object,
      effectname:String,
      backaddress:null,
  },
  data() {
    return {
    }
    
  },
  computed: {
      backaddressnew() {
        var newaddress = '/film/'+this.$store.state.detailBack
        return newaddress
      }
    },
  mounted () {
  },
  beforeDestroy(){

  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
    .detail-container{
       box-sizing: border-box;
    //    border: 1px solid red;
       padding-bottom: 0.5rem;
       background-color: #f4f4f4;
    }
    .detail-img{
        height: 16.6rem;
        width: 100%;
        position: relative;
        overflow: hidden;
        text-align: center;
        margin-bottom: -2rem;
        .back-icon{
            height: 2rem;
            width: 2rem;
            box-sizing: border-box;
            border-radius: 1rem;
            // text-align: center;
            padding-right: 0.1rem;
            line-height: 2rem;
            position: absolute;
            top: 1rem;
            left: 1rem;
            background-color: rgba(198, 203, 205, 0.5);
            span{
                font-size: 1.8rem;
                color: rgb(72, 72, 72);
            }
        }
        img{
            z-index: 2;
            min-width: 100vw;
        }
    }
    .detail-content{
        position: relative;
        border-top-left-radius:2rem;
        border-top-right-radius:2rem;  
        background-color: white;
        div{
            margin-bottom: 0.5rem;
        }
        padding: 0.9rem;
        span{
        font-size: 0.82rem;
        font-weight: 400;
        color: #797d82;
        }
        .detail-name{
            font-size: 1.125rem;
            font-weight:500;
            color: #191a1b;
        }
        .detail-effect{
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
        .detail-grade{
        font-size: 0.92rem;
        text-align: center;
        color: #ffb232;
        font-weight: 800;
        }
    }
</style>
