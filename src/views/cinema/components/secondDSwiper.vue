<template>
    <div class="secondcontainer">
           <p>点击电影名查看详情</p> 
           <p>影院联系电话：{{infodata.phone}}</p> 
           <p>提示：{{infodata.services[0].description}}</p>
    </div>
</template>

<script>
import axios from 'axios'
import vuex from 'vuex'


export default {
    name:"scondDSwiper",
    data() {
        return {
            infodata:[],
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
                url:`https://m.maizuo.com/gateway/?cinemaId=${this.myid}&k=7561592`,
                headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16017302651565962255990785","bc":"220100"}',
                'X-Host': 'mall.film-ticket.cinema.info'
            }
            }).then(res=>{
                this.infodata = res.data.data.cinema
                console.log(this.infodata)
                // console.log(this.infodata.phone)
                // console.log(this.infodata.address)
            })
        }
    },
}
</script>

<style lang="scss" scoped>
    .secondcontainer{
        padding-top: 1rem;
        padding-left: 2rem;
    }
    p{
        margin: 1rem 0;
    }
    
</style>