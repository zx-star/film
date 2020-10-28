<template>
    <div>
        <c-d-header></c-d-header>
        <c-d-swiper></c-d-swiper> 
        <second-d-swiper></second-d-swiper>
    </div>
</template>

<script>
import axios from 'axios'
import vuex from 'vuex'
import CDHeader from './components/CDHeader'
import CDSwiper from './components/CDSwiper'
import secondDSwiper from './components/secondDSwiper'
export default {
    name:"CinemaDetail",
    mounted () {
 
    },
    components: {
        CDHeader,
        CDSwiper,
        secondDSwiper

    },
    methods: {
       
    },
}
</script>

<style lang="scss" scoped>

</style>