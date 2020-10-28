<template>
    <div>
        <router-link tag="div" class="back" to="/cinema">
            <span class="iconfont icon-back">&#xe604;</span>
        </router-link>
        <div class="cinema-name">
            {{infodata.name}}
        </div>
        <div class="cinema-address">
            <span class="iconfont icon-f">&#xe675;</span>
            <div class="wenzi">{{infodata.address}}</div>
            <span class="iconfont icon-f">&#xe60d;</span>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
import vuex from 'vuex'
export default {
    name:"CDHeader",
    data() {
        return {
            infodata: {},
        }
    },
    computed: {
        myid() {
            return this.$router.history.current.params.id

        }
    },
    mounted () {
        console.log(this.myid)
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
                // console.log(this.infodata.address)
            })
        }
    },
}
</script>

<style lang="scss" scoped>
    .back{
        position: relative;
        height: 2.8rem;
        line-height: 2.8rem;
        padding-left: 0.5rem;
        background-color: white;
        .icon-back{
            font-size: 1.5rem;
        }
    }
    .cinema-name{
        text-align: center;
        height: 2.8rem;
        line-height: 2.8rem;
        background-color: #fff;
    }
    .cinema-address{
        text-align: center;
        height: 2.8rem;
        line-height: 2.8rem;
        display: flex;
        justify-content:center;
        background-color: #fff;
        .icon-f{
            font-size: 1.2rem;
        }
        .wenzi{
            display: inline-block;
            font-size: 0.9rem;
            max-width: 80%;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            padding: 0 0.2rem;
        }

    }
</style>