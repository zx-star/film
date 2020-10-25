<template>
    <div class="container">
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
          imgUrlList:[{id:"0001",imgUrl:'https://pic.maizuo.com/usr/movie/fad9f1e9a5c38f3883d7f9b5e561e5fe.jpg'},
          {id:"0002",imgUrl:'https://static.maizuo.com/pc/v5/usr/movie/7cdc1831fb22cf2f9d2bef30d6010f14.jpg'},
          {id:"0003",imgUrl:'https://static.maizuo.com/pc/v5/usr/movie/7cdc1831fb22cf2f9d2bef30d6010f14.jpg'},
          ],
          swiperOptions: {
        //   pagination: '.swiper-pagination',
            slidesPerView: 4,
            paginationClickable: true,
            spaceBetween: 20,
            freeMode: true
        }
      }
  },
  mounted () {
  },
}
</script>

<style lang="scss" scoped>
    .container{
        box-sizing: border-box;
        padding-bottom: 0.5rem;
        // background-color: red;
        // border: 1px solid red;
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
        padding-bottom:40%;//相对于宽度的31.25%
        // margin: 0 0.5rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        box-sizing: border-box;
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

