<template>
    <div class="cdcontainer">
        <div class="wrapper">
            <swiper  ref="mySwiper" :options="swiperOptions">
                <swiper-slide class="swiper-all" v-for="item of infodata" :key="item.filmId">
                    <!-- <div class="swiper-up"> -->
                        <img id="test" class="swiper-img" :src="item.poster">
                        <router-link tag="p" class="name" :to=" '/detail/' + item.filmId">{{item.name}}</router-link>
                        <router-link tag="p" class="wenzi" :to=" '/detail/' + item.filmId">{{item.category}}</router-link>
                    <!-- </div> -->
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <div class="sanjiao"></div>
    </div>
</template>

<script>
import axios from 'axios'
import vuex from 'vuex'


export default {
    name:"CDswiper",
    data() {
        return {
            infodata:[],
            swiperOptions: {
        //   pagination: '.swiper-pagination',
            // pagination: '.swiper-pagination',
            slidesPerView: 3.5,
        centeredSlides: true,
        paginationClickable: false,
        spaceBetween: 0
            
        }
        }
    },
    computed: {
        myid() {
            return this.$router.history.current.params.id

        }
    },
    mounted () {
        this.cgetdata()
    },
    methods: {
        cgetdata() {
            axios({
                url:`https://m.maizuo.com/gateway/?cinemaId=1869&k=3741523`,
                headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16017302651565962255990785","bc":"220100"}',
                'X-Host': 'mall.film-ticket.film.cinema-show-film'
            }
            }).then(res=>{
                this.infodata = res.data.data.films
                console.log(this.infodata)
                // console.log(this.infodata.address)
            })
        }
    },
}
</script>

<style lang="scss" scoped>
    .swiper-slide-active::v-deep{
        // background-image:url(../../../assets/personal.jpg);
        transform: scale(1.2);

    }
    .sanjiao:after{
        content:""; /* some content required - using empty text string */
        position:absolute; /* relative to popup */
        border:16px solid;
        border-color:transparent transparent white transparent; 
        right:50%; top:85%;
        height:0px; width:0px; /* collapses box to create triangle */ 
    }
    .cdcontainer{
        position: relative;
    }
    .wrapper{
        height: 13rem;
        box-sizing: border-box;
        padding-top: 1.5rem;
        background-color: #e7e3e3;
    }
    // .wrapper::after {
    //     content: "";
    //     background: url(../../../assets/detail.jpg);
    //     opacity: 0.6;
    //     top: 0;
    //     left: 0;
    //     bottom: 0;
    //     right: 0;
    //     position: absolute;
    //     z-index: -1;   
    //     height: 13rem;
    //     }
    .swiper-all{
        text-align: center;
        // height: 10rem;
        .swiper-img{
            width: 5rem;
            height: 7rem;
            
        }
        .name{
        font-size: 0.8rem;
        }
        .wenzi{
            // width: 5rem;
            font-size: 0.5rem;
            
        }
    }
    
</style>