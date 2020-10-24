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
      this.getdata()     
    },
  methods: {
    // getdata () {
    //   axios({
    //           url:"https://m.maizuo.com/gateway?cityId=350300&ticketFlag=1&k=7050966",
    //           headers:{
    //               'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16017302651565962255990785"}',
    //               'X-Host': 'mall.film-ticket.cinema.list'
    //           }
    //       }).then(res=>{
    //           console.log(res.data)
    //           this.datalist=res.data.data.cinemas
    //           console.log(this.datalist)
    //           // this.datalist=[...this.datalist,...res.data.data.films];
    //           // this.total = res. data.data.total
    //       })
    //  }
}
}

</script>

<style lang="scss" scoped>
   
</style>
