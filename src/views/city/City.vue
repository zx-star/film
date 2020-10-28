<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
    </div>
    
</template>

<script>
import axios from 'axios'
import CityHeader from './components/CityHeader'
import CitySearch from './components/CitySearch'
import CityList from './components/CityList'
// import CityAlphabet from './components/Alphabet'
export default {
    name:'City',
    components: {
        CityHeader,
        CitySearch,
        CityList,
        // CityAlphabet

    },
    data() {
        return {

        }
    },
    methods: {
 
    },
    beforeMount () {
        this.$store.commit("MaizuoTabber",false);//第一个参数是mutation的名字
    },
    mounted () {
     
    },
    destroyed () {
        this.$store.commit("MaizuoTabber",true);
    },
}
</script>

<style lang="scss" scoped>

</style>
