<template>
    <div class="containerthree">
        <div class="title">剧照</div>
        <div class="wrapper" v-if="contentlist">
            <swiper  ref="mySwiper" :options="swiperOptions">
                <swiper-slide class="swiper-all" v-for="(item,index) of contentlist.photos" :key="index">
                        <img id="test" class="swiper-img" :src="item">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
  name:"SecondDswiper",
  props: {
      contentlist:null,
      },
  data() {
      return {
          swiperOptions: {
        //   pagination: '.swiper-pagination',
            slidesPerView: 2.3,
            paginationClickable: true,
            spaceBetween: 10,
            freeMode: true
        }
      }
  },
  mounted () {
  },
}
</script>

<style lang="scss" scoped>
    .containerthree{
        box-sizing: border-box;
        padding-bottom: 2rem;
        // margin-bottom: 0.5rem;
        // // background-color: red;
        // height: 20rem;
        background-color: white;
    }
    .title{
        padding: 0.5rem;
        background-color: white;
    }
    .wrapper{
        background-color: white;
        overflow:hidden;
        width:100%;
        height:0;
        padding-bottom:30%;
        // margin: 0 0.5rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        box-sizing: border-box;
        .swiper-img{
            width:100%; 
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
      
        

    }
    .swiper-all{
        width:100%;
        height:40vw;
        // padding-bottom:40%;
        text-align: center;
    }
   
            
</style>

