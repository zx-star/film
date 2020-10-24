<template>
  <div class="container">
    <cinema-header></cinema-header>
    <cinema-list></cinema-list>
  </div>
</template>

<script>
import CinemaHeader from './components/CinemaHeader'
import CinemaList from './components/CinemaList'


export default {
  name:"Cinema",
  data() {
    return {
      datalist:[],
    }
  },
  components: {
    CinemaHeader,
    CinemaList
  },
  mounted(){
    //  this.getdata()   
    },
  methods: {
   
}
}

</script>

<style lang="scss" scoped>
   
</style>
