<template>
    <div class="container">
       <detail-content :contentlist="contentlist" :effectname="effectname"></detail-content> 
        <detail-swiper :contentlist="contentlist"></detail-swiper> 
        <div class="buy">选座购票</div>
    </div>
</template>

<script>
import axios from 'axios'
import DetailContent from './components/Detailcontent'
import DetailSwiper from './components/DetilSwiper'
export default {
    name:"Detail",
    props: {
        },
    data() {
        return {
           contentlist:{},
           effectname:'',
        }
    },
    components: {
        DetailContent,
        DetailSwiper
    },
    computed: {
        myid() {
            return this.$router.history.current.params.id
        }
    },
    beforeMount () {
        this.$store.commit("MaizuoTabber",false);//第一个参数是mutation的名字
    },
  mounted () {
      this.getdata()

  },
  methods: {
    getdata () {
      axios({
              url:`https://m.maizuo.com/gateway?filmId=${this.myid}&k=9700914`,
              headers:{
                  'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16017302651565962255990785"}',
                  'X-Host': 'mall.film-ticket.film.info'
              }
          }).then(res=>{
            //   console.log(res.data.data)
              this.contentlist=res.data.data.film
              this.effectname = this.contentlist.item.name
                console.log(this.contentlist) 
                
                // console.log(this.effectname)

          })
     }
  },
    destroyed () {
        this.$store.commit("MaizuoTabber",true);
    },
}
</script>

<style lang="scss" scoped>
    .container{
        box-sizing: border-box;
        padding-bottom: 3rem;
        // background-color: green;
    }
    .buy{
        position: fixed;
        z-index: 99;
        left: 0;
        bottom: 0;
        background-color: #ff5f16;
        width: 100%;
        color: white;
        height: 3.125;
        line-height: 3.125rem;
        text-align: center;
        border-top-left-radius: 0.2rem;
        border-top-right-radius: 0.2rem;
    }
</style>
