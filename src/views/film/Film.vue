<template>
  <div>
    <swiper></swiper>
    <film-header></film-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Swiper from './components/Swiper'
import FilmHeader from './components/FilmHeader'
export default {
  name:"Film",
  components: {
    Swiper,
    FilmHeader
  },
}
</script>

<style lang="scss">

</style>
