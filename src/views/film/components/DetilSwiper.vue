<template>
    <div class="containertwo">
        <div class="title">演职人员</div>
        <div class="wrapper" v-if="contentlist">
            <swiper  ref="mySwiper" :options="swiperOptions">
                <swiper-slide class="swiper-all" v-for="(item,index) of contentlist.actors" :key="index">
                    <div class="swiper-up">
                        <img id="test" class="swiper-img" :src="item.avatarAddress">
                    </div>
                    <p class="item-name">{{item.name}}</p>
                    <p class="item-role">{{item.role}}</p>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
  name:"DetailSwiper",
  props: {
      contentlist:null,
      },
  data() {
      return {
          swiperOptions: {
        //   pagination: '.swiper-pagination',
            slidesPerView: 4,
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
    .containertwo{
        padding-bottom: 0.5rem;
        background-color: #f4f4f4;

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
        padding-bottom:40%;
        // margin: 0 0.5rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        box-sizing: border-box;
        // border: 1px solid;
        .swiper-img{
            width:100%;
            // height:50px;
            // padding-bottom:40%;
        }
    }
    .swiper-all{
        // border:1px solid blue;
        text-align: center;
        .swiper-up{
            width: 100%;
            height: 0;
            padding-bottom: 120%;
            overflow: hidden;
        }
        .item-name{
            padding-top: 0.5rem;
            font-size: 0.8rem;
            color: #191a1b;
            // text-overflow: ellipsis;
            // overflow: hidden;
            // white-space: nowrap;
        }
        .item-role{
            font-size: 0.65rem;
            color: #797d82;
        }
    }
   
            
</style>

