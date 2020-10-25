<template>
  <div>
    <swiper ref="myswiper"></swiper>
    <film-header :class="isFixed?'film-header-fixed':''"></film-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Swiper from './components/Swiper'
import FilmHeader from './components/FilmHeader'
export default {
  name:"Film",
  data() {
    return {
      isFixed:false
    }
  },
  components: {
    Swiper,
    FilmHeader
  },
  mounted () {
    // window.onscroll = this.handleScroll;
  },
  beforeDestroy(){
        // window.onscroll = null;
  },
  methods: {
    handleScroll() {
      if(document.documentElement.scrollTop >= this.$refs.myswiper.$el.offsetHeight){
                this.isFixed = true;
                console.log("true")
            }else{
                this.isFixed = false;
        }
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
