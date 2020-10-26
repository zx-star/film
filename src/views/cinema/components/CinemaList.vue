<template>
  <div class="content-all" :style="mystyle">
    <ul>
      <li v-for="data in datalist" :key="data.cinemaId" >
        <div class="cinama-content">
          <div class="cinema-left">
            <span class="cinema-title">{{data.name}}</span>
            <span class="cinema-address">{{data.address}}</span>
          </div>
          <div class="cinema-price">
            ￥{{data.lowPrice | CinemaPrice}}.<span class="cinema-privelow">{{data.lowPrice | CinemaPricelow}}&nbsp;起</span> 
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import BetterScroll from 'better-scroll'


Vue.filter("CinemaPrice",function(data){
    var price = Math.floor(data/100)
    // console.log(newlist.join(' '))
    return price
})
Vue.filter("CinemaPricelow",function(data){
    var price = data%100
    // console.log(newlist.join(' '))
    return price
})

export default {
  name:"CinemaList",
  data() {
    return {
      datalist:[],
      mystyle:{height:"0px"}

    }
  },
  mounted(){
      this.getdata()
      this.mystyle.height = document.documentElement.clientHeight-100+"px"
    },
  methods: {
    getdata () {
      axios({
              url:"https://m.maizuo.com/gateway?cityId=350300&ticketFlag=1&k=7050966",
              headers:{
                  'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16017302651565962255990785"}',
                  'X-Host': 'mall.film-ticket.cinema.list'
              }
          }).then(res=>{
              console.log(res.data)
              this.datalist=res.data.data.cinemas
              console.log(this.datalist)
              
              this.$nextTick(()=>{
                new BetterScroll(".content-all",{
                  // scrollbar: true,
                  scrollbar:{
                      fade:true,
                      interactive:false
                  }
                  // pullDownRefresh: true
                })
              })

          })
     }
}
}

</script>

<style lang="scss" scoped>
    ul{

      li{
        // height: 6rem;
        // box-sizing: border-box;
        overflow: hidden;
        border-bottom: 1px solid #f4f4f4;
        background-color: white;
        .cinama-content{
            padding: 1rem;
            display: flex;
            justify-content:space-between;
          // // align-content:center;
          // align-items:center;
            .cinema-left{
              // display: inline-block;
              // height: 100%;
              // line-height: 5rem;
              width: 60vw;
              text-align: left;
              padding-right: 15px;
              .cinema-address{
              display: inline-block;
              font-size: 0.75rem;
              max-width: 80%;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              // word-wrap: initial;
              color: #797d82;
            }
            .cinema-title{
              font-size: 1rem;
              font-weight: 400;
            }
            }
            .cinema-price{
              height: 1.2rem;
              // width: 4rem;
              min-width: 4.8rem;
              text-align: right;
              align-items:center;
              color: #ff5f16;
              align-self: center;
              .cinema-privelow{
                font-size: 0.8rem;
              }
            }
        }
        
        
      }
    }
    .content-all{
      margin-bottom: 3.75rem;
      background-color: #f4f4f4;
      height: 80vh;
      overflow: hidden;
      position: relative;
    }
</style>
