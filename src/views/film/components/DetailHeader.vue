<template>
    <div>
        <div 
            class="header-fixed" 
            v-show="!showAbs"
            :style="opacityStyle"
            >
            <router-link :to="backaddressnew">
                <div class="iconfont header-fixed-back">&#xe749;</div>
            </router-link>
            {{this.contentlist.name}}
        </div>
    </div>
</template>

<script>
// import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailHeader',
  props: {
      contentlist: null
      },
  data() {
      return {
          showAbs: true,
          opacityStyle:{
              opacity:0
          }
      }
  },
  computed: {
      backaddressnew() {
        var newaddress = '/film/'+this.$store.state.detailBack
        return newaddress
      }
    },
  methods: {
      handleScroll() {
          console.log('scroll')
          // 防止某些手机浏览器不兼容"document.documentElement.scrollTop"
          const top = document.documentElement.scrollTop || document.body.scrollTop ||  window.pageYOffset
          if (top > 60) {
              let opacity = top / 140
              opacity = opacity > 1 ? 1 :opacity
              this.opacityStyle = {
                  opacity
              }
              this.showAbs = false
          }else{
              this.showAbs = true
          }
      }
  },
  mounted () {
    //   window.addEventListener('scroll',this.handleScroll)
      
  },
  beforeDestroy(){
    //   window.removeEventListener('scroll',this.handleScroll)
  }

  }
</script>
<style lang="scss" scoped>
    .header-fixed{
        z-index: 10;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 2.8rem;
        line-height: 2.8rem;
        text-align: center;
        color: black;
        background-color: white;
        font-size: 1rem;
    .header-fixed-back{
        position: absolute;
        top: 0;
        left: 1rem;
        width: 2rem;
        text-align: left;
        font-size: 1.8rem;
    }
    }

</style>
