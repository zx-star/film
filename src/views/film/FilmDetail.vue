<template>
    <div>
       <detail-content :contentlist="contentlist" :effectname="effectname"></detail-content> 
        
    </div>
</template>

<script>
import axios from 'axios'
import DetailContent from './components/Detailcontent'
export default {
    name:"Detail",
    data() {
        return {
           contentlist:{},
           effectname:''

        }
    },
    components: {
        DetailContent,
    },
    computed: {
        myid() {
            return this.$router.history.current.params.id
        }
    },
    
  mounted () {
      this.getdata()
  },
  methods: {
    getdata () {
      axios({
              url:`https://m.maizuo.com/gateway?filmId=${this.myid}&k=9700914`,
              headers:{
                  'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16017302651565962255990785"}',
                  'X-Host': 'mall.film-ticket.film.info'
              }
          }).then(res=>{
            //   console.log(res.data.data)
              this.contentlist=res.data.data.film
              this.effectname = this.contentlist.item.name
                // console.log(this.contentlist) 
                
                // console.log(this.effectname)

          })
     }
  },
}
</script>

<style lang="scss" scoped>

</style>
