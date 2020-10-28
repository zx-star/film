<template>
    <div class="citycontainer">
        <mt-index-list>
            <mt-index-section :index="data.index" v-for="data in datalist" :key="data.index">
                <div
                    v-for="city in data.list" 
                    :key="city.cityId"
                    @click="handleClick([city.cityId,city.name])"
                >
                <mt-cell 
                    :title="city.name" 
                >
                </mt-cell>
                </div>
            </mt-index-section>
         </mt-index-list>
    </div>
</template>

<script>
import axios from 'axios'
import vuex from 'vuex'
export default {
    name:"CityList",
    data() {
        return {
            datalist: []
        }
    },
    mounted () {
        this.getdata()
        
    },
    methods: {
        getdata() {
            axios({
            url:"https://m.maizuo.com/gateway?k=9355593",
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16017302651565962255990785","bc":"110100"}',
                'X-Host': 'mall.film-ticket.city.list'
            }
            }).then(res=>{
                this.datalist = this.hangdleCity(res.data.data.cities)
                console.log(res.data.data.cities)
                this.$store.commit("keepcity",res.data.data.cities)
        })
        },
        hangdleCity(datalist) {
             var letterArr = []
             for(var i=65;i<91;i++){
                letterArr.push(String.fromCharCode(i));
            }
            var newlist = []
            for(var j=0;j<letterArr.length;j++){
                var arr = datalist.filter(item=>item.pinyin.substring(0,1)===letterArr[j].toLowerCase())
                // console.log(arr)
                if(arr.length>0) {
                    newlist.push({
                        index:letterArr[j],
                        list:arr
                    })
                }
                
            }
            console.log(newlist)
            
            return newlist
        },
        handleClick(id) {
            localStorage.setItem("cityId",id[0]);
            this.$store.commit("changecityid",id);
            console.log(this.$store.state.cityBack)
            this.$router.push(this.$store.state.cityBack);
        }
    },
}
</script>

<style lang="scss" scoped>
    .citycontainer{
        margin-left: 0.2rem;
    }
</style>