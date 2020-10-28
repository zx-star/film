<template>
    <div class="swipercontainer">
        <router-link tag="div" class="iconfont header-fixed" to="/city">{{$store.state.cityName}}&nbsp;&#xe675;</router-link>
        <div class="wrapper">
            <swiper ref="mySwiper" :options="swiperOptions">
                <!-- <swiper-slide><img src="https://pic.maizuo.com/usr/movie/fad9f1e9a5c38f3883d7f9b5e561e5fe.jpg" alt=""></swiper-slide> -->
                <swiper-slide v-for="item of imgUrlList" :key="item.id">
                    <img id="test" class="swiper-img" :src="item.imgUrl">
                </swiper-slide>
                <!-- <swiper-slide>Slide 4</swiper-slide>
                <swiper-slide>Slide 5</swiper-slide> -->
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
  data() {
      return {
          imgUrlList:[{id:"0001",imgUrl:'https://pic.maizuo.com/usr/movie/fad9f1e9a5c38f3883d7f9b5e561e5fe.jpg'},
          {id:"0002",imgUrl:'https://static.maizuo.com/pc/v5/usr/movie/7cdc1831fb22cf2f9d2bef30d6010f14.jpg'},
          {id:"0003",imgUrl:'https://static.maizuo.com/pc/v5/usr/movie/7cdc1831fb22cf2f9d2bef30d6010f14.jpg'},
          ],
          swiperOptions: {
          pagination: '.swiper-pagination',
          // Some Swiper option/callback...
        }
      }
  },
}
</script>

<style lang="scss" scoped>
    .swipercontainer{
        position: relative;
        
    }
    .wrapper ::v-deep .swiper-pagination-bullet-active{ //穿透子组件 不受scoped控制
            background :#fff;
            }
    .header-fixed{
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;
        z-index: 99;
        height: 1.5rem;
        line-height: 1.5rem;
        border-radius: 0.8rem;
        width: 4rem;
        color: rgb(235, 226, 226);
        text-align: center;
        font-size: 0.8rem;
        background-color: rgba(17, 19, 18, 0.2);

    }
    .wrapper{
        overflow:hidden;
        width:100%;
        height:0;
        padding-bottom:40%;//相对于宽度的31.25%
        // background: #eee; 
        .swiper-img{
            width:100%;
            height: 40vw;
        }
    }
   
            
</style>

