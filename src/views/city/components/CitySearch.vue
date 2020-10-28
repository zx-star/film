<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
        </div>
        <div 
            class="search-content" 
            ref="search"
            v-show="keyword"
            >
            <ul>
                <li 
                    class="search-item" 
                    v-for="item of list" 
                    :key="item.cityId"
                    @click="handleCityClick([item.cityId,item.name])" >
                    {{item.name}}
                </li>
                <li class="search-item" v-show="hasNoData">
                    没有找到匹配数据
                </li>
                
            </ul>
        </div>
    </div>
    
</template>

<script>
import BetterScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
    name:'CitySearch',
    props: {
        cities: Object
        },
    data() {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    computed: {
        hasNoData () {
            return !this.list.length
        }
    },
    watch:{
        keyword(){
            if (this.timer) {
                clearTimeout(this.timer)
                console.log(456)
            }
            if (!this.keyword) {
                this.list = []
                console.log(123)
                return
            }
            this.timer = setTimeout(() => {
                const result = []
                
                this.$store.state.cityList.forEach((value) => {
                    // console.log(value)
                    if (value.pinyin.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                        result.push(value)
                    }
                })
                // for (let i in this.cities) {
                // this.cities[i].forEach((value) => {
                //     if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                //         result.push(value)
                //     }
                // })
        
        this.list = result
      }, 100)
        }
    },
    methods: {
        handleCityClick(id) {
            // localStorage.setItem("cityId",id[0]);
            this.$store.commit("changecityid",id);
            // this.$router.push('/cinema');
            this.keyword = ''
            this.$router.push('/film/nowplaying');
        },
        // ...mapMutations(['changeCity'])
    },
    mounted () {
        // this.scroll = new BetterScroll(this.$refs.search,{
        //     click:true
        // })
    },
      updated () {
      this.$nextTick(()=>{
                new BetterScroll(".search-content",{
                //    pullUpLoad: false,
                    scrollbar: false,
                //     pullDownRefresh: false
                    click:true
                })
              })
    },
}
</script>

<style lang="scss" scoped>
    .search{
        height: 2.4rem;
        padding: 0 .5rem;
        background: rgb(140, 197, 243);
        .search-input{
            box-sizing: border-box;
            width: 100%;
            height: 2rem;
            padding: 0 .5rem;
            line-height: 2rem;
            text-align: center;
            border-radius: 0.8rem;
            color: rgb(97, 96, 96);
            border: 0;
        }
    }
    .search-content{
        z-index: 20;
        overflow: hidden;
        // height: 50vh;
        position: absolute;
        top: 5rem;
        left: 0;
        right: 0;
        bottom: 0;
        background: white;
        .search-item{
            line-height: 2rem;
            padding-left: .6rem;
            background: #fff;
            color: #666;
            border-bottom: 1px solid #f4f4f4;
        }
    }
</style>
